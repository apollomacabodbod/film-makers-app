import { motion } from "framer-motion";
import { useState } from "react";

export default function WorksCards() {
  type HomeCards = {
    id: number;
    title: string;
    description: string;
    year: string;
    image: string;
  };

  const [data] = useState<HomeCards[]>([
    {
      id: 1,
      title: "TV Commercial",
      description: "Proin et magna blandit arcu pellentes scelerisque.",
      image: "/romantic-date.jpg",
      year: "2023",
    },
    {
      id: 2,
      title: "Indie Movie",
      description: "Proin et magna blandit arcu pellentes sceleris ameta.",
      image: "/mime-artists.jpg",
      year: "2023",
    },
    {
      id: 3,
      title: "Documentary",
      description: "Proin et magna blandit arcu pellentes sceleris ameta.",
      image: "/portrait-of-videographer.jpg",
      year: "2023",
    },
    {
      id: 4,
      title: "Company Profile",
      description: "Proin et magna blandit arcu pellentes sceleris ameta.",
      image: "/movie-clapper.jpg",
      year: "2023",
    },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875em] mt-[3.125em] mb-[5.875em] transition-all duration-1000 ease-in-out">
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="group relative bg-cover bg-center bg-no-repeat h-[20.0625em] transition-all duration-1000 ease-in-out rounded-[0.3125em]"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0, ease: "easeInOut" },
            },
          }}
        >
          {/* Gradient Overlay (Hidden by Default, Visible on Hover) */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,30,0.7)_0%,rgba(17,18,30,1)_100%)]
 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Title (Hidden by Default, Visible on Hover) */}
          <motion.p
            className="absolute  left-4 text-white text-[2.25rem] font-bold leading-[1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {item.title}
          </motion.p>


          
        </motion.div>
      ))}
    </div>
  );
}
