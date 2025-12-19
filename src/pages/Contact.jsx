import { contactData } from "../constants/verticalBoxMaterial"

function Contact() {
  return (
    <>
      <div
        className="tab-tracker-heading mb-2 md:mb-2.5
        rounded-(--borderRadius-medium) w-full bg-blur card-padding">
        <p className="">Contact</p>
      </div>
      <div className="contact-wrapper mx-auto w-[70%]">
        <ul className="contact-ul-wrapper flex flex-col gap-3">
          {contactData.map((item, index) => (
            <li key={index} className="contact-li-item flex items-center gap-3 border-b-[0.2367px]">
              <div className="text-xl">
                <item.icon />
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {item.label}
                </a>
              ) : (
                <span className="contact-text">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Contact