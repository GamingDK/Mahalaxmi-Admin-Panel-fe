import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  useMediaQuery,
  Link,
  Image,
  Input
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Picture from "../../assets/teenpatti.webp";
import king from "..//../assets/pngtree-king-crown-sticker-png-image_6549524.png";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLargerThan1250] = useMediaQuery("(min-width: 1250px)");
  const [adminID, setAdminID] = useState("");
  // const [otp, setOtp] = useState();
  const [adminPassword, setAdminPassword] = useState("");
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const handleLogin = async () => {
    const paylode = {
      mobileNumber: adminID,
      password: adminPassword,
    };

    const congif = {
      method: "POST",
      url: `${apiUrl}/admin/signIn`,
      data: paylode,
    };

    const response = await axios(congif);
    if (response.status === 200) {
      navigate("rootlayout");
    }
    console.log(response, "respo");
  };

  const forgotPassword = () => {
    navigate("/otp");
  };
  return (
    <>
      <Box
        width="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          backgroundColor="grey"
          width={{ base: "95vw", md: "100%" }}
          h="90vh"
          // position="relative"
          borderRadius="10px"
          // top={42}
          // left={55}
          boxShadow="45px 45px 45px rgba(2, 4, 20, 0.3)"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap="3"
        >
          <Image
            src={Picture}
            alt="m"
            boxSize={{ base: "35%", md: "405" }}
            borderRadius="md"
            my="1"
          />

          <Box
            as="form"
            bg="white"
            p={{ base: 3, md: 1 }}
            borderRadius="md"
            boxShadow="md"
            // maxW={{base:"300px",md:"400px"}}
            width={["20rem", "35%"]}
            // mx="auto"
            height={{ base: "380px", md: "405px" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            // left="5%"
            // bottom="70%"
            // ml="1rem"
            my="1"
          >
            <Image
              width={{ base: "40%", md: "40%" }}
              // style={{
              //   height: "100%",
              //   position: "relative",
              //   bottom: "15%",
              //   left: "15%",
              // }}
              p="0"
              m="0"
              // bg="blue"
              src={king}
              alt=""
            />
            <Text
              color={"orange"}
              fontWeight="bold"
              fontStyle="italic"
              position="relative"
              fontSize={{ base: "1.7rem", md: "2.5rem" }}
              // bottom={{base:"5rem",md:"9rem"}}
              textAlign="center"
              // left={{base:"10" , md:"20"}}
            >
              Mahalaxmi
            </Text>
            {/* <Text
              color={"black"}
              fontWeight="bold"
              position="relative"
              bottom={{base:"3em" , md:"5em"}}
              fontSize={{base:"1.5em" , md:"1.8em"}}
            >
              Admin Login
            </Text> */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Input
                type="text"
                placeholder="Admin Mobile Number"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
                style={{
                  // padding: "3px 6px",
                  // marginBottom: "16px",
                  borderRadius: "4px",
                  borderColor: "gray",
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderWidth: "1px",
                  width: "80%",
                  boxSizing: "border-box",
                }}
              />

              <Input
                type="text"
                placeholder="Admin Password"
                value={adminPassword}
                mt="2"
                onChange={(e) => setAdminPassword(e.target.value)}
                style={{
                  padding: "3px 6px",
                  marginBottom: "16px",
                  borderRadius: "4px",
                  border: "none",
                  borderColor: "gray",
                  borderBottom: "1px solid gray",
                  borderWidth: "1px",
                  width: "80%",
                  boxSizing: "border-box",
                }}
              />
              <Link float="right" fontSize="2lg" onClick={forgotPassword}>
                Forgot Password
              </Link>
              <Button
                backgroundImage="linear-gradient(to top, #FFBB64, #E8C872)"
                padding="5px 10px"
                width={["5rem","7rem", "15rem"]}
                fontWeight="bold"
                mt="0.7rem"
                ml={{ base: "0rem", md: "1.5rem" }}
                onClick={handleLogin}
                fontSize="1.2rem"
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLogin;
