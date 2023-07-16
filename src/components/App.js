import { Navigate, Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Layout from "./layout";
import Home from "../pages/home";
import ContextProvider from "../context/Context";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
