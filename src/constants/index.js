import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong interest in building user-friendly and scalable web applications. I have experience with front-end tools like React and Next.js, and back-end technologies like Node.js, MySQL, and MongoDB. As a fresher, I’m eager to apply my skills to real-world projects and contribute to creating impactful digital solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Simple Calculator",
    image: project1, 
    description:
      "A basic calculator web app that performs arithmetic operations like addition, subtraction, multiplication, and division with a clean UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rakheeb07.github.io/calculator/", 
  },
  {
    title: "Live Weather Website",
    image: project2,
    description:
      "A weather website that displays real-time weather data for any city using a public weather API. It includes temperature, humidity, and condition updates.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://rakheeb07.github.io/Live-weather/", 
  },
  {
    title: "Rock Paper Scissors Game",
    image: project3,
    description:
      "An interactive Rock Paper Scissors game where users can play against the computer. It includes score tracking and simple animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rakheeb07.github.io/rock-paper-scissors/", 
  },
  {
    title: "Fruits & Vegetables Website",
    image: project4,
    description:
      "A static website that showcases various fruits and vegetables with descriptions, benefits, and visually appealing images for each category.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rakheeb07.github.io/fruits-veggies/", 
  },
];


export const CONTACT = {
  address: "Aditya University, Kakinada, India ",
  phoneNo: "+91 7981356155 ",
  email: "rakheeb11@gmail.com",
};
