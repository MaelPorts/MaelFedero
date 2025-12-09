import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      <div
        className="container"
        style={{ paddingTop: "100px", minHeight: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-3 fw-bold">Get In Touch</h1>
            <p className="text-center text-muted mb-5">
              Have a question or want to work together? Send me a message!
            </p>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                {status.message && (
                  <div
                    className={`alert alert-${
                      status.type === "success" ? "success" : "danger"
                    } alert-dismissible fade show`}
                    role="alert"
                  >
                    {status.message}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setStatus({ type: "", message: "" })}
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="bi bi-send ms-2"></i>
                      </>
                    )}
                  </button>
                </form>

                {/* Social Connect Cards */}
                <div className="mt-5">
                  <h5 className="text-center mb-4">Or connect with me</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <a
                        href="https://github.com/MaelPorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="card border-0 shadow-sm text-center p-4 h-100"
                          style={{ transition: "transform 0.2s" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <i className="bi bi-github fs-1 text-dark mb-3"></i>
                          <h5 className="fw-semibold mb-2 text-dark">GitHub</h5>
                          <span className="text-muted">@MaelPorts</span>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        href="https://www.linkedin.com/in/mael-federo-38629429a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="card border-0 shadow-sm text-center p-4 h-100"
                          style={{ transition: "transform 0.2s" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <i className="bi bi-linkedin fs-1 text-primary mb-3"></i>
                          <h5 className="fw-semibold mb-2 text-dark">
                            LinkedIn
                          </h5>
                          <span className="text-muted">Mael Federo</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted mb-2">Or reach out directly:</p>
                  <a
                    href="mailto:federo.mael@gmail.com"
                    className="text-decoration-none"
                  >
                    <i className="bi bi-envelope me-2"></i>federo.mael@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">© 2025 Mael Federo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
