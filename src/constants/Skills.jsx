import {
  SiCplusplus,
  SiExpo,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FcNext } from "react-icons/fc";
import { FaDocker, FaNode } from "react-icons/fa";

const languages = {
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    href: "https://youtu.be/zQnBQ4tB3ZA",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    href: "https://youtu.be/DHjqpvDnNGE",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    href: "https://youtu.be/MNeX4EGtR5Y",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    href: "https://youtu.be/SPwyp2NG-bE",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    href: "https://youtu.be/ok-plXXHlWw",
  },
};

const frameworks = {
  Vite: {
    name: "Vite",
    icon: <SiVite />,
    href: "https://vitejs.dev/",
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    href: "https://youtu.be/mr15Xzb1Ook",
  },
  React: {
    name: "React",
    icon: <SiReact />,
    href: "https://youtu.be/Tn6-PIqc4UM",
  }, 
  Nextjs: {
    name: "Next.js",
    icon: <FcNext />,
    href: "https://nextjs.org/",
  },
  NodeJS: {
    name: "Node.js",
    icon: <FaNode />,
    href: "https://nodejs.org/en",
  },
  ReactNative: {
    name: "React Native",
    icon: <SiReact />,
    href: "https://reactnative.dev/",
  },
  Expo: {
    name: "Expo",
    icon: <SiExpo />,
    href: "https://expo.dev/",
  }
};

const databases = {
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    href: "https://www.postgresql.org/",
  },
  SQL: {
    name: "SQL", 
    icon: <SiMysql/>, 
    href: "#"
  },
  MongoDB: {
    name: "MongoDB",
    icon: <SiMongodb />,
    href: "https://www.mongodb.com/",
  },
};

const tools = {
  Shadcn: {
    name: "shadcn/ui",
    icon: <SiShadcnui />,
    href: "https://ui.shadcn.com/",
  },
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
    href: "https://www.postman.com/",
  },
  Mongoose: {
    name: "Mongoose",
    icon: <SiMongoose />,
    href: "https://mongoosejs.com/",
  },
  Docker: {
    name: "Docker",
    icon: <FaDocker />,
    href: "https://www.docker.com/",
  },
  GithubActions: {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    href: "https://docs.github.com/en/actions",
  },
  ExpoGo: {
    name: "Expo Go",
    icon: <SiExpo />,
    href: "https://expo.dev/client",
  }
};

const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    href: "https://docs.github.com/en/rest",
  },
};

const Skills = {
  languages,
  frameworks,
  tools,
  api,
  databases,
};

export default Skills;