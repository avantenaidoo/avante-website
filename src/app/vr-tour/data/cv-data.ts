export interface Hotspot {
  id: string
  position: [number, number, number]
  title: string
  icon: string
  photoUrl: string
  section: string
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'about',
    position: [0, 0, -5],
    title: 'About Me',
    icon: 'user',
    photoUrl: '/photos/lobby.jpg',
    section: 'about'
  },
  {
    id: 'skills',
    position: [3, 0, -3],
    title: 'Skills',
    icon: 'code',
    photoUrl: '/photos/office.jpg',
    section: 'skills'
  },
  {
    id: 'experience',
    position: [-3, 0, -3],
    title: 'Experience',
    icon: 'briefcase',
    photoUrl: '/photos/studio.jpg',
    section: 'experience'
  },
  {
    id: 'projects',
    position: [0, 0, 3],
    title: 'Projects',
    icon: 'folder',
    photoUrl: '/photos/projects.jpg',
    section: 'projects'
  }
]

export const CV_SECTIONS = {
  about: {
    title: "About Me",
    content: "Full-stack developer passionate about creating immersive experiences with React, Next.js, and Three.js."
  },
  skills: {
    title: "Technical Skills",
    content: ["React", "Next.js 15", "TypeScript", "Three.js", "TailwindCSS", "Node.js", "Python"]
  },
  experience: {
    title: "Experience",
    content: [
      "Senior Developer at TechCorp (2022-2025)",
      "Frontend Engineer at StartupX (2020-2022)",
      "Intern at BigTech (2019)"
    ]
  },
  projects: {
    title: "Featured Projects",
    content: [
      "VR Portfolio (This website!)",
      "E-commerce Platform",
      "Real-time Chat App"
    ]
  }
}