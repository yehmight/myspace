// src/app/components/ProjectCard.tsx
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ProjectCard({ title, description, image, link }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all dark:bg-gray-800">
      <Image src={image} alt={title} width={600} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="mt-4 inline-block text-sm text-blue-600 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
