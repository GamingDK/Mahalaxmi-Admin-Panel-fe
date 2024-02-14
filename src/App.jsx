import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashbord from "./Components/Dashbor/Dashbord";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "./Components/RootLayOut/RootLayOut";
import ListOfGame from "./Components/ListOfGames/ListOfGame";
import ListOfUser from "./Components/ListOfUsers/ListOfUsers";
import AccountStatment from "./Components/AccountStatement/AccountStatment";
import LogOut from "./Components/LogOut/LogOut";

import AdminLogin from "./Components/AdminLogin/AdminLogin";
import Otp from "./Components/OTP/Otp";
import ConformPassword from "./Components/ComformPassword/ConformPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<AdminLogin />} />
        <Route path="rootlayout" element={<RootLayOut />}>
          <Route index element={<Dashbord />} />
          <Route path="listofgame" element={<ListOfGame />} />
          <Route path="listofuser" element={<ListOfUser />} />
          <Route path="accountstatement" element={<AccountStatment />} />
          <Route path="logout" element={<LogOut />} />
          
        </Route>
        <Route path="/otp" element={<Otp/>} />
        <Route path="/conformpassword" element={<ConformPassword />} />
      </Route>
      
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
