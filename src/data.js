export const profile = {
  name: 'Nisha Razzaq',
  role: 'Computer Science Student & Developer',
  email: 'nisharazzaq345@gmail.com',

  linkedin: 'https://www.linkedin.com/in/nisha-razzaq/',

  github: 'https://github.com/nisha-razzaq'
};

export const selectedWork = [
  {
    id: '01', title: 'Aurelis', kicker: 'Playable systems / 01',
     description: 'A realistic 3D experience built with javascript and Three.js, featuring a dynamic environment with interactive elements and immersive visuals.',
   caseStudy: [
  'Built a realistic 3D racing game prototype using JavaScript, Three.js, and Vite.',
  'Developed a custom car movement system with acceleration, braking, reverse movement, friction, steering, and speed control.',
  'Created an immersive 3D city environment with roads, lane markings, sidewalks, grass, buildings, and trees.',
  'Implemented a modular architecture with separate systems for the car, input, road, city, buildings, trees, camera, and environment.',
  'Integrated 3D assets using GLTFLoader, including vehicles, buildings, and environmental models.',
  'Applied modern JavaScript concepts including ES6+ syntax, modules, classes, asynchronous asset loading, and event-driven input handling.',
  'Learned Three.js and 3D game development quickly and applied the concepts directly while building the project from scratch.',
  'Completed Version 1 with the project designed for future expansion with additional gameplay mechanics and features.'
],
    technologies: ['JavaScript', 'Three.js', '3D graphics'],
    tone: 'cyan', visual: 'aurelis',
   
    image: 'img1.jpeg',

    video: 'Demo_video.mp4',
   
    github: 'https://github.com/nisha-razzaq/AURELIS',
  
  },
  {
    id: '02', title: 'System Resource Monitor & Performance Analyzer', kicker: 'Internship build / 02',
  description:
    "A desktop monitoring application built to observe system resources in real time.",

  caseStudy: [
    "Developed a multi-threaded System Resource Monitor in C++ to continuously monitor CPU, memory, disk usage, and running processes while maintaining a responsive application.",

    "Redesigned the application from a synchronous to a multi-threaded architecture, using std::thread, std::mutex, and std::atomic for safe background monitoring and thread synchronization.",

    "Implemented CSV/TXT performance report generation, configurable threshold alerts, and Windows API (psapi.h) integration to retrieve real-time system and process information.",

    "Built with a modular, scalable Object-Oriented architecture using C++, STL, CMake, Git, and GitHub, enabling clean code, maintainability, and future enhancements."
  ],

    technologies: ['C++', 'Linux', 'Systems'], tone: 'amber', visual: 'terminal',
    
    image: 'img2.jpeg',
    // INSERT SYSTEM RESOURCE MONITOR VIDEO HERE
    video: 'video.mp4',
   
    github: 'https://github.com/nisha-razzaq/Monitoring-System',
    // INSERT SYSTEM RESOURCE MONITOR ADDITIONAL LINK HERE, IF AVAILABLE
  
  },
  {
    id: '03', title: 'Network & Log Analysis System', kicker: 'Internship build / 03',
   description:
    "A C++-based monitoring system that analyzes network logs and transforms traffic data into actionable security insights.",

  caseStudy: [
    "Developed a C++-based Network Monitoring & Log Analysis System to process network logs, analyze traffic patterns, detect suspicious activities, and generate security insights through an interactive HTML dashboard.",

    "Parsed and analyzed network log files to identify unique and most active IP addresses, while tracking request frequency, error rates, and traffic spikes.",

    "Detected failed login attempts and potential security threats through structured log analysis.",

    "Supported real-time log monitoring, scheduled analysis, and log rotation for continuous network observation.",

    "Generated HTML security dashboards and exportable monitoring reports to present analyzed network activity.",

    "Implemented search and filtering by IP address, date, and event type for faster investigation and analysis."
  ],
    technologies: ['C++', 'Regular expressions', 'Data analysis'], tone: 'lime', visual: 'network',
    // INSERT NETWORK & LOG ANALYSIS SCREENSHOT HERE
    image: 'img3.jpeg',
    // INSERT NETWORK & LOG ANALYSIS VIDEO HERE
    video: 'Demo Video.mp4',
    // INSERT NETWORK & LOG ANALYSIS GITHUB REPOSITORY LINK HERE
    github: 'https://github.com/nisha-razzaq/Network-and-Log-analysis-system',
    
  },
  {
    id: '04', title: 'Console-based Library Management System', kicker: 'Internship build / 04',
     description:
    "A robust OOP-based system that digitizes core library operations while keeping records organized and persistent.",

  caseStudy: [
    "Developed a robust OOP-based Library Management System to digitize manual library operations and ensure reliable data persistence.",

    "Implemented CRUD operations for efficient management of book inventory and member profiles.",

    "Built persistent data handling to store records of books, members, and transactions, maintaining data consistency across sessions.",

    "Implemented automated borrowing and returning logic with intelligent status updates and availability enforcement.",

    "Added secure login, automated fine calculation for overdue items, and CSV report exporting.",

    "Optimized searching to allow quick retrieval of records by ID, title, or author."
  ],

    technologies: ['C++', 'OOP', 'File handling'], tone: 'coral', visual: 'library',
    // INSERT LIBRARY MANAGEMENT SCREENSHOT HERE
    image: 'img4.jpeg',
    // INSERT LIBRARY MANAGEMENT VIDEO HERE
    video: 'Project_Demo_video.mp4',
    // INSERT LIBRARY MANAGEMENT GITHUB REPOSITORY LINK HERE
    github: 'https://github.com/nisha-razzaq/Console-based-Library-Management-System',
    
  }
];

