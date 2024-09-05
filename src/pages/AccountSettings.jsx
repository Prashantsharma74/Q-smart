import React, { useState } from "react";
import Headers from "../components/Headers";

function AccountSettings() {
  const [isPasswordVisible1, setIsPassword1Visible] = useState(false);
  const [isPasswordVisible2, setIsPassword2Visible] = useState(false);

  const handlePasswordVisibility1 = () => {
    setIsPassword1Visible(!isPasswordVisible1);
  };
  const handlePasswordVisibility2 = () => {
    setIsPassword2Visible(!isPasswordVisible2);
  };

  return (
    <>
      <Headers />
      <div className="app sidebar-mini">
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1 className="">
                <i className="fa-regular fa-gear"></i>
                <span className="mr-4">&nbsp; Account Settings</span>
              </h1>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto px-5">
              <div className="tile">
                <div className="tile-body">
                  <div className="bs-component">
                    <div className="alert alert-dismissible alert-warning">
                      <button
                        className="btn-close"
                        type="button"
                        data-bs-dismiss="alert"
                      ></button>
                      <strong>Well done!</strong> Password change successfully .
                    </div>
                  </div>
                  {/* <!-- <div className="bs-component">
                        <div className="alert alert-dismissible alert-danger">
                            <button className="btn-close" type="button" data-bs-dismiss="alert"></button><strong>Ops!</strong> facing some error .
                        </div>
                        </div> --> */}

                  <form method="post" action="account-settings.php">
                    <div className="row">
                      <div className="col-lg-12 mt-3">
                        <label className="form-label">Old Password</label>
                        <div className="input-group flex-nowrap">
                          <input
                            type="password"
                            className="form-control"
                            id="oldpassword"
                            placeholder="************"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label className="form-label">New Password</label>
                        <div className="input-group flex-nowrap">
                          <input
                            type={isPasswordVisible1 ? "text" : "password"}
                            className="form-control"
                            id="newpassword"
                            placeholder="Enter New Password"
                            autoComplete="off"
                          />
                          <span
                            className="password-toggle"
                            onClick={handlePasswordVisibility1}
                          >
                            <i
                              className="fas fa-eye"
                              id="toggleNewPassword"
                            ></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group flex-nowrap">
                          <input
                            type={isPasswordVisible2 ? "text" : "password"}
                            className="form-control"
                            id="confirmpass"
                            placeholder="Enter Confirm Password"
                            autoComplete="off"
                          />
                          <span
                            className="password-toggle"
                            onClick={handlePasswordVisibility2}
                          >
                            <i
                              className="fas fa-eye"
                              id="toggleConfirmPassword"
                            ></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-primary w-50" type="submit">
                          {" "}
                          <i className="fa-sharp fa-thin fa-shield-check icon pr-2"></i>{" "}
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AccountSettings;
