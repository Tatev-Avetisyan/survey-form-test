import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Page from "./pages/Page";

const routes = [
  { path: "/impact", title: "Impact Page" },
  { path: "/data", title: "Data Page" },
  { path: "/reporting", title: "Reporting Page" },
  { path: "/learn", title: "Learning Page" },
  { path: "/governance", title: "Governance Page" },
  { path: "/docs", title: "Docs Page" },
  { path: "/intelligence", title: "Intelligence Page" },
  { path: "/surveys", title: "Surveys Page" },
  { path: "/reporting", title: "Reporting Page" },
  { path: "/tasks", title: "Tasks Page" },
  { path: "/settings", title: "Settings Page" },
  { path: "/support", title: "Support Page" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Page title={route.title} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
