import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { portfolio } from "../data";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Projet introuvable</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-tertiary text-white rounded-xl hover:bg-opacity-80 transition"
          >
            Retour au portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      {/* Hero Image Section */}
      <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        
        {/* Floating Back Button */}
        <button
          onClick={() => navigate("/#portfolio")}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-black/60 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-0 -mt-32 relative z-10">
        <motion.div variants={textVariant(0.1)} initial="hidden" animate="show">
          {/* Title */}
          <h1 className={`${styles.sectionHeadText} text-white mb-4`}>
            {project.name}
          </h1>

          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs font-medium bg-tertiary/80 text-white rounded-full border border-white/5 hover:bg-tertiary transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-10">
          {project.sections.map((section, index) => (
            <motion.div
              key={section.titre}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              initial="hidden"
              animate="show"
            >
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">{section.emoji}</span>
                {section.titre}
              </h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
                {section.contenu}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stack Technique Summary */}
        <motion.div
          variants={fadeIn("up", "spring", project.sections.length * 0.2 + 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="mt-16 mb-10"
        >
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-2xl">🧰</span>
            Stack technique
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-tertiary/60 text-white rounded-lg border border-tertiary hover:bg-tertiary transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeIn("up", "spring", project.sections.length * 0.2 + 0.4, 0.75)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 pb-20"
        >
          {project.lien && (
            <a
              href={project.lien}
              target="_blank"
              rel="noopener noreferrer"
              download={project.download || undefined}
              className="px-8 py-3 bg-tertiary text-white font-medium rounded-xl hover:bg-opacity-80 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              {project.download ? "Télécharger" : "Visiter le site"}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:bg-white/20 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code source
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;