import {
  PinInput,
  PinInputField,
  Button,
  HStack,
  Input,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const Otp = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [pin, setPin] = useState("");
  const [showOtpSection, setOtpSection] = useState(false);

  const enterMobile = async () => {
    try {
      const payload = {
        mobileNumber: mobileNumber,
      };
      const config = {
        method: "POST",
        url: `${apiUrl}/admin/getOtp`,
        data: payload,
      };

      const response = await axios(config);
      // setMobileNumber(response);
      if (response.status === 200) {
        setOtpSection(true);
      }
      console.log(response, "response");
    } catch (err) {
      console.log(err);
    }
  };

  const setAdminOtp = async () => {
    console.log(pin, "otp");
    try {
      const payload = {
        mobileNumber: mobileNumber,
        otp: pin,
      };

      const config = {
        method: "POST",
        url: `${apiUrl}/admin/verifyOtp`,
        data: payload,
      };
      console.log(payload, "PAYLOA");
      const response = await axios(config);
      // setPin(response); 3456
      console.log(response, "response");

      if (response.status === 200) {
        localStorage.setItem("_id", response.data.user._id);
        navigate("/conformpassword");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Flex
        justifyContent="center"
        direction="column"
        height="100vh"
        gap="2rem"
        alignItems="center"
      >
        {!showOtpSection && (
          <>
            <Input
              width={{base:"60%" , md:"20%"}}
              type="text"
              value={mobileNumber}
              placeholder="Enter Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <Button onClick={enterMobile}>Get OTP</Button>
          </>
        )}

        {showOtpSection && (
          <HStack>
            <PinInput onComplete={(val) => setPin(val)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        )}
        {showOtpSection && <Button onClick={setAdminOtp}>Verify Otp</Button>}
      </Flex>
    </>
  );
};
export default Otp;
