import { useGSAP } from "@gsap/react";
import { profileData } from "../constants/verticalBoxMaterial"
import { bottomToTop } from "../Animations/bottomToTop";
import { useSidebar } from "../context/Sidebar.context";

function Profile() {
  const expanded = useSidebar();
  useGSAP(() => {
    if (!expanded) return;
      bottomToTop({
        targets: "#id-profile-wrapper > *",
        y: 300,
        duration: 1,
      })
    }, [expanded]);

  return (
    <>
      <div
        id="id-profile-wrapper"
        className={`profile-wrapper flex flex-col 
        card-border card-padding card-grid overflow-hidden 
        lg:pl-2`}>
        <div className="profile-image-primary-wrapper w-full">
          <div className="profile-image-secondary-wrapper">
            <a href="" className="profile-image-link block w-full h-full no-underline rounded-full overflow-hidden">
              <img
                src={profileData.image}
                alt={profileData.label}
                className="profile-image " />
            </a>
          </div>
        </div>

        <div className="profile-name-wrapper hoverStyle">
          <h1>{profileData.name}</h1>
        </div>
        <div className="profile-discription-wrapper hoverStyle">
          <p>{profileData.description}</p>
        </div>
        <div className="info flex flex-col gap-1">
          <div className="profile-location-wrapper">
            {profileData.location.map((item, index) => (
              <div
                key={index}
                className="profile-location-item flex 
                items-center gap-2 hoverStyle">
                <item.icon />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="profile-mail-wrapper">
            {profileData.mail.map((item, index) => (
              <div key={index} className="profile-mail-item flex items-center gap-2 hoverStyle">
                <item.icon />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="profile-portfolio-wrapper">
            {profileData.links.map((item, index) => (
              <a
                key={index}
                href={item.href.startsWith("http") ? item.href : `https://${item.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-portfolio-item flex items-center gap-2 hoverStyle"
              >
                <item.icon />
                <span>{item.value}</span>
              </a>
            ))}
          </div>

          <div className="profile-linkedIn-wrapper">
            {profileData.linkedIn.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-linkedIn-item flex items-center gap-2 hoverStyle"
              >
                <item.icon />
                <span>{item.value}</span>
              </a>
            ))}
          </div>

          <div className="profile-instagram-wrapper">
            {profileData.instagram.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-instagram-item flex items-center gap-2 hoverStyle"
              >
                <item.icon />
                <span className="link-opener">{item.value}</span>
              </a>
            ))}
          </div>

          <div className="profile-organization-wrapper">
            {profileData.organizations.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-organization-item flex items-center gap-2 hoverStyle"
              >
                <item.icon />
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

