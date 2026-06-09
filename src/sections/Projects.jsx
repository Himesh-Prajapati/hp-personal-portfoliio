import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [

  {
    title: "Amazon Clone",
    description:
      "Developed an Amazon-inspired e-commerce application using React.js and JavaScript. Implemented user authentication, product listing, and shopping cart functionality with a responsive and user-friendly interface. Built reusable components and optimized the application for a seamless shopping experience.",
    image: "/projects/Amazon.jpg",
    tags: ["React.js",
      "JavaScript",
      "Firebase",
      "TailwindCSS"],
    link: "https://amazon-clone-rho-lime.vercel.app/",
    github: "https://github.com/Himesh-Prajapati/Amazon-Clone-html-css",
  },
  {
    title: "Employee Management System",
    description:
      "Developed a full-stack Employee Management System using React.js, Node.js, Express.js, and MongoDB. Implemented secure CRUD operations for managing employee records, departments, and organizational data through RESTful APIs. Designed a responsive admin dashboard with seamless frontend-backend integration, efficient database management, and a scalable application architecture.",
    image: "/projects/EMS.jpg",
    tags: ["React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs", "TailwindCSS"],
    link: "https://emp-manage-silk.vercel.app/",
    github: "https://github.com/Himesh-Prajapati/EMP-Manage",
  },
  {
    title: "Travel Ease",
    description:
      "Developed a full-stack car rental platform using React.js, Node.js, Express.js, and MongoDB. Implemented vehicle listing, online booking, authentication, and reservation management with REST APIs. Built a responsive UI using Tailwind CSS with seamless frontend-backend integration.",
    image: "/projects/Travel.jpg",
    tags: ["React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs", "TailwindCSS"],
    link: "https://travel-ease-delta.vercel.app/",
    github: "https://github.com/Himesh-Prajapati/Travel_Ease",
  },
  {
    title: "Music Player",
    description:
      "Built a responsive Music Player application using React, TailwindCSS, Java Spring Boot, PostgreSQL, and Cloudinary with features like song playback, playlist management, and a modern user-friendly interface.",
    image: "/projects/music.png",
    tags: ["React.js", "TailwindCSS", "Java", "Spring Boot", "PostgreSQL", "Cloudinary", "REST APIs"],
    link: "#",
    github: "#",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
