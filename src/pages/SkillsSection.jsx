import { Link } from "wouter";
import Skills from "../constants/Skills.jsx";
import { useGSAP } from "@gsap/react";
import { bottomToTop } from "../Animations/bottomToTop.js";


export default function SkillsSection() {
  useGSAP(() => {
    bottomToTop({
      targets: "#id-skills-section-wrapper > *"
    })
  }, []);

  return (
    <>
      <div
        id="id-skills-section-wrapper"
        className="skills-section-wrapper 
        grid gap-4 grid-cols-1
        md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
        lg:place-self-center
        ">
        <div className="frameworks-wrapper card-settings bg-blur card-border card-padding">
          <SkillCard category="Frameworks" skills={Skills.frameworks} />
        </div>
        <div className="languages-wrapper card-settings bg-blur card-border card-padding">
          <SkillCard category="Languages" skills={Skills.languages} />
        </div>
        <div className="databases-wrapper card-settings bg-blur card-border card-padding">
          <SkillCard category="Databases" skills={Skills.databases} />
        </div>
        <div className="tools-wrapper card-settings bg-blur card-border card-padding">
          <SkillCard category="tools" skills={Skills.tools} />
        </div>
      </div>
    </>
  )
}

const SkillCard = ({ category, skills }) => {
  return (
    <div className="skillCard-wrapper grid">
      <div className="skillCard-category-wrapper flex justify-between items-center">
        <span className="skillCard-category-text font-bold tracking-wider lg:text-xl">
          {category}
        </span>
      </div>
      <ul className="skills-container card-padding">
        {Object.values(skills).map((skill) => (
          <li key={skill.name} className="">
            <Link
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="skills-btn flex justify-center items-center gap-1.5 px-1" xs
            >
              <span className="skills-btn-icon">
                {skill.icon}
              </span>
              <span className="skills-btn-text">
                {skill.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

