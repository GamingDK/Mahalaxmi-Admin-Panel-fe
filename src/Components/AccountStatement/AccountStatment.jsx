import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Tbody,
  Th,
  Td,
  Tr,
  Thead,
  Table,
  TableContainer,
  Divider,
  Input,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const AccountStatment = () => {
  return (
    <>
      <Box
        width={{ base: "90%", md: "62rem" }}
        ml={{ base: "1rem", md: "1rem" }}
        mx={{ base: "1rem", md: "2rem" }}
        p={{ base: "1rem", md: "2rem" }}
        backgroundColor="#f2f2f2"
      >
        <Button
          // width={{base:"60%",md:"30%"}}
          // padding={{base:"10px"}}
          borderRadius="10px"
          textAlign={{ base: "center", md: "center" }}
          bgGradient="linear(#ffcc80 0%, #e68a00 25%, #e68a00 50%)"
          color="white"
          _hover={{
            bgGradient: "linear(#ffcc80 0%, #e68a00 25%, #e68a00 50%)",
          }}
        >
          <Text> Manage Payout Methode</Text>
        </Button>
        <br />
        <br />
        {/* Debit Credit Box */}

        <Flex gap="3rem" flexDirection={{ base: "column", md: "row" }}>
          <Box>
            <Heading size="lg" mb="0.5rem">
              Debit And Credit Amounts
            </Heading>

            {/* <Box
              bg="white"
              height="240px"
              p="1.5rem"
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
              borderRadius="10px"
            >
              <Text fontWeight="600" color="#595959">
                Debited Amount
              </Text>
              <Heading size="lg"> ₹ 1,00,000</Heading>
              <Text fontWeight="600" color="#595959">
                Your Expenses
              </Text>
              <Divider mt="1rem" mb="0.5rem" />

              <Text fontWeight="600" color="#595959">
                Credit Amount
              </Text>
              <Heading size="lg"> ₹  1,00,000</Heading>
              <Text fontWeight="600" color="#595959">
                Your Expenses
              </Text>
            </Box> */}
            <Box
              height="280px"
              p="1rem"
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
              borderRadius="10px"
            >
              {/* Debited Amount */}
              <Box
                bg="green.200" // Set the background color for Debit amount to green
                p="1rem"
                borderRadius="8px"
                mb="1rem"
              >
                <Text fontWeight="600" color="#595959">
                  Credited Amount
                </Text>
                <Heading size="lg"> ₹ 1,00,000</Heading>
                <Text fontWeight="600" color="#595959">
                  Your Expenses
                </Text>
              </Box>

              {/* Credit Amount */}
              <Box
                bg="red.200" // Set the background color for Credit amount to red
                p="1rem"
                borderRadius="8px"
              >
                <Text fontWeight="600" color="#595959">
                  Debited Amount
                </Text>
                <Heading size="lg"> ₹ 1,00,000</Heading>
                <Text fontWeight="600" color="#595959">
                  Your Expenses
                </Text>
              </Box>
            </Box>
          </Box>

          <Box width="40%">
            {/* Set the width of the second Box to 100% */}
            <Heading size="lg" mb="0.5rem">
              Total Profit
            </Heading>
            <Box
              bg="white"
              height="240px"
              width={{ base: "18rem", md: "100%" }}
              wi
              p="1.5rem"
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
              borderRadius="10px"
            >
              {/* Date Picker */}
              <Input
                placeholder="Select Date and Time"
                size="md"
                mb="0.5rem"
                type="date"
              />

              <Heading size="lg"> ₹ 1,00,000</Heading>
              <Divider mt="1rem" mb="0.5rem" />

              <Text fontWeight="600" color="#595959">
                Available Fix withdrawal
              </Text>
              <Heading size="lg"> ₹ 1,00,000</Heading>
            </Box>
          </Box>
        </Flex>

        <br />
        <br />

        <Flex gap="3rem" justifyContent="start" alignItems="center">
          <Box width={{ base: "40%", md: "20%" }}>
            <Text fontWeight="600">Date Range</Text>
            <Input
              border="1px solid #999999"
              mt="0.3rem"
              placeholder="Select Date Range"
              size="md"
              type="date"
            />
          </Box>

          <Box width={{ base: "40%", md: "20%" }}>
            <Text fontWeight="600">Activity</Text>
            <Input
              mt="0.3rem"
              border="1px solid #999999"
              placeholder="Select"
              size="md"
              type="date"
            />
          </Box>
        </Flex>
        <br />
        <br />

        <TableContainer>
          <Table variant="striped" bg="#b3b3b3">
            <Thead>
              <Tr>
                <Th color="black" fontSize="1rem">
                  Date
                </Th>
                <Th color="black" fontSize="1rem">
                  Activity
                </Th>
                <Th color="black" fontSize="1rem">
                  Description
                </Th>
                <Th color="black" fontSize="1rem">
                  Order ID
                </Th>
                <Th color="black" fontSize="1rem">
                  Number
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>20-01-2024</Td>
                <Td>Withdrawal</Td>
                <Td>Transfur Successfully</Td>
                <Td>OrderID123</Td>
                <Td>1,00,000</Td>
              </Tr>
              <Tr>
                <Td>20-01-2024</Td>
                <Td>Earing</Td>
                <Td>Transfur Successfully</Td>
                <Td>OrderID123</Td>
                <Td>1,00,000</Td>
              </Tr>
              <Tr>
                <Td>20-01-2024</Td>
                <Td>Expenses</Td>
                <Td>Transfur Successfully</Td>
                <Td>OrderID123</Td>
                <Td>1,00,000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AccountStatment;
