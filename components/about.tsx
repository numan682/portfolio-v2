"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Hello , I am {" "}
        <span className="font-medium">Numan</span>, I decided to and I'm here to offer my expertise as a Blockchain Developer.{" "}
        <span className="italic">I'm well-versed in a wide range of technologies, including</span> {" "}
        <span className="font-medium">
        Node.js, Eth.js, web3.js, React, Next.js, Python Django, Laravel, PHP, and Solidity        </span>
        . I am also familiar with TypeScript and Prisma. What sets me apart is my commitment to cybersecurity. I'm familiar with critical cybersecurity terms and practices, ensuring that your projects are protected from {" "}
        <span className="font-medium"> potential threats</span>.
      </p>

      <p>
      If you're looking for a Blockchain Developer who combines technical mastery with a passion for innovation, look no further. I'm here to take your projects to the next level.
      </p>
    </motion.section>
  );
}
