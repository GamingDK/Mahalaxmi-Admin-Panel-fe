import {
  Flex,
  Box,
  Text,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  Avatar,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const apiUrl = import.meta.env.VITE_APP_API_URL;
const Dashbord = () => {


  const [data, setData] = useState([]);
  const [topplayer, setTopPlayer] = useState([]);
  const [ActiveUser, setActiveUser] = useState([]);
  const [TotleRevenue, setTotleRevenue] = useState();
  const [ credit , setCredit] = useState();
  const [ debit , setDebit] = useState();

  const [search, setSearch] = useState();
  const [filterData, setFilterData] = useState();

  const [open , setOpen ] = useState(false);

  useEffect(() => {
    TredingGames();
    TopPlayers();
    TotalActiveUser();
    TotaleRevenue();
  }, []);

  const TotaleRevenue = async () => {
    try {
      const config = {
        method: "GET",
        url: `${apiUrl}/user/get_revenue`,
      };
      const response = await axios(config);
      console.log(response,'Totle revenue');
      setCredit(response.data.credit);
      setDebit(response.data.debit)
    } catch (err) {
      console.error(err);
    }
  };

  const columnsAllPlayer = [
    {
      name: "Profile",
      selector: (row) => row.profile,
      cell: (row) => (
        <Avatar src="https://i.pinimg.com/564x/eb/fe/80/ebfe807d22df5cd97d9dae10aa04ad61.jpg" />
      ),
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Amount",
      selector: (row) => row.coins,
      sortable: true,
    },
  //   {
  //     name:"Action",
  //     cell:(row)=>(
  //         <Button onClick={()=>handleClick(row.mobileNumber , row.balance)}>Add Coin</Button>
  //     )
  //  }
  ];


  const TredingGames = async () => {
    try {
      const config = {
        method: "GET",
        url:  `${apiUrl}/user/get_TrendingGame`,
      };
      const response = await axios(config);
      setData(response?.data?.games);
      console.log(response,"Trending Game");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const TopPlayers = async () => {
    const config = {
      method: "GET",
      url: `${apiUrl}/user/get_TopPlayer`,
    };
    const response = await axios(config);
    setTopPlayer(response?.data?.Player);
    setFilterData(response?.data?.Player);
    console.log(response.data, "Top Player");
  };

  useEffect(() => {
    const result = topplayer.filter((player) => {
      return player.mobileNumber.includes(search);
    });
    setFilterData(result);
  }, [search]);
 

  const TotalActiveUser = async () => {
    const config = {
      method: "GET",
      url: `${apiUrl}/user/get_ActiveUsers`,
    };

    const response = await axios(config);
    setActiveUser(response?.data?.Total);
    // console.log(response?.data, "responce");
  };
  return (
    <>
      <Box
        width={{ base: "90%", md: "60rem" }}
        ml={{ base: "1rem", md: "1rem" }}
        mx={{ base: "1rem", md: "2rem" }}
        p="0.5rem"
        mt="2rem"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="2rem"
          width={["100%", "100%"]}
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            p={["0.5rem", "0.5rem", "0.5rem"]}
            width={["100%", "30%"]}
            textAlign={["center", "center", "center"]}
            borderRadius="10px"
          >
            <Text fontWeight="bold">{ActiveUser}</Text>
            <Text color="#7D0A0A" fontWeight="500">
              Total Active Users
            </Text>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            p="0.5rem"
            width={["100%", "30%"]}
            textAlign="center"
            bg='green'
            borderRadius="10px"
          >
            <Text fontWeight="bold" color='white'>+{credit}</Text>
            <Text color="white" fontWeight="500">
              Total Credit
            </Text>
            </Box>
            <Box
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            p="0.5rem"
            width={["100%", "30%"]}
            textAlign="center"
            bg='red'
            borderRadius="10px"
          >
            <Text fontWeight="bold" color='white'>- {debit}</Text>
            <Text color="white" fontWeight="500">
              Total debit
            </Text>

          </Box>
        </Flex>

       

  {/* Top Player */}

  <Box mt="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            Top Players
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>
        <DataTable
          columns={columnsAllPlayer}
          data={filterData}
          pagination
          fixedHeader
          selectableRows
          highlightOnHover
          subHeader
          subHeaderComponent={
            <Input
              type="text"
              placeholder="Search...."
              w="30%"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </Box>
        {/* Table For Treding Player */}
        <Box mt="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            Trending games
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>
        {/* Table */}
        <Table
          variant="striped"
          width="100%"
          borderWidth="1px"
          borderRadius="md"
        >
          <Tbody>
            {data &&
              data?.map((TrendingGame) => {
                const { game, totalRevenue } = TrendingGame;
                return (
                  <Tr key={game?._id}>
                    <Td>
                      <Avatar src="https://store-images.s-microsoft.com/image/apps.17247.13552113910340840.b3fbbc98-4d8c-47a1-902e-7532f8d4de3e.288a680d-b29e-40fe-8a32-18ff634cbd50?mode=scale&q=90&h=1080&w=1920" />
                    </Td>

                    <Td fontWeight="500">{game}</Td>
                    <Td fontWeight="500" color="green">
                      {totalRevenue}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>

      
    </>
  );
};

export default Dashbord;
