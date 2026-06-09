import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import cvcapture from "../assets/cvcapture.png";

const CVSection = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>CV</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-10"
      >
        {/* CV Preview Image */}
        <div className="w-full md:w-2/5">
          <a
            href="/CV_Fernandez_Loic_General.pdf"
            download
            className="block group"
          >
            <img
              src={cvcapture}
              alt="CV Preview"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* CV Info */}
        <div className="w-full md:w-3/5 text-left">
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            Loïc Fernandez
          </h3>
          <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
            Full-Stack Engineer et Consultant Indépendant avec un double Master en Audit & Management.
            Spécialisé dans l'architecture de systèmes distribués à haut débit et le déploiement
            de pipelines LLM en production.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Go", "TypeScript", "React", "Node.js", "AWS", "Kubernetes", "PostgreSQL", "Redis", "LLM"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-tertiary/60 text-white rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Download Button */}
          <a
            href="/CV_Fernandez_Loic_General.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary text-white font-medium rounded-xl hover:bg-opacity-80 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Télécharger le CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CVSection;