export const navbarLinks = [
  { title: "Projects", loc: "/work" },
  { title: "Posts", loc: "/posts" },
];

import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { BiLogoDocker, BiLogoGoLang } from "react-icons/bi";
import { PiFileCpp } from "react-icons/pi";
import {
  SiExpress,
  SiCloudflare,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
export const languages = [
  { title: "Javascript", icon: <IoLogoJavascript /> },
  { title: "Python", icon: <IoLogoPython /> },
  { title: "C++", icon: <PiFileCpp /> },
  { title: "GoLang", icon: <BiLogoGoLang /> },
];
export const backend = [
  { title: "Express", icon: <SiExpress /> },
  { title: "Cloudflare Worker", icon: <SiCloudflare /> },
  { title: "Postgresql", icon: <SiPostgresql /> },
  { title: "MongoDB", icon: <SiMongodb /> },
];
export const devops = [{ title: "DevOps", icon: <BiLogoDocker /> }];
export const frontend = [
  { title: "React", icon: <SiReact /> },
  { title: "TailwindCSS", icon: <SiTailwindcss /> },
];
