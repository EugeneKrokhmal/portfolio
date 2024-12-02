// data/sectionsData.JS

import SCimg from '../images/sc2-min.png';
import GBimg from '../images/gb-min.png';
import Trpimg from '../images/trp2-min.png';
import GLOimg from '../images/glo-min.png';
import SCimgFront from '../images/sc-front-min.png';
import GBimgFront from '../images/gb-front2-min.png';
import TrpimgFront from '../images/trp-front-min.png';
import GLOimgFront from '../images/glo-front-min.png';
import Avatar from '../images/avatar-full.png';
import AvatarFun from '../images/avatar-fun.png';

const sectionsData = [
    {
        title: 'Hey!',
        avatar: Avatar,
        location: [{ lat: 52.22977, lng: 21.01178, popupText: 'Warsaw' }],
        avatarFun: AvatarFun,
        bg: true,
        description: `Thank you for visiting my page! I'm Eugene, a full-stack JavaScript developer. Feel free to reach out to me anytime. You can download my CV or send me a message directly. Below, you'll find some examples of my work.`,
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'ReactJS', 'Alpine JS', 'Knockout JS', 'Redux JS', 'Express JS', 'Node JS', 'SASS/LESS', 'MS ADO', 'AWS', 'Docker', 'Leadership', 'Interviewing'],
    }, {
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
        images: [SCimg, SCimgFront],
        link: 'https://www.spoiledchild.com/',
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
        images: [Trpimg, TrpimgFront],
        link: 'https://www.tripper.cc/',
        gitHub: 'https://github.com/EugeneKrokhmal'
    },
    {
        title: 'Tobacco Company (NDA)',
        date: "JAN 2023 - NOV 2024",
        location: [{ lat: 52.22977, lng: 21.01178, popupText: 'Warsaw' }],
        description: `Details under NDA.`,
        techStack: ['JavaScript', 'PHP', 'Knockout JS', 'Alpine.JS', 'HTML', 'CSS', 'Magento 2', 'MySQL', 'Docker', 'MS Azure'],
        images: [GLOimg, GLOimgFront],
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
    },
    {
        title: 'Gina Bacconi',
        location: [{ lat: 49.988358, lng: 36.232845, popupText: 'Kharkiv' }],
        role: "Front-end Developer",
        date: "Winter 2019",
        description: `Gina Bacconi is a British womenswear designer clothing brand with boutiques across multiple countries.`,
        techStack: ['HTML', 'CSS', 'Magento 2', 'MySQL', 'JavaScript', 'Knockout JS', 'PHP'],
        images: [GBimg, GBimgFront],
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
        }
    },    
];

export default sectionsData;