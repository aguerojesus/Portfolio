const projects = [
  {
    title: 'Property Management System',
    image: 'pvps_image.png',
    description:
    'Comprehensive full-stack property management platform designed for short-term rental businesses. The system supports multi-user and multi-role access, allowing administrators, supervisors, and cleaning staff to log in with role-based permissions. It enables the full management of cleaning operations, including creating, assigning, and tracking cleanings across different statuses such as unassigned, assigned, in review, and completed. Administrators and supervisors can manage properties, clients, and staff, assign cleanings to workers, and monitor operational progress in real time. The platform also provides financial control features, including client billing management and payment tracking for cleaning staff. Additionally, it supports integrations with major short-term rental platforms such as Airbnb, Guesty, Hostfully, and other vacation rental services, allowing automated synchronization of reservations and cleaning schedules.'
    ,
    tech: ['React', 'TypeScript', 'MUI', 'Bootstrap', 'Python-Fastapi', 'PostgreSQL', 'VPS'],
    siteUrl: 'https://puravidapropertyservicesllc.com',
  },
  {
    title: 'Prometheus Gym – Nutritionist System',
    image: 'nutriapp_image.png',
    description:
      'Desktop application developed for a professional nutritionist, designed to manage client information through a local database. The system was built as a cross-platform desktop app using .NET and Electron, providing an offline-first solution with data stored locally via SQLite. Its main features include appointment scheduling, personalized meal plan management, and client tracking, allowing the nutritionist to efficiently organize consultations and dietary programs from a single desktop environment.',
    tech: ['C# .NET MVC', 'Electron', 'SQLite'],
    githubUrl: 'https://github.com/aguerojesus/PrometeusGym_Nutritionist_System',
  },

  {
    title: 'Web Site Makaris',
    image: 'makaris_image.png',
    description:
      'Production-ready website developed for a group of female entrepreneurs offering tourism services. The platform is designed to showcase their offerings in a clear and attractive way, providing visitors with essential information about services, destinations, and contact options. Built with a responsive and modern interface, the site ensures an optimal user experience across mobile, tablet, and desktop devices, helping the business establish a professional online presence and reach potential clients effectively.',
    tech: ['React', 'TypeScript', 'MUI', 'Bootstrap'],
    siteUrl: 'https://makarisexperiences.site/',
  },
  {
    title: 'ChatBot UCR',
    image: 'chatbot_image.png',
    description:
      'University project focused on the development of a conversational chatbot for a Universidad de Costa Rica (UCR) website. The chatbot was designed to assist users by providing automated responses to frequently asked questions and guiding visitors through relevant information on the site. The solution integrates natural language understanding using Wit.ai, with a FastAPI backend handling requests and business logic, and a React-based frontend interface for user interaction.',
    tech: ['React', 'TypeScript', 'Python-Fastapi', 'Wit.ai'],
    githubUrl: 'https://github.com/aguerojesus/projectBot_repository',
  },
  {
    title: 'ADV Project',
    image: 'easy_travel_image.png',
    description:
      'University project focused on the development of a web application for booking airline tickets and reserving hotel accommodations. The system allows users to search for available flights and hotels, manage reservations, and simulate the purchasing process through a centralized platform. The application was designed following a microservices-based architecture, where independent services handled specific domains such as flight management, hotel reservations, and user management. The project was developed using the Scrum agile methodology, with iterative sprints, task planning, and continuous collaboration among team members. GitHub was used as the main version control platform, applying code reviews and automated tests as part of the pull request workflow to ensure code quality and stability throughout the development process.',
    tech: ['React', 'TypeScript', 'MUI', 'Java', 'Spring Boot', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/aguerojesus/adv-project-repository',
  },
  {
    title: 'VideoTeca',
    image:'videoteca_image.png',
    description:
      'University project focused on the development of a web-based movie catalog application. The system was built using the MVC architectural pattern with C# and .NET, allowing users to browse, search, and view detailed information about movies. SQL Server was used for data persistence and management, while an open public movies API was integrated to retrieve up-to-date film data such as titles, descriptions, genres, and release information. The project emphasized backend structure, database design, and proper separation of concerns following the MVC pattern.',
    tech: ['C# .NET MVC', 'SQL Server', "Bootstrap"],
    githubUrl: 'https://github.com/YexinioAguero/Videoteca',
  },
  
];

export default projects;
