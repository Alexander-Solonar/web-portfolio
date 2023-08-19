import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContextProvider from "../context/Context";
import Layout from "./layout";
import Summary from "../pages/summary/Summary";
const Home = lazy(() => import("../pages/home/Home.jsx"));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-summary" element={<Summary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
