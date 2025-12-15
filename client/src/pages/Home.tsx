import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code2, Cloud, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Minimalist Tech Elegance Design
 * Deep slate blue (#1e3a5f) with cyan (#06b6d4) accents
 * Poppins for headings, Inter for body, Fira Code for technical
 */

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
}

interface Skill {
  category: string;
  items: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "End-to-End CI/CD Pipeline",
    description: "Built a production-style CI/CD pipeline automating build, test, containerization, and Kubernetes deployment with rolling updates and self-healing deployments.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Python", "GitHub"],
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Infrastructure Automation with Ansible",
    description: "Automated multi-server provisioning and configuration using Ansible playbooks and roles, eliminating environment drift and enabling one-command infrastructure setup.",
    tech: ["Ansible", "Linux", "Docker", "Jenkins", "Kubernetes"],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Cloud Deployment on AWS",
    description: "Deployed containerized Python applications on AWS EC2 with IAM roles, networking, and integrated CI/CD pipeline for scalable and reliable cloud delivery.",
    tech: ["AWS EC2", "IAM", "Docker", "Jenkins", "Python"],
    icon: <Code2 className="w-6 h-6" />,
  },
];

const skills: Skill[] = [
  {
    category: "Languages & Core",
    items: ["Python"],
  },
  {
    category: "Database & Cloud",
    items: ["AWS", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git/GitHub Actions", "Linux", "Docker", "Ansible", "Jenkins", "Kubernetes"],
  },
  {
    category: "AI & Security",
    items: ["Prompt Engineering", "AI-Assisted Coding", "Vibe Coding", "n8n"],
  },
];

const devopsPractices = [
  "CI/CD Pipelines",
  "Containerization",
  "Infrastructure as Code",
  "Kubernetes Orchestration",
  "Rolling Updates",
  "Automation Scripting",
  "Linux Server Management",
  "Git-based Workflows",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Husain Trivedi</div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-foreground hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="text-foreground hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            <a href="/Husain_Trivedi_Resume.pdf" download>
              <Button className="bg-accent hover:bg-[#0891b2] text-white">Resume</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80 z-1" />

        {/* Content */}
        <div className="container max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">DevOps & Cloud Engineer</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Husain Trivedi
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
              Final-year BCA student specializing in Cloud Computing, DevOps, and applied AI automation. Building real-world projects combining cloud infrastructure with AI-driven development productivity.
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <a href="/Husain_Trivedi_Resume.pdf" download className="inline-block">
                <Button className="bg-accent hover:bg-[#0891b2] text-white px-8 py-6 text-lg">
                  Download Resume
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1HFqVp0CU9JJKQgd5xqN8tx2fQbl7aU91/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                  View on Google Drive
                </Button>
              </a>
            </div>
            <div className="flex gap-6 pt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:husaintd522@gmail.com" className="text-foreground hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side accent element */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
              <img
                src="/images/profile.jpg"
                alt="Husain Trivedi"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white hover:bg-secondary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/skills-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.category} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-bold text-primary">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DevOps Practices */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">DevOps Practices</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {devopsPractices.map((practice) => (
                <div key={practice} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-medium text-foreground">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-accent bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-accent font-semibold">GLS University, Ahmedabad</p>
                  </div>
                  <span className="text-foreground/60 text-sm">2023 – 2026</span>
                </div>
                <p className="text-foreground/70">Specialization: Cloud Computing & DevOps</p>
              </div>
            </Card>

            <Card className="border-l-4 border-l-accent bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Cloud & DevOps Certification</h3>
                    <p className="text-accent font-semibold">Physics Wallah (PW)</p>
                  </div>
                  <span className="text-foreground/60 text-sm">June 2025 – Jan 2026</span>
                </div>
                <p className="text-foreground/70">Comprehensive training in Cloud Computing and DevOps practices</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Let's Connect</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:husaintd522@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-[#0891b2] transition-colors font-medium">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:husaintd522@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/80">© 2025 Husain Trivedi. All rights reserved.</p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
