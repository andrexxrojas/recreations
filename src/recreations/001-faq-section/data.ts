export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Case Studies",
    content:
      "Explore how we've helped businesses solve complex challenges through thoughtful strategy, innovative design, and modern technology. Each case study highlights measurable results and the process behind every successful project.",
  },
  {
    id: 2,
    title: "Clients",
    content:
      "We've partnered with startups, growing businesses, and established organizations across various industries. Every collaboration is built on trust, transparency, and a shared commitment to delivering exceptional outcomes.",
  },
  {
    id: 3,
    title: "What We Do",
    content:
      "From branding and user experience design to full-stack web development, we create digital products that are both visually compelling and highly functional. Our focus is on building solutions that make a lasting impact.",
  },
  {
    id: 4,
    title: "Our Team",
    content:
      "Our multidisciplinary team brings together designers, developers, strategists, and creative thinkers who are passionate about turning ideas into meaningful digital experiences. Collaboration is at the heart of everything we do.",
  },
  {
    id: 5,
    title: "Community",
    content:
      "We believe in giving back by sharing knowledge, supporting open-source projects, mentoring aspiring developers, and participating in local and global tech communities that inspire innovation and continuous learning.",
  },
];

export default accordionData;
