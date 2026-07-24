export const projects = [
  {
  id: "aligntask",
  title: "AlignTask - A Full-Stack Freelance Marketplace Platform",

  description:
    "AlignTask is a modern MERN stack freelance marketplace that connects clients with freelancers through a complete hiring workflow. Clients can post projects, review proposals, hire freelancers, and manage ongoing work, while freelancers can discover opportunities, submit proposals, and track their earnings through dedicated dashboards.",

  image: "/aligntask.png",

  techStack: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "HeroUI",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "BetterAuth",
    "JWT",
    "Stripe"
  ],

  github: "https://github.com/AfsaraSilviAmi/AlignTask",

  live: "https://align-task-ruby.vercel.app",

  details:
    "AlignTask is a full-stack freelance marketplace designed to simplify the hiring process for both clients and freelancers. The platform features secure authentication, role-based dashboards, task posting, proposal management, freelancer hiring, Stripe payment integration, project tracking, and administrative tools for managing users and platform activities. The application focuses on providing a clean, responsive, and intuitive experience while maintaining scalability and security.",

  challenges:
    "One of the biggest challenges was implementing a complete role-based system where clients, freelancers, and administrators each have different permissions and dashboards. Managing secure authentication with BetterAuth and JWT, integrating Stripe payments, handling proposal workflows, and designing scalable database relationships between users, tasks, proposals, and payments required careful planning. Maintaining a responsive UI while coordinating complex frontend and backend interactions was also a significant challenge.",

  improvements:
    "Future improvements include adding real-time notifications, in-app messaging between clients and freelancers, secure file uploads for project deliverables, email notifications, advanced analytics dashboards, and a review and rating system to enhance trust and collaboration across the platform."
},
{
  id: "plantpal",
  title: "PlantPal AI - An AI-Powered Plant Management Platform",

  description:
    "PlantPal AI is a full-stack web application that helps users discover, manage, and care for plants with the assistance of intelligent AI features. It combines modern web technologies with Agentic AI to deliver personalized plant recommendations and an interactive AI chat assistant.",

  image: "/plantpal-thumbnail.png",

  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HeroUI",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "JWT",
    "Groq AI",
    "Llama 3.3 70B"
  ],

  github: "https://github.com/AfsaraSilviAmi/PlantPal",

  live: "https://plant-pal-ochre.vercel.app/",

  details:
    "PlantPal AI is a full-stack AI-powered plant management platform built with the MERN ecosystem and TypeScript. Users can browse plants, search and filter collections, manage their own plants through a personalized dashboard, and receive intelligent plant recommendations based on their experience, environment, and preferences. The platform also includes an AI-powered chat assistant capable of answering plant care questions, recommending suitable plants, and maintaining conversation history through real-time streaming responses.",

  challenges:
    "The biggest challenge was integrating AI into a real-world application while keeping responses relevant and personalized. Designing the recommendation engine required combining user preferences with plant data stored in MongoDB to generate context-aware recommendations. Implementing real-time streaming AI responses, managing conversation history, securing authentication with Better Auth and JWT, and coordinating communication between the frontend, backend, database, and Groq API also required careful system design.",

  improvements:
    "Future improvements include AI-powered plant disease detection using image recognition, weather-aware watering reminders, plant growth tracking, email notifications, favorites and wishlists, a dark mode option, and additional AI capabilities such as personalized care schedules and smart gardening insights."
},
  {
    id: "aimarena",
    title: "AimArena - A Full-Stack Sports Facility Booking Platform",
    description: "Aim Arena is a sports facility booking platform where users can easily discover, view, and book sports venues such as football fields, basketball courts, tennis courts, swimming pools, and more. Owners are able to add their own facilities and manage them. The goal of this project is to simplify sports facility management and make booking accessible, fast, and user-friendly. This system reflects a real-world sports reservation portal",


    image: "/aimarena-thumbnail.png",
    techStack: [
      "React.js",
      "Next.js",
      "HTML5",
      "Tailwind CSS",
      "BetterAuth",
      "MongoDB",
      "Express.js",
      "Node.js",
      "JWT authentication"
    ],
    github: "https://github.com/AfsaraSilviAmi/aim-arena",
    live: "https://aim-arena-dun.vercel.app",
    details: "",
    challenges: "Designing a smooth and scalable booking workflow while handling role-based access for users and facility owners was a major challenge. Managing secure authentication, preventing booking conflicts, and ensuring real-time availability updates across multiple facilities required careful backend logic and database structuring. Another challenge was creating a responsive and user-friendly interface that works seamlessly across devices.",

    improvements: "Future improvements include integrating online payment systems for secure booking transactions, adding real-time booking availability and notifications, implementing advanced search and filtering options, and introducing ratings and reviews for facilities. Additional enhancements could include an admin dashboard for platform-wide management, booking history tracking, and a mobile application version for easier access on smartphones."
  },
  {
  id: "bookverse",

  title: "BookVerse - A Full-Stack Book Management Platform",

  description:
    "BookVerse is a modern full-stack book management platform where users can explore books, build and manage their personal library, and discover popular genres and authors through a clean, responsive, and intuitive interface.",

  image: "/bookverse-thumbnail.png",

  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HeroUI",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "JWT"
  ],

  github: "https://github.com/AfsaraSilviAmi/BookVerse",

  live: "https://book-verse-taupe.vercel.app/",

  details:
    "BookVerse is a full-stack web application designed for book enthusiasts to discover, organize, and manage their personal book collections. Users can browse all available books, search by title, filter by genre and price, sort results based on different criteria, and maintain their own library through a secure authentication system. The platform also highlights featured books, popular authors, and genre statistics while providing a smooth user experience with responsive layouts, loading skeletons, animations, and protected user actions.",

  challenges:
    "One of the biggest challenges was building efficient search, filtering, sorting, and pagination while maintaining good performance with a growing collection of books. Implementing secure authentication with Better Auth and JWT, ensuring users could only manage their own books, and keeping the frontend and backend synchronized through TypeScript required careful planning. Creating a responsive and polished user experience with animations and loading states also added to the project's complexity.",

  improvements:
    "Future improvements include allowing users to edit books, create wishlists, write reviews and comments, rate books, customize user profiles, add dark mode, build an administrator dashboard for content management, and implement an AI-powered recommendation system based on users' reading preferences."
},
  {
    id: "project_1",
    title: "Tiles Gallery: A World of Hidden Aesthetics",
    description: "A responsive tiles gallery web application with authentication, protected routes, and a clean card-based UI for browsing and viewing tile details.",
    image: "/tiles-gallery-home.png",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Better Auth",
      "Google OAuth",
      "React Toastify",
      "Animate.css",
      "Iconify"
    ],
    github: "https://github.com/AfsaraSilviAmi/a8-ami-tiles-gallery",
    live: "https://a8-ami-tiles-gallery.vercel.app/",
    details: "This project is a full-stack style tiles gallery application built with Next.js. It includes a homepage with featured tiles, an all-tiles page with a card layout, and a protected tile details page accessible only after login. It also includes authentication (email/password and Google OAuth) and a user profile page where users can update their personal information.",
    challenges: "Implementing authentication and protecting routes like the tile details page and profile page was the most challenging part. Managing user sessions and ensuring unauthorized users are redirected correctly required careful handling of client-side state.",
    improvements: "Future improvements include integrating a backend database for dynamic tile management, and enhancing UI animations for a more polished user experience."
  },
  {
    id: "digitools",
    title: "DigiTools Platform: Explore, Collect, and Elevate Your Workflow",
    description: "A modern digital tools marketplace that helps users explore, purchase, and manage productivity tools through a clean and responsive UI with a smooth checkout experience.",
    image: "/digitool-home.png",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript (ES6+)",
      "React-Toastify",
      "JSON"
    ],
    github: "https://github.com/AfsaraSilviAmi/Assignment6-Digitool",
    live: "https://digitool-platform-by-ami.netlify.app/",
    details: "DigiTools is a web-based platform that offers a collection of premium and affordable digital tools. Users can browse products, add them to a cart, and complete purchases through a fully responsive checkout system designed for smooth UX.",
    challenges: "One of the key challenges was managing dynamic cart state with real-time price calculation and ensuring smooth UI updates across different screen sizes while maintaining performance.",
    improvements: "Future improvements include adding user authentication, payment gateway integration, backend database support for persistent cart data, and personalized tool recommendations."
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper: Strengthen Your Relationships with Purpose",
    description: "A personal relationship management web app that helps users track friendships, monitor interactions, and maintain meaningful connections through structured engagement history and analytics.",
    image: "/keen-keeper-home.png",
    techStack: [
      "HTML5",
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Icons"
    ],
    github: "https://github.com/AfsaraSilviAmi/Assignment7-KinKeeper",
    live: "https://keen-keeper-by-ami.netlify.app/",
    details: "KeenKeeper is designed to help users stay connected with friends by tracking communication habits and interaction history. It provides a structured way to manage relationships with reminders, logs, and analytics.",
    challenges: "One of the main challenges was managing dynamic interaction data across multiple views while keeping state consistent between the home, timeline, and stats pages without performance issues.",
    improvements: "Future improvements include adding authentication, cloud-based data storage, automated reminders for inactive connections, and AI-based suggestions for improving communication habits."
  }
];