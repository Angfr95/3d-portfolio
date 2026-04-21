import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_plp7f3j";
    const TEMPLATE_ID = "template_3luvdds";
    const USER_ID = "8QjNcYqOTVF3nV5G6";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
