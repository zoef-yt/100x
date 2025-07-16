import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const projects = [
  { title: "Project One", description: "A cool project." },
  { title: "Project Two", description: "Another awesome project." },
  { title: "Project Three", description: "More coming soon." },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">Your Name</h1>
        <nav className="flex gap-4">
          <a
            className="hover:text-blue-400 transition-colors"
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            className="hover:text-blue-400 transition-colors"
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-5" />
          </a>
          <a
            className="hover:text-blue-400 transition-colors"
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-5" />
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl font-bold animate-in fade-in slide-in-from-top-6 duration-700">
          Welcome, I&apos;m Your Name
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Building futuristic web experiences. Explore my weekly updated projects below.
        </p>
        <Button asChild variant="secondary" className="mt-8">
          <a href="#projects">Explore Projects</a>
        </Button>
      </main>

      <section id="projects" className="py-16 px-4 md:px-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="backdrop-blur bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a placeholder for project details.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="bg-black/30 backdrop-blur py-10 text-center mt-auto">
        <p className="mb-4">Reach out for collaborations and ideas.</p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline" className="backdrop-blur border-white/20">
            <a href="mailto:contact@example.com">Email Me</a>
          </Button>
          <Button asChild variant="outline" className="backdrop-blur border-white/20">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="backdrop-blur border-white/20">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="backdrop-blur border-white/20">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
}
