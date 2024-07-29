import React from "react";
import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";
import styles from "./sideBar.module.scss";

interface SidebarItemProps {
  iconName: string;
  route: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  iconName,
  label,
  route,
}) => {
  return (
    <li>
      <Link to={route} className={styles.link}>
        <DynamicIcon iconName={iconName} fontSize="large" />
        <p>{label}</p>
      </Link>
    </li>
  );
};

export default SidebarItem;
