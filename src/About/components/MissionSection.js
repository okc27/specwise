import React from "react";
import mission_pic from '../assets/pic2.svg'; // Import the logo SVG

const MissionSection = () => {
  return (
    <section className="mission-section py-5">
      <div className="container">
        
        <div className="row align-items-center">
          <div className="col-md-6">
          <h2 className="text-center fw-bold mb-4">Our Mission</h2>
            <p>
              At Specwise, our mission is to make hardware selection easy and
              efficient for everyone. Whether you're a gamer, content creator,
              or professional, our dedicated team works hard to deliver the
              best tools and resources to help you choose the perfect hardware
              for your specific needs. We ensure that your PC meets the
              performance demands of your workload with a tailored approach that
              puts you first.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-mission">
              <img
                src={mission_pic}
                alt="Mission Illustration"
                className="img-fluid"
              />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
