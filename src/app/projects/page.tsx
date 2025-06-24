// src/app/projects/page.tsx
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    title: "Admin dashboard",
    description: "A personal portfolio site built with Next.js, Tailwind, and Flowbite.",
    image: "/admin.PNG",
    link: "https://admin-dashboard-ten-tawny-30.vercel.app",
  },
  {
    title: "E-commerce App",
    description: "Full-featured shopping platform using React, Node.js, and Firebase.",
    image: "/book.PNG",
    link: "https://book-store-inventory-frontend.onrender.com/",
  },
  {
    title: "MY potfolio",
    description: "Location-based artisan marketplace with real-time booking and chat.",
    image: "/pot.PNG",
    link: "/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#1a1a1a] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 dark:text-white">My Projects</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
