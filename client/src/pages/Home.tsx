import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Code2, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Frameworks & Languages",
      skills: ["Flutter", "Dart", "React", "Node.js", "Python", "C++", "Java"],
      icon: "💻"
    },
    {
      title: "Architecture & State",
      skills: ["Clean Architecture", "MVVM", "Riverpod 2.5", "Dependency Injection"],
      icon: "🏗️"
    },
    {
      title: "Backend & AI",
      skills: ["Appwrite", "Firebase", "Supabase", "Grok AI", "Gemini", "REST/GraphQL"],
      icon: "🤖"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git/GitHub", "Docker", "CI/CD", "Postman", "Figma"],
      icon: "⚙️"
    },
  ];

  const projects = [
    {
      title: "MoviesHub – Streaming Platform",
      date: "Dec 2025",
      tech: "Flutter • Appwrite • TMDB API",
      description: "Engineered a full-stack streaming app handling 100,000+ movies/TV shows with AI-driven recommendations and offline downloads.",
      highlights: ["40% load time reduction", "Real-time sync", "500+ simulated users"],
      link: "https://github.com/siddharth446/mymovies",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "ChatSphere AI – Conversational Agent",
      date: "2025",
      tech: "Flutter • Grok AI API • MVVM",
      description: "Intelligent chatbot powered by xAI's Grok model with multi-turn context retention and low-latency streaming.",
      highlights: ["99% uptime", "Markdown rendering", "Local history storage"],
      link: "https://github.com/siddharth446/myai",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "PicShine AI – Photo Editing Tool",
      date: "2025",
      tech: "Flutter • Google Gemini • Cloudinary",
      description: "Smart photo enhancer with AI processing for upscaling, noise reduction, and smart filters.",
      highlights: ["4x resolution upscaling", "50% faster rendering", "Batch processing"],
      link: "https://github.com/siddharth446/remini-ai",
      color: "from-orange-600 to-red-600"
    },
  ];

  const educationData = [
    {
      title: "Full-Stack Development Bootcamp",
      institution: "Masai School (in collaboration with IIT Guwahati)",
      date: "Dec 2025",
      highlights: [
        "Intensive 10x Cohort program specializing in Flutter, full-stack development, AI integration",
        "Achieved CGPA: 6.9/10; Focused on Clean Architecture, MVVM, and real-time AI APIs",
        "Completed capstone projects simulating industry scenarios"
      ]
    },
    {
      title: "Senior Secondary (Class 12th - Science Stream)",
      institution: "National Institute of Open Schooling (NIOS)",
      date: "Apr 2025",
      highlights: [
        "Subjects: English (59%), Chemistry (86%), Painting (73%), Mathematics (64%), Physics (62%)",
        "Overall Result: Pass; Strong analytical skills in Physics and Chemistry",
        "Equivalent to U.S. High School Diploma"
      ]
    },
    {
      title: "Class 11th (Science - Mathematics)",
      institution: "Shemford Futuristic School, Baran (CBSE Affiliated)",
      date: "Mar 2023",
      highlights: [
        "Marks: Physics (97/100), Chemistry (91/100), Mathematics (90/100), English (90/100)",
        "Promoted to Class 12th with A grades in Co-Scholastic Areas",
        "Excelled in STEM subjects with strong conceptual understanding"
      ]
    },
    {
      title: "High School (Class 10th)",
      institution: "Uttar Pradesh Madhyamik Shiksha Parishad (UP Board)",
      date: "Jun 2022",
      highlights: [
        "Marks: Hindi (74% B1), English (78% B1), Science (71% B1), Drawing (83% A2)",
        "Overall: First Division (Certificate No. 1964440)",
        "Developed foundational skills in logical reasoning and creative expression"
      ]
    },
    {
      title: "Class 9th",
      institution: "2021–2022",
      date: "Completed",
      highlights: [
        "Achieved high marks in Hindi (81%), English (81%), Social Science (81%), Science (82%)",
        "Focused on continuous assessment and practical projects",
        "Fostered resilience and self-directed learning"
      ]
    }
  ];

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Siddharth_Khanna_Resume.pdf";
    link.download = "Siddharth_Khanna_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Premium Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url(/images/hero-premium.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-purple-950/60 to-slate-950/80" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm font-semibold text-blue-300 backdrop-blur-sm">
              ✨ Full-Stack Developer & AI Specialist
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Siddharth Khanna
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-cyan-300 mb-6 tracking-wide">
              Building Tomorrow's Applications Today
            </p>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Crafting production-ready applications with <span className="text-blue-400 font-semibold">Flutter</span>, <span className="text-purple-400 font-semibold">AI APIs</span>, and <span className="text-cyan-400 font-semibold">cloud services</span>. Passionate about building scalable, cross-platform solutions that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={downloadPDF}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-xl flex items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 font-semibold"
            >
              <Download size={22} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-10 py-6 text-lg rounded-xl font-semibold backdrop-blur-sm"
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-8 text-slate-300 flex-wrap">
            <a
              href="mailto:khannasiddharth219@gmail.com"
              className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://github.com/siddharth446"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors flex items-center gap-2 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/siddharth-khanna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-cyan-400 text-sm font-semibold">↓ Scroll to explore</div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Expertise across modern frameworks, architecture patterns, and cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 p-6 backdrop-blur-sm group"
                onMouseEnter={() => setActiveSkillCategory(category.title)}
                onMouseLeave={() => setActiveSkillCategory(null)}
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{category.icon}</div>
                <h3 className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-widest">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                        activeSkillCategory === category.title
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                          : "bg-slate-700/50 text-slate-200 hover:bg-slate-600/70 border border-slate-600/50"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Production-ready applications showcasing full-stack development and AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${project.color} opacity-10 hover:opacity-20 border border-slate-600/50 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-sm`}
              >
                <div className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-950/95 group-hover:from-slate-900/80 group-hover:to-slate-950/90 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full font-semibold">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-sm text-cyan-400 font-semibold mb-3 tracking-wide">{project.tech}</p>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-3">Key Achievements</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 px-3 py-1.5 rounded-full border border-blue-400/30 font-semibold"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-bold group/link"
                    >
                      View on GitHub
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4 relative z-10 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 p-10 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white">Full-Stack Developer Trainee</h3>
                <p className="text-cyan-400 font-semibold text-lg mt-2">Masai School (Remote)</p>
              </div>
              <span className="text-slate-400 text-sm font-semibold bg-slate-800/50 px-4 py-2 rounded-lg">Jan 2025 – Dec 2025</span>
            </div>

            <ul className="space-y-4 text-slate-300">
              {[
                "Collaborated in agile sprints, conducting code reviews and implementing CI/CD pipelines for efficient deployments",
                "Built and deployed live applications, iterating on features based on user feedback",
                "Participated in hackathons, developing prototypes under tight deadlines"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <Zap size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Complete educational background from bootcamp to high school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 p-8 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <BookOpen className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.title}</h3>
                    <p className="text-cyan-400 text-sm font-semibold mt-1">{edu.institution}</p>
                    <p className="text-slate-400 text-xs mt-1 font-semibold">{edu.date}</p>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-300 text-sm">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3">
                      <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-4 relative z-10 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Hackathon Winner",
                desc: "Participated in Masai School x10x Edition #3 (2025), contributing to award-winning app prototypes"
              },
              {
                icon: Code2,
                title: "Open Source Contributor",
                desc: "Active in tech communities, contributing to open-source projects and ML integration"
              },
              {
                icon: Globe,
                title: "Competitive Programmer",
                desc: "Completed challenges on LeetCode and HackerRank, mastering algorithms and data structures"
              }
            ].map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 p-8 text-center hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group backdrop-blur-sm"
                >
                  <Icon className="text-cyan-400 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{achievement.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{achievement.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-cyan-400/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work? Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadPDF}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 rounded-xl flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <Download size={22} />
                Download Resume
              </Button>
              <a
                href="mailto:khannasiddharth219@gmail.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-10 py-6 rounded-xl transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                <Mail size={22} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
