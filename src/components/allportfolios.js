import port1 from '../images/Backend.png';
import port3 from '../images/Take a Hint.png';
import port4 from '../images/FirstWeb.png';
import port5 from '../images/Oishii.png'
import port6 from '../images/spacecitysneakers.png'
import port7 from '../images/eldenringwikiapp.png'
import port8 from '../images/Stylo.png'
import port9 from '../images/ServePro.png'
import port10 from '../images/port10.png'
import fortiswealth from '../images/fortiswealth.png'

const port2 = 'https://miro.medium.com/max/1400/1*ZPhW7TFH7S42jYPtRZahmA.png';

const portfolios = [
    {
        id: 0,
        category: "Full-Stack",
        image: fortiswealth,
        title: 'Fortis Wealth',
        paragraph: "Built with HTML, CSS, Typescript, React, Node.js. A personal finance platform with monthly budgeting, transaction imports and categorization rules, net-worth tracking, savings projections, and an LLM-powered budget assistant.",
        link1: 'https://github.com/iloloizu/budgeting-app',
        icon1: 'Github',
        year: '2026',
        madeAt: 'Personal Project'
    },
    {
        id: 1,
        category: "Front-End",
        image: port10,
        title: 'SkillTrack',
        paragraph: "Built with HTML, CSS, Typescript, ReactJS. A Learning Management System (LMS) website that allows users to track their skills and progress.",
        link1: 'https://iloloizu.github.io/HU-interview/',
        icon1: 'Website',
        year: '2025',
        madeAt: 'Interview Project for MBA Program'
    },
    {
        id: 2,
        category: "Full-Stack",
        image: port8,
        title: 'Stylo',
        paragraph: "Built with HTML, CSS, Typescript, React Native, and Supabase. A mobile platform connecting stylists, suit tailors, and style consultants with clients, enabling portfolio showcases, bookings, and community engagement. Designed scalable infrastructure and built a cross-platform app with role-based access.",
        link1: 'https://youtube.com/shorts/9dKA-wHPzV4',
        icon1: "YouTube",
        year: '2025',
        madeAt: 'Consulting Project'
    },
    {
        id: 3,
        category: "Full-Stack",
        image: port9,
        title: 'ServePro Accounting Software',
        paragraph: "Built with HTML, CSS, Typescript, Angular, Node.js, GraphQL, Intuit Developer API. A web-based accounting software for small businesses to manage their finances, invoices, and expenses.",
        year: '2025',
        madeAt: 'Consulting Project'
    },
    {
        id: 4,
        category: "Full-Stack",
        link1: 'https://github.com/iloloizu/Phase-5-Project',
        link2: 'https://www.youtube.com/watch?v=iiir9lTZ5S0',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port6,
        title: 'Space City Sneakers',
        paragraph: "Built with HTML, CSS, Javascript, ReactJS, Ruby on Rails, Three.js, Bootstrap, Redux. My final, capstone project built for buying, selling, and trading sneakers. Utilized full CRUD capabilities. Created my very own API. Also used the Google Map and Twitter API's. Designed custom rails methods, and implemented custom rails validations. Also created a login/logout with custom authorization in the backend.",
        year: '2022',
        madeAt: 'Flatiron School'
    },
    {
        id: 5,
        category: "Full-Stack",
        link1: 'https://github.com/hainlthit/elden-ring',
        link2: 'https://youtu.be/O6JJQNgcTp8',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port7,
        title: 'Elden Ring Wiki App',
        paragraph: "Built with HTML, CSS, Javascript, ReactJS, Ruby on Rails, Material UI, and Postgresql. Created a full-stack Wikipedia-like app used for a video game. Utilized full CRUD capabilities. Created my very own API. Designed custom rails methods.",
        year: '2022',
        madeAt: 'Flatiron School'
    },
    {
        id: 6,
        category: 'Full-Stack',
        link1: 'https://github.com/keroviv86/Phase-3-Project-Frontend',
        link2: 'https://youtu.be/_n3XKR7tg7c',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port5,
        title: 'Oishii Me Up (Front-End)',
        paragraph: "A food based iteration of Tinder, called Oishii Me Up where a user can swipe left or right on a specific food category. Built with HTML, CSS, Javascript, ReactJS, and Ruby.",
        year: '2022',
        madeAt: 'Flatiron School'
    },
    {
        id: 7,
        category: 'Front-End',
        link1: 'https://github.com/shaniburde/Flatiron-Phase-2-Project',
        link2: 'https://youtu.be/QNP-4EJaSWw',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port2,
        title: 'achieveIt',
        paragraph: "A health and wellness based calendar that is used to motivate with daily quotes, events, and exercises. There is an added to do list for daily tasks, and reminders. Built with HTML, CSS, JSON database, Javascript, and ReactJS.",
        year: '2022',
        madeAt: 'Flatiron School'
    },
    {
        id: 8,
        category: 'Front-End',
        link1: 'https://github.com/iloloizu/phase1_project',
        link2: 'https://youtu.be/da8w18wVudw',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port3,
        title: 'Take A Hint',
        paragraph: "A wish list app built for functionality to add a gift via form. Built for the purpose of building a wish list for children in need. First time using a JSON database. Built with HTML, CSS, Javascript",
        year: '2021',
        madeAt: 'Flatiron School'
    },
    {
        id: 9,
        category: 'Back-End',
        link1: 'https://github.com/keroviv86/phase-3-sinatra-react-project',
        link2: 'https://youtu.be/_n3XKR7tg7c',
        icon1: 'Github',
        icon2: 'YouTube',
        image: port1,
        title: 'Oishii Me Up (Back-End)',
        paragraph: "A food tinder app called Oishii Me Up where a user can swipe left or right on a specific food category. Built with HTML, CSS, Javascript, ReactJS, and Ruby. This portion of the website, is solely the backend, built with Ruby and SQLite.",
        year: '2022',
        madeAt: 'Flatiron School'
    },
    {
        id: 10,
        category:  "Pre-Flatiron",
        link1: 'https://github.com/iloloizu/My-new-website',
        link2: 'https://iloloizu.github.io/My-new-website/',
        icon1: 'Github',
        icon2: 'Website',
        image: port4,
        title: 'First Portfolio Website',
        paragraph: "This is the first version of this website, built to host my portfolio. Built with HTML, CSS, and Javascript",
        year: '2020',
        madeAt: 'Self-Taught'
    }
]

export default portfolios;