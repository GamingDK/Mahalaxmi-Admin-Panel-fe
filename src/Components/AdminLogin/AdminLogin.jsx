import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  useMediaQuery,
  Link,
  Image,
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
      <Box width={["70%"]}>
        <Box
          backgroundColor="grey"
          width={isLargerThan1250 ? "1150px" : "100%"}
          height={isLargerThan1250 ? "550px" : "100%"}
          position="relative"
          borderRadius="10px"
          top={42}
          left={55}
          boxShadow="45px 45px 45px rgba(2, 4, 20, 0.3)"
        >
          <Image
            src={Picture} 
            alt="m"
            width={["70%", "38%"]}
            style={{
              borderRadius: "10px",
              position: "relative",
              top: "10%",
              left: "10%",
            }}
          />

          <Box
            as="form"
            bg="white"
            p={{base:8,md:3}}
            borderRadius="md"
            boxShadow="md"
            maxW={{base:"400px",md:"400px"}}
            mx="auto"
            height={{base:"380px",md:"470px"}}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            position="relative"
            left="10%"
            bottom="70%"
          >
            <img
              style={{
                width: "70%",
                height: "100%",
                position: "relative",
                bottom: "15%",
                left: "15%",
              }}
              src={king}
              alt=""
            />
            <Text
              color={"orange"}
              fontWeight="bold"
              fontStyle="italic"
              position="relative"
              fontSize={{base:"1.7rem",md:"2.5rem"}}
              bottom={{base:"5rem",md:"9rem"}}
              // textAlign="center"
              left={{base:"10" , md:"20"}}
            >
              Mahalaxmi
            </Text>
            <Text
              color={"black"}
              fontWeight="bold"
              position="relative"
              bottom={{base:"3em" , md:"5em"}}
              fontSize={{base:"1.5em" , md:"1.8em"}}
            >
              Admin Login
            </Text>
            <Box position="relative" bottom={{base:"4em", md:"8em"}}>
              <input
                type="text"
                placeholder="Admin Mobile Number"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
                style={{
                  padding: "3px 6px",
                  marginBottom: "16px",
                  borderRadius: "4px",
                  borderColor: "gray",
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderWidth: "1px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="text"
                placeholder="Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                style={{
                  padding: "3px 6px",
                  marginBottom: "16px",
                  borderRadius: "4px",
                  border: "none",
                  borderColor: "gray",
                  borderBottom: "1px solid gray",
                  borderWidth: "1px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <Link float="right" fontSize="2lg" onClick={forgotPassword}>
                Forgot Password
              </Link>
              <Button
                backgroundImage="linear-gradient(to top, #FFBB64, #E8C872)"
                padding="5px 10px"
                width={["13.5rem", "20rem"]}
                fontWeight="bold"
                mt="0.7rem"
                ml={{base:"0rem" , md:"1.5rem"}}
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
