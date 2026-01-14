fetch("upload-resume.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("upload").innerHTML = data;
    
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const jobDescription = document.getElementById('jobDescription');
    const uploadSection = document.getElementById('uploadSection');
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const fileInfo = document.getElementById('fileInfo');

    
    let selectedFile = null;
    let extractedText = '';

    // Common technical skills database
    const TECH_SKILLS = [
      'javascript', 'python', 'java', 'c++', 'react', 'angular', 'vue',
      'node.js', 'sql', 'mongodb', 'aws', 'azure', 'docker', 'kubernetes',
      'git', 'agile', 'scrum', 'rest api', 'html', 'css', 'typescript',
      'machine learning', 'data analysis', 'excel', 'powerpoint', 'word'
    ];

    const ACTION_VERBS = [
      'developed', 'created', 'managed', 'led', 'implemented', 'designed',
      'built', 'launched', 'improved', 'increased', 'reduced', 'achieved',
      'streamlined', 'optimized', 'coordinated', 'analyzed', 'established',
      'executed', 'generated', 'initiated', 'automated', 'collaborated'
    ];

    const SECTIONS = [
      'experience', 'education', 'skills', 'projects', 'certifications',
      'summary', 'objective', 'achievements', 'awards', 'publications'
    ];

    uploadBox.addEventListener('click', () => fileInput.click());

    uploadBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
      uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadBox.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    });

    async function handleFile(file) {
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        alert('Please upload a PDF file');
        return;
      }

      selectedFile = file;
      fileInfo.style.display = 'block';
      fileInfo.innerHTML = `
        <strong>✓ File Selected:</strong> ${file.name}<br>
        <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB
      `;
      
      analyzeBtn.disabled = false;
      
      try {
        extractedText = await extractPDFText(file);
      } catch (err) {
        alert('Error reading PDF: ' + err.message);
      }
    }

    async function extractPDFText(file) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        content.items.forEach(item => fullText += item.str + " ");
      }
      return fullText;
    }

    analyzeBtn.addEventListener('click', async () => {
      if (!selectedFile || !extractedText) {
        alert('Please Upload A Resume First');
        return;
      }

      uploadSection.style.display = 'none';
      loading.style.display = 'block';

      setTimeout(() => {
        const analysis = analyzeResume(extractedText, jobDescription.value);
        // SAVE result
        sessionStorage.setItem("analysis", JSON.stringify(analysis));

        // GO TO RESULT PAGE
        window.location.href = "result.html";

      }, 1500);
    });

    function analyzeResume(resumeText, jobDesc) {
      const text = resumeText.toLowerCase();
      const jobText = jobDesc.toLowerCase();

      // ATS Compatibility Analysis
      const atsScore = calculateATSScore(text, resumeText);
      
      // Keyword Analysis
      const keywords = analyzeKeywords(text, jobText);
      
      // Content Analysis
      const content = analyzeContent(text, resumeText);
      
      // Section Completeness
      const sections = analyzeSections(text);
      
      // Job Match (if job description provided)
      const jobMatch = jobDesc ? analyzeJobMatch(text, jobText, keywords) : null;
      
      // Overall Score
      const overallScore = calculateOverallScore(atsScore, keywords, content, sections, jobMatch);
      
      // Recommendations
      const recommendations = generateRecommendations(atsScore, keywords, content, sections, jobMatch);
      
      // Ranking
      const ranking = getRanking(overallScore);

      return {
        overallScore,
        ranking,
        atsScore,
        keywords,
        content,
        sections,
        jobMatch,
        recommendations
      };
    }

    function calculateATSScore(text, originalText) {
      let score = 100;
      const issues = [];

      // Check for complex formatting
      if (originalText.includes('|') || originalText.includes('─')) {
        score -= 15;
        issues.push('Contains table formatting that may confuse ATS parsers');
      }

      // Check text length
      const wordCount = text.split(/\s+/).length;
      if (wordCount < 200) {
        score -= 20;
        issues.push('Resume is too short (under 200 words)');
      } else if (wordCount > 1500) {
        score -= 10;
        issues.push('Resume may be too long (over 1500 words)');
      }

      // Check for contact info
      if (!text.includes('@') && !text.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/)) {
        score -= 15;
        issues.push('Missing clear contact information');
      }

      // Check for special characters
      const specialChars = (originalText.match(/[★☆●○■□▪▫]/g) || []).length;
      if (specialChars > 5) {
        score -= 10;
        issues.push('Too many special characters/symbols');
      }

      const quality = score >= 80 ? 'EXCELLENT' : score >= 60 ? 'GOOD' : score >= 40 ? 'FAIR' : 'POOR';

      return { score, quality, issues };
    }

    function analyzeKeywords(resumeText, jobText) {
      const foundSkills = [];
      const missingSkills = [];
      let matchScore = 0;

      // Extract keywords from job description
      const jobKeywords = extractJobKeywords(jobText);
      
      // Check technical skills
      TECH_SKILLS.forEach(skill => {
        if (resumeText.includes(skill)) {
          foundSkills.push(skill);
        }
      });

      // If job description provided, check for job-specific keywords
      if (jobText) {
        jobKeywords.forEach(keyword => {
          if (resumeText.includes(keyword)) {
            matchScore += 10;
          } else {
            missingSkills.push(keyword);
          }
        });
        matchScore = Math.min(matchScore, 100);
      } else {
        // Default scoring based on skills found
        matchScore = Math.min(foundSkills.length * 5, 100);
      }

      const relevance = matchScore >= 70 ? 'HIGH' : matchScore >= 40 ? 'MEDIUM' : 'LOW';

      return {
        matchScore,
        foundSkills: foundSkills.slice(0, 15),
        missingSkills: missingSkills.slice(0, 10),
        relevance
      };
    }

    function extractJobKeywords(jobText) {
      const keywords = [];
      
      // Extract years of experience
      const yearsMatch = jobText.match(/(\d+)\+?\s*years?/i);
      if (yearsMatch) keywords.push(`${yearsMatch[1]} years experience`);
      
      // Extract skills from job description
      TECH_SKILLS.forEach(skill => {
        if (jobText.includes(skill)) {
          keywords.push(skill);
        }
      });
      
      // Extract degree requirements
      if (jobText.includes('bachelor') || jobText.includes('bs') || jobText.includes('ba')) {
        keywords.push("bachelor's degree");
      }
      if (jobText.includes('master') || jobText.includes('ms') || jobText.includes('ma')) {
        keywords.push("master's degree");
      }
      
      return [...new Set(keywords)];
    }

    function analyzeContent(text, originalText) {
      // Experience score
      const experienceKeywords = ['years', 'experience', 'worked', 'employed'];
      const expScore = Math.min(experienceKeywords.filter(k => text.includes(k)).length * 25, 100);

      // Skills score
      const skillsFound = TECH_SKILLS.filter(s => text.includes(s)).length;
      const skillsScore = Math.min(skillsFound * 10, 100);

      // Education score
      const eduKeywords = ['university', 'college', 'bachelor', 'master', 'degree', 'education'];
      const eduScore = Math.min(eduKeywords.filter(k => text.includes(k)).length * 20, 100);

      // Achievements score (look for numbers/percentages)
      const numbers = (text.match(/\d+%|\$\d+|\d+\s*(million|thousand|users|customers)/g) || []).length;
      const achievScore = Math.min(numbers * 15, 100);

      // Count action verbs
      const actionVerbCount = ACTION_VERBS.filter(verb => text.includes(verb)).length;

      // Count quantifiable results
      const quantifiableResults = (text.match(/\d+%/g) || []).length;

      return {
        experienceScore: expScore,
        skillsScore,
        educationScore: eduScore,
        achievementsScore: achievScore,
        actionVerbsUsed: actionVerbCount,
        quantifiableResults
      };
    }

    function analyzeSections(text) {
      const found = {};
      
      SECTIONS.forEach(section => {
        found[section] = text.includes(section);
      });

      // Add contact info check
      found.contactInfo = text.includes('@') || text.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/) !== null;

      return found;
    }

    function analyzeJobMatch(resumeText, jobText, keywords) {
      if (!jobText) return null;

      const overallMatch = keywords.matchScore;
      
      // Experience match
      const jobYears = (jobText.match(/(\d+)\+?\s*years?/i) || [])[1];
      const resumeYears = (resumeText.match(/(\d+)\+?\s*years?/i) || [])[1];
      let expMatch = 'MODERATE';
      if (resumeYears && jobYears && parseInt(resumeYears) >= parseInt(jobYears)) {
        expMatch = 'STRONG';
      } else if (!jobYears || !resumeYears) {
        expMatch = 'WEAK';
      }

      // Skills match
      const requiredSkills = TECH_SKILLS.filter(s => jobText.includes(s));
      const matchedSkills = requiredSkills.filter(s => resumeText.includes(s));
      const skillMatchPercent = requiredSkills.length > 0 ? (matchedSkills.length / requiredSkills.length) * 100 : 50;
      const skillsMatch = skillMatchPercent >= 70 ? 'STRONG' : skillMatchPercent >= 40 ? 'MODERATE' : 'WEAK';

      // Gaps
      const gaps = [];
      if (expMatch === 'WEAK') gaps.push('Experience level may not meet requirements');
      if (skillsMatch === 'WEAK') gaps.push('Several required technical skills are missing');
      if (!resumeText.includes('bachelor') && jobText.includes('bachelor')) {
        gaps.push('Education requirement may not be met');
      }

      // Strengths
      const strengths = [];
      if (keywords.foundSkills.length >= 5) {
        strengths.push(`Strong technical skill set (${keywords.foundSkills.length} relevant skills)`);
      }
      if (resumeText.includes('led') || resumeText.includes('managed')) {
        strengths.push('Leadership experience demonstrated');
      }
      if ((resumeText.match(/\d+%/g) || []).length >= 3) {
        strengths.push('Quantifiable achievements throughout resume');
      }

      return {
        overallMatch,
        experienceMatch: expMatch,
        skillsMatch,
        qualificationGaps: gaps,
        strengths
      };
    }

    function calculateOverallScore(ats, keywords, content, sections, jobMatch) {
      let score = 0;
      
      // ATS compatibility (25%)
      score += ats.score * 0.25;
      
      // Keywords (25%)
      score += keywords.matchScore * 0.25;
      
      // Content quality (30%)
      const avgContent = (content.experienceScore + content.skillsScore + 
                         content.educationScore + content.achievementsScore) / 4;
      score += avgContent * 0.30;
      
      // Section completeness (20%)
      const completeSections = Object.values(sections).filter(Boolean).length;
      const sectionScore = (completeSections / Object.keys(sections).length) * 100;
      score += sectionScore * 0.20;
      
      return Math.round(score);
    }

    function generateRecommendations(ats, keywords, content, sections, jobMatch) {
      const critical = [];
      const important = [];
      const niceToHave = [];

      // Critical issues
      if (ats.score < 60) {
        critical.push('Improve ATS compatibility by removing complex formatting and special characters');
      }
      if (!sections.contactInfo) {
        critical.push('Add clear contact information (email and phone number)');
      }
      if (!sections.experience) {
        critical.push('Add a clear Experience or Work History section');
      }

      // Important improvements
      if (content.actionVerbsUsed < 5) {
        important.push('Use more strong action verbs (Developed, Managed, Led, Implemented)');
      }
      if (content.quantifiableResults < 3) {
        important.push('Add quantifiable achievements (e.g., "Increased sales by 25%")');
      }
      if (keywords.matchScore < 60) {
        important.push('Include more industry-relevant keywords and technical skills');
      }
      if (!sections.skills) {
        important.push('Add a dedicated Skills section with relevant technical and soft skills');
      }

      // Nice to have
      if (!sections.summary && !sections.objective) {
        niceToHave.push('Consider adding a professional summary at the top');
      }
      if (!sections.certifications) {
        niceToHave.push('Add certifications section if you have relevant credentials');
      }
      if (!sections.projects) {
        niceToHave.push('Showcase relevant projects or portfolio work');
      }
      if (content.achievementsScore < 70) {
        niceToHave.push('Highlight more specific achievements and measurable outcomes');
      }

      return { critical, important, niceToHave };
    }

    function getRanking(score) {
      if (score >= 85) return 'TOP_10%';
      if (score >= 70) return 'TOP_25%';
      if (score >= 50) return 'TOP_50%';
      return 'BOTTOM_50%';
    }

    function displayResults(analysis) {
      const hasJobMatch = analysis.jobMatch !== null;
      
      results.innerHTML = `
        <div class="score-card">
          <h2>Overall ATS Score</h2>
          <div class="score-value">${analysis.overallScore}/100</div>
          <p>Estimated Ranking: ${analysis.ranking.replace(/_/g, ' ')}</p>
        </div>

        <div class="analysis-grid">
          <div class="analysis-card">
            <h3>📋 ATS Compatibility</h3>
            <div class="metric">
              <span class="metric-label">Parsing Quality:</span>
              <span class="metric-value ${getStatusClass(analysis.atsScore.score)}">${analysis.atsScore.quality}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${analysis.atsScore.score}%">
                ${analysis.atsScore.score}%
              </div>
            </div>
            ${analysis.atsScore.issues.length > 0 ? `
              <p style="margin-top: 10px;"><strong>Format Issues:</strong></p>
              <ul style="margin-left: 20px; font-size: 0.9em;">
                ${analysis.atsScore.issues.map(issue => `<li>${issue}</li>`).join('')}
              </ul>
            ` : '<p style="margin-top: 10px; color: #10b981;">✓ No format issues detected</p>'}
          </div>

          <div class="analysis-card">
            <h3>🔑 Keyword Analysis</h3>
            <div class="metric">
              <span class="metric-label">Keyword Match:</span>
              <span class="metric-value">${analysis.keywords.matchScore}%</span>
            </div>
            <div class="metric">
              <span class="metric-label">Industry Relevance:</span>
              <span class="metric-value ${getStatusClass(analysis.keywords.matchScore)}">${analysis.keywords.relevance}</span>
            </div>
            ${analysis.keywords.foundSkills.length > 0 ? `
              <p style="margin-top: 15px;"><strong>Found Skills:</strong></p>
              <div class="keyword-list">
                ${analysis.keywords.foundSkills.map(kw => `<span class="keyword found">${kw}</span>`).join('')}
              </div>
            ` : ''}
            ${analysis.keywords.missingSkills.length > 0 ? `
              <p style="margin-top: 15px;"><strong>Missing Keywords:</strong></p>
              <div class="keyword-list">
                ${analysis.keywords.missingSkills.map(kw => `<span class="keyword missing">${kw}</span>`).join('')}
              </div>
            ` : ''}
          </div>

          <div class="analysis-card">
            <h3>📊 Content Quality</h3>
            <div class="metric">
              <span class="metric-label">Experience:</span>
              <span class="metric-value">${analysis.content.experienceScore}%</span>
            </div>
            <div class="metric">
              <span class="metric-label">Skills:</span>
              <span class="metric-value">${analysis.content.skillsScore}%</span>
            </div>
            <div class="metric">
              <span class="metric-label">Education:</span>
              <span class="metric-value">${analysis.content.educationScore}%</span>
            </div>
            <div class="metric">
              <span class="metric-label">Achievements:</span>
              <span class="metric-value">${analysis.content.achievementsScore}%</span>
            </div>
            <p style="margin-top: 10px; font-size: 0.9em;">
              ✓ ${analysis.content.quantifiableResults} quantifiable results<br>
              ✓ ${analysis.content.actionVerbsUsed} strong action verbs
            </p>
          </div>

          <div class="analysis-card">
            <h3>✅ Section Completeness</h3>
            ${Object.entries(analysis.sections).map(([section, present]) => `
              <div class="metric">
                <span class="metric-label">${section.charAt(0).toUpperCase() + section.slice(1)}:</span>
                <span class="metric-value ${present ? 'status-good' : 'status-poor'}">${present ? '✓ Present' : '✗ Missing'}</span>
              </div>
            `).join('')}
          </div>
        </div>

             ${hasJobMatch ? `
          <div class="analysis-card" style="margin-bottom: 30px;">
            <h3>🎯 Job Match Analysis</h3>
            <div class="progress-bar" style="height: 30px; margin: 20px 0;">
              <div class="progress-fill" style="width: ${analysis.jobMatch.overallMatch}%; font-size: 1em;">
                ${analysis.jobMatch.overallMatch}% Match
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
              <div class="metric">
                <span class="metric-label">Experience Match:</span>
                <span class="metric-value">${analysis.jobMatch.experienceMatch}</span>
              </div>
              <div class="metric">
                <span class="metric-label">Skills Match:</span>
                <span class="metric-value">${analysis.jobMatch.skillsMatch}</span>
              </div>
            </div>
            ${analysis.jobMatch.strengths.length > 0 ? `
              <div style="margin-top: 15px;">
                <strong>💪 Your Strengths for This Role:</strong>
                <ul style="margin: 10px 0 10px 20px;">
                  ${analysis.jobMatch.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${analysis.jobMatch.qualificationGaps.length > 0 ? `
              <div style="margin-top: 15px;">
                <strong>⚠️ Qualification Gaps:</strong>
                <ul style="margin: 10px 0 10px 20px;">
                  ${analysis.jobMatch.qualificationGaps.map(g => `<li>${g}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        ` : ''}

        ${analysis.recommendations.critical.length > 0 ? `
          <div class="suggestions" style="border-left-color: #ef4444; background: #fee;">
            <h3>🚨 Critical Improvements</h3>
            <ul>
              ${analysis.recommendations.critical.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${analysis.recommendations.important.length > 0 ? `
          <div class="suggestions">
            <h3>⚡ Important Improvements</h3>
            <ul>
              ${analysis.recommendations.important.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${analysis.recommendations.niceToHave.length > 0 ? `
          <div class="suggestions" style="border-left-color: #10b981; background: #d1fae5;">
            <h3>💡 Nice to Have</h3>
            <ul>
              ${analysis.recommendations.niceToHave.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <button class="btn" onclick="location.reload()">Analyze Another Resume</button>
      `;
      
      results.style.display = 'block';
    }

    function getStatusClass(score) {
      if (score >= 75) return 'status-good';
      if (score >= 50) return 'status-warning';
      return 'status-poor';
    }
});