import React, { useState, useEffect } from "react";
import "./Profile.css";

  const GitUser = () => {
    const url = "https://api.github.com/users";
    const [gitusers, setGitUsers] = useState([]);
    async function getGitUsers() {
      const response = await fetch(url);
      const data = await response.json();
      setGitUsers(data);
      console.log(gitusers);
    };
    useEffect(() => {
      getGitUsers();
    });
  return (
    <div className="profile-list">
      {gitusers.map(gituser=> (
        <div className="profile-div" key={gituser.id}>
          <img src={gituser.avatar_url} alt={gituser.login} className="profile-image" />
          <a href={gituser.html_url} target="blank">
            <button className="profile-button">View Profile</button>
          </a>
        </div>
      ))}
    </div>
  )
};

export default GitUser;