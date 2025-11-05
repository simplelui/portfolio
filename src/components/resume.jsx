// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); // 1.2s fake loading
    return () => clearTimeout(timer);
  }, []);

  // Skeleton shimmer style
  const skeletonClass =
    "animate-pulse bg-[#2A2A2A] rounded-lg";

  if (isLoading) {
    return (
      <section
        id="resume"
        className="mt-24 md:mt-0 pt-4 pb-4 px-4 max-w-4xl mx-auto md:ml-[20rem]"
      >
        <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10">
          <div className={`${skeletonClass} h-10 w-40 mb-6`}></div>
          <div className={`${skeletonClass} h-2 w-10 mb-10`}></div>

          {[...Array(4)].map((_, i) => (
            <div key={i} className="mb-8">
              <div className={`${skeletonClass} h-5 w-3/4 mb-3`}></div>
              <div className={`${skeletonClass} h-4 w-1/2 mb-2`}></div>
              <div className={`${skeletonClass} h-4 w-full mb-1`}></div>
              <div className={`${skeletonClass} h-4 w-5/6`}></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Actual Resume content (same as before)
  return (
    <motion.section
      id="resume"
      className="mt-24 md:mt-0 pt-4 pb-4 px-4 max-w-4xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-left">Resume</h2>
        <span className="block w-10 h-1 bg-white rounded ml-0"></span>
        <br />

        {/* Education Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-left pb-2">
            Education
          </h3>
          <div className="relative pl-8">
            <div className="absolute top-0 bottom-0 w-1 bg-[#E5E5E5] rounded left-0"></div>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  school: "Rizal Technological University",
                  level: "College",
                  year: "2023 — Present",
                  desc: "Academic Achiever for first year and second year",
                },
                {
                  school: "Rizal Technological University",
                  level: "Senior Highschool",
                  year: "2021 — 2023",
                  desc: "Graduated with honor",
                },
                {
                  school: "Good Shepherd Christian School",
                  level: "Junior Highschool",
                  year: "2017 — 2021",
                  desc: "Loyalty Award",
                },
                {
                  school: "Maranatha Christian Academy",
                  level: "Pre School and Elementary",
                  year: "2007 - 2017",
                  desc: `First Honor
- Best in English, Science, Math, and History
- Loyalty Award`,
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="relative p-6 bg-transparent rounded-lg ml-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                  <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">{edu.school}</h4>
                  <h4 className="text-sm text-[#BDBDBD] mb-1">{edu.level}</h4>
                  <p className="text-[#BDBDBD] font-bold text-sm mb-1">{edu.year}</p>
                  <p className="text-[#A5A5A5] text-sm whitespace-pre-line">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-bold text-white mb-6 text-left pb-2">
            Experience
          </h3>
          <div className="relative pl-8">
            <div className="absolute top-0 bottom-0 w-1 bg-[#E5E5E5] rounded left-0"></div>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  role: "Web Developer",
                  year: "2023 - Present",
                  desc: `- Built responsive websites with React and Tailwind CSS.
- Focused on clean code, speed, and usability.`,
                },
                {
                  role: "Video Editor",
                  year: "2019 - Present",
                  desc: `- Edited videos using Premiere Pro, Davinci Resolve, and Capcut.
- Added color grading, transitions, and sound design.`,
                },
                {
                  role: "Game Developer",
                  year: "2025 - Present",
                  desc: `- Developed interactive 2D games in Godot Engine.
- Designed gameplay mechanics and smooth controls.`,
                },
                {
                  role: "UI/UX Designer",
                  year: "2022 - Present",
                  desc: `- Created wireframes and prototypes in Figma.
- Blended aesthetics with functionality for better user flow.`,
                },
              ].map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative p-6 bg-transparent rounded-lg ml-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                  <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                  <p className="text-white font-bold text-sm mb-1">{exp.year}</p>
                  <p className="text-gray-400 text-sm whitespace-pre-line">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
          <div className="bg-[#232324] rounded-2xl p-8 shadow-lg border border-[#2A2A2A] flex flex-col gap-6">
            {[
              { name: "JavaScript", value: 70 },
              { name: "React", value: 60 },
              { name: "Node.js", value: 50 },
              { name: "CSS", value: 80 },
              { name: "HTML", value: 80 },
              { name: "Video Editing", value: 75 },
              { name: "Godot/Unity", value: 55 },
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white font-bold">{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-[#1B1B1B] rounded-full">
                  <motion.div
                    className="h-2 bg-white rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}
