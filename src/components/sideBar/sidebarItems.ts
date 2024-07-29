export interface SidebarItem {
  iconName: string;
  route: string;
  label: string;
}

export const sidebarItems: SidebarItem[] = [
  { iconName: "Menu", route: "/", label: "" },
  { iconName: "AutoGraphOutlined", route: "/impact", label: "Impact" },
  { iconName: "DatasetOutlined", route: "/data", label: "Data" },
  { iconName: "EqualizerOutlined", route: "/reporting", label: "Reporting" },
  { iconName: "WorkspacePremiumOutlined", route: "/learn", label: "Learn" },
  { iconName: "PolicyOutlined", route: "/governance", label: "Governance" },
  { iconName: "DocumentScannerOutlined", route: "/docs", label: "Docs" },
  {
    iconName: "TipsAndUpdatesOutlined",
    route: "/intelligence",
    label: "Intelligence",
  },
  { iconName: "RuleOutlined", route: "/surveys", label: "Surveys" },
  { iconName: "AirlineStopsOutlined", route: "/reporting", label: "Reporting" },
  { iconName: "TaskOutlined", route: "/tasks", label: "Tasks" },
  { iconName: "SettingsOutlined", route: "/settings", label: "Settings" },
  { iconName: "SupportAgentOutlined", route: "/support", label: "Support" },
];
