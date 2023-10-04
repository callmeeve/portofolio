import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const projectData = {
    workseeker: {
      title: "Work Seeker",
      description:
        "Work Seeker adalah aplikasi terdepan yang dirancang khusus untuk para freelancer yang mencari peluang pekerjaan yang sesuai dengan keterampilan dan minat mereka. Dengan fitur-fitur inovatif dan pendekatan yang berfokus pada kebutuhan freelancer, Work Seeker menjadi teman terpercaya dalam mencapai sukses profesional. ",
      imageUrl: "/images/Work Seeker Mockup.png",
      projectUrl: "https://github.com/callmeeve/WorkSeeker",
    },
    bejo: {
      title: "Bejo Edu Apps",
      description:
        "Aplikasi Bejo adalah sebuah platform online learning yang revolusioner, dirancang untuk memberikan pengalaman belajar yang unik dan efektif bagi pengguna dari berbagai usia dan latar belakang. Bejo mewakili solusi modern untuk memungkinkan individu mengakses pendidikan berkualitas tanpa batasan geografis atau waktu.",
      imageUrl: "/images/Bejo Mockup.png",
      projectUrl: "https://github.com/callmeeve/Bejo",
    },
  };

  if (typeof slug !== "undefined") {
    const project = projectData[slug] || {};
    return (
      <>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Konfigurasi awal animasi
          animate={{ opacity: 1, x: 0 }} // Konfigurasi animasi selama
          transition={{ duration: 1 }} // Durasi animasi
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={project.imageUrl}
                alt={project.title}
                width={1920}
                height={1080}
              />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Mobile Apps
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                <Link href={project.projectUrl}>
                  <span className="mt-4 bg-gray-900 text-white font-medium py-2 px-4 rounded inline-block">
                    Lihat Dokumentasi
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer
          link="/project"
          icon={<Unicons.UilAngleDoubleLeft className="w-12 h-12" />}
        />
      </>
    );
  }
};

export default ProjectDetailPage;
