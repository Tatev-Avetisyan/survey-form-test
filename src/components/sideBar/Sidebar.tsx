import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarItems";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./sideBar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.asideWrapper}>
      <ul className={styles.asideList}>
        <li>
          <MenuRoundedIcon fontSize="large" />
        </li>
        {sidebarItems.map(({ iconName, route, label }, index) => (
          <SidebarItem
            key={index}
            iconName={iconName}
            route={route}
            label={label}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
