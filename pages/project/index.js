import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Work Seeker",
    description: "Deskripsi Project 1",
    imageUrl: "/images/Work Seeker Thumbnail.png",
    slug: "workseeker",
  },
  {
    title: "Bejo Edu Apps",
    description: "Deskripsi Project 2",
    imageUrl: "/images/Bejo Thumbnail.png",
    slug: "bejo",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl flex flex-wrap min-h-screen flex-col items-start justify-center md:pl-[8rem] p-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl font-semibold mb-6">My Project</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  slug={project.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer
        link="/"
        icon={<Unicons.UilAngleDoubleLeft className="w-12 h-12" />}
      />
    </>
  );
}
