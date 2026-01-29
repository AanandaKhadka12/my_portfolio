import joke from "./assets/joke.png";
import sql from "./assets/sql.png";
import bhrikuti from "./assets/bhrikuti.png";
import hangman from "./assets/hangman.png";

const navItems = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#project",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const ProjectList = [
  {
    imgsrc: joke,
    desc: "Developed a website where the user can share the jokes with their friends and also can follow other users and like their posts.",
    languages: ["REACT.JS", "TAILWINDCSS", "SUPABASE", "SQL"],
  },
  {
    imgsrc: hangman,
    desc: "Developed an online game that allows users to assess and enhance their vocabulary skills, incorporating elements of gamification to make the experience more engaging and enjoyable.",
    languages: ["REACT.JS", "NODE.JS", "BOOTSTRAP"],
  },
  {
    imgsrc: sql,
    desc: "Developed a web application to provide an interactive and educational tool for Learning SQL.",
    languages: ["REACT.JS", "NODE.JS", "TAILWINDCSS"],
  },
  {
    imgsrc: bhrikuti,
    desc: "Designed a website where the user can buy the authentic Nepali Handicrafts and cultural items.",
    languages: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "BOOTSTRAP", "MONGODB"],
  },
];

const Skill = [
  {
    skill: "HTML",
    pro: "90%",
  },
  {
    skill: "CSS",
    pro: "80%",
  },
  {
    skill: "BOOTSTRAP",
    pro: "90%",
  },
  {
    skill: "TAILWINDCSS",
    pro: "90%",
  },
  {
    skill: "JAVASCRIPT",
    pro: "80%",
  },
  {
    skill: "REACT.JS",
    pro: "90%",
  },
  {
    skill: "NEXT.JS",
    pro: "70%",
  },
  {
    skill: "NODE.JS",
    pro: "80%",
  },
  {
    skill: "EXPRESS.JS",
    pro: "80%",
  },
  {
    skill: "SQL",
    pro: "90%",
  },
  {
    skill: "MONGODB",
    pro: "80%",
  },
  {
    skill: "GIT",
    pro: "90%",
  },
  {
    skill: "FRAMER MOTION",
    pro: "80%",
  },
  {
    skill: "PYTHON",
    pro: "70%",
  },
  {
    skill: "DATA STRUCTURE",
    pro: "80%",
  },
];

const Expe = [
  {
    date: "2017-2020",
    title:
      "Bachelor of Computer Application, Kalinga Institue of Industrial Technology",
    location: "Odisha, India",
    desc: "Developed a strong fundamental understanding of multiple programming languages, such as C, C++, Java, and Visual Basic. Additionally, gained a deep comprehension of web development tools, including HTML, CSS, Bootstrap, and JavaScript. Moreover, achieved expertise in complex principles related to data structures, algorithms, and the craft of building databases.",
    flex: "flex-row-reverse",
    justify: "justify-start",
  },
  {
    date: "2020-2021",
    title:
      "Front-End Developer, ABS Soft Pvt Ltd.",
    location: "Butwal, Nepal",
    desc:  "Worked as a Front-End Developer, where I was responsible for creating visually appealing and user-friendly web interfaces. Collaborated closely with designers and back-end developers to implement responsive designs using HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized website performance to enhance user experience. Participated in code reviews and contributed to improving development processes within the team.",
    flex: "flex-row",
    justify: "justify-end",
  },

  {
    date: "2022-2024",
    title:
      "Computer Software and Database Development, Lambton College in Toronto",
    location: "Toronto, Canada",
    desc: "Participating in strategic planning, precise programming, and efficient website hosting. Managing the end-to-end creation and sophisticated design of a custom database management system for an e-commerce platform. Performing an in-depth examination of Full Stack essentials, covering both frontend and backend aspects. Fostering not just technical prowess but also refining effective communication abilities and mastering project management expertise.",
    flex: "flex-row-reverse",
    justify: "justify-start",
  },
];

export { ProjectList, Skill, Expe, navItems };
