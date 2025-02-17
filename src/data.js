import SportWetten from './images/redesign/sportwetten.webp';
import SpoiledChild from './images/redesign/spoiledChild.webp';
import GinaBacconi from './images/redesign/ginaBacconi.webp';
import Nda from './images/redesign/nda.webp';
import Tripper from './images/redesign/tripper.webp';
import CasinoProsCa from './images/redesign/casinoProsCa.webp';
import LolaRose from './images/redesign/lolaRose.webp';
import IlMakiage from './images/redesign/ilMakiage.webp';

const data = {
    projects: [
        {
            title: 'SpoiledChild™',
            date: "APR 2021 - NOV 2022",
            location: [{ lat: 32.109333, lng: 34.855499, popupText: 'Tel Aviv' }],
            role: "Front-end Developer",
            description: `SpoiledChild uses an AI algorithm it calls SpoiledBrain, which crunched over 250,000 data points gathered from focus groups and sister-brand Il Makiage to formulate products and provide recommendations to customers.`,
            star: {
                situation: `SpoiledChild™, a high-profile skincare brand, required a robust and engaging eCommerce platform to support its global launch. The project faced tight deadlines and demanded a seamless user experience to reflect the brand’s innovative image.`,
                task: `Build and optimize the website frontend on the Magento 2 platform, delivering a responsive, visually appealing, and highly interactive customer journey.`,
                action: [
                    `Developed key frontend components using Magento 2, HTML, CSS, JavaScript, and PHP.`,
                    `Integrated GSAP animations to enhance the customer journey.`,
                    `Collaborated with cross-functional teams in NY and Kyiv to align the platform with brand standards.`,
                    `Optimized performance and ensured cross-browser compatibility.`
                ],
                result: `The SpoiledChild™ website launched successfully, contributing to the brand achieving unicorn status with a $1B valuation.`,
            },
            techStack: ['HTML', 'CSS', 'Magento 2', 'MySQL', 'JavaScript', 'Knockout JS', 'PHP', 'GSAP'],
            images: [SpoiledChild],
            link: 'https://www.spoiledchild.com/',
            company: "Oddity"
        },
        {
            title: 'IL MAKIAGE',
            date: "APR 2021 - NOV 2022",
            location: [{ lat: 32.109333, lng: 34.855499, popupText: 'Tel Aviv' }],
            role: "Front-end Developer",
            description: `Launched in the US in 2018 by brother-sister duo entrepreneurs, IL MAKIAGE is a New York based, tech-driven prestige beauty brand that is shifting millions of customers to shopping for beauty online.`,
            star: {
                situation: `Launched in the US in 2018 by brother-sister duo entrepreneurs, IL MAKIAGE is a New York based, tech-driven prestige beauty brand that is shifting millions of customers to shopping for beauty online.`,
                task: `Build and optimize the website frontend on the Magento 1 platform, delivering a responsive, visually appealing, and highly interactive customer journey.`,
                action: [
                    `Developed key frontend components using Magento 1, HTML, CSS, JavaScript, and PHP.`,
                    `Collaborated with cross-functional teams in NY and Kyiv to align the platform with brand standards.`,
                    `Optimized performance and ensured cross-browser compatibility.`
                ],
                result: `Contributing to the brand achieving better customere experience and revenue`,
            },
            techStack: ['HTML', 'CSS', 'Magento 1', 'MySQL', 'JavaScript', 'PHP'],
            images: [IlMakiage],
            link: 'https://www.ilmakiage.com/',
            company: "Oddity"
        },        
        {
            title: 'Tripper',
            location: [{ lat: 52.22977, lng: 21.01178, popupText: 'Warsaw' }],
            role: "Full-Stack Developer (Founder)",
            date: "JULY 2024",
            star: {
                situation: "Tripper is a travel app to fairly split expenses, coordinate tasks, and manage settlements. Built as a personal startup to freely implement my architectural vision.",
                task: "Develop a user-friendly app from scratch, including design, backend, hosting, CI/CD, and frontend, while ensuring it works well for real-world use.",
                action: [
                    "Created a scalable backend using Node.JS and TypeScript for expense tracking and task coordination.",
                    "Built a responsive frontend with React for a smooth user experience.",
                    "Added email notifications for reminders and settlements.",
                    "Tested the app during trips with friends and improved it based on feedback.",
                    "Introduced the app to friends who now use it for their own trips.",
                    "Set up CI/CD pipelines and hosted the app for smooth updates.",
                    "Currently refactoring the codebase, fixing bugs, and developing an iOS version for the App Store."
                ],
                result: "Tripper is used in real trips, making group travel simpler and fairer. Friends have adopted it, showing its practicality and impact.",
            },
            techStack: [
                "React",
                "TypeScript",
                "Node.JS",
                "Express.JS",
                "MongoDB",
                "Tailwind CSS",
                "iOS Development"
            ],
            description: `Tripper is a full-stack web application designed to streamline the management and settlement of group trip expenses. Built with cutting-edge technologies, including TypeScript, React, Node.JS, and MongoDB.`,
            images: [Tripper],
            link: 'https://www.tripper.cc/',
            gitHub: 'https://github.com/EugeneKrokhmal',
            company: "Start-up"
        },
        {
            title: 'Tobacco Company (NDA)',
            date: "JAN 2023 - NOV 2024",
            location: [{ lat: 52.22977, lng: 21.01178, popupText: 'Warsaw' }],
            description: `Details under NDA.`,
            techStack: ['JavaScript', 'PHP', 'Knockout JS', 'Alpine.JS', 'HTML', 'CSS', 'Magento 2', 'MySQL', 'Docker', 'MS Azure'],
            // images: [Nda],
            role: "Lead Front-end Developer",
            star: {
                situation: "A leading tobacco company required ongoing support and feature development for its Central EU business unit's Magento 2 platform.",
                task: "Improve performance while delivering new features and maintaining the platform.",
                action: [
                    "Led daily collaboration with the client to gather requirements and ensure alignment.",
                    "Managed a team of 5 developers, focusing on support and feature delivery.",
                    "Implemented CVW (Core Web Vitals) optimization strategies to enhance platform performance.",
                    "Developed new features using Knockout.JS, Alpine.JS, PHP, and JavaScript.",
                    "Conducted technical interviews to grow the team."
                ],
                result: "The platform was successfully maintained and enhanced, meeting client expectations. Performance optimizations and efficient team management significantly improved overall output.",
            },
            company: "CloudFlight"
        },
        {
            title: 'Gina Bacconi',
            location: [{ lat: 49.988358, lng: 36.232845, popupText: 'Kharkiv' }],
            role: "Front-end Developer",
            date: "Winter 2019",
            description: `Gina Bacconi is a British womenswear designer clothing brand with boutiques across multiple countries.`,
            techStack: ['HTML', 'CSS', 'Magento 2', 'MySQL', 'JavaScript', 'Knockout JS', 'PHP'],
            images: [GinaBacconi],
            link: 'https://ginabacconi.com/',
            star: {
                situation: "Gina Bacconi, a British womenswear brand, needed a new Magento 2 store launched quickly during the challenging COVID period.",
                task: "Develop and launch a fully functional Magento 2 eCommerce site within tight deadlines.",
                action: [
                    "Built the frontend using HTML, CSS, JavaScript, PHP, and Knockout.JS.",
                    "Collaborated with the backend team",
                    "Optimized the store for performance and responsiveness.",
                    "Worked under strict time constraints to meet the launch timeline."
                ],
                result: "The Magento 2 store was successfully launched on time, providing the brand with a robust eCommerce presence during a critical period.",
            },
            company: "Ronis Business Tools"
        },
        {
            title: 'Lola Rose',
            location: [{ lat: 49.988358, lng: 36.232845, popupText: 'Kharkiv' }],
            role: "Front-end Developer",
            date: "Winter 2019",
            description: `Lola Rose is a British womenswear designer clothing brand with boutiques across multiple countries.`,
            techStack: ['HTML', 'CSS', 'Magento 2', 'MySQL', 'JavaScript', 'Knockout JS', 'PHP'],
            images: [LolaRose],
            link: 'https://www.lolaroseglobal.com/',
            star: {
                situation: "Lola Rose, a British womenswear brand, needed a new Magento 2 store launched quickly during the challenging COVID period.",
                task: "Develop and launch a fully functional Magento 2 eCommerce site within tight deadlines.",
                action: [
                    "Built the frontend using HTML, CSS, JavaScript, PHP, and Knockout.JS.",
                    "Collaborated with the backend team",
                    "Optimized the store for performance and responsiveness.",
                    "Worked under strict time constraints to meet the launch timeline."
                ],
                result: "The Magento 2 store was successfully launched on time, providing the brand with a robust eCommerce presence during a critical period.",
            },
            company: "Ronis Business Tools"
        },
        {
            title: 'Sportwetten.de',
            location: [{ lat: 49.988358, lng: 36.232845, popupText: 'Kharkiv' }],
            role: "Front-end Developer",
            date: "2020",
            description: `Sportwetten.de is a sports betting platform offering a wide range of online betting options.`,
            techStack: ['WordPress', 'React', 'SASS', 'PHP'],
            images: [SportWetten],
            link: 'https://www.sportwetten.de/',
            star: {
                situation: "Sportwetten.de, a sports betting platform, required significant frontend updates and code refactoring to improve performance and scalability.",
                task: "Support and refactor the platform’s frontend, ensuring smooth functionality and better user experience.",
                action: [
                    "Refactored existing codebase using React and SASS.",
                    "Enhanced UI components to align with modern design principles.",
                    "Collaborated closely with backend developers for seamless integration.",
                    "Improved page load times and responsiveness across devices."
                ],
                result: "The platform's performance and user experience improved significantly, ensuring a more engaging and reliable service for its users."
            },
            company: "Hyperion Tech"
        },
        {
            title: 'Casinopro.ca',
            location: [{ lat: 49.988358, lng: 36.232845, popupText: 'Kharkiv' }],
            role: "Front-end Developer",
            date: "2020",
            description: `Casinopro.ca is a sports betting platform offering a wide range of online betting options.`,
            techStack: ['WordPress', 'React', 'SASS', 'PHP'],
            images: [CasinoProsCa],
            link: 'https://casinopro.ca/',
            star: {
                situation: "Casinopro.ca, a sports betting platform, required significant frontend updates and code refactoring to improve performance and scalability.",
                task: "Support and refactor the platform’s frontend, ensuring smooth functionality and better user experience.",
                action: [
                    "Refactored existing codebase using React and SASS.",
                    "Enhanced UI components to align with modern design principles.",
                    "Collaborated closely with backend developers for seamless integration.",
                    "Improved page load times and responsiveness across devices."
                ],
                result: "The platform's performance and user experience improved significantly, ensuring a more engaging and reliable service for its users."
            },
            company: "Hyperion Tech"
        }
    ],
    experiences: [
        {
            title: "Front-End Team Lead / Full-Stack Developer",
            company: "CloudFlight",
            date: "01/2023 – 01/2025",
            location: "Poland, Warsaw",
            website: 'https://www.cloudflight.io/en/',
            responsibilities: [
                "Lead a team of 5+ developers on a large-scale EU area projects",
                "Managed tech interviews and employee evaluations, performance reviews",
                "Developed performance optimization strategies directly for the client"
            ]
        },
        {
            title: "Front-End Developer",
            company: "Oddity",
            date: "04/2021 – 11/2022",
            location: "Israel, Tel Aviv",
            website: "https://oddity.com/",
            responsibilities: [
                "Platform development and launch: Launched SpoiledChild contributing to $1B valuation", 
                "Performance: Optimized web performance, increasing page load speed by 30% improving sales"
            ]
        },
        {
            title: "Front-End Developer",
            company: "Hyperion Tech",
            date: "04/2020 – 04/2021",
            location: "Ukraine, Kharkiv",
            website: "https://hyperion-tech.co/"
        },
        {
            title: "Front-End Developer",
            company: "Ronis Business Tools",
            date: "05/2019 – 04/2020",
            location: "Ukraine, Kharkiv"
        },
        {
            title: "Front-End Developer",
            company: "Skynet IT",
            date: "04/2018 – 03/2019",
            location: "Ukraine, Kharkiv"
        }
    ],
    education: [
        {
            institution: "Karazin National University",
            degree: "Bachelor's in Journalism",
            date: "2011 – 2014",
            location: "Ukraine, Kharkiv"
        },
        {
            institution: "Ukrainian Engineering Pedagogics Academy",
            degree: "Master's in Computer technologies in education",
            date: "2018 – 2020",
            location: "Ukraine, Kharkiv"
        }
    ],
    languages: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "Proficient" },
        { name: "Polish", level: "Intermediate" },
        { name: "Hebrew", level: "Beginner" },
        { name: "Russian", level: "Proficient" }
    ],
    quizData: [
        {
            question: "A popular JavaScript library for building user interfaces",
            options: ["REACT", "PHP", "NEXT", "HTML"],
            correctAnswerIndex: 0,
        },
        {
            question: "A JavaScript runtime built on Chrome's V8 engine",
            options: ["NODE", "PYTHON", "RUBY", "JAVA"],
            correctAnswerIndex: 0,
        },
        {
            question: "A package manager for JavaScript",
            options: ["PIP", "GEM", "COMPOSER", "NPM"],
            correctAnswerIndex: 3,
        },
        {
            question: "A superset of JavaScript that adds static types",
            options: ["FLOW", "TYPESCRIPT", "COFFEESCRIPT", "DART"],
            correctAnswerIndex: 1,
        },
        {
            question: "Programming language of the web",
            options: ["C#", "GO", "JAVASCRIPT", "SWIFT"],
            correctAnswerIndex: 2,
        }
    ]
};

export default data;