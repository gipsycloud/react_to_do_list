import "./Profile.css"; // Assuming you have a CSS file for styling
import { profileDatas } from "./profile_data";
import React from 'react';
function ProfileList() {
  return (
    <div className="profile-list">
      { profileDatas.map((profileData) => {
        return <Profile key={profileData.id} {...profileData} />;
      })};
    </div>
  )
}

function Profile(props) {
  const { name, age, job } = props;
  console.log(props);
  return (
    <div className="profile-div">
      <p></p>
      <h2>Name: {name} </h2>
      <h2>Age: { age }</h2>
      <h2>Job: { job? job : "109/110" }</h2>
    </div>
  );
}
export default ProfileList;