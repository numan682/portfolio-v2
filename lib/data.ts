import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chaiimama from "@/public/chaiimama.png";
import trzes from "@/public/trzes.png";
import bdesports24 from "@/public/bdesports24.png";
import gotripbd from "@/public/gotripbd.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Satoshi Finance",
    location: "Germany",
    description:
      "Workes as a smart contract Developer in a Crypto Org . ",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "London, UK",
    description:
      "I worked as a front-end developer for 1 years in a UK based Ecommerce Platform",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    description:
      "Worked a full-stack developer working in a IT company. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Blockchain Developer & CyberSecurity Expert",
    location: "Dhaka, Bangladesh",
    description:
      "I am Now a full time Freelancer and looking for the best opportunities where I can show-off my skills  ",
    icon: React.createElement(CgWorkAlt),
    date: "2023- present",
  },
] as const;

export const projectsData = [
  {
    title: "Chaiimama",
    description:
      "I worked as a full-stack developer on this startup project f. It's a vibrant restaurant and Cafe.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "PHP"],
    imageUrl: chaiimama,
  },
  {
    title: "BDESPORTS24",
    description:
      "One of the best Online eSports Newsportal in Bangladesh who provides latest and the most trusted esports news",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux" , "MongoDB"],
    imageUrl: bdesports24,
  },
  {
    title: "TRZ ESHOP",
    description:
      "An online eShop where gamers can purchase in-Game items. TRZ ESHOP is one of the most trusted eShop in Bangladesh",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: trzes,
  },
  {
    title: "GO TRIP BD",
    description:
      "A Travel Agnecy with rich experienced team in Bangladesh who provides best Travel Services",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: gotripbd,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Solidity",
  "Eth.js",
  "Web3.js",
  "Web3.py",
  "C++",
  "C#",
  "MySQL",
] as const;
