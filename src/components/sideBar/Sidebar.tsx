import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarItems";

import styles from "./sideBar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.asideWrapper}>
      <ul className={styles.asideList}>
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
