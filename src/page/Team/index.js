import React from 'react';
import Navigation from "../../component/Navigation"; // Pastikan path ini sesuai

const Team = () => {
  return (
    <div className="app-container">
      <Navigation />
      <h1>Meet Our Team</h1>
      <div className="team-section">
        {teamMembers.map(member => (
          <div className="team-member" key={member.name}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p>{member.description}</p>
          </div>
        ))}
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