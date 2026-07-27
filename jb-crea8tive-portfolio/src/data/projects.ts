export type ProjectCategory =
  | "Branding"
  | "Social Media"
  | "Print"
  | "Logo"
  | "Packaging";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Queen Feenah Delicacies",
    category: "Branding",
    description:
      "A refined visual identity designed to communicate elegance, warmth, and quality.",
    image: "/images/projects/project-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Creative Campaign",
    category: "Social Media",
    description:
      "A bold social media campaign designed to capture attention and increase engagement.",
    image: "/images/projects/project-2.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Corporate Identity",
    category: "Logo",
    description:
      "A modern logo concept created to establish a distinctive and memorable brand presence.",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Event Campaign",
    category: "Print",
    description:
      "A visually engaging promotional campaign created for print and digital applications.",
    image: "/images/projects/project-4.jpg",
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Packaging",
    description:
      "A clean and premium packaging concept designed to stand out on the shelf.",
    image: "/images/projects/project-5.jpg",
  },
  {
    id: 6,
    title: "Social Campaign",
    category: "Social Media",
    description:
      "A cohesive series of social media graphics built around a consistent visual language.",
    image: "/images/projects/project-6.jpg",
  },
];