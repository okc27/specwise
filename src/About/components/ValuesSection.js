import React from "react";

// Import SVGs (if stored in src/assets or any folder within src)
import InnovationIcon from "../assets/values/pic1.png";
import UserCentricityIcon from "../assets/values/pic2.png";
import ReliabilityIcon from "../assets/values/pic3.png";

const ValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We continuously seek to improve and innovate to make hardware selection easy for our users.",
      icon: InnovationIcon, // Add your SVG path or import
    },
    {
      title: "User-Centricity",
      description: "Our platform is designed specifically to deliver user-friendly solutions that match your needs.",
      icon: UserCentricityIcon,
    },
    {
      title: "Reliability",
      description: "We are committed to providing accurate and trusted guidance for all hardware-related decisions.",
      icon: ReliabilityIcon,
    },
  ];

  return (
    <section className="values-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our Values</h2>
        <div className="row text-center">
          {values.map((value, index) => (
            <div key={index} className="col-md-4">
              <div className="card p-3">
                <div className="val-con">
                {/* SVG Image */}
                <img
                  src={value.icon}
                  alt={value.title}
                  className="mb-3"
                  style={{ width: "50px", height: "50px" ,margin: "0px auto"}}
                />
                {/* Title and Description */}
                <h5 className="fw-bold">{value.title}</h5>
                <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
