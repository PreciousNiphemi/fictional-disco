import { Box, Text, Flex } from "@chakra-ui/react";

type ReportCardProps = {
  type: "location" | "referral";
};
export const ReportCard = ({ type }: ReportCardProps) => {
  return (
    <Box minW="sm" p="4" borderWidth="1" boxShadow="xs" borderRadius="12px">
      <Flex justifyContent="space-between">
        <Text color="#131316" fontSize="16px">
          {type === "location" ? "Top Locations" : "Top Referral source"}
        </Text>

        <Text color="#FF5403" fontSize="14px">
          View full reports
        </Text>
      </Flex>
    </Box>
  );
};
