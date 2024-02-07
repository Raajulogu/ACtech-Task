import React, { useState } from "react";
import "./Profile.css";
import GridViewIcon from "@mui/icons-material/GridView";
import DomainIcon from "@mui/icons-material/Domain";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FormControlLabel, Switch } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Profile = () => {
  const [connection, setConnection] = useState(true);
  return (
    <div className="profile-container">
      <div className="left-box">
        <span className="profile-nav-content">
          <GridViewIcon />
          <p>Dashboard</p>
        </span>
        <span className="profile-nav-content nav-connection">
          <PowerOutlinedIcon />
          <p>Connections</p>
        </span>
        <span className="profile-nav-content">
          <StorageOutlinedIcon />
          <p>Configuration</p>
        </span>
        <span className="profile-nav-content">
          <CableOutlinedIcon />
          <p>Pipelines</p>
        </span>
        <span className="profile-nav-content">
          <AccessTimeOutlinedIcon />
          <p>Schedules</p>
        </span>
        <span className="profile-nav-content">
          <HandymanOutlinedIcon />
          <p>Audit</p>
        </span>
        <span className="profile-nav-content">
          <ImportantDevicesOutlinedIcon />
          <p>Monitor Data</p>
        </span>
        <span className="profile-nav-content">
          <DomainIcon /> <p>Tenant</p>
        </span>
        <span className="profile-nav-content">
          <SettingsOutlinedIcon />
          <p>Settings</p>
        </span>
      </div>
      <div className="right-box">
        <div className="profile-header">
          <span className="header-options">
            <button className="profile-btn" onClick={() => setConnection(true)}
            style={{textDecoration:`${connection ? "underline":""}`,fontWeight:`${connection ? "bold":""}`}}
            >
              Connections
            </button>
            <button className="profile-btn" onClick={() => setConnection(false)}
            style={{textDecoration:`${!connection ? "underline":""}`,fontWeight:`${!connection ? "bold":""}`}}
            >
              Connections Detail
            </button>
          </span>
          <span className="header-options">
            <span className="search-box">
              <SearchOutlinedIcon />
            </span>
            <button className="new-connection">New Connection</button>
          </span>
        </div>
        <div className="profile-body">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Connection Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <Tablerows
                no={1}
                name={"oracle"}
                descrp={"connect to Aws"}
                start={"04-03-2023"}
                end={"05-03-2023"}
                active={true}
              />
              <Tablerows
                no={2}
                name={"aws"}
                descrp={"desc"}
                start={"04-03-2023"}
                end={"05-10-2023"}
                active={true}
              />
              <Tablerows
                no={3}
                name={""}
                descrp={"test"}
                start={"04-04-2023"}
                end={"05-10-2023"}
                active={false}
              />
            </tbody>
          </table>
        </div>
        <div className="footer">
          <p>Total 3 items</p>
          <button className="footer-btn">
            <KeyboardArrowLeftIcon />
          </button>
          <button className="footer-btn">1</button>
          <button className="footer-btn">
            <ChevronRightIcon />
          </button>
          <button className="footer-btn">
            7 / page <KeyboardArrowDownOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

function Tablerows({ no, name, descrp, start, end, active }) {
  const [loading, setLoading] = useState(active);
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{descrp}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <FormControlLabel
          sx={{
            display: "block",
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />
      </td>
      <td className="table-action">
        <span>
          <BorderColorIcon />
        </span>
        <span>
          <RemoveRedEyeIcon />
        </span>
      </td>
    </tr>
  );
}

export default Profile;
