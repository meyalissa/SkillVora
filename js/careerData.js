/* CAREER DATA */
const careerData = [

  // ================= TECHNOLOGY =================
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "English", grade: "Minimum C" }
      ],
      notes: "Strong logical thinking and interest in programming are important"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Software Engineering",
        "Diploma in Information Technology",
        "Bachelor of Computer Science",
        "Bachelor of Software Engineering"
      ],
      notes: "Programming skills in Java, Python or C++ are commonly required"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "Additional Mathematics", grade: "Recommended" }
      ],
      notes: "Logical thinking and interest in databases are helpful"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Computer Science",
        "Diploma in Information Technology",
        "Bachelor of Computer Science (Software Engineering)"
      ],
      notes: "Knowledge of APIs, databases and server-side languages expected"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English", grade: "Minimum C" },
        { name: "Mathematics", grade: "Minimum C" }
      ],
      notes: "Creativity and interest in design are advantages"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Web Development",
        "Diploma in Multimedia",
        "Bachelor of Interactive Media",
        "Bachelor of Computer Science"
      ],
      notes: "HTML, CSS, JavaScript and frameworks are usually required"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C (Recommended B)" },
        { name: "English", grade: "Minimum B" }
      ],
      notes: "Strong communication skills are important"
    },
    jobSeeker: {
      education: "Degree",
      courses: [
        "Bachelor of Information Systems",
        "Bachelor of Computer Science",
        "Bachelor of Business Information Technology"
      ],
      notes: "Experience in system documentation is an advantage"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C" },
        { name: "ICT / Computer Studies", grade: "Recommended" }
      ],
      notes: "Hands-on technical skills are important"
    },
    jobSeeker: {
      education: "Certificate / Diploma",
      courses: [
        "Certificate in Information Technology",
        "Diploma in Information Technology",
        "Diploma in Network Technology"
      ],
      notes: "Hardware and operating system troubleshooting skills required"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Interest in cloud platforms is useful"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Cloud Computing",
        "Diploma in Information Technology",
        "Bachelor of Information Technology"
      ],
      notes: "Knowledge of AWS, Azure or Google Cloud is an advantage"
    }
  },

  // ================= DESIGN & CREATIVITY =================
  {
    title: "UI / UX Designer",
    image: "../assets/symbol/palette.png",
    description: "Designs user-friendly interfaces and experiences for digital products.",
    roles: [
      "Designs and prototypes digital interfaces",
      "Conducts user research and testing",
      "Collaborates with developers and stakeholders"
    ],
    interests: ["Design & Creativity"],
    backgrounds: ["Graphic Design", "UI / UX Design", "Digital Media", "Creative Technology"],
    skills: ["Creativity", "Communication"],
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Art & Design", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Portfolio is highly recommended"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in UI/UX Design",
        "Diploma in Graphic Design",
        "Bachelor of Creative Multimedia"
      ],
      notes: "Strong portfolio is more important than grades"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Strong logical thinking is required"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Mobile Application Development",
        "Bachelor of Software Engineering",
        "Bachelor of Computer Science"
      ],
      notes: "Android Studio or iOS development knowledge required"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum A" },
        { name: "Statistics", grade: "Minimum B" }
      ],
      notes: "Strong numerical skills required"
    },
    jobSeeker: {
      education: "Degree",
      courses: [
        "Bachelor of Data Analytics",
        "Bachelor of Statistics",
        "Bachelor of Business Intelligence"
      ],
      notes: "Excel, SQL and BI tools knowledge required"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum C" },
        { name: "Business Studies", grade: "Minimum B" }
      ],
      notes: "Interest in marketing analytics is important"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Digital Marketing",
        "Bachelor of Marketing",
        "Bachelor of Business Administration"
      ],
      notes: "Experience with Google Analytics and SEO is beneficial"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Mathematics", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum B" }
      ],
      notes: "Strong interest in security concepts required"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Cybersecurity",
        "Bachelor of Cybersecurity",
        "Bachelor of Computer Science"
      ],
      notes: "Security certifications are an advantage"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "Information Technology", grade: "Minimum C" },
        { name: "Education", grade: "Minimum B" }
      ],
      notes: "Interest in teaching and learning is important"
    },
    jobSeeker: {
      education: "Degree",
      courses: [
        "Bachelor of Educational Technology",
        "Bachelor of Education",
        "Bachelor of Information Technology"
      ],
      notes: "Experience with e-learning platforms is beneficial"
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
    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English / Bahasa Melayu", grade: "Minimum B" },
        { name: "Information Technology", grade: "Minimum C" }
      ],
      notes: "Strong writing skills are important"
    },
    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Technical Communication",
        "Bachelor of Corporate Communication",
        "Bachelor of Information Technology"
      ],
      notes: "Technical writing experience is an advantage"
    }
  },
   // ================= DESIGN & CREATIVITY =================
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

    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English", grade: "Minimum C" },
        { name: "Mathematics", grade: "Minimum C" }
      ],
      notes: "Portfolio and practical skills are more important than exam results"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Graphic Design",
        "Diploma in Multimedia Design",
        "Bachelor of Graphic Design",
        "Bachelor of Multimedia Technology",
        "Bachelor of UI/UX Design"
      ],
      notes: "Portfolio, UX research skills and design tools are required"
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creative ability and software skills are essential"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Graphic Design",
        "Diploma in Digital Media",
        "Bachelor of Visual Communication",
        "Bachelor of Graphic Design"
      ],
      notes: "Adobe software proficiency and portfolio are important"
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creativity and continuous practice are important"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Multimedia Design",
        "Diploma in Animation",
        "Bachelor of Multimedia Technology",
        "Bachelor of Animation"
      ],
      notes: "Skills in video editing, animation, and motion graphics are required"
    }
  },

  // ================= DATA & ANALYTICS =================
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Strong numerical and logical thinking skills are required"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Data Analytics",
        "Diploma in Statistics",
        "Bachelor of Data Science",
        "Bachelor of Statistics",
        "Bachelor of Information Systems"
      ],
      notes: "Knowledge of Excel, SQL, Python or R is expected"
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "Mathematics", grade: "Minimum C" }],
      notes: "Suitable as an entry-level data role"
    },

    jobSeeker: {
      education: "Diploma",
      courses: [
        "Diploma in Statistics",
        "Diploma in Information Technology",
        "Diploma in Data Analytics"
      ],
      notes: "Basic data handling and reporting skills are required"
    }
  },

  // ================= COMMUNICATION =================
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Strong communication and writing skills are essential"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Public Relations",
        "Diploma in Corporate Communication",
        "Bachelor of Public Relations",
        "Bachelor of Communication Studies"
      ],
      notes: "Professional communication and media handling skills are required"
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

    spm: {
      education: "SPM / equivalent",
      subjects: [{ name: "English", grade: "Minimum C" }],
      notes: "Creativity and consistency are more important than formal results"
    },

    jobSeeker: {
      education: "Diploma / Degree",
      courses: [
        "Diploma in Media Studies",
        "Diploma in Journalism",
        "Bachelor of Mass Communication",
        "Bachelor of Media Studies"
      ],
      notes: "Content planning, writing skills and platform knowledge are required"
    }
  },

  // ================= EDUCATION =================
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

    spm: {
      education: "SPM / equivalent",
      subjects: [
        { name: "English", grade: "Minimum C (Recommended B)" }
      ],
      notes: "Strong academic foundation is recommended"
    },

    jobSeeker: {
      education: "Degree + Teaching Qualification",
      courses: [
        "Bachelor of Education",
        "Bachelor of Teaching (Primary / Secondary)",
        "Postgraduate Diploma in Education"
      ],
      notes: "Professional teaching certification is required for formal schools"
    }
  },
  
  // ================= NO MATCH PREVENTION =================
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
      spm: {
        education: "SPM / equivalent",
        subjects: [{ name: "English", grade: "Minimum C" }],
        notes: "Suitable as a starting role"
      },
      jobSeeker: {
        education: "Diploma / Degree",
        courses: [
          "Diploma in Business Administration",
          "Diploma in Management",
          "Bachelor of Business Administration"
        ],
        notes: "Good communication and adaptability required"
      }

  }
];
