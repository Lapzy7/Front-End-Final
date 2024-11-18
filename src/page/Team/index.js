import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Brandon, DK, Enrico, Fredrik, Jery } from "../../assets";
import SmallNavigation from "../../component/SmallNavigation";

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

  const teamMembers = [
    {
      name: team.nama1,
      photo: `data:image/jpg;base64,${team.DK}`,
    },
    {
      name: team.nama2,
      photo: `data:image/jpg;base64,${team.Jery}`,
    },
    {
      name: team.nama3,
      photo: `data:image/jpg;base64,${team.Fredrick}`,
    },
    {
      name: team.nama4,
      photo: `data:image/jpg;base64,${team.Enrico}`,
    },
    {
      name: team.nama5,
      photo: `data:image/jpg;base64,${team.Brandon}`,
    },
  ];

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
