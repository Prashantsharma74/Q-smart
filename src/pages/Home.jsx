import React from "react";
import Headers from "../components/Headers";

function Home() {
  return (
    <>
      <Headers />
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1>
                <i className="fa-light fa-gauge-high "></i> Dashboard
              </h1>
              <p></p>
            </div>
            <ul className="app-breadcrumb breadcrumb"></ul>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <div className="widget-small danger coloured-icon">
                    {/* <!-- <i className="icon fa-sharp fa-light fa-users fs-1"></i> --> */}

                    <i className="icon  fs-1 fa-light fa-screwdriver-wrench"></i>
                    <i className="fa-light fa-sign-posts-wrench"></i>
                    <div className="info">
                      <h4>Total Installer </h4>
                      <p>
                        <b>500</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4">
                  <div className="widget-small primary coloured-icon">
                    <i className="icon fa-sharp fa-light fa-users fs-1"></i>
                    <div className="info">
                      <h4>Total Customer</h4>
                      <p>
                        <b>500</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4">
                  <div className="widget-small warning coloured-icon">
                    <i className="icon fs-1 fa-light fa-chart-mixed"></i>
                    <div className="info">
                      <h4>Total Jobs</h4>
                      <p>
                        <b>10</b>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="col-md-4 col-lg-4">
            <div className="widget-small info coloured-icon">
              <i className="icon fs-1 fa-light fa-user-large-slash"></i>

              <div className="info">
                <h4>Unpaid Users</h4>
                <p><b>25</b></p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="widget-small info coloured-icon">
              <i className="icon fs-1 fa-light fa-file-video"></i>

              <div className="info">
                <h4>Videos upload</h4>
                <p><b>25</b></p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="widget-small info coloured-icon">
              <i className="icon fs-1 fa-regular fa-films"></i>

              <div className="info">
                <h4>series uploaded</h4>
                <p><b>25</b></p>
              </div>
            </div>
          </div> --> */}
              </div>
            </div>

            <div className="col-md-4 col-lg-4"></div>
          </div>
        </main>
    </>
  );
}

export default Home;
