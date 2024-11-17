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
};

// Data anggota tim
const teamMembers = [
  {
    name: "Koupun, Jery",
    position: "Software Engineer",
    description: "Jery is a skilled developer with a passion for coding.",
    image: "https://via.placeholder.com/150" // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Palangan, Fredrick",
    position: "Project Manager",
    description: "Fredrick ensures that projects are completed on time.",
    image: "Fredrik.jpg" // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Luturmas, Brandon Prince",
    position: "UX/UI Designer",
    description: "Brandon creates user-friendly designs that enhance user experience.",
    image: "Brandon(1).jpg" // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Pujianto, Andika",
    position: "Data Analyst",
    description: "Andika analyzes data to help make informed decisions.",
    image: "https://via.placeholder.com/150" // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Enrico Rori",
    position: "Marketing Specialist",
    description: "Enrico develops marketing strategies to grow the business.",
    image: "https://via.placeholder.com/150" // Ganti dengan URL gambar yang sesuai
  }
];

export default Team;