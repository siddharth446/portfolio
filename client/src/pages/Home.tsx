import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frameworks & Languages",
      skills: ["Flutter", "Dart", "React", "Node.js", "Python", "C++", "Java"],
    },
    {
      title: "Architecture & State",
      skills: ["Clean Architecture", "MVVM", "Riverpod 2.5", "Dependency Injection"],
    },
    {
      title: "Backend & AI",
      skills: ["Appwrite", "Firebase", "Supabase", "Grok AI", "Gemini", "REST/GraphQL"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git/GitHub", "Docker", "CI/CD", "Postman", "Figma"],
    },
  ];

  const projects = [
    {
      title: "MoviesHub – Streaming Platform",
      date: "Dec 2025",
      tech: "Flutter • Appwrite • TMDB API",
      description: "Engineered a full-stack streaming app handling 100,000+ movies/TV shows with AI-driven recommendations and offline downloads.",
      highlights: ["40% load time reduction", "Real-time sync", "500+ simulated users"],
      link: "https://github.com/siddharth446/movieshub",
    },
    {
      title: "ChatSphere AI – Conversational Agent",
      date: "2025",
      tech: "Flutter • Grok AI API • MVVM",
      description: "Intelligent chatbot powered by xAI's Grok model with multi-turn context retention and low-latency streaming.",
      highlights: ["99% uptime", "Markdown rendering", "Local history storage"],
      link: "https://github.com/siddharth446/chatsphere-ai",
    },
    {
      title: "PicShine AI – Photo Editing Tool",
      date: "2025",
      tech: "Flutter • Google Gemini • Cloudinary",
      description: "Smart photo enhancer with AI processing for upscaling, noise reduction, and smart filters.",
      highlights: ["4x resolution upscaling", "50% faster rendering", "Batch processing"],
      link: "https://github.com/siddharth446/picshine-ai",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Siddharth Khanna
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
              Full-Stack Developer | AI Integration Specialist
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Crafting production-ready applications with Flutter, AI APIs, and cloud services. 
              Passionate about building scalable, cross-platform solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={downloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Download size={20} />
              Download Resume PDF
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-lg rounded-lg"
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6 text-slate-300">
            <a
              href="mailto:khannasiddharth219@gmail.com"
              className="hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://github.com/siddharth446"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/siddharth-khanna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-slate-400 text-sm">Scroll to explore</div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Technical Skills</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Expertise across modern frameworks, architecture patterns, and cloud technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="bg-slate-700/50 border-slate-600 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 p-6"
                onMouseEnter={() => setActiveSkillCategory(category.title)}
                onMouseLeave={() => setActiveSkillCategory(null)}
              >
                <h3 className="text-blue-400 font-bold mb-4 text-sm uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        activeSkillCategory === category.title
                          ? "bg-blue-500 text-white"
                          : "bg-slate-600/50 text-slate-200 hover:bg-slate-500"
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
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Production-ready applications showcasing full-stack development and AI integration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="bg-slate-700/50 border-slate-600 hover:border-blue-500 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-400 bg-slate-600/50 px-3 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-sm text-blue-400 font-medium mb-3">{project.tech}</p>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
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
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <Card className="bg-slate-700/50 border-slate-600 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Full-Stack Developer Trainee</h3>
                <p className="text-blue-400 font-medium">Masai School (Remote)</p>
              </div>
              <span className="text-slate-400 text-sm">Jan 2025 – Dec 2025</span>
            </div>

            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Collaborated in agile sprints, conducting code reviews and implementing CI/CD pipelines for efficient deployments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Built and deployed live applications, iterating on features based on user feedback</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Participated in hackathons, developing prototypes under tight deadlines</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Complete educational background from bootcamp to high school
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-slate-700/50 border-slate-600 hover:border-blue-500 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{edu.title}</h3>
                    <p className="text-blue-400 text-sm font-medium">{edu.institution}</p>
                    <p className="text-slate-400 text-xs mt-1">{edu.date}</p>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-300 text-sm">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Achievements & Extracurriculars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-700/50 border-slate-600 p-6 text-center hover:border-blue-500 transition-all">
              <Award className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Hackathon Winner</h3>
              <p className="text-slate-300 text-sm">Participated in Masai School x10x Edition #3 (2025), contributing to award-winning app prototypes</p>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 p-6 text-center hover:border-blue-500 transition-all">
              <Github className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Open Source</h3>
              <p className="text-slate-300 text-sm">Active in tech communities, contributing to open-source projects and ML integration</p>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 p-6 text-center hover:border-blue-500 transition-all">
              <BookOpen className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Competitive Programming</h3>
              <p className="text-slate-300 text-sm">Completed challenges on LeetCode and HackerRank, mastering algorithms and data structures</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-slate-800/50 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={downloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Full Resume
            </Button>
            <a
              href="mailto:khannasiddharth219@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg transition-colors"
            >
              <Mail size={18} />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
