import {
  Flex,
  Box,
  Avatar,
  InputLeftElement,
  Text,
  Input,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tooltip,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useToast } from '@chakra-ui/react'

const apiUrl = import.meta.env.VITE_APP_API_URL;
const Navbar = () => {
  const toast = useToast() 
  const [open, setOpen] = useState(false);
  const [ openDaily, setOpenDaily] = useState(false)
  const [withdrowOpen, setWithdroOpen] = useState(false);
  const [allWithdrolData, setAllWithdrolData] = useState([]);
  const [mobileNumber, setMobileNumber] = useState();
  const [coins, setCoins] = useState();
  const [ balance, setBalance] = useState()
  const [availableCoins, setAvailableCoins] = useState(0)
  const [mobileNumbers, setMobileNumbers] = useState("");
  const [requestedAmount, setRequestedAmount] = useState("");

  const coloum = [
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "UPI ID",
      selector: (row) => row.upiId,
    },
    {
      name: "Amount",
      selector: (row) => row.requestedAmount,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button
          bg="green"
          color="white"
          _hover={{ bg: "#004225" }}
          onClick={() => handleClick(row.mobileNumber, row.requestedAmount)}
        >
          Accept
        </Button>
      ),
    },
  ];

  async function getAvailableCoins() {
    try {
      const response = await fetch(`${apiUrl}/admin/getAvailableCoins`);
      const result = await response.json();
      setAvailableCoins(result.availableCoinsToDistribute)
      if (response.status === 200) {
       toast({
         title: "Coins fetched successfully!",
         status: "success",
         duration: 3000,
         isClosable: true,
         position: "top",
       });
     }
    } catch (error) {
     console.log(error);
     toast({
       title: "An error occurred.",
       status: "error",
       duration: 3000,
       isClosable: true,
       position: "top",
     });
    }
 }


 
  useEffect(() => {
    // ShowWithdrolData();
    getAvailableCoins();
  }, [setBalance,setAvailableCoins]);

  const ShowWithdrolData = async () => {
    try {
      const config = {
        method: "GET",
        url: `${apiUrl}/admin/getWithDrawAmountRequests`,
      };

      const response = await axios(config);
      console.log(response, "Withdroldata");
      setAllWithdrolData(response?.data?.userMasters);
      // setMobileNumbers(response?.data?.userMasters?.mobileNumber)
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDailyOpen = () => {
    console.log("called")
    setOpenDaily(true)
    console.log("called", openDaily)
  }
  const showWithdrolTable = () => {
    setWithdroOpen(true);
  };

  const handleClose = async () => {
    // fetch Another Aip
    console.log("reach suucefully");
    try {
      const payload = {
        mobileNumber: mobileNumber,
        coins: coins,
      };
      const config = {
        method: "POST",
        url: `${apiUrl}/userMaster/recharge`,
        data: payload,
      };
      console.log(payload, "payload");
      const response = await axios(config);
      // setMobileNumber(response.data.mobileNumber);
      // setCoins(response.data.coins);
      if(response.status === 200){
        toast({
          title: 'Recharge Successful!',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position:'top'
        })
      }
      else{
        toast({
          title: 'Enter valid Number',
          status: 'denger',
          duration: 9000,
          isClosable: true,
          position:'top'
        })
      }

      // console.log(response, "response");
    } catch (err) {
      console.log(err);
    }
    setMobileNumber("");
    setCoins("");
    setOpen(false);
  };

  const handleDailyClose = async () => {
    console.log("reach suucefully");
    try {
      const payload = {
        coins: balance,
      };
      const config = {
        method: "POST",
        url: `${apiUrl}/admin/addAvailableCoins`,
        data: payload,
      };
      console.log(payload, "payload");
      const response = await axios(config);
      // setMobileNumber(response.data.mobileNumber);
      setBalance(response.data.coins);
      if(response.status === 200){
        toast({
          title: 'Coins added Successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
      }
      else{
        toast({
          title: 'Some error',
          status: 'denger',
          duration: 9000,
          isClosable: true,
          position:'top'
        })
      }

      // console.log(response, "response");
    } catch (err) {
      console.log(err);
    }
    setBalance("");
    setOpenDaily(false);
  };

  return (
    <Box
      // width={{ base: "100%", md: "79%" }}
      // marginLeft={{ base: "0", md: "16rem" }}
      px={4}
      py={2}
      bg="red.100"
    >
      <Flex
        width={{ base: "90%", md: "100%" }}
        direction={{ base: "column-reverse", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        height={{ base: "18rem", md: "4rem" }}
        gap="3rem"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        px="2"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          // justifyContent={{ base: "end", md: "start" }}
          width={{ base: "50%", md: "50%" }}
          // ml={{ base: "6rem", md: "0rem" }}
          // mt={{ base: "3.5rem", md: "0rem" }}
          gap={{ base: "2" }}
        >
          <Tooltip
            label="Add coins to mobile number"
            hasArrow
            fontSize="md"
            bg="gray.700"
            color="white"
          >
            <Button
              size={{ base: "sm", md: "md" }}
              onClick={handleOpen}
              bg="green"
              color="white"
              _hover={{ bg: "darkgreen" }}
            >
              + Add Coin
            </Button>
          </Tooltip>
{/* 
          <Tooltip
            label="See all withdraw requests"
            hasArrow
            fontSize="md"
            bg="gray.700"
            color="white"
          >
            <Button
              onClick={showWithdrolTable}
              bg="maroon"
              color="white"
              _hover={{ bg: "#B31312" }}
            >
              - Withdraw
            </Button>
          </Tooltip> */}

          <Tooltip
            label="Add Daily balance"
            hasArrow
            fontSize="md"
            bg="gray.700"
            color="white"
          >
            <Button
              onClick={handleDailyOpen}
              bg="pink.700"
              color="white"
              _hover={{ bg: "teal" }}
            >
              + Add Balance
            </Button>
          </Tooltip>

          <Text fontWeight="bold" textAlign={"center"} verticalAlign="center">Balance Coins : {availableCoins}</Text>

          {open && (
            <Modal isOpen={open} onClose={() => setOpen(false)}>
              <ModalOverlay />
              <ModalContent bg="#527853">
                <ModalHeader
                  textAlign="center"
                  fontSize="1.9rem"
                  fontFamily="600"
                >
                  Add Coin
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody bg="#65B741" borderRadius="md">
                  <FormControl>
                    <FormLabel color="black" fontSize="1.3rem">
                      Mobile Number
                    </FormLabel>
                    <Input
                      placeholder="Add Number"
                      border="1px solid black"
                      color="white"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />

                    <FormLabel color="black" fontSize="1.3rem">
                      Add Coin
                    </FormLabel>
                    <Input
                      placeholder="Add Coin"
                      border="1px solid black"
                      color="white"
                      value={coins}
                      onChange={(e) => setCoins(e.target.value)}
                    />
                  </FormControl>
                  <Flex justifyContent="center">
                    <Button
                      colorScheme="white"
                      mt="4"
                      bg="#001524"
                      width="50%"
                      onClick={handleClose}
                    >
                      Recharge
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}

          {openDaily && (
            <Modal isOpen={openDaily} onClose={() => setOpenDaily(false)}>
              <ModalOverlay />
              <ModalContent bg="pink.200">
                <ModalHeader
                  textAlign="center"
                  fontSize="1.9rem"
                  fontFamily="600"
                >
                  Add Daily Coins
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody bg="white" borderRadius="md">
                  <FormControl>
                    <FormLabel color="black" fontSize="1.3rem">
                      Add Balance
                    </FormLabel>
                    <Input
                      placeholder="Add Balance"
                      type="number"
                      border="1px solid black"
                      color="black"
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                    />
                  </FormControl>
                  <Flex justifyContent="center">
                    <Button
                      colorScheme="white"
                      mt="4"
                      bg="#001524"
                      width="50%"
                      onClick={handleDailyClose}
                    >
                      Add Balance
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}

          {withdrowOpen && (
            <>
              <Modal
                isOpen={withdrowOpen}
                onClose={() => setWithdroOpen(false)}
              >
                <ModalOverlay />
                <ModalContent
                  width={{ base: "95%", md: "100%" }}
                  padding="0.5rem"
                >
                  <DataTable
                    columns={coloum}
                    data={allWithdrolData}
                    pagination
                    fixedHeader
                    selectableRows
                    highlightOnHover
                    subHeader
                  />
                  <Flex justifyContent="center">
                    <Button
                      bg="maroon"
                      color="white"
                      onClick={() => setWithdroOpen(false)}
                      width="50%"
                      _hover={{ bg: "#B80000" }}
                    >
                      Close
                    </Button>
                  </Flex>
                </ModalContent>
              </Modal>
            </>
          )}
        </Flex>

        {/* <Flex align="flex-end" gap={{ base: 2, md: "1rem" }} bg="blue" > */}
        <Box display="flex" justifyContent="flex-end">
          <Avatar
            size="md"
            name="John Doe"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            ml={{ base: 2, md: 0 }}
          />
        </Box>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
