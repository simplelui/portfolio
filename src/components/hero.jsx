// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
  className="flex flex-col justify-center items-center text-center pt-20 pb-4 px-4 md:ml-[20rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-3xl bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-6 sm:p-8 md:p-12 flex flex-col gap-6">
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
          Welcome to my portfolio, where you can explore a comprehensive overview
          of my background and work. Here, you will find detailed information
          about my education and experience in the Resume section, a showcase of
          my technical and creative projects in the Projects tab, insights into my
          thoughts and experiences in the Blog section, and the means to get in
          touch with me in the Contact area. This portfolio is designed to
          provide a clear and organized view of my skills, accomplishments, and
          professional journey.
        </p>
      </div>
    </motion.section>
  );
}
