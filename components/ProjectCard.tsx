import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-soft"
    >
      {image && (
        <Image src={image} alt={title} width={400} height={200} className="rounded-t-lg mb-2" loading="lazy" />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}