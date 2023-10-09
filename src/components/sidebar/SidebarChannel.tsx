import React from "react";
import styles from "./SidebarChannel.module.scss";

function SidebarChannel() {
  return (
    <div className={styles.sidebarChannel}>
      <h4>
        <span className={styles.sidebarChannelHash}>#</span>
        channelName
      </h4>
    </div>
  );
}

export default SidebarChannel;
