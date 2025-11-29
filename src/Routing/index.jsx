import { Route, Routes } from "react-router-dom";
import FrontEnd from "../pages/FrontEnd";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<FrontEnd />} />
      </Routes>
    </>
  );
};

export default Routing;
