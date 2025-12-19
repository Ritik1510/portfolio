import { GrOrganization, GrProjects } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
import { IoIosContact, IoIosLink } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import profileImage from "../Assets/profile-img.jpg"
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";
import resumeImage from "../Assets/resume-image.png";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";


export const sideBarLinksData = [
  {
    name: "projects",
    icon: GrProjects,
    label: "Projects",
    href: "/projects",
  },
  {
    name: "skills",
    icon: GiSkills,
    label: "Skills",
    href: "/skills",
  },
  {
    name: "about",
    icon: IoMdInformationCircle,
    label: "About",
    href: "/about",
  },
  {
    name: "contact",
    icon: IoIosContact,
    label: "Contact",
    href: "/contact",
  },
  {
    name: "resume",
    icon: RxResume,
    label: "Resume",
    href: "/resume",
  },
];

export const profileData = {
  image: profileImage,
  label: "Ritik Kumar",
  name: "Ritik Kumar",
  description: "Full-stack Engineer",
  location: [{ value: "India, New Delhi", icon: IoLocationOutline }],
  mail: [{ value: "kr.ritik1510@gmail.com", icon: IoMailOutline }],
  links: [{ href: "https://www.github.com/ritik1510/", value: "Github", icon: BsGithub }],
  linkedIn: [{ href: "https://www.linkedin.com/in/kr-ritik", value: "kr-ritik", icon: ImLinkedin }],
  instagram: [{ href: "https://instagram.com/_ritik__k_", value: "_ritik__k_", icon: BsInstagram }],
  organizations: [{ href: "https://www.github.com/ritik1510/", value: "Emi...", icon: GrOrganization }],
}

export const resumeData = {
  resumeImage: resumeImage,
  fileName: "Ritik_Kumar_Resume.pdf",
  type: "PDF Document",
  meta: [
    { label: "Author", value: "Ritik Kumar" },
    { label: "File Size", value: "..." },
    { label: "Created", value: "June 10, 2024" },
    { label: "Modified", value: "June 10, 2024" },
    {
      label: "Online",
      value: "https://drive.google.com/file/d/19nOcjKuQoVC7M2yYAVA21kaeSbud0B5a/view?usp=drivesdk",
      isLink: true
    }
  ]
};

export const contactData = [
  { label: "kr.ritik1510@gmail.com", href: "mailto:kr.ritik1510@gmail.com", icon: MdEmail },
  { label: "+919891355425", href: "tel+919891355425", icon: BiPhone},
  { label: "Github", href: "https://www.github.com/ritik1510/",  icon: BsGithub },
  { label: "kr-ritik", href: "https://www.linkedin.com/in/kr-ritik",  icon: ImLinkedin },
  { label: "_ritik__k_", href: "https://instagram.com/_ritik__k_",  icon: BsInstagram },
  { label: "....", href: "https://www.github.com/ritik1510/",  icon: GrOrganization }
]
// {label: "Instagram", value: "https://instagram.com/_ritik__k_", image: ""},
// {label: "Linked In", value: "https://www.linkedin.com/in/kr-ritik"},