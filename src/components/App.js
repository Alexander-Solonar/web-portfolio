import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContextProvider from "../context/Context";
import Layout from "./layout";
import Portfolio from "../pages/portfolio/Portfolio";
const Home = lazy(() => import("../pages/home/Home.jsx"));
const Summary = lazy(() => import("../pages/summary/Summary"));
const Contacts = lazy(() => import("../pages/contacts/Contacts"));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="my-summary" element={<Summary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
