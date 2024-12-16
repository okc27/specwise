import React from "react";
import "../styles.css"; // Add custom styles here
import user from "../assets/user.svg"; // Import the logo SVG

const TeamSection = () => {
  const teamMembers = [
    {
      name: "OSAMA KHURSHEED",
      role: "TEAM LEADER\n FULL STACK DEVELOPER",
      description:
        "Leads the development of both frontend and backend, ensuring seamless integration and robust performance across the entire system.",
      src: user, // Correct assignment of the image
    },
    {
      name: "SHAHEER ADIL",
      role: "WEB SCRAPING SPECIALIST",
      description:
        "Responsible for data collection using advanced web scraping techniques, gathering accurate and relevant hardware data for our recommendations.",
      src: user,
    },
    {
      name: "SHAHEER SHAHABAZ",
      role: "FRONTEND DEVELOPER\nDOCUMENTATION",
      description:
        "Focuses on crafting intuitive user interfaces and ensuring comprehensive project documentation is maintained.",
      src: user,
    },
    {
      name: "ALMIRAH NAEEM",
      role: "FRONTEND DEVELOPER\nDOCUMENTATION",
      description:
        "Assists in building visually appealing user interfaces and contributes to maintaining well-structured documentation.",
      src: user,
    },
  ];

  return (
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
        {/* Row for Team Members */}
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
            >
              <div
                className="card team-card shadow-sm text-center"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  width: "100%",
                  maxWidth: "350px", // Card size limit for better responsiveness
                }}
              >
                {/* Profile Image */}
                
                <div className="team-img0-wrapper mx-auto">
                <div
                  className="team-img-wrapper mx-auto"

                 
                  
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={member.src} // Updated property name
                    alt={member.name}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                </div>
                {/* Member Info */}
                <div className="card-body">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p
                    className="text-dark mb-1"
                    style={{ whiteSpace: "pre-line", fontWeight: "600" }}
                  >
                    {member.role}
                  </p>
                  <p className="text-muted">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
