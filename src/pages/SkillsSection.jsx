import { Link } from "wouter";
import Skills from "../constants/Skills.jsx";


export default function SkillsSection() {
  return (
    <>
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
              className="skills-btn flex justify-center items-center gap-3.5 px-1"xs
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

