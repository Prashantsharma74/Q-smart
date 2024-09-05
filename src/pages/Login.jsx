import React, { useState } from "react";
import logo from "../assets/images/Q-smart-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPasswordVisible,setIsPasswordVisible] = useState(false)
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      navigate("/");
    }
    setFormData("");
  };

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <>
      <div className="bg-img">
        <section className="login-content">
          <div className={`login-box ${isFlipped ? "flipped" : ""}`}>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="logo mx-auto text-center">
                <img src={logo} />
              </div>
              <div className="mb-3">
                <label className="text-white">Email</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  autoFocus
                  required
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className=" text-white">PASSWORD</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <div className="utility">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" />
                      <span className="label-text">Stay Signed in</span>
                    </label>
                  </div>
                  <p className="semibold-text mb-2" onClick={handleToggle}>
                    <a data-toggle="flip">Forgot Password ?</a>
                  </p>
                </div>
              </div>
              <div className="mb-3 btn-container d-grid">
                <button className="btn btn-primary btn-block">
                  <i className="bi bi-box-arrow-in-right me-2 fs-5"></i>SIGN IN
                </button>
              </div>
            </form>
            <form className="forget-form">
              <h3 className="login-head">
                <i className="bi bi-person-lock me-2"></i>Forgot Password ?
              </h3>
              <div className="mb-3">
                <label className="form-label">Enter Email id</label>
                <input className="form-control" type="text" placeholder="Email" />
              </div>
              <div className="mb-3 btn-container d-grid">
                <button className="btn btn-primary btn-block">
                  <i className="bi bi-unlock me-2 fs-5"></i>RESET
                </button>
              </div>
              <div className="mb-3 mt-3 pb-5">
                <p className="semibold-text mb-5 pb-5 ">
                  <a href="#" data-toggle="flip">
                    <i className="bi bi-chevron-left me-1"></i>
                    Back to Login
                  </a>
                </p>
              </div>
              <br />
              <br />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
