import React from "react";
import peakpx from "../assets/images/peakpx.jpg";
import Headers from "./Headers";

function JobsDetails() {
  return (
    <>
      <Headers />
      <div className="app sidebar-mini">
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1 className="">
                <i className="fa-light fa-regular fa-bell"></i>
                <span className="mr-4">&nbsp;Jobs Details</span>
              </h1>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto px-5">
              <form method="" action="" id="Onboarding">
                <div className="row main-box mb-5">
                  <div className="col-lg-11 card-head">
                    <h3 className="mt-2 py-2">Onboarding</h3>
                  </div>
                  <div className="col-lg-1 card-head pt-2"></div>
                  <div className="col-lg-12 pt-3 pb-3 bg-white">
                    <div className="row px-2 mb-2">
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Customer Name:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="Roland Smith"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Address:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="253 Jarred Creek, University"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Postcode:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="96474-6996"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Email:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="email"
                          value="Roland50@hotmail.com"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Phone Number</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="530-437-1267"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label col-lg-12" >
                          <h4>Does the property have an EPC?</h4>
                        </label>
                        <div className="form-check form-check-inline form-group">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="RadioOptions"
                            id="inlineRadio1"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            // for="inlineRadio1"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="RadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            // for="inlineRadio2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <h4>Images:</h4>
                      </div>
                      <div className="col-lg-12 mt-2 mb-2">
                        <div className="gallery-container d-flex" id="">
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2 ml-2">
                        <button type="button" className="btn btn-warning">
                          <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                        </button>
                        <button type="button" className="btn btn-success">
                          <i className="fa-thin fa-cloud-arrow-down"></i> Save
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!----row 3----> */}
                </div>
                {/* <!----main box----> */}
              </form>
              <form method="" action="" id="Onboarding">
                <div className="row main-box mb-5">
                  <div className="col-lg-12 card-head">
                    <h3 className="mt-2 py-2">Design</h3>
                  </div>
                  <div className="col-lg-12 pt-3 pb-3 bg-white">
                    <div className="row px-2 mb-2">
                      <div className="col-lg-6 mt-2">
                        <label className="form-label">
                          <h4>Year Built:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="1990"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label">
                          <h4>Number of Occupants:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="50mm Insulated with screed"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label">
                          <h4>Number of Bedrooms:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="200mm Insulation"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label">
                          <h4>
                            Do you require Q Smart to do the heat loss
                            calculations?
                          </h4>
                        </label>
                        <div className="form-check form-check-inline form-group">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Options"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            // for="inlineRadio1"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Options"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            // for="inlineRadio2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center mt-3 mb-3">
                        <h3 className="pt-1 pb-1 custom-bg">
                          {" "}
                          Building Fabric Type
                        </h3>
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Floor:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="50mm Insulation with Screed"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Attic/Roof:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="Insulation 150mm"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>External Walls:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="Block/Cavity Insulated/Brick"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Internal Walls:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="Plasterboard with skim"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-12 text-center mt-3 mb-3 ">
                        <h3 className="pt-1 pb-1 custom-bg">
                          {" "}
                          Relevant Information
                        </h3>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <h4>Images:</h4>
                      </div>
                      <div className="col-lg-12 mt-2 mb-2">
                        <div
                          className="gallery-container2 d-flex gallery-container2"
                          id=""
                        >
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <button type="button" className="btn btn-warning">
                          <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                        </button>
                        <button type="button" className="btn btn-success">
                          <i className="fa-thin fa-cloud-arrow-down"></i> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!----main box----> */}
              </form>
              <form method="" action="" id="">
                <div className="row main-box mb-5">
                  <div className="col-lg-12 card-head">
                    <h3 className="mt-2 py-2">Room</h3>
                  </div>
                  <div className="col-lg-12 pt-3 pb-3 bg-white">
                    <div className="row px-2 mb-2">
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Room Name:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="Living Room"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>How many internal walls?</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="number"
                          value="2"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>How many external walls? </h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="2"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Length:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="2m"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Width:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="2m"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Height:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="2m"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Radiator Size:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="500mm x 1600mm"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Number of windows:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="number"
                          value="2"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label className="form-label" >
                          <h4>Window Size:</h4>
                        </label>
                        <input
                          className="form-control"
                          id=""
                          type="text"
                          value="800mm x 1200mm"
                          placeholder=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <h4></h4>
                        <h5 className="text-secondary"></h5>
                      </div>
                      <div className="col-lg-12 text-center mt-3 mb-3 ">
                        <h3 className="pt-1 pb-1 custom-bg">
                          {" "}
                          Room Internal Images:
                        </h3>
                      </div>
                      <div className="col-lg-12">
                        <h4>Images:</h4>
                      </div>
                      <div className="col-lg-12">
                        <div
                          className="gallery-container3 d-flex gallery-container2"
                          id=""
                        >
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!----row 5----> */}
                    <div className="row px-2 mb-2">
                      <div className="col-lg-12 text-center mt-3 mb-3 ">
                        <h3 className="pt-1 pb-1 custom-bg">
                          {" "}
                          Room Outside Images::
                        </h3>
                      </div>
                      <div className="col-lg-12">
                        <h4>Images:</h4>
                      </div>
                      <div className="col-lg-12">
                        <div
                          className="gallery-container4 d-flex gallery-container2"
                          id=""
                        >
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <button type="button" className="btn btn-warning">
                          <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                        </button>
                        <button type="button" className="btn btn-success">
                          <i className="fa-thin fa-cloud-arrow-down"></i> Save
                        </button>
                      </div>
                    </div>
                    {/* <!----row 5----> */}
                  </div>
                </div>
                {/* <!----main box----> */}
              </form>
              <form method="" action="" id="">
                <div className="row main-box mb-5">
                  <div className="col-lg-12 card-head">
                    <h3 className="mt-2 py-2">Installation</h3>
                  </div>
                  <div className="col-lg-12 pt-3 pb-3 bg-white">
                    <div className="row px-2 mb-2">
                      <div className="col-lg-12 text-center mt-3 mb-3 ">
                        <h3 className="pt-1 pb-1 custom-bg"> Documents</h3>
                      </div>
                    </div>
                    {/* <!----row 2----> */}
                    <div className="col-lg-12">
                      <a
                        className="btn btn-secondary"
                        href="assets/doc/sample-file.pdf"
                        target="_blank"
                      >
                        <i className="fa-light fa-file-pdf"></i>
                        AC_DOC_20240325.pdf
                      </a>
                      <br />
                      <button type="button" className="btn btn-warning mt-2">
                        <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center mt-3 mb-3 ">
                      <h3 className="pt-1 pb-1 custom-bg"> Photo Upload</h3>
                    </div>
                    <div className="row px-2 mb-2">
                      <div className="col-lg-12">
                        <h4>External Heat Pump Images:</h4>
                      </div>
                      <div className="col-lg-12">
                        <div className="gallery-container5 d-flex" id="">
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!----row 5----> */}
                    <div className="row px-2 mb-2">
                      <div className="col-lg-12">
                        <h4>Internal Cylinder & Buffer Images:</h4>
                      </div>
                      <div className="col-lg-12">
                        <div className="gallery-container6 d-flex" id="">
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!----row ----> */}
                    <div className="row px-2 mb-2">
                      <div className="col-lg-12">
                        <h4>All Images:</h4>
                      </div>
                      <div className="col-lg-12">
                        <div className="gallery-container7 d-flex" id="">
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                          <a
                            className="gallery-item shine"
                            data-src="assets/images/peakpx.jpg"
                          >
                            <img className="img-fluid" src={peakpx} />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!----row ---> */}
                  </div>
                </div>
                {/* <!----main box----> */}
              </form>
              <div className="row main-box mb-5">
                <div className="col-lg-12 card-head">
                  <h3 className="mt-2 py-2 pl-2">Handover</h3>
                </div>
                <div className="col-lg-12 pt-3 pb-3 bg-white">
                  <div className="row px-2 mb-2 mt-4">
                    <div className="col-lg-6">
                      <h4>Proposal Document:</h4>
                      <a
                        className="btn btn-secondary"
                        href="assets/doc/sample-file.pdf"
                        target="_blank"
                      >
                        <i className="fa-light fa-file-pdf"></i>
                        AC_DOC_20240325.pdf
                      </a>
                      <br />
                      <button type="button" className="btn btn-warning mt-2">
                        <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <h4> Contracts Document:</h4>
                      <a
                        className="btn btn-secondary"
                        href="assets/doc/sample-file.pdf"
                        target="_blank"
                      >
                        <i className="fa-light fa-file-pdf"></i>
                        AC_DOC_20240325.pdf
                      </a>
                      <br />
                      <button type="button" className="btn btn-warning mt-2">
                        <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                      </button>
                    </div>
                  </div>
                  {/* <!----row 3----> */}
                  <div className="row px-2 mb-2 mt-4">
                    <div className="col-lg-6">
                      <h4>Handover Document:</h4>
                      <a
                        className="btn btn-secondary"
                        href="assets/doc/sample-file.pdf"
                        target="_blank"
                      >
                        <i className="fa-light fa-file-pdf"></i>
                        AC_DOC_20240325.pdf
                      </a>
                      <br />
                      <button type="button" className="btn btn-warning mt-2">
                        <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <h4> Additional Document:</h4>
                      <a
                        className="btn btn-secondary"
                        href="assets/doc/sample-file.pdf"
                        target="_blank"
                      >
                        <i className="fa-light fa-file-pdf"></i>
                        AC_DOC_20240325.pdf
                      </a>
                      <br />
                      <button type="button" className="btn btn-warning mt-2">
                        <i className="fa-sharp fa-thin fa-pencil"></i> Edit{" "}
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!----main box----> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default JobsDetails;