// Project-reference ids use a prefix so they can point at any of the three
// collections without collisions: 'w01'-'w04' = selectedWork,
// 'e01'-'e08' = experiments, 'c01'-'c09' = certificates.
export const skills = [
  ['C++', ['w04', 'e01', 'w03', 'w02', 'c07', 'c02']],
  ['JavaScript', ['e07', 'e06', 'e05', 'w01', 'c03']],
  ['Object-Oriented Programming', ['w04', 'w03', 'w02', 'c03', 'c02']],
  ['Artificial Intelligence', ['c09', 'e04', 'c06']],
  ['Prompt Engineering', ['e04']],
  ['Algorithms & Data Structures', ['c03']],
  ['Regular Expressions', ['c03']],
  ['Functional Programming', ['c03']],
  ['Git', ['c08']],
  ['HTML', ['e03', 'e07', 'e06', 'e05', 'w01']],
  ['CSS', ['e03', 'e07', 'e06', 'e05', 'w01']],
  ['On-Page SEO', ['c04']],
  ['Web Content Writing', ['c04']],
  ['Blogging', ['c04']],
  ['Linux', ['w02', 'w03']],
  ['Microsoft Excel', []],
  ['Microsoft Word', []]
].map(([name, projects]) => ({ name, projects }));

export const experience = [
  { duration: '10 Jun — 11 Jul 2026', org: 'Teyzix Core', role: 'C++ Intern', text: 'Completed 3 industry-based C++ projects — System Resource Monitor, Network & Log Analysis System, and Library Management System.' },
  { duration: 'Present', org: 'Dev Weekends Fellowship', role: 'Fellow', text: 'Learning Data Structures and JavaScript by building real projects.' }
];

export const journey = [
  { year: '2023', label: 'School', title: 'Bhatti International Public School, Kasur', text: 'Passed Matric in 2023. Skipped classes 3 and 8. A strong academic journey that included participating in the Kangaroo competition and ranking first.', mark: '01' },
  { year: '2023 — 2025', label: 'College', title: 'KIPS College, Kasur Campus', text: 'Passed my ICS in 2025 with the distinction of District Topper.', mark: '02' },
  { year: 'The turn', label: 'Computer science journey', title: 'From a different plan to a new curiosity', text: "I initially wanted to become an army doctor. As technology became a bigger part of the world around me, I discovered an interest in computers and programming.", mark: '03' },
  { year: '2025 — 2029 (Present)', label: 'University', title: 'BS Computer Science', text: 'University surrounded me with people who took their work seriously, and that pushed me to take mine seriously too. First semester GPA: 3.68. Second semester GPA: 3.74. First-year ending CGPA: 3.71. The meaningful comparison is with my own previous version.', mark: '04' },
  { year: 'Summer 2026', label: 'In motion', title: 'Workshops, practice, experiments', text: 'AI workshops, a Tazex Core remote internship, professional C++ projects, the Dev Weekends Fellowship, personal development, and continued experimentation and project building.', mark: '05' }
];

