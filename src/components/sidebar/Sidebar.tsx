import React from "react";
import sidebarStyle from "./Sidebar.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <>
      <div className={sidebarStyle.sidebar}>
        <div className={sidebarStyle.sidebarTop}>
          <h3>Chat App</h3>
          <ExpandMoreIcon />
        </div>

        <div className={sidebarStyle.channels}>
          <div className={sidebarStyle.sidebarChannelsHeader}>
            <div className={sidebarStyle.sidebarHeader}>
              <ExpandMoreIcon />
              <h4>Programming Channel</h4>
            </div>
            <AddIcon
              className={sidebarStyle.sidebarAddIcon}
              onClick={() => {}}
            />
          </div>

          <div className={sidebarStyle.sidebarChannelList}>
            {/* <SidebarChannel /> */}
          </div>
        </div>

        <div className={sidebarStyle.sidebarFooter}>
          <div className={sidebarStyle.sidebarAccount}>
            <img src="" alt="sidebar account" />
            <div className={sidebarStyle.accountName}>
              <h4>D.suke</h4>
              <span>#1234</span>
            </div>
          </div>

          <div className={sidebarStyle.sidebarVoice}>
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
