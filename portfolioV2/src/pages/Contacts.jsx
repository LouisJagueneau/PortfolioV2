import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPhoneAlt,  } from "react-icons/fa";
import { FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header";


function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const contacts = [
    { icon: <FaPhoneAlt />, name: t("contact.phone_name", "Phone"), value: "+33 6 01 01 17 23" },
    { icon: <FaLocationDot />, name: t("contact.address_name", "Location"), value: "Nouvelle Aquitaine, France" },
    { icon: <IoIosMail />, name: t("contact.email_name", "Email"), value: "louis.jagueneau@viacesi.fr" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success(t("form.success_message", "Message sent successfully!"));
        e.target.reset();
      } else {
        toast.error(t("form.error_message", "An error occurred. Please try again."));
      }
    } catch (error) {
      toast.error(t("form.error_message", "An error occurred. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: custom } })
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: custom } })
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: custom } })
  };

  return (
    <div className="bg-bg dark:bg-bg-dark min-h-screen">
      <Header/>
      {/* Hero Section */}
      <section className="relative bg-bg-secondary dark:bg-bg-secondary-dark overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/2 rounded-full blur-3xl"></div>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0
              }}
              animate={{
                y: [null, '-20px', '20px', '-20px'],
                x: [null, '10px', '-10px', '10px'],
                scale: [0, 1, 0.7, 1],
                opacity: [0, 0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[80px] text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleAnimation}
            custom={0}
          >
            <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] mb-2 block">
              Get in touch
            </span>
            <h1 className="font-rem font-bold text-[45px] md:text-[55px] text-text dark:text-text-dark mb-4">
              Contact Me
            </h1>
            <div className="w-20 h-0.5 bg-primary rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[80px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <motion.section 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-12"
              variants={slideInLeft}
              custom={0.1}
            >
              <div className="flex items-center gap-3 mb-4">
                <RiArrowRightSLine className="text-primary text-2xl" />
                <h2 className="font-rem text-[1.8rem] font-medium text-text dark:text-text-dark">
                  Let's Connect
                </h2>
              </div>
              <p className="font-poppins text-text-muted dark:text-text-muted-dark leading-relaxed">
                Ready to collaborate or have questions about my work? I'm always open to discussing new opportunities and interesting projects.
              </p>
            </motion.div>

            <div className="space-y-8">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={contact.name}
                  className="group flex items-center gap-6 p-4 bg-bg-light dark:bg-bg-light-dark rounded-lg border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                  variants={slideInLeft}
                  custom={0.2 + index * 0.1}
                >
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-primary/10 text-primary p-4 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-xl">{contact.icon}</span>
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="font-poppins">
                    <span className="text-text-muted dark:text-text-muted-dark text-sm uppercase tracking-wider block mb-1">
                      {contact.name}
                    </span>
                    <p className="text-text dark:text-text-dark text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links or Additional Info */}
            <motion.div 
              className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20"
              variants={slideInLeft}
              custom={0.6}
            >
              <h3 className="font-rem text-lg font-medium text-text dark:text-text-dark mb-3">
                Quick Response
              </h3>
              <p className="font-poppins text-sm text-text-muted dark:text-text-muted-dark leading-relaxed">
                I typically respond to messages within 24 hours during business days. For urgent inquiries, feel free to call directly.
              </p>
            </motion.div>
          </motion.section>

          {/* Contact Form */}
          <motion.section 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-bg-light dark:bg-bg-light-dark p-8 lg:p-10 rounded-lg border border-black/10 dark:border-white/10 shadow-lg"
              variants={slideInRight}
              custom={0.1}
            >
              <div className="flex items-center gap-3 mb-8">
                <RiArrowRightSLine className="text-primary text-2xl" />
                <h2 className="font-rem text-[1.8rem] font-medium text-text dark:text-text-dark">
                  {t("contact.title", "Send Message")}
                </h2>
              </div>
              
              <div
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div
                  variants={slideInRight}
                  custom={0.2}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder={t("form.name_placeholder", "Your Name")}
                    required
                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  custom={0.3}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={t("form.email_placeholder", "Your Email")}
                    required
                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  custom={0.4}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder={t("form.subject_placeholder", "Subject")}
                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  custom={0.5}
                >
                  <textarea
                    name="message"
                    placeholder={t("form.message_placeholder", "Your Message")}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  custom={0.6}
                >
                  <motion.button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="group w-full bg-primary hover:bg-primary-hover text-white font-poppins font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    <span>
                      {loading ? t("form.sending", "Sending...") : t("form.submit_button", "Send Message")}
                    </span>
                    {!loading && <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-200" />}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000}
        theme="colored"
        className="font-poppins"
      />
    </div>
  );
}

export default Contact;