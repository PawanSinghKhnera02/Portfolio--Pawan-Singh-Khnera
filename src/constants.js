// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's

import chalkboxLogo from "./assets/company_logo/chalkbox_logo.png";

// Education Section Logo's
import icfaiLogo from "./assets/education_logo/icfai_logo.png";
import kuLogo from "./assets/education_logo/ku_logo.png";
import bssvLogo from "./assets/education_logo/bssv_logo.png";
import svmLogo from "./assets/education_logo/svm_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import pkhealthcareLogo from "./assets/work_logo/pk_healthcare.png";
import appleStoreLogo from "./assets/work_logo/apple_store.png";
import currencyConverterLogo from "./assets/work_logo/currency_converter.png";
import todoAppLogo from "./assets/work_logo/todo_app.png";
import shoppingAppLogo from "./assets/work_logo/shopping_app.png";
import stuManagementLogo from "./assets/work_logo/stu_management.png";
import calculatorLogo from "./assets/work_logo/calculator.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      // { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      // { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: chalkboxLogo,
    role: "Software Developer Intern",
    company: "Chalkbox Eduventures Pvt Ltd.",
    date: "Jan 2025 - June 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: icfaiLogo,
    school: "The ICFAI University, Dehradun.",
    date: "Aug 2023 - July 2025",
    grade: "9.82 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from ICFAI University, Dehradun. During my time at ICFAI, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at ICFAI University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "MCA - Gold Medalist",
  },
  {
    id: 1,
    img: kuLogo,
    school: "DSB Campus, Kumaon University Nainital.",
    date: "Sept 2014 - Aug 2017",
    grade: "58%",
    desc: "I completed my Bachelor's degree in Science with a focus on Physics, Chemistry, and Mathematics (B.Sc. PCM) from DSB Campus, Nainital. During my academic journey, I developed a strong foundation in analytical thinking and scientific problem-solving. I explored core subjects such as Classical Mechanics, Organic Chemistry, and Calculus, which helped sharpen my logical reasoning and quantitative skills. This experience also sparked my interest in the application of science in everyday life, and laid the groundwork for my transition into the world of technology.",
    degree: "Bachelor of Science - BSC (PCM)",
  },
  {
    id: 2,
    img: bssvLogo,
    school: "Bhartiya Shaheed Sainik Vidhyalaya, Nainital.",
    date: "Apr 2012 - June 20114",
    grade: "69%",
    desc: "I completed my class 12 education from BSSV Naintal, under the UK board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "(XII) - PCM",
  },
  {
    id: 3,
    img: svmLogo,
    school: "SVM Nainital",
    date: "Apr 2011 - June 2012",
    grade: "81.5%",
    desc: "I completed my class 10 education from SVM Nainital, under the UK board, where I studied Science with Computer.",
    degree: "(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Pk Healthcare Centre",
    description:
      "A professional and user-friendly healthcare management system built using React and Tailwind CSS. It features separate login functionality for doctors and patients, detailed doctor profiles, an appointment booking system, a dynamic NGO section, and a media-rich camp gallery. The homepage is designed with modern components like a carousel, skill cards, and informative banners to ensure a seamless user experience.",
    image: pkhealthcareLogo,
    tags: ["React JS", "HTML", "CSS", "Tailwindcss", "JavaScript"],
    github: "https://github.com/PawanSinghKhnera02/Pk-Healthcare-Management-ui",
    webapp: "https://pk-healthcare-management-web-ui.netlify.app/",
  },
  {
    id: 1,
    title: "Apple Store App",
    description:
      "A sleek and responsive e-commerce web application inspired by the Apple Store, built using React and Tailwind CSS. It showcases a dynamic product catalog with smooth UI interactions, product detail pages, and a visually engaging layout. Ideal for demonstrating frontend design and component-based architecture in a shopping environment.",
    image: appleStoreLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind"],
    github:
      "https://github.com/PawanSinghKhnera02/Apple-store-app-react/tree/master/apple-products-store",
    webapp: "https://unique-store-app-pk02.netlify.app/#",
  },

  {
    id: 2,
    title: "Currency Converter",
    description:
      "A responsive React-based web application that allows users to convert between international currencies using real-time exchange rates. With a clean UI, dropdown-based currency selection, and instant conversion logic, its a handy tool for frequent travelers, traders, or anyone dealing with global currencies.",
    image: currencyConverterLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/PawanSinghKhnera02/Currency-Converter",
    webapp: "https://currency-converter-app-pk.netlify.app/",
  },
  {
    id: 3,
    title: "To-Do App",
    description:
      "A simple and efficient task management application built using React JS. Users can add, delete, and mark tasks as complete. The app offers a clean and responsive UI, making it easy to organize daily tasks across all devices.",
    image: todoAppLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/PawanSinghKhnera02/React-learning-2.0/tree/master/Todo_Project",
    webapp: "https://to-doapp-pk.netlify.app/",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "A simple and responsive e-commerce front-end built using React.js. It allows users to add multiple products to the cart, calculates the total amount dynamically, and supports removing items from the cart. The cart state is persisted using browser localStorage, so added items remain in the cart even after a page refresh.",
    image: shoppingAppLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/PawanSinghKhnera02/E-commerce-App",
    webapp: "https://pk-shop-app.netlify.app/",
  },
  {
    id: 5,
    title: "Student Records Management System",
    description:
      "A console-based project developed in C++ that provides complete CRUD functionality for student records. Users can register new students, view all records, search by roll number, modify or delete records, and even view deleted records. Designed using basic file handling to maintain persistent data across runs.",
    image: stuManagementLogo,
    tags: ["C++", "OOP", "File Handling", "Console App", "CRUD Operations"],
    github: "https://github.com/PawanSinghKhnera02/student-management-system",
    webapp: "",
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "A simple and elegant web-based calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division with a responsive UI for both desktop and mobile devices.",
    image: calculatorLogo,
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Web App"],
    github: "https://github.com/PawanSinghKhnera02/Calculator-js",
    webapp: "https://pawansinghkhnera02.github.io/Calculator-js/",
  },
];
