export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: string;
  company: string | null;
  isProfessional: boolean;
  githubUrl: string | null;
  npmUrl: string | null;
  url: string | null;
  coverImage: string;
  technologies: Technology[];
}

export interface Technology {
  _id: string;
  slug: string;
  label: string;
}
