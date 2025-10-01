import { profileData } from "../constants/verticalBoxMaterial"

profileData
function Profile() {
  return (
    <>
      <div className="profile-wrapper bg-blur card-border card-padding card-grid">
        <div className="profile-image-wrapper">
          <img src={profileData.image} alt="profile-image" />
        </div>
        <div className="profile-name-wrapper hoverStyle">
          <h1>{profileData.label}</h1>
        </div>
        <div className="profile-discription-wrapper hoverStyle">
          <p>{profileData.description}</p>
        </div>
      </div>
    </>
  )
}

export default Profile