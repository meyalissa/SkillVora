/* CAREER DATA */
const careerData = [
  // TECHNOLOGY
  {
    title: "Software Developer",
    image: "../assets/symbol/code.png",
    description: "Develops and maintains software applications.",
    roles: [
      "Writes and tests code for software applications",
      "Fixes bugs and improves system performance",
      "Collaborates with designers and analysts"
    ],
    interests: ["Technology"],
    backgrounds: ["Computer Science", "Software Engineering", "Information Technology"],
    skills: ["Problem-solving", "Analytical thinking", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "English", grade: "Minimum C" }
      ],
      notes: "Interest in coding and logical thinking is important"
    }
  },

  {
    title: "Backend Developer",
    image: "../assets/symbol/developer_board.png",
    description: "Builds and maintains server-side applications.",
    roles: [
      "Develops server-side logic and APIs",
      "Maintains databases and ensures security",
      "Collaborates with frontend developers"
    ],
    interests: ["Technology"],
    backgrounds: ["Computer Science", "Software Engineering"],
    skills: ["Problem-solving", "Analytical thinking", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "Additional Mathematics", grade: "Recommended" }
      ],
      notes: "Strong problem-solving and system thinking are helpful"
    }
  },

  {
    title: "Frontend Developer",
    image: "../assets/symbol/web.png",
    description: "Develops user-facing interfaces.",
    roles: [
      "Implements website and web app interfaces",
      "Works with UI/UX designers for better experience",
      "Optimizes applications for performance and usability"
    ],
    interests: ["Technology", "Design & Creativity"],
    backgrounds: ["Web Technologies", "Software Engineering"],
    skills: ["Creativity", "Practical / Hands-on Skills", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English", grade: "Minimum C" },
        { name: "Mathematics", grade: "Minimum C" }
      ],
      notes: "Creativity and basic design interest are advantages"
    }
  },

  {
    title: "System Analyst",
    image: "../assets/symbol/analytics.png",
    description: "Analyses system requirements and designs solutions.",
    roles: [
      "Analyzes business and technical requirements",
      "Designs efficient system solutions",
      "Collaborates with stakeholders and developers"
    ],
    interests: ["Technology"],
    backgrounds: ["Information Systems", "Computer Science"],
    skills: ["Analytical thinking", "Communication", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "English", grade: "Minimum B" }
      ],
      notes: "Good communication and analytical skills are important"
    }
  },

  {
    title: "IT Support Engineer",
    image: "../assets/symbol/support_agent.png",
    description: "Provides technical support and troubleshooting.",
    roles: [
      "Supports end-users and solves IT issues",
      "Maintains hardware and software systems",
      "Documents problems and solutions"
    ],
    interests: ["Technology"],
    backgrounds: ["Information Technology"],
    skills: ["Problem-solving", "Communication", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C" },
        { name: "ICT / Computer Studies", grade: "Recommended" }
      ],
      notes: "Hands-on technical skills are more important than theory"
    }
  },

  {
    title: "Cloud Support Engineer",
    image: "../assets/symbol/cloud.png",
    description: "Supports and maintains cloud-based systems.",
    roles: [
      "Monitors cloud services",
      "Assists deployment and troubleshooting",
      "Maintains system availability"
    ],
    interests: ["Technology"],
    backgrounds: ["Cloud Computing", "Information Technology"],
    skills: ["Problem-solving", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Interest in cloud platforms is useful"
    }
  },
  {
    title: "UI / UX Designer",
    image: "../assets/symbol/palette.png",
    description: "Designs user-friendly interfaces and experiences for digital products.",
    roles: [
      "Designs and prototypes digital interfaces",
      "Conducts user research and testing",
      "Collaborates with developers and stakeholders"
    ],
    interests: ["Design & Creativity"], // from your categories
    backgrounds: ["Graphic Design", "UI / UX Design", "Digital Media", "Creative Technology"],
    skills: ["Creativity", "Communication"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Art & Design", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Portfolio of design work is highly recommended"
    }
  },
  {
    title: "Mobile App Developer",
    image: "../assets/symbol/smartphone.png",
    description: "Develops applications for Android and iOS devices.",
    roles: [
      "Designs and develops mobile applications",
      "Tests and debugs mobile apps",
      "Collaborates with UI/UX designers and backend developers"
    ],
    interests: ["Technology"],
    backgrounds: ["Mobile Application Development", "Software Engineering", "Information Technology", "Computer Science"],
    skills: ["Creativity", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Knowledge of Android/iOS SDKs is useful"
    }
  },
  {
    title: "Business Intelligence Analyst",
    image: "../assets/symbol/dashboard.png",
    description: "Turns business data into insights for strategy and planning.",
    roles: [
      "Collects and analyzes business data",
      "Prepares reports and dashboards",
      "Provides recommendations for business decisions"
    ],
    interests: ["Data & Analytics", "Business & Management"],
    backgrounds: ["Data Analysis", "Business Intelligence", "Statistics", "Finance", "Business Administration"],
    skills: ["Analytical thinking", "Organisational skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum A" },
        { name: "Statistics", grade: "Minimum B" }
      ],
      notes: "Proficiency in Excel, SQL, and BI tools is advantageous"
    }
  },
  {
    title: "Digital Marketing Analyst",
    image: "../assets/symbol/analytics.png",
    description: "Analyzes digital campaigns and consumer behavior.",
    roles: [
      "Monitors online campaigns",
      "Analyzes marketing data and trends",
      "Recommends strategies to optimize engagement"
    ],
    interests: ["Business & Management", "Data & Analytics", "Communication"],
    backgrounds: ["Marketing", "Business Administration", "Data Analysis", "Content Strategy"],
    skills: ["Analytical thinking", "Communication"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C" },
        { name: "Business Studies", grade: "Minimum B" }
      ],
      notes: "Familiarity with Google Analytics and social media platforms is helpful"
    }
  },
  {
    title: "Cybersecurity Analyst",
    image: "../assets/symbol/shield.png",
    description: "Protects systems and networks from cyber threats.",
    roles: [
      "Monitors network security",
      "Responds to security incidents",
      "Implements security measures and protocols"
    ],
    interests: ["Technology", "Data & Analytics"],
    backgrounds: ["Cybersecurity", "Information Technology", "Computer Science", "Artificial Intelligence"],
    skills: ["Analytical thinking", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum B" }
      ],
      notes: "Knowledge of network security tools and ethical hacking is beneficial"
    }
  },
  {
    title: "Educational Technology Specialist",
    image: "../assets/symbol/school.png",
    description: "Uses technology to improve teaching and learning.",
    roles: [
      "Implements technology solutions in educational settings",
      "Supports teachers with digital tools",
      "Designs instructional materials using technology"
    ],
    interests: ["Education", "Technology"],
    backgrounds: ["Educational Technology", "Teaching & Learning", "Instructional Design", "Information Technology"],
    skills: ["Communication", "Creativity"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Information Technology", grade: "Minimum C" },
        { name: "Education", grade: "Minimum B" }
      ],
      notes: "Experience with e-learning platforms is advantageous"
    }
  },
  {
    title: "Technical Content Specialist",
    image: "../assets/symbol/document.png",
    description: "Creates technical documentation and learning materials.",
    roles: [
      "Develops technical manuals and documentation",
      "Creates tutorials and training materials",
      "Collaborates with subject matter experts"
    ],
    interests: ["Communication", "Technology"],
    backgrounds: ["Corporate Communication", "Media Studies", "Content Strategy", "Information Technology"],
    skills: ["Communication", "Organisational skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English / Bahasa Melayu", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Technical writing experience is a plus"
    }
  },

  // DESIGN & CREATIVITY
  {
    title: "UI / UX Designer",
    image: "../assets/symbol/design_services.png",
    description: "Designs user-friendly digital experiences.",
    roles: [
      "Creates wireframes and prototypes",
      "Conducts usability testing",
      "Collaborates with developers"
    ],
    interests: ["Design & Creativity"],
    backgrounds: ["UI / UX Design", "Graphic Design", "Creative Technology"],
    skills: ["Creativity", "Communication", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Portfolio is more important than results"
    }
  },

  {
    title: "Graphic Designer",
    image: "../assets/symbol/brush.png",
    description: "Creates visual designs for digital and print media.",
    roles: [
      "Designs marketing visuals",
      "Maintains brand identity",
      "Works with content teams"
    ],
    interests: ["Design & Creativity"],
    backgrounds: ["Graphic Design", "Digital Media"],
    skills: ["Creativity", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creative skills and software knowledge are key"
    }
  },

  {
    title: "Multimedia Designer",
    image: "../assets/symbol/movie.png",
    description: "Creates digital multimedia content.",
    roles: [
      "Produces videos and animations",
      "Edits digital media",
      "Supports creative campaigns"
    ],
    interests: ["Design & Creativity"],
    backgrounds: ["Digital Media", "Animation", "Creative Technology"],
    skills: ["Creativity", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creativity and practice matter most"
    }
  },

  // DATA & ANALYTICS
  {
    title: "Data Analyst",
    image: "../assets/symbol/bar_chart.png",
    description: "Analyzes data to support decision making.",
    roles: [
      "Analyzes datasets",
      "Creates reports and dashboards",
      "Identifies trends"
    ],
    interests: ["Data & Analytics"],
    backgrounds: ["Data Analysis", "Statistics", "Business Intelligence"],
    skills: ["Analytical thinking", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Numerical skills are important"
    }
  },

  {
    title: "Junior Data Assistant",
    image: "../assets/symbol/table_chart.png",
    description: "Supports data collection and basic analysis.",
    roles: [
      "Prepares datasets",
      "Assists analysts",
      "Maintains data records"
    ],
    interests: ["Data & Analytics"],
    backgrounds: ["Statistics", "Data Visualization"],
    skills: ["Analytical thinking", "Practical / Hands-on Skills"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Entry-level role suitable for beginners"
    }
  },

  // COMMUNICATION
  {
    title: "Public Relations Executive",
    image: "../assets/symbol/groups.png",
    description: "Manages public image and communication with stakeholders.",
    roles: [
      "Prepares press releases",
      "Handles media inquiries",
      "Supports brand communication"
    ],
    interests: ["Communication"],
    backgrounds: ["Public Relations", "Corporate Communication", "Media Studies"],
    skills: ["Communication", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Strong writing and interpersonal skills are important"
    }
  },

  {
    title: "Content Creator",
    image: "../assets/symbol/post_add.png",
    description: "Creates engaging digital content for online platforms.",
    roles: [
      "Writes articles and social media posts",
      "Plans content strategies",
      "Collaborates with marketing teams"
    ],
    interests: ["Communication", "Design & Creativity"],
    backgrounds: ["Content Strategy", "Media Studies", "Journalism"],
    skills: ["Creativity", "Communication"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creativity and consistency matter more than formal qualifications"
    }
  },

  // EDUCATION
  {
    title: "Teacher",
    image: "../assets/symbol/school.png",
    description: "Educates students by delivering lessons and guiding learning.",
    roles: [
      "Plans and delivers lessons",
      "Assesses student performance",
      "Supports student development"
    ],
    interests: ["Education"],
    backgrounds: ["Education Studies", "Teaching & Learning"],
    skills: ["Communication", "Problem-solving"],
    requirements: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English", grade: "Minimum C (Recommended B)" }
      ],
      notes: "Formal teaching qualification required for professional teaching roles"
    }
  },

  // NO MATCH PREVENTION
  {
    title: "Junior Executive",
    image: "../assets/symbol/work.png",
    description: "Entry-level role suitable for various industries.",
    roles: [
      "Performs administrative tasks",
      "Supports team operations",
      "Learns on the job"
    ],
    interests: [
      "Technology",
      "Design & Creativity",
      "Business & Management",
      "Data & Analytics",
      "Communication",
      "Education"
    ],
    backgrounds: [
      "Computer Science",
      "Graphic Design",
      "Business Administration",
      "Statistics",
      "Education Studies"
    ],
    skills: [
      "Communication",
      "Problem-solving",
      "Practical / Hands-on Skills"
    ],
    requirements: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Suitable as a starting career for exploration"
    }
  }
];
