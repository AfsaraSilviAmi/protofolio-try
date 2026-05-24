export const projects = [
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