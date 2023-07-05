import { Box, Text, Img, HStack } from "@chakra-ui/react";

type SidebarItemProps = {
  icon: string;
  name: string;
};
export const SidebarItem = ({ name, icon }: SidebarItemProps) => {
  //Todo. We can handle active sidebar item based on the routerPath. but for now. I will set it to dashboard
  return (
    <Box cursor="pointer">
      <HStack>
        <Img src={icon} alt={name} />

        <Text
          color={name === "Dashboard" ? "#FF5403" : "#56616B"}
          fontWeight={name === "Dashboard" ? "600" : "400"}
          fontSize="16px"
        >
          {name}
        </Text>
      </HStack>
    </Box>
  );
};
