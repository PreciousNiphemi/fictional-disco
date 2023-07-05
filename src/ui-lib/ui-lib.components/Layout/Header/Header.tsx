import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: () => void;
};

export const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  return (
    <Box
      top="0"
      boxShadow="md"
      minHeight="78px"
      position="sticky"
      alignItems="center"
      dropShadow="#BDC6D333"
    >
      <Flex
        as="nav"
        alignItems="center"
        py={{ base: "1rem" }}
        px={{ base: "2rem" }}
      >
        <Flex
          flex={1}
          minW="0"
          maxW="auto"
          display={{ base: "flex", lg: "flex" }}
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap={{ base: 4, md: 4, lg: 0 }}>
            <Box
              onClick={setSidebarOpen}
              display={{ base: "block", md: "block", lg: "none" }}
            >
              <img src="/images/icons/hamburger.svg" alt="hamburger icon" />
            </Box>
            <Box>
              <Text
                color="#071932"
                fontWeight={700}
                letterSpacing={"2%"}
                fontSize={{ base: "16px", md: "20px", lg: "24px" }}
              >
                Dashboard
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={{ base: "4" }}>
            <Box
              display="flex"
              borderWidth="1px"
              padding="8px"
              borderColor="#ECF0F1"
              boxSize={{ base: "40px" }}
              borderRadius={{ base: "29px" }}
            >
              <img
                src="/images/icons/BellOutline.svg"
                alt="Notification icon"
              />
            </Box>
            <Text>HELLOOO?</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
