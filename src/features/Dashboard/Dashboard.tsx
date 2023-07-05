import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { daysFilter, getGreeting } from "./helper";
import { useQuery } from "react-query";
import { getDashboardData } from "@/operations/dashboardData";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All Time");

  const { isLoading, error, data } = useQuery("onGoingTalks", () =>
    getDashboardData()
  );

  //   console.log("THIS DATA", restructureData(data?.data?.graph_data));
  return (
    <Flex width="auto" flexDirection="column" flex={1}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text
            color="#131316"
            fontSize="24px"
          >{`${getGreeting()}, Blessing ⛅️`}</Text>
          <Text color="#31373D" fontSize="14px">
            Check out your dashboard summary.
          </Text>
        </Box>

        <Box>
          <Text color="#FF5403" fontSize="14px">
            View analytics
          </Text>
        </Box>
      </Flex>

      <Flex
        mt={{ base: "4", md: "6" }}
        gap={{ base: "4", md: "4" }}
        flexWrap="wrap"
      >
        {daysFilter.map((filter) => {
          return (
            <Box
              key={filter.name}
              borderWidth="1px"
              py="3px"
              px="1rem"
              borderRadius="2rem"
              color={filter.name === activeFilter ? "#FF5403" : "#31373D"}
              fontSize="14px"
              backgroundColor={
                filter.name === activeFilter ? "#FFEEE5" : "#EFF1F6"
              }
            >
              {filter.name}
            </Box>
          );
        })}
      </Flex>

      <Flex mt={{ base: "6", md: "14" }}>
        {}
        <LineChart data={data?.data?.graph_data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </Flex>
    </Flex>
  );
};
