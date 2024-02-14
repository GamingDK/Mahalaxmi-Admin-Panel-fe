import { Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const ConformPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = async () => {
    const userId = localStorage.getItem("_id");
    try {
      const payload = {
        newPassword: password,
        confirmPassword: confirmPassword,
      };
      console.log(userId);
      const config = {
        method: "POST",
        url: `${apiUrl}/admin/changePassword/${userId}`,
        data: payload,
      };
      console.log(payload);

      const response = await axios(config);
      // setPassword(response)
      // setConfirmPassword(response)
      console.log(response, "response");
      if (response.status === 200) {
        navigate("/");
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
        width="100%"
        backgroundColor="#E3E1D9"
      >
        <Input
          width="50%"
          border="1px solid black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <Input
          width="50%"
          border="1px solid black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
        />
        <Button onClick={handlePassword} width="50%">
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default ConformPassword;
