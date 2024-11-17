import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
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

const Team = () => {
  const [team, setTeam] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const teamRef = ref(db, "Page/Information/Team");

    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      setTeam(data);
    });
  }, []);

  return (
    <div className="app-container">
      <SmallNavigation />
      <div className="team-container">
        <h1>{team.teamjdl}</h1>
        <p>{team.teamdes}</p>
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
};

export default Team;
