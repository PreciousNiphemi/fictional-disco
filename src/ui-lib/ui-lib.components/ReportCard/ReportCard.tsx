import { Box, Text, Flex, HStack, Stack } from "@chakra-ui/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
type dataType = {
  name: string;
  value: number;
};

type ReportCardProps = {
  type: "location" | "referral";
  data: dataType[];
  colors: string[];
};
export const ReportCard = ({ type, data, colors }: ReportCardProps) => {
  const updatedArray = data?.map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));
  return (
    <Box w="sm" p="4" borderWidth="1" boxShadow="xs" borderRadius="12px">
      <Flex justifyContent="space-between">
        <Text color="#131316" fontSize="16px">
          {type === "location" ? "Top Locations" : "Top Referral source"}
        </Text>

        <Text cursor="pointer" color="#FF5403" fontSize="14px">
          View full reports
        </Text>
      </Flex>
      <Flex
        mt={{ base: "", md: "2rem" }}
        gap={{ base: "", md: "3rem" }}
        alignItems="center"
      >
        <Flex>
          <Stack spacing={{ base: "", md: "4" }} w="full">
            {updatedArray?.map((item) => {
              return (
                <HStack spacing={1} key={item.name}>
                  <Text fontWeight={500} color="#131316" fontSize="10px">
                    {item.name}
                    <Text as="span">{` ${item.value}%`}</Text>
                  </Text>

                  <Box
                    boxSize={2}
                    borderRadius="full"
                    backgroundColor={item.color}
                  />
                </HStack>
              );
            })}
          </Stack>
        </Flex>

        <Box>
          <PieChart width={180} height={200}>
            <Pie
              data={data}
              //   cx={110}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
      </Flex>
    </Box>
  );
};
