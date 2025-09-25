// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
  className="pt-4 pb-6 px-4 max-w-5xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          Contact
        </h2>
        <span className="block w-10 h-1 bg-white rounded ml-0"></span>
        <br />
        <div className="mb-8">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.697410074218!2d121.03608225!3d14.5774351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c835252875d9%3A0x8898952467d38392!2sMandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1628173499000!5m2!1sen!2sph"
            className="w-full h-64 rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
            style={{ filter: "grayscale(1) invert(1) brightness(0.8)" }}
          ></iframe>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact Form</h3>
          <form className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="p-4 rounded-lg bg-[#232324] border border-[#2A2A2A] text-white focus:border-white focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-4 rounded-lg bg-[#232324] border border-[#2A2A2A] text-white focus:border-white focus:ring-0"
            />
            <textarea
              placeholder="Your Message"
              className="md:col-span-2 p-4 rounded-lg bg-[#232324] border border-[#2A2A2A] text-white focus:border-white focus:ring-0"
              rows="4"
            ></textarea>
            <button className="md:col-span-2 bg-white hover:bg-[#2A2A2A] text-black hover:text-white hover:border-white 
             font-bold py-3 px-6 rounded-lg w-fit border border-black 
             transition-colors focus:ring-2 focus:ring-white 
             hover:outline-none"> Send </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}



