import React from "react";
import { Brandon, DK, Enrico, Fredrik, Jery } from "../../assets";
import SmallNavigation from "../../component/SmallNavigation";

const teamMembers = [
  {
    name: "Andika Pujianto",
    photo: DK,
  },
  {
    name: "Jery Koupun",
    photo: Jery,
  },
  {
    name: "Fredrik",
    photo: Fredrik,
  },
  {
    name: "Enrico Rori",
    photo: Enrico,
  },
  {
    name: "Brandon Luturmas",
    photo: Brandon,
  },
];

function Team() {
  return (
    <div className="app-container">
      <SmallNavigation />
      <div className="team-container">
        <h1>Meet Our Amazing Team</h1>
        <p>
          We are proud to present our dedicated team members who bring
          creativity, expertise, and passion to every project.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.photo}
                alt={`${member.name}'s profile`}
                className="team-photo"
              />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
