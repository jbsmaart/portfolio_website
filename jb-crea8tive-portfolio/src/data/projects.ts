export type ProjectCategory =
  | "Brand Identity"
  | "Logo Design"
  | "Social Media"
  | "Print Design"
  | "Video Editing"
  | "UI/UX";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Queen Feenah Delicacies",
    category: "Brand Identity",
    description:
      "Complete visual identity including logo design, color palette and brand assets.",

    image: "/image/projects/project-5.png",

    tags: [
      "Branding",
      "Logo",
      "Identity"
    ],

    featured: true,

    year: "2026",
  },

  {
    id: 2,
    title: "Political Campaign",
    category: "Print Design",
    description:
      "Campaign posters, banners and social media creatives.",

    image: "/image/projects/YOUTH EMPOWERMENT.jpg",

    tags: [
      "Poster",
      "Campaign",
      "Print"
    ],

    featured: true,

    year: "2026",
  },

  {
    id: 3,
    title: "Corporate Social Media",
    category: "Social Media",
    description:
      "Monthly social media campaign for a growing business.",

    image: "/image/projects/Leemarhs pastry.jpg",

    tags: [
      "Instagram",
      "Facebook"
    ],

    featured: false,

    year: "2026",
  },

  {
    id: 4,
    title: "Restaurant Flyer",
    category: "Print Design",
    description:
      "Modern flyer promoting weekly offers and menu items.",

    image: "/image/projects/project-6.jpeg",

    tags: [
      "Flyer",
      "Restaurant"
    ],

    featured: false,

    year: "2026",
  }
];
