import React from "react";
import "./Projects.scss";

import PaperQuillImg from "../../assets/images/common/paperquill.png";
import FoodBlogImg from "../../assets/images/common/food-blog.png";

const PROJECTS = [
  {
    title: "PaperQuill — Full-Stack Bookstore Platform",
    desc: "Developed a full-stack e-commerce bookstore with secure JWT-based authentication, protected routes, and seamless book purchasing flow. Implemented responsive UI with dark/light mode using Tailwind CSS and ensured secure access control for authenticated users.",
    image: PaperQuillImg,
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Protected Routes",
      "E-commerce",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Demo", href: "#", icon: "↗" },
      { label: "Source Code", href: "#", icon: "⌘" },
    ],
  },
  {
    title: "Food Recipe Sharing Platform — MERN Stack",
    desc: "Built a full-stack recipe sharing platform where users can create, edit, and delete recipes, explore content from other users, and manage favorites with like/unlike functionality. Implemented JWT-based authentication, protected routes, and handled image uploads using Multer for efficient media storage.",
    image: FoodBlogImg,
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Multer",
      "Tailwind CSS",
      "CRUD",
      "Full-Stack",
    ],
    links: [
      { label: "Live Demo", href: "#", icon: "↗" },
      { label: "Source Code", href: "#", icon: "⌘" },
    ],
  },
  
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="sectionHeader">
        <p className="sectionKicker">04. PROJECTS</p>
        <h2 className="sectionTitle">PROJECTS</h2>
        <p className="sectionSub">
          A selection of build that showcase frontend motion craft and
          cloud-first architecture.
        </p>
      </div>

      <div className="projectsGrid">
        {PROJECTS.map((p) => {
            return (
          <article className="projectCard" key={p.title}>
            <div className="projectMedia">
              <img src={p.image} alt="" loading="lazy" />
              <div className="projectMediaOverlay"></div>
            </div>

            <div className="projectBody">
              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.desc}</p>

              <div className="projectTags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="projectFooter">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className="projectLink"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon">{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
            );
        })}
      </div>
    </section>
  );
}
