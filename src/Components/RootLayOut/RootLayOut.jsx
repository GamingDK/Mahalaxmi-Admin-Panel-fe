import { Flex ,Box} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <>
      <Flex direction="column" height="100vh">
        <Box>
          <Navbar />
        </Box>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box>
            <Sidebar />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default RootLayOut;
