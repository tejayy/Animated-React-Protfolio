import {motion} from "framer-motion";
import CustomTitles from "./CustomTitles";
import {experience, education} from "./data/config";

const SectionItem = ({title, subtitle, year, details, icon}) => {
  <motion.articel
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: false}}
    className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-primary before:to-secondary before:z-[-10] after:absolute after:indent-0 after:bg-gradient-to-br after:from-primary after:to-secondary after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10">
    <section className="bg-black z-20 text-white rounded-xl">
      <section className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center ">
        <img src={icon} alt="icon" width={64} height={64} />
        <div>
          <h3 className="ml-10">{title}</h3>
          <p className="text-sm">{subtitle}</p>
          <p className="text-sm italic">{year}</p>
          {details && <p className="mt-2">{details}</p>}
        </div>
      </section>
    </section>
  </motion.articel>;
};
export default function EducationAndExperience() {
  return (
    <section>
      <CustomTitles classname="Education & Experience" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-32">
        {education.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}
        {experience.map((exp) => (
          <SectionItem
            key={exp.id}
            title={exp.title}
            subtitle={exp.company}
            year={exp.year}
            details={exp.description}
            icon={exp.icon}
          />
        ))}
      </section>
    </section>
  );
}
