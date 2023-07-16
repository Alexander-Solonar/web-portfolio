import { Navigate, Route, Routes } from "react-router-dom";
import ContextProvider from "../context/Context";
import Layout from "./layout";
import Home from "../pages/home";

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
