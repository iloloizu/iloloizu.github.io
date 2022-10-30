import port1 from '../images/Backend.png';
import port3 from '../images/Take a Hint.png';
import port4 from '../images/FirstWeb.png';
import port5 from '../images/Oishii.png'
import port6 from '../images/spacecitysneakers.png'
import port7 from '../images/eldenringwikiapp.png'

const port2 = 'https://miro.medium.com/max/1400/1*ZPhW7TFH7S42jYPtRZahmA.png';

const portfolios = [
    {
        id: 1,
        category: "Full-Stack",
        link1: 'https://github.com/iloloizu/Phase-5-Project',
        link2: 'https://www.youtube.com/watch?v=iiir9lTZ5S0',
        icon1: "YouTube",
        icon2: 'Github',
        image: port6,
        title: 'Space City Sneakers',
        paragraph: "Built with HTML, CSS, Javascript, ReactJS, Ruby on Rails, Three.js, Bootstrap, Redux. My final, capstone project built for buying, selling, and trading sneakers. Utilized full CRUD capabilities. Created my very own API. Also used the Google Map and Twitter API's. Designed custom rails methods, and implemented custom rails validations. Also created a login/logout with custom authorization in the backend.",
    },
    {
        id: 2,
        category: "Full-Stack",
        link1: 'https://github.com/hainlthit/elden-ring',
        link2: 'https://youtu.be/O6JJQNgcTp8',
        icon1: "YouTube",
        icon2: 'Github',
        image: port7,
        title: 'Elden Ring Wiki App',
        paragraph: "Built with HTML, CSS, Javascript, ReactJS, Ruby on Rails, Material UI, and Postgresql. Created a full-stack Wikipedia-like app used for a video game. Utilized full CRUD capabilities. Created my very own API. Designed custom rails methods."
    },
    {
        id: 3,
        category: 'Full-Stack',
        link1: 'https://youtu.be/_n3XKR7tg7c',
        link2: 'https://github.com/keroviv86/Phase-3-Project-Frontend',
        icon1: "Github",
        icon2: 'Youtube',
        image: port5,
        title: 'Oishii Me Up (Font-End)',
        paragraph: "A food based iteration of Tinder, called Oishii Me Up where a user can swipe left or right on a specific food category. Built with HTML, CSS, Javascript, ReactJS, and Ruby.",
    },
    {
        id: 4,
        category: 'Front-End',
        link1: 'https://youtu.be/QNP-4EJaSWw',
        link2: 'https://github.com/shaniburde/Flatiron-Phase-2-Project',
        icon1: "Github",
        icon2: 'Youtube',
        image: port2,
        title: 'achieveIt',
        paragraph: "A health and wellness based calendar that is used to motivate with daily quotes, events, and exercises. There is an added to do list for daily tasks, and reminders. Built with HTML, CSS, JSON database, Javascript, and ReactJS.",
    },
    {
        id: 5,
        category: 'Front-End',
        link1: 'https://youtu.be/da8w18wVudw',
        link2: 'https://github.com/iloloizu/phase1_project',
        icon1: "Github",
        icon2: 'Youtube',
        image: port3,
        title: 'Take A Hint',
        paragraph: "A wish list app built for functionality to add a gift via form. Built for the purpose of building a wish list for children in need. First time using a JSON database. Built with HTML, CSS, Javascript",
    },
    {
        id: 6,
        category: 'Back-End',
        link1: 'https://youtu.be/_n3XKR7tg7c',
        link2: 'https://github.com/keroviv86/phase-3-sinatra-react-project',
        icon1: "Github",
        icon2: 'YouTube',
        image: port1,
        title: 'Oishii Me Up (Back-End)',
        paragraph: "A food tinder app called Oishii Me Up where a user can swipe left or right on a specific food category. Built with HTML, CSS, Javascript, ReactJS, and Ruby. This portion of the website, is solely the backend, built with Ruby and SQLite.",
    },
    {
        id: 7,
        category:  "Pre-Flatiron",
        link1: 'https://iloloizu.github.io/My-new-website/',
        link2: 'https://github.com/iloloizu/My-new-website',
        icon1: "Github",
        icon2: 'Website',
        image: port4,
        title: 'First Portfolio Website',
        paragraph: "This is the first version of this website, built to host my portfolio. Built with HTML, CSS, and Javascript",
    }
]

export default portfolios;