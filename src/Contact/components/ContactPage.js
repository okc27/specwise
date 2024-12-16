import React from "react";
import hero2 from "../assets/pic2.jpg"; // Import the image

const ContactPage = () => {
  return (
    <section className="container py-5 text-center">
        <div className="row align-items-center p-0">
          {/* Left Side: Contact Form */}
        <div className="text-bg">
          <div className="col-md-8 px-5">
            <h2 className="fw-bold mb-4">
              Contact <span className="text-primary">US</span>
            </h2>
            <p className="text-muted">
              We’d love to hear from you! Please fill out the form below to get in touch.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  className="form-control border-1 border-light rounded-pill p-2"
                  placeholder="Name *"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control border-1 border-light rounded-pill p-2"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  id="message"
                  className="form-control border-1 border-light rounded p-3"
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 rounded-pill"
              >
                SEND MESSAGE
              </button>
            </form>
            <div className="mt-4">
              <small className="text-muted">
                <i className="bi bi-envelope"></i> EMAIL:{" "}
                <a href="mailto:21b-159-cs@students.uit.edu" className="text-decoration-none">
                  21b-159-cs@students.uit.edu
                </a>
              </small>
            </div>
          </div>
          </div>
          {/* Right Side: Image */}
          <div className="img-bg">
          <div className="img-con1" id="img-con">
            <div className="image-container p-4" id="img-show">
              <img
                src={hero2} // Replace with the appropriate image path
                alt="Contact Illustration"
                className="img-fluid rounded"
              />
            </div>

            </div>
          </div>
      </div>
    </section>
  );
};

export default ContactPage;
