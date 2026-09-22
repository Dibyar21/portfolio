import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiVite,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FaDocker } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    title: "⚛ Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Vite", icon: SiVite, color: "text-purple-400" },
    ],
    footer: "Creating responsive and accessible user interfaces.",
  },

  {
    title: "🖥 Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "REST APIs", icon: FaNodeJs, color: "text-emerald-400" },
      { name: "JWT Auth", icon: FaNodeJs, color: "text-lime-400" },
    ],
    footer: "Building scalable APIs and server-side applications.",
  },

  {
    title: "💻 Programming",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "OOP", icon: FaJava, color: "text-orange-400" },
      { name: "DSA", icon: FaJava, color: "text-pink-400" },
    ],
    footer: "Applying strong problem-solving and DSA fundamentals.",
  },

  {
    title: "🤖 AI / ML",
    skills: [
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
      { name: "OpenCV", icon: SiOpencv, color: "text-green-400" },
      { name: "NumPy", icon: SiNumpy, color: "text-cyan-400" },
      { name: "Pandas", icon: SiPandas, color: "text-indigo-400" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-400" },
    ],
    footer: "Developing intelligent systems using deep learning and computer vision.",
  },

  {
    title: "🛠 Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    ],
    footer: "Using industry-standard tools for development and collaboration.",
  },
];

export default skillsData;