// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="pt-4 pb-4 px-4 max-w-4xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#2A2A2A] flex flex-col gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            About Me
          </h2>
          <br />
          <span className="block w-10 h-1 bg-white rounded ml-0"></span>
          <br />
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
            I am a 21-year-old IT student specializing in web development, 
            with a passion for learning and expanding my skills throughout my academic and professional journey. 
            I have experience designing and developing websites, as well as creating games using the Godot Engine. 
            My technical toolkit includes HTML, CSS, JavaScript, and JSX, and I also explore my creativity through video editing.
            <br />
            <br />
            My work focuses on building websites that are not only functional and user-friendly but also visually engaging. 
            I strive to deliver solutions that combine intuitive design with a personal touch, 
            ensuring that each project effectively communicates its intended message and identity. Through my projects, 
            I aim to create digital experiences that are both aesthetically appealing and easy to navigate, reflecting a blend of creativity, 
            technical skill, and attention to detail.
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            What I'm Doing
          </h3>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "fas fa-pencil-ruler",
                title: "UI/UX Design",
                desc: "I create sleek, modern UI/UX designs that are bold, intuitive, and leave a lasting impression using Figma.",
              },
              {
                icon: "fas fa-code",
                title: "Web Development",
                desc: "Delivering high-quality, professional websites that are functional, user-friendly, and visually engaging.",
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Game Development",
                desc: "Designing and developing interactive games using the Godot engine, combining creativity and technical skills.",
              },
              {
                icon: "fas fa-camera",
                title: "Video Editing",
                desc: "Crafting compelling video content using Adobe Premiere, DaVinci Resolve, and CapCut with storytelling focus.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#232324] rounded-xl p-6 flex items-start gap-3 shadow"
              >
                <span className="text-white text-2xl sm:text-3xl">
                  <i className={item.icon}></i>
                </span>
                <div>
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
