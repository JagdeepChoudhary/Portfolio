// import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Portfolio",
    description: "Portfolio website using React",
    content:
      "Portfolio website built using React, Tailwind CSS, Shadcn/ui,and Aceternity UI .",
    image:
      "https://res.cloudinary.com/dq9phb7ge/image/upload/v1725973261/Screenshot_2024-09-10_173932_biitll.png?height=400& width=600",
    tags: ["React", "Node.js", "Shadcn/ui", "Aceternity UI"],
    demoLink: "https://jdchoudhary.netlify.app/",
    codeLink: "https://github.com/JagdeepChoudhary/Portfolio",
  },
  {
    title: "Instagram Clone",
    description: "Instagram Clone using MERN stack",
    content:
      "Fully functional instagram clone. User can Login, signup, Create Post, Like, Comment.",
    image:
      "https://res.cloudinary.com/dq9phb7ge/image/upload/v1725977052/instagram_o5p5qe.jpg?height=400&width=600",
    tags: ["React", "Express", "Shadcn/ui", "MongoDB", "React-Redux"],
    demoLink: "https://project2-demo.com",
    codeLink: "https://github.com/JagdeepChoudhary/instagram",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            {" "}
            <div className="relative h-fit w-full">
              <img
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{project.content}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </Button>
              <Button asChild>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
