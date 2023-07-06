import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  colors,
  daysFilter,
  getGreeting,
  restructureData,
  restructureLocationData,
  restructureReferData,
} from "./helper";
import { useQuery } from "react-query";
import { ReportCard } from "@/ui-lib";
import { getDashboardData } from "@/operations/dashboardData";
import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All Time");

  const { isLoading, error, data } = useQuery("onGoingTalks", () =>
    getDashboardData()
  );

  console.log("THIS DATA", restructureLocationData(data?.data?.top_locations));
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
              cursor="pointer"
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
      <Flex overflowX={"scroll"} mt={{ base: "4", md: "5rem" }}>
        <AreaChart
          width={500}
          height={400}
          data={restructureData(data?.data?.graph_data?.views)}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FF5403"
            fill="#FF540333"
          />
        </AreaChart>
      </Flex>

      <Flex
        mt={{ base: "3rem", md: "4rem" }}
        alignItems={{ base: "start", lg: "center" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "2rem", md: "4rem" }}
      >
        <ReportCard
          type="location"
          data={restructureLocationData(data?.data?.top_locations)}
          colors={colors}
        />

        <ReportCard
          type="referral"
          data={restructureReferData(data?.data?.top_sources)}
          colors={colors}
        />
      </Flex>
    </Flex>
  );
};
