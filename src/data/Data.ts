import { ServiceDetail } from "@/models";

const serviceData: ServiceDetail[] = [
  {
    id: 0,
    title: "Front End Development",
    slug: "front-end",
    category: "front-end",
    imgSrc: "/assets/img/portfolio-1.jpg",
    description: ["Front-end development is a crucial aspect of web application development, as it directly shapes the user's interaction and perception of the application. By mastering the core technologies, frameworks, and best practices, front-end developers play a vital role in delivering exceptional digital experiences that captivate and engage users.", " Front-end developers ensure that the web application is optimized for various devices and screen sizes, providing a consistent and seamless user experience across desktops, tablets, and mobile devices."],
    bestPractices: [{
      title: "Interactivity & User Experience",
      content: ["Developed a real-time chat application using React and WebSockets, enabling seamless communication and fostering user engagement within the platform.",
        "Implemented a dynamic drag-and-drop interface using React DnD library, empowering users to effortlessly customize their dashboards and workflows.",
        "Developed an interactive data visualization dashboard using React and charting libraries like D3.js, providing users with clear and actionable insights into complex datasets."
      ]
    },
    {
      title: "Performance & Scalability",
      content: ["Architected and implemented a React application that achieved a 20% reduction in initial load time through code-splitting and lazy loading, enhancing user experience for our large customer base.",
        "Spearheaded the migration of a legacy application to React, resulting in a 30% improvement in application responsiveness and a smoother user experience, especially on low-bandwidth connections",
        "Optimized React component rendering using techniques like memoization and PureComponent, leading to a 15% reduction in memory usage and improved application performance on mobile devices.",
      ]
    }
    ],
  },
  {
    id: 1,
    title: "Server Side Apps",
    slug: "server-side",
    category: "Next JS",
    imgSrc: "/assets/img/portfolio-2.jpg",
    description: ["Next.js applications are primarily rendered on the server, where the initial HTML content is generated and sent to the client. This approach improves the initial page load time and makes the content more accessible to search engine crawlers. Server-side rendering in Next.js can significantly improve the initial page load time, as the server generates the HTML content and sends it to the client, reducing the amount of work the client's browser has to do",
      "Server-side applications built with Next.js leverage the power of React while providing the benefits of server-side rendering, making them a popular choice for building high-performance, SEO-friendly, and user-friendly web applications."],
    bestPractices: [
      {
        title: "Developer Experience & Maintainability",
        content: [
          "Established a robust development workflow using Next.js with TypeScript, enabling type safety, improved code completion, and reduced runtime errors.",
          "Introduced automated testing practices with Jest and Next.js testing framework, achieving a 90% code coverage and a more maintainable codebase.",
          "Created a modular Next.js API with clear documentation and well-defined routes, promoting code reusability and simplifying future development efforts."
        ]
      },
      {
        title: "Performance & Scalability",
        content: [
          "Architected and implemented a serverless API using Next.js API routes, achieving a 40% reduction in server costs while maintaining exceptional response times for our rapidly growing user base.",
          "Leveraged Next.js Static Site Generation (SSG) for a content-heavy website, resulting in a 2x improvement in SEO ranking and a significantly faster first-load experience for visitors.",
          "Optimized Next.js Incremental Static Regeneration (ISR) for a dynamic blog platform, ensuring near-instant updates for new content while maintaining server-side rendering benefits."
        ]
      }
    ],
  },
  {
    id: 2,
    title: "Mobile Apps Development",
    slug: "mobile-apps",
    category: "React Native",
    imgSrc: "/assets/img/portfolio-3.jpg",

    description: ["In today's mobile-first world, crafting captivating applications that thrive across platforms is crucial. Enter React Native, a game-changer in mobile development, empowering you to build exceptional mobile apps with a single codebase for both iOS and Android.",
      "React Native doesn't compromise on user experience. By leveraging native UI components, apps built with React Native deliver a seamless and familiar experience across iOS and Android devices. Users won't notice the difference – they'll just enjoy a smooth, intuitive, and visually stunning app"
    ],
    bestPractices: [
      {
        title: "User Experience & Design",
        content: [
          "Platform-Specific Styles: Demonstrate your knowledge of implementing platform-specific styles to ensure your app adheres to native design guidelines on both iOS and Android.",
          "Responsive Design & Accessibility: Showcase your ability to create responsive UIs that adapt to different screen sizes and your efforts to integrate accessibility features for a wider user base.",
          "Customizable UI Components: Highlight your capability to develop reusable and customizable UI components, promoting code reusability and streamlining future development efforts."
        ]
      },
      {
        title: "State Management & Maintainability",
        content: [
          "Redux or MobX for Complex Apps: Demonstrate your experience with state management libraries like Redux or MobX for complex applications, ensuring centralized data management and a predictable application state.",
          "Clear and Consistent Naming Conventions: Showcase your commitment to maintainability by implementing consistent naming conventions for variables, functions, and components, making the codebase easier to understand for yourself and future developers.",
          "Unit Testing with Jest & React Testing Library: Highlight your testing practices using Jest and React Testing Library to write unit tests for your components, ensuring code quality and preventing regressions during development."
        ]
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Application Design",
  //   slug: "application-design",
  //   category: "Web Design",
  //   imgSrc: "/assets/img/portfolio-6.jpg",
  // },
];

const testimonialData = [
  {
    id: 1,
    testimonial:
      "Contribution and the analysis that's performed on each and every feature is remarking",
    imgSrc: "assets/img/reviewer-1.jpg",
    name: "Ballard Sphar",
    label: "Vivaco Group",
  },
  {
    id: 2,
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint proident, culpa qui officia deserunt mollit anim id est laborum.",
    imgSrc: "assets/img/reviewer-2.jpg",
    name: "Nicolas Marko",
    label: "Chief Officer",
  },
  {
    id: 3,
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint proident, culpa qui officia deserunt mollit anim id est laborum.",
    imgSrc: "assets/img/reviewer-1.jpg",
    name: "Selena Brook",
    label: "Vivaco Group",
  },
  {
    id: 4,
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint proident, culpa qui officia deserunt mollit anim id est laborum.",
    imgSrc: "assets/img/reviewer-2.jpg",
    name: "Nicolas Marko",
    label: "Chief Operating Officer",
  },
];
const faqItems = [
  {
    id: 1,
    title: "How to reach out ?",
    content:
      "Please click on the contact section to reach out",
  },
  {
    id: 2,
    title: "What are the service that I offer ?",
    content:
      "I offer Web Development, Web API Design & Integration, Development and Testing Support, Mobile Apps Development",
  },

];

const portfolioData = [
  {
    id: 1,
    category: "web-app",
    imgSrc: "/assets/img/portfolio-1.jpg",
    mainSrc: "/assets/img/portfolio-main-1.jpg",
    title: "React JS / Anngular",
    slug: "web-app",
  },

  {
    id: 2,
    category: "server-side",
    imgSrc: "/assets/img/portfolio-2.jpg",
    mainSrc: "/assets/img/portfolio-main-2.jpg",
    title: "Node JS (Express)",
    slug: "server-side",
  },

  {
    id: 3,
    category: "mobile-app",
    imgSrc: "/assets/img/portfolio-3.jpg",
    mainSrc: "/assets/img/portfolio-main-3.jpg",
    title: "React Native",
    slug: "mobile-app",
  },
];

const blogData = [
  {
    id: 1,
    category: "Business",
    date: "January 03, 2024",
    title: "How to make a website using WordPress",
    slug: "how-to-make-a-website-using-wordpress",
    imgSrc: "/assets/img/blog-1.jpg",
    tags: ["Businesses", "Audio Post", "Digital"],
  },
  {
    id: 2,
    category: "Design",
    date: "February 15, 2024",
    title: "Exploring the Power of ES6 Features",
    slug: "exploring-the-power-of-es6-features",
    imgSrc: "/assets/img/blog-2.jpg",
    tags: ["Gallery Post", "Marketing", "Agency"],
  },
  {
    id: 3,
    category: "Creative",
    date: "March 07, 2024",
    title: "Mastering CSS Flexbox and Grid Layouts",
    slug: "mastering-css-flexbox-and-grid-layouts",
    imgSrc: "/assets/img/blog-3.jpg",
    tags: ["Web Development", "Graphic", "Audio Post"],
  },
  {
    id: 4,
    category: "Creative",
    date: "April 21, 2024",
    title: "Building Interactive User Interfaces with React",
    slug: "building-interactive-user-interfaces-with-react",
    imgSrc: "/assets/img/blog-4.jpg",
    tags: ["Digital", "Businesses", "Marketing"],
  },
  {
    id: 5,
    category: "Marketing",
    date: "May 12, 2024",
    title: "Principles of Effective Web Design",
    slug: "principles-of-effective-web-design",
    imgSrc: "/assets/img/blog-5.jpg",
    tags: ["Gallery Post", "Web Development", "Graphic"],
  },
  {
    id: 6,
    category: "Lifestyle",
    date: "June 05, 2024",
    title: "Introduction to Server-Side JavaScript",
    slug: "introduction-to-server-side-javascript",
    imgSrc: "/assets/img/blog-6.jpg",
    tags: ["Audio Post", "Marketing", "Businesses"],
  },
  {
    id: 7,
    category: "Lifestyle",
    date: "July 18, 2024",
    title: "Deep Dive into HTML5 Features",
    slug: "deep-dive-into-html5-features",
    imgSrc: "/assets/img/blog-7.jpg",
    tags: ["Web Development", "Gallery Post", "Marketing"],
  },
  {
    id: 8,
    category: "Marketing",
    date: "August 09, 2024",
    title: "Responsive Layouts for Modern Websites",
    slug: "responsive-layouts-for-modern-websites",
    imgSrc: "/assets/img/blog-8.jpg",
    tags: ["Graphic", "Audio Post", "Web Development"],
  },
  {
    id: 9,
    category: "Design",
    date: "September 30, 2024",
    title: "Introduction to GraphQL",
    slug: "introduction-to-graphql",
    imgSrc: "/assets/img/blog-9.jpg",
    tags: ["Businesses", "Marketing", "Digital"],
  },
  {
    id: 10,
    category: "Marketing",
    date: "October 12, 2024",
    title: "Best Practices for Web Security",
    slug: "best-practices-for-web-security",
    imgSrc: "/assets/img/blog-10.jpg",
    tags: ["Gallery Post", "Web Development", "Audio Post"],
  },
  {
    id: 11,
    category: "Design",
    date: "November 23, 2024",
    title: "Getting Started with Vue.js",
    slug: "getting-started-with-vue-js",
    imgSrc: "/assets/img/blog-11.jpg",
    tags: ["Graphic", "Digital", "Businesses"],
  },
  {
    id: 12,
    category: "Creative",
    date: "December 15, 2024",
    title: "Comparing Popular Frontend Frameworks",
    slug: "comparing-popular-frontend-frameworks",
    imgSrc: "/assets/img/blog-12.jpg",
    tags: ["Marketing", "Web Development", "Graphic"],
  },
  {
    id: 13,
    category: "Business",
    date: "January 08, 2025",
    title: "Enhancing CSS with SASS",
    slug: "enhancing-css-with-sass",
    imgSrc: "/assets/img/blog-13.jpg",
    tags: ["Audio Post", "Gallery Post", "Marketing"],
  },
  {
    id: 14,
    category: "Business",
    date: "February 02, 2025",
    title: "Web Accessibility for All Users",
    slug: "web-accessibility-for-all-users",
    imgSrc: "/assets/img/blog-14.jpg",
    tags: ["Businesses", "Digital", "Gallery Post"],
  },
  {
    id: 15,
    category: "Creative",
    date: "March 17, 2025",
    title: "Optimizing Web Performance",
    slug: "optimizing-web-performance",
    imgSrc: "/assets/img/blog-15.jpg",
    tags: ["Web Development", "Graphic", "Audio Post"],
  },
];

const skillData = [
  {
    id: 1,
    img: "assets/img/reactjs.png",
    title: "React JS",
    mastery: 90,
  },
  {
    id: 1,
    img: "assets/img/angular.png",
    title: "Angular",
    mastery: 80,
  },
  {
    id: 3,
    img: "assets/img/nextjs.png",
    title: "Next JS",
    mastery: 80,
  },
  {
    id: 4,
    img: "assets/img/javascript.png",
    title: "Javascript",
    mastery: 90,
  },
  
  {
    id: 5,
    img: "assets/img/nodejs.png",
    title: "Node JS",
    mastery: 70,
  },
  {
    id: 6,
    img: "assets/img/typescript.png",
    title: "Typescript",
    mastery: 85,
  },
  {
    id: 7,
    img: "assets/img/tailwind.png",
    title: "Tailwind",
    mastery: 90,
  },
  {
    id: 8,
    img: "assets/img/sass.png",
    title: "SASS",
    mastery: 80,
  },
  {
    id: 9,
    img: "assets/img/es6.png",
    title: "ES6",
    mastery: 100,
  },
  {
    id: 10,
    img: "assets/img/ant-design.png",
    title: "Ant Design",
    mastery: 100,
  },
  {
    id: 11,
    img: "assets/img/unittesting.png",
    title: "Unit Testing",
    mastery: 80,
  },
  {
    id: 12,
    img: "assets/img/azure.png",
    title: "Azure",
    mastery: 50,
  },
];
const educationData = [
  {
    id: 1,
    timespan: "2013 - 2017",
    degree: "Bachelors (Computer Science)",
    school: "D.S.C.E.T",
  },
  {
    id: 2,
    timespan: "2012 - 2013",
    degree: "HSC",
    school: "G.M.H.S.S",
  },
  {
    id: 3,
    timespan: "2010 - 2011",
    degree: "SSLC",
    school: "G.M.H.S.S",
  },
];

const experienceData = [
  {
    id: 1,
    timespan: "2021 - Present",
    position: "App Development Team Lead",
    company: "Accenture Software Solutions",
  },
  {
    id: 2,
    timespan: "2020 - 2021",
    position: "Full Stack Developer",
    company: "Trane Technologies",
  },
  {
    id: 3,
    timespan: "2019 - 2020",
    position: "SPFX Front End Developer",
    company: "Tillid Software",
  },
  {
    id: 3,
    timespan: "2017 - 2019",
    position: "Software Engineer",
    company: "Awarious Technology Solutions",
  },
];

const pricingData = [
  {
    iconSrc: "assets/img/pricing-1.png",
    title: "Basic Plan",
    price: "$20",
    features: ["Web Development", "Mobile Development", "Advetising"],
    disabledFeatures: ["Graphic design", "Portfolio management"],
    btnText: "Start My portfolio Now",
  },
  {
    iconSrc: "assets/img/pricing-2.png",
    title: "Ultra Plan",
    price: "$30",
    features: [
      "Web Development",
      "Mobile Development",
      "Advetising",
      "Graphic design",
    ],
    disabledFeatures: ["Portfolio management"],
    tag: "best plan",
    btnText: "Start My portfolio Now",
  },
  {
    iconSrc: "assets/img/pricing-3.png",
    title: "Gold Plan",
    price: "$60",
    features: [
      "Web Development",
      "Mobile Development",
      "Advetising",
      "Graphic design",
      "Portfolio management",
    ],
    btnText: "Start My portfolio Now",
  },
];

export {
  serviceData,
  testimonialData,
  faqItems,
  portfolioData,
  blogData,
  skillData,
  educationData,
  experienceData,
  pricingData,
};
