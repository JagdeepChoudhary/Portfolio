import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left ml-2">
            Built by Jagdeep Choudhary.
          </p>
        </div>
        <div className="flex gap-4 mr-2">
          <a
            href="https://github.com/JagdeepChoudhary"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/JagdeepChoudhary"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/jd_choudhary_"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
