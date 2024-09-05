import React from "react";
import Headers from "../components/Headers";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <>
      <Headers />
      <div className="app sidebar-mini">
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1 className="">
                <i className="fa-light fa-regular fa-bell"></i>{" "}
                <span className="mr-4">&nbsp;All Jobs</span>
              </h1>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 px-5">
              <div className="tile">
                <div className="tile-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover dt-responsive">
                      <thead>
                        <tr>
                          <th>S.Num</th>
                          <th>Start Date</th>
                          <th>Company Name</th>
                          <th>Customer Name</th>
                          <th>Installer</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>June 15, 2024</td>
                          <td>Acme Corp </td>
                          <td>John Smith</td>
                          <td>Jerome Bell</td>
                          <td>
                            <div className="badge bg-success text-white">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to="/jobs-details" className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>June 17, 2024</td>
                          <td>Smith Residence </td>
                          <td>Jenny Wilson</td>
                          <td>Floyd Miles</td>
                          <td>
                            <div className="badge bg-primary text-white">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to="/jobs-details" className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>June 15, 2024</td>
                          <td>Acme Corp </td>
                          <td>John Smith</td>
                          <td>Jerome Bell</td>
                          <td>
                            <div className="badge bg-success text-white">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to={"/jobs-details"} className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>June 22, 2024</td>
                          <td>Smith Residence </td>
                          <td>Jenny Wilson</td>
                          <td>Floyd Miles</td>
                          <td>
                            <div className="badge bg-danger text-white">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to="/jobs-details" className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>June 15, 2024</td>
                          <td>Acme Corp </td>
                          <td>John Smith</td>
                          <td>Jerome Bell</td>
                          <td>
                            <div className="badge bg-success text-white">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to="/jobs-details" className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>June 28, 2024</td>
                          <td>Smith Residence </td>
                          <td>Jenny Wilson</td>
                          <td>Floyd Miles</td>
                          <td>
                            <div className="badge bg-danger-subtle text-dark">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="badge bg-warning text-white">
                              <Link to="/jobs-details" className="text-while">
                                <i className="fa-light fa-eye"></i> View{" "}
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Jobs;
