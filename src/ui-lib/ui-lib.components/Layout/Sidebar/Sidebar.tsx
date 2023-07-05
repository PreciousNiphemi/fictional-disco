import React from "react";
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";
import { SidebarItem } from "./SidebarItem";
//This can be named better
import { otherOneItems, othersTwoItems, othersThreeItems } from "./helper";

type SideBarProps = {
  sidebarOpen: boolean;

  setSidebarClose: () => void;
};

export const SideBar = ({ sidebarOpen, setSidebarClose }: SideBarProps) => {
  return (
    <Box
      maxH="100vh"
      width="250px"
      minHeight="80vh"
      backgroundColor="white"
      px="2rem"
      //   py="1.5rem"
      boxShadow="md"
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Box mt={{ base: "2rem", md: "", lg: "1rem" }} position="sticky">
        <Box py={{ base: "5.5", md: "6.5" }}>
          <img src="/images/brands/mainstack-logo.svg" alt="Logo" />
        </Box>
      </Box>
      <Box mt={3}>
        <Stack spacing={3}>
          {otherOneItems.map((navItem) => {
            return (
              <SidebarItem
                key={navItem.name}
                icon={navItem.icon}
                name={navItem.name}
              />
            );
          })}
        </Stack>

        <Box mt={6}>
          <Text color="#56616B" fontSize="12px">
            OTHERS 1
          </Text>
          <Stack mt={3} spacing={3}>
            {othersTwoItems.map((navItem) => {
              return (
                <SidebarItem
                  key={navItem.name}
                  icon={navItem.icon}
                  name={navItem.name}
                />
              );
            })}
          </Stack>
        </Box>

        <Box mt={6}>
          <Text color="#56616B" fontSize="12px">
            OTHERS 2
          </Text>
          <Stack mt={3} spacing={3}>
            {othersThreeItems.map((navItem) => {
              return (
                <SidebarItem
                  key={navItem.name}
                  icon={navItem.icon}
                  name={navItem.name}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>

      <Drawer
        size="xs"
        isOpen={sidebarOpen}
        placement="left"
        onClose={setSidebarClose}
      >
        <DrawerContent backgroundColor="white">
          <DrawerHeader mt={{ base: "1.5rem" }}>
            <Box py={{ base: "5.5", md: "6.5" }}>
              <img src="/images/brands/mainstack-logo.svg" alt="Logo" />
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Box mt={3}>
              <Stack spacing={3}>
                {otherOneItems.map((navItem) => {
                  return (
                    <SidebarItem
                      key={navItem.name}
                      icon={navItem.icon}
                      name={navItem.name}
                    />
                  );
                })}
              </Stack>

              <Box mt={6}>
                <Text color="#56616B" fontSize="12px">
                  OTHERS 1
                </Text>
                <Stack mt={3} spacing={3}>
                  {othersTwoItems.map((navItem) => {
                    return (
                      <SidebarItem
                        key={navItem.name}
                        icon={navItem.icon}
                        name={navItem.name}
                      />
                    );
                  })}
                </Stack>
              </Box>

              <Box mt={6}>
                <Text color="#56616B" fontSize="12px">
                  OTHERS 2
                </Text>
                <Stack mt={3} spacing={3}>
                  {othersThreeItems.map((navItem) => {
                    return (
                      <SidebarItem
                        key={navItem.name}
                        icon={navItem.icon}
                        name={navItem.name}
                      />
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