const placeholder = (title, type, marker) => ({ title, type, marker });
export const certificates = [

  placeholder('First Position', 'Kangaroo Competition', 'kg.jpeg'),
  placeholder('Declamation Contest 2018', 'Debate Contest', 'debate.jpeg'),
  placeholder('Internship Certificate', 'Teyzix Core', 'Internship.jpeg'),
  placeholder('Legacy JavaScript Algorithms and Data Structures', 'freeCodeCamp', 'codecamp.jpeg'),
  placeholder('SEO Certificate', 'Professional learning archive', 'SEO.jpeg'),
  placeholder('Freelancing Certificate', 'Professional learning archive', 'FreeLancing.jpeg'),
  placeholder('AI Workshop Certificate', 'AI workshop archive', 'datacrumbs.jpeg'),
  placeholder('Problem Solving Certificate', 'HackerRank', 'HR.jpeg'),
  placeholder('Introduction to Git Certificate', 'Git learning archive', 'Intro to git.jpeg'),
  placeholder('Google Gemini Quiz 2026 Participant Certificate', 'Google Gemini Quiz 2026', 'unstop.jpeg')
];

export const experiments = [

  [
    '2D Solar System Model',
    'A simple 2D model of the solar system to visualize the orbits of planets.',
    'solar.jpeg',
    'solar.mp4',
    'https://github.com/nisha-razzaq/2D-Solar-System-Modal'
  ],

  [
    'Animated Butterfly',
    'A simple animated butterfly created using CSS and JavaScript, demonstrating motion, styling, and interactive visual effects.',
    'butterfly.jpeg',
    'butterfly.mp4',
    
  ],

  [
    'Restaurant Management System',
    'Developed a restaurant management system prototype using HTML and CSS as part of an ICT project for educational purposes. Designed a user-friendly interface with responsive layouts, structured navigation, and an interactive menu presentation.',
    'restaurant.jpeg',
    'https://github.com/nisha-razzaq/Restaurant-Management-System'
  ],

  [
    'Prompt Engineering / Interactive Concept Visualization',
    'Developed an AI-powered educational web application using prompt engineering and Lovable. The platform helps students learn concepts through visual explanations, interactive content, and simplified learning experiences. Designed the application’s features, workflows, and user experience through iterative prompting, testing, and refinement.',
    'prompt.jpeg',
   
  ],

  [
    'Quiz Application',
    'A JavaScript-based quiz application that presents questions, accepts user answers, tracks scores, and provides an interactive way to practice and test knowledge.',
    'quiz.jpeg',
    'https://github.com/nisha-razzaq/JavaScript-Mini-Projects'
  ],

  [
    'To-do List',
    'A simple task management application that allows users to add, organize, complete, and remove tasks through an interactive interface.',
    'list.jpeg',
    'https://github.com/nisha-razzaq/JavaScript-Mini-Projects'
  ],

  [
    'Counter App',
    'A lightweight interactive application that demonstrates state changes by allowing users to increase, decrease, and reset a numerical counter.',
    'counter.jpeg',
    'https://github.com/nisha-razzaq/JavaScript-Mini-Projects'
  ],


  [
    'Hangman Game — C++',
    'A console-based Hangman game developed in C++ where players guess a hidden word within a limited number of attempts using conditional logic, loops, strings, and user input.',
    'Hangman.jpeg',
    'https://github.com/nisha-razzaq/Hangman_game'
  ]

].map(([title, description, image, video, github], index) => ({
  title,
  description,
  image,
  video,
  github,
  number: String(index + 1).padStart(2, '0')
}));

export const aboutSections = [
  { heading: "I didn't always know I'd end up in Computer Science.", paragraphs: ["Growing up, my interests were pointed somewhere completely different. I once imagined myself becoming an army doctor, and Computer Science wasn't part of the plan.", "But as technology became a bigger part of the world around me, I started discovering an interest in computers. I chose ICS during my intermediate studies, and somewhere along that journey, curiosity turned into something more. I began enjoying the process of understanding how things work, writing code, and eventually turning that interest into a path in Computer Science.", "Today, I'm a Computer Science student and developer, constantly exploring what I can create with what I learn."] },
  { heading: 'I build what I imagine.', paragraphs: ["What I enjoy most about programming is the moment an idea becomes real.", "Sometimes an idea simply appears in my mind — a concept, an interaction, a system, or something I wonder whether I could actually build. I love taking that idea from imagination to something executable.", "That transformation is what keeps me building.", "A few lines of code can turn a simple thought into an interactive experience, a working application, or something that makes another person stop and think: “Wait... you actually built this?”", "That feeling is one of the things I love most about programming."] },
  { heading: "I'm not trying to be better than everyone else.", paragraphs: ["I'm trying to become a better version of myself.", "I don't believe perfection is the goal. There will always be something more to learn, something to improve, and someone who is further ahead.", "What matters to me is progress.", "I want to put my energy into becoming the best version of myself — not by competing with someone else's journey, but by looking back at who I was before and asking: “Am I better than I was yesterday?”", "Every version of me should have something to teach the next one.", "And that's the journey I'm building — one idea, one project, and one version of myself at a time."] }
];