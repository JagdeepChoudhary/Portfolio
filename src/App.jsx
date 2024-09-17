import { ThemeProvider } from "next-themes";
import Menubar from "./components/menubar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ShootingStars } from "./components/ui/shooting-stars";
import { Spotlight } from "./components/ui/Spotlight";

export default function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Menubar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
