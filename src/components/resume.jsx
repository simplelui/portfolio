// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="py-4 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Resume
        </h2>
        <span className="block w-10 h-1 bg-white rounded ml-0"></span>
        <br />

        {/* Education Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-left pb-2">
            Education
          </h3>
          <div className="relative pl-8">
            <div className="absolute top-0 bottom-0 w-1 bg-white rounded left-0"></div>
            <div className="relative flex flex-col gap-0">
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">Rizal Technological University</h4>
                <h4 className="text-sm text-[#BDBDBD] mb-1">College</h4>
                <p className="text-[#BDBDBD] font-bold text-sm mb-1">2023 — Present</p>
                <p className="text-[#A5A5A5] text-sm">Academic Achiever for first year and second year</p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">Rizal Technological University</h4>
                <h4 className="text-sm text-[#BDBDBD] mb-1">Senior Highschool</h4>
                <p className="text-[#BDBDBD] font-bold text-sm mb-1">2021 — 2023</p>
                <p className="text-[#A5A5A5] text-sm">Graduated with honor</p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg  ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">Good Shepherd Christian School</h4>
                <h4 className="text-sm text-[#BDBDBD] mb-1">Junior Highschool</h4>
                <p className="text-[#BDBDBD] font-bold text-sm mb-1">2017 — 2021</p>
                <p className="text-[#A5A5A5] text-sm">Loyalty Award</p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">Maranatha Christian Academy</h4>
                <h4 className="text-sm text-[#BDBDBD] mb-1">Pre School and Elementary</h4>
                <p className="text-[#BDBDBD] font-bold text-sm mb-1">2007 - 2017</p>
                <p className="text-[#A5A5A5] text-sm">
                  First Honor <br />
                  - Best in English, Science, Math, and History <br />
                  - Loyalty Award 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-bold text-white mb-6 text-left pb-2">
            Experience
          </h3>
          <div className="relative pl-8">
            <div className="absolute top-0 bottom-0 w-1 bg-white rounded left-0"></div>
            <div className="relative flex flex-col gap-0">
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-white mb-1">Web Developer</h4>
                <p className="text-white font-bold text-sm mb-1">2023 - Present</p>
                <p className="text-gray-400 text-sm">
                  - Built responsive websites with React and Tailwind CSS.<br />
                  - Focused on clean code, speed, and usability.
                </p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-white mb-1">Video Editor</h4>
                <p className="text-white font-bold text-sm mb-1">2019 - Present</p>
                <p className="text-gray-400 text-sm">
                  - Edited videos using Premiere Pro, Davinci Resolve, and Capcut. <br />
                  - Added color grading, transitions, and sound design.
                </p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg  ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-white mb-1">Game Develepor</h4>
                <p className="text-white font-bold text-sm mb-1">2025 - Present</p>
                <p className="text-gray-400 text-sm">
                  - Developed interactive 2D games in Godot Engine. <br />
                  - Designed gameplay mechanics and smooth controls.
                </p>
              </div>
              <div className="relative z-10 p-6 bg-transparent rounded-lg ml-0">
                <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full left-[-36px] top-8"></div>
                <h4 className="text-lg font-bold text-white mb-1">UI/UX Designer</h4>
                <p className="text-white font-bold text-sm mb-1">2022 - Present</p>
                <p className="text-gray-400 text-sm">
                  - Created wireframes and prototypes in Figma. <br />
                  - Blended aesthetics with functionality for better user flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
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
                <div className="w-full h-2 bg-[#1B1B1B] rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-white rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.section>
  );
}