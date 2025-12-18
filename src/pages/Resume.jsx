import { resumeData } from "../constants/verticalBoxMaterial.jsx";

function Resume() {
  const { resumeImage, fileName, type, meta } = resumeData;

  return (
    <>
      <div className="tab-tracker-heading mb-2 md:mb-2.5 rounded-(--borderRadius-medium) w-full bg-blur card-padding">
        <p>Resume</p>
      </div>

      <div className="resume-image-wrapper grid grid-cols-1 gap-1 h-full w-full">
        <div className="resume-image-holder mx-auto">
          {resumeImage ? (
            <img src={resumeImage} alt="Resume Preview" className="block max-h-[70vh] max-w-[100%]"/>
          ) : (
            <div className="resume-placeholder">No Preview</div>
          )}
        </div>

        <div className="resume-title flex flex-col">
          <p>{fileName}</p>
          <p className="text-gray-400 text-md">{type}</p>
        </div>

        <div className="resume-modification-info">
          <ul className="resume-modification-info-wrapper flex flex-col gap-1 text-sm">
            {meta.map((item, index) => (
              <li key={index} className="flex flex-row justify-between border-b-[0.2367px]">
                <span className="meta-label">{item.label}</span>{" "}
                {item.isLink ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View / Download
                  </a>
                ) : (
                  <span className="meta-value">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
