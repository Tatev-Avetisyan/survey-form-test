import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Page from "./pages/Page";
import { ApolloProvider } from "@apollo/client";
import SurveyForm from "./components/main/surveyForm/SurveyForm";
import client from "./services/apollo";

const routes = [
  { path: "/impact", title: "Impact Page" },
  { path: "/data", title: "Data Page" },
  { path: "/reporting", title: "Reporting Page" },
  { path: "/learn", title: "Learning Page" },
  { path: "/governance", title: "Governance Page" },
  { path: "/docs", title: "Docs Page" },
  { path: "/intelligence", title: "Intelligence Page" },
  { path: "/surveys", title: "Surveys Page" },
  { path: "/flows", title: "Flows Page" },
  { path: "/tasks", title: "Tasks Page" },
  { path: "/settings", title: "Settings Page" },
  { path: "/support", title: "Support Page" },
];

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/surveys" replace />} />
          <Route path="/" element={<Main />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.path === "/surveys" ? (
                    <SurveyForm />
                  ) : (
                    <Page title={route.title} />
                  )
                }
              />
            ))}
          </Route>
          <Route path="*" element={<Page title="Page Not Found" />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
