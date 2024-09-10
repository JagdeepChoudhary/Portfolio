import { Badge } from "./ui/badge";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiCloudinary,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Cloudinary", icon: <SiCloudinary /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "REST APIs", icon: <SiPostman /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="flex items-center gap-2 text-lg py-1 px-3"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
