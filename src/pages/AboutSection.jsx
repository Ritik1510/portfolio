import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function AboutSection() {
  return (
    <div className="mx-3 md:mx-5">
      <ul className="flex flex-col gap-3 md:gap-5 lg:gap-8">
        <li>
          <About
            title="Full-Stack Engineer"
            subtitle="Practicing"
            description="Working on some projects"
            timeline="May `24 - now"
            link="https://github.com/ritik1510"
            icon={<BiCode />}
          />
        </li>
        <li>
          <About
            title="BCA - Bachelor of Computer Applications"
            subtitle="Indira Gandhi National Open University"
            description="Graduated"
            timeline="July `22 - june `25"
            icon={<FaGraduationCap />}
          />
        </li>
        <li>
          <About
            title="Higher Secondary Education"
            subtitle="SKD Public School, Bulandshahr"
            timeline="2020 - 2022"
            icon={<ImBooks />}
          />
        </li>
        <li>
          <About
            title="Primary & Secondary Education"
            subtitle="SKD Public School, Bulandshahr"
            timeline="2007 - 2020"
            icon={<ImBooks />}
          />
        </li>
        <li>
          <About
            timeline="Contact me at"
            title="kr.ritik1510@gmail.com"
            link="mailto:kr.ritik1510@gmail.com"
            icon={<MdEmail />}
          />
        </li>
      </ul>
    </div>
  )
}

const About = (about) => {
  // console.log(about); its an object and its working fine
  if (!about.link) {
    return <AboutCardContent content={about} />;
  }

  return (
    <a href={about.link} target="_blank" rel="noopener noreferrer">
      <AboutCardContent content={about} />
    </a>
  );
}

const AboutCardContent = ({content}) => {
  const current = content.timeline.includes("now");
  return (
    <div className="group flex items-start lg:p-4 rounded-lg transition-all ease-out text-zinc-200 text-base card-border sm:p-2 md:p-2.5">
      <div className="min-w-fit text-2xl mt-5">{content.icon}</div>
      <div className="flex flex-col pl-3 gap-1">
        <span>
          <span className="">
            {content.timeline}
            {current && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
            )}
          </span>
        </span>
        <div className="flex items-center">
          <span className="font-bold tracking-wide lg:text-xl pr-3 text-white">
            {content.title}
          </span>
          {content.link && (
            <GoLinkExternal className="text-primary-500 lg:text-xl" />
          )}
        </div>
        {content.subtitle && (
          <span className="uppercase text-xs lg:text-sm tracking-wider">
            {content.subtitle}
          </span>
        )}
        {content.description && (
          <span className="text-zinc-200 text-sm font-sans">
            {content.description}
          </span>
        )}
      </div>
    </div>
  );
};

/**
 * For better understanding of this component flow, see the Readme file.
 */