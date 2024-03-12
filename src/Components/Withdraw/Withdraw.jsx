import React, { useEffect,useState } from 'react'
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
import DataTable from "react-data-table-component";
import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL;
import { useToast } from '@chakra-ui/react'
function Withdraw() {
    const [allWithdrolData, setAllWithdrolData] = useState([]);
    const toast = useToast() 
    const [mobileNumbers, setMobileNumbers] = useState("");
    const [requestedAmount, setRequestedAmount] = useState("");
    const [coins, setCoins] = useState();
    const [toggle, setToggle] = useState(true)

    const handleClick = async (mobileNumber, requestedAmount) => {
      
        try {
          const payload = {
            mobileNumber: mobileNumber,
            requestedAmount: requestedAmount,
          };
    
          const config = {
            method: "POST",
            url: `${apiUrl}/admin/acceptRequestAndTransferAmount`,
            data: payload,
          };
    
          const response = await axios(config);
          setMobileNumbers(response?.data);
          setRequestedAmount(response?.data);
        //   setAllWithdrolData([])
        setToggle(!toggle)
          if(response){
            toast({
              title: 'Accepted Successfully',
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
          }
          console.log(response, "handleClick");
        } catch (err) {
          alert(err);
        }
       
      };
    


    const withdrawColoum = [
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



      const ShowWithdrolData = async () => {
        console.log("called");
        try {
          const config = {
            method: "GET",
            url: `${apiUrl}/admin/getWithDrawAmountRequests`,
          };
      
          const response = await axios(config);
          console.log(response, "WithdrawalData");
      
          // Check if the response status is OK (200)
          if (response.status === 200) {
            // Update the state with the withdrawal data
            setAllWithdrolData(response.data.userMasters);
          } else {
            // Handle non-OK response status
            console.log("Error: Non-OK response status", response.status);
          }
        } catch (err) {
          // Handle errors
          console.log("Error:", err);
        }
      };
      

      useEffect(()=>{
        ShowWithdrolData();
      },[toggle])


  return (
    <Box mt="4">
        <Text fontWeight="Bold" fontSize="30" color="red.500">Withdrawal Requests</Text>
        
        {/* Withdrawal requests  */}
        <DataTable
                    columns={withdrawColoum}
                    data={allWithdrolData}
                    pagination
                    fixedHeader
                    selectableRows
                    highlightOnHover
                    subHeader
                  />
    </Box>
  )
}

export default Withdraw