import React from "react";
import * as Icons from "@mui/icons-material";

interface DynamicIconProps {
  iconName: string;
  [key: string]: any;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, ...props }) => {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default DynamicIcon;
