import {
  List,
  ListItem,
  Box,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import {
  Dashboard as DashboardIcon,
  GroupAdd as GroupAddIcon,
  ContactMail as ContactMailIcon,
  ArrowForward as MovingIcon,
  MultilineChart as MultilineChartIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
// import Logo from "..//../assets/WhatsApp Image 2024-01-31 at 6.43.57 PM (2).jpeg";
import Logo from "..//../assets/Frame 1000011481.svg";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  console.log(isMobileView);
  const btnRef = React.useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileView && (
        <Box
          as={HamburgerIcon}
          onClick={onOpen}
          position="absolute"
          top="6"
          left="10"
          fontSize="1.9rem"
          zIndex={1000} // Increase the value if needed
          cursor="pointer"
          bg="red.100"
        />
      )}

      {/*  for desktop */}
      {!isMobileView && (
        <Flex bg="#6a0000" direction="column" width="17.6rem">
          <img
            src={Logo}
            alt=""
            backgroundColor="#6a0000"
            style={{
              width: "16rem",
              height: "9rem",
              backgroundColor: "#6a0000",
            }}
          />
          {/* List OF Option */}
          <Box
            width={{ base: "90%", md: "90%", lg: "90%" }}
            margin={["auto", "auto", "auto"]}
            // mt="2rem"
            height="100vh"
            bg="#6a0000"
          >
            <Flex direction="column" justify="center" fontSize="1.5rem">
              <Box bg="#6a0000" _hover={{ backgroundColor: "#ee9b02" }}>
                <NavLink to="/rootlayout">
                  <Flex
                    align="center"
                    bg="#6a0000"
                    color="white"
                    p="1rem"
                    cursor="pointer"
                  >
                    <i
                      className="fa-solid fa-table"
                      style={{
                        marginRight: "0.5rem",
                        color: "white",
                        backgroundColor: "#6a0000",
                      }}
                    ></i>
                    Dashboard
                  </Flex>
                </NavLink>
              </Box>
              <Box bg="#6a0000">
                <NavLink to="listofgame">
                  <Flex
                    align="center"
                    bg="#6a0000"
                    color="white"
                    p="1rem"
                    cursor="pointer"
                  >
                    <i
                      className="fa-solid fa-gamepad"
                      style={{
                        marginRight: "0.5rem",
                        color: "white",
                        backgroundColor: "#6a0000",
                      }}
                    ></i>
                    List of Games
                  </Flex>
                </NavLink>
              </Box>
              <Box bg="#6a0000">
                <NavLink to="listofuser">
                  <Flex
                    align="center"
                    bg="#6a0000"
                    color="white"
                    p="1rem"
                    cursor="pointer"
                  >
                    <i
                      className="fa-solid fa-people-group"
                      style={{
                        marginRight: "0.5rem",
                        color: "white",
                        backgroundColor: "#6a0000",
                      }}
                    ></i>
                    List of Users
                  </Flex>
                </NavLink>
              </Box>
              <Box bg="#6a0000">
                <NavLink to="accountstatement">
                  <Flex
                    align="center"
                    bg="#6a0000"
                    color="white"
                    p="0.5rem"
                    cursor="pointer"
                  >
                    <i
                      className="fa-solid fa-brain"
                      style={{
                        marginRight: "0.5rem",
                        color: "white",
                        backgroundColor: "#6a0000",
                      }}
                    ></i>
                    Account Statement
                  </Flex>
                </NavLink>
              </Box>
              {/* <Box bg="#6a0000">
                <Flex
                  align="center"
                  bg="#6a0000"
                  color="white"
                  p="1rem"
                  cursor="pointer"
                >
                  <i
                    className="fa-solid fa-gear"
                    style={{
                      marginRight: "0.5rem",
                      color: "white",
                      backgroundColor: "#6a0000",
                    }}
                  ></i>
                  Setting
                </Flex>
              </Box> */}
              <Box bg="#6a0000">
                <NavLink to="/">
                  <Flex
                    align="center"
                    bg="#6a0000"
                    color="white"
                    p="1rem"
                    cursor="pointer"
                  >
                    <i
                      className="fa-solid fa-arrow-right-from-bracket"
                      style={{
                        marginRight: "0.5rem",
                        color: "white",
                        backgroundColor: "#6a0000",
                      }}
                    ></i>
                    Logout
                  </Flex>
                </NavLink>
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}

      {/* for Mobile  */}
      {isMobileView && (
        <Box>
          <Drawer
            width="100%"
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            // finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              {/* <DrawerCloseButton /> */}

              <DrawerBody bg="#6a0000">
                <Flex bg="#6a0000" direction="column" width="17rem">
                  <img
                    src={Logo}
                    alt=""
                    style={{
                      width: "12rem",
                      height: "8rem",
                      marginLeft: "2rem",
                      backgroundColor: "#6a0000",
                    }}
                  />
                  {/* List OF Option */}
                  <Box
                    width={{ base: "95%", md: "90%", lg: "90%" }}
                    margin={["auto", "auto", "auto"]}
                    mt="2rem"
                  >
                    <Flex direction="column" justify="center" fontSize="1.5rem">
                      <Box bg="#6a0000" _hover={{ backgroundColor: "#ee9b02" }}>
                        <NavLink to="/rootlayout">
                          <Flex
                            align="center"
                            bg="#6a0000"
                            color="white"
                            p="1rem"
                            cursor="pointer"
                          >
                            <i
                              className="fa-solid fa-table"
                              style={{
                                marginRight: "0.5rem",
                                color: "white",
                                backgroundColor: "#6a0000",
                              }}
                            ></i>
                            Dashboard
                          </Flex>
                        </NavLink>
                      </Box>
                      <Box bg="#6a0000">
                        <NavLink to="listofgame">
                          <Flex
                            align="center"
                            bg="#6a0000"
                            color="white"
                            p="1rem"
                            cursor="pointer"
                          >
                            <i
                              className="fa-solid fa-gamepad"
                              style={{
                                marginRight: "0.5rem",
                                color: "white",
                                backgroundColor: "#6a0000",
                              }}
                            ></i>
                            List of Games
                          </Flex>
                        </NavLink>
                      </Box>
                      <Box bg="#6a0000">
                        <NavLink to="listofuser">
                          <Flex
                            align="center"
                            bg="#6a0000"
                            color="white"
                            p="1rem"
                            cursor="pointer"
                          >
                            <i
                              className="fa-solid fa-people-group"
                              style={{
                                marginRight: "0.5rem",
                                color: "white",
                                backgroundColor: "#6a0000",
                              }}
                            ></i>
                            List of Users
                          </Flex>
                        </NavLink>
                      </Box>
                      <Box bg="#6a0000">
                        <NavLink to="accountstatement">
                          <Flex
                            align="center"
                            bg="#6a0000"
                            color="white"
                            p="0.5rem"
                            cursor="pointer"
                          >
                            <i
                              className="fa-solid fa-brain"
                              style={{
                                marginRight: "0.5rem",
                                color: "white",
                                backgroundColor: "#6a0000",
                              }}
                            ></i>
                            Account Statement
                          </Flex>
                        </NavLink>
                      </Box>
                      <Box bg="#6a0000">
                        <Flex
                          align="center"
                          bg="#6a0000"
                          color="white"
                          p="1rem"
                          cursor="pointer"
                        >
                          <i
                            className="fa-solid fa-gear"
                            style={{
                              marginRight: "0.5rem",
                              color: "white",
                              backgroundColor: "#6a0000",
                            }}
                          ></i>
                          Setting
                        </Flex>
                      </Box>
                      <Box bg="#6a0000">
                        <NavLink to="/">
                          <Flex
                            align="center"
                            bg="#6a0000"
                            color="white"
                            p="1rem"
                            cursor="pointer"
                          >
                            <i
                              className="fa-solid fa-arrow-right-from-bracket"
                              style={{
                                marginRight: "0.5rem",
                                color: "white",
                                backgroundColor: "#6a0000",
                              }}
                            ></i>
                            Logout
                          </Flex>
                        </NavLink>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
