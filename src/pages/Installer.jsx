import React, { useState } from "react";
import Headers from "../components/Headers";
import DataTable from "react-data-table-component";

function Installer() {

  const [searchAble,setSearchAble] = useState(true)



  const customStyles = {
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
        },
        "&:last-of-type": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
        },

      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
        },
        "&:last-of-type": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
        },
      },
    },
  };

  const columns = [
    {
      name: "Sr.Num",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email Id",
      selector: (row) => row.email_id,
      sortable: true,
    },
    {
      name: "All Project",
      selector: (row) => row.all_project,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row , index) => (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={`flexSwitchCheckChecked-${index}`}
          />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Tech",
      email_id: "johntech@gmail.com",
      all_project: 3,
      status: "1",
    },
    {
      id: 2,
      name: "Ghostbusters",
      email_id: "jrobat@gmail.com",
      all_project: 1,
      status: "1",
    },
    {
      id: 3,
      name: "Maikel",
      email_id: "jmaikel@gmail.com",
      all_project: 4,
      status: "2",
    },
    {
      id: 4,
      name: "Kelvin rob",
      email_id: "kelvin@gmail.com",
      all_project: 3,
      status: "1",
    },
  ];

  return (
    <>
      <Headers />
      <div className="app sidebar-mini">
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1 className="">
                <i className="fa-light fa-screwdriver-wrench"></i>{" "}
                <span className="mr-4">&nbsp;Installer</span>
              </h1>
              <p></p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 px-5">
              <div className="tile">
                <div className="tile-body">
                  <div className="table-responsive">
                    <DataTable
                      columns={columns}
                      data={data}
                      customStyles={customStyles}
                      pagination
                      dense
                    />
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

export default Installer;
