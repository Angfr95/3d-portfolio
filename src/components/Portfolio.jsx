import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, lien, download, slug, technologies }) => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5`}
    >
      <div className="relative w-full md:w-3/5 group cursor-pointer" onClick={() => navigate(`/project/${slug}`)}>
        <img
          src={image}
          alt="project_image"
          className="w-full h-auto object-cover md:rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 md:rounded-3xl bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-lg bg-black/50 px-6 py-3 rounded-full">
            Voir détails
          </span>
        </div>
      </div>

      <div
        className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${
          isEven ? "text-left md:text-left" : "text-left md:text-right"
        }`}
      >
        <h3
          className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight cursor-pointer hover:text-tertiary transition-colors"
          onClick={() => navigate(`/project/${slug}`)}
        >
          {name}
        </h3>

        {/* Technologies Tags */}
        {technologies && (
          <div className={`flex flex-wrap gap-1.5 mt-3 ${isEven ? "justify-start" : "md:justify-end"}`}>
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-tertiary/60 text-white rounded-full border border-white/5"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-white/10 text-secondary rounded-full">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        )}

        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>

        {/* Action Buttons */}
        <div className={`flex flex-wrap gap-3 mt-5 ${isEven ? "justify-start" : "md:justify-end"}`}>
          {lien && (
            <a
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
              download={download || undefined}
              className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-white/20 transition"
            >
              {download ? "Télécharger" : "Visiter"}
            </a>
          )}
          <button
            onClick={() => navigate(`/project/${slug}`)}
            className="px-5 py-2 bg-tertiary text-white text-sm font-medium rounded-lg hover:bg-opacity-80 transition"
          >
            Voir détails
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
