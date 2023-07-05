import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

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
      backgroundColor="#071932"
      px="1rem"
      py="1.5rem"
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Box mt={{ base: "2rem", md: "", lg: "1rem" }} position="sticky">
        <Box py={{ base: "5.5", md: "6.5" }}>
          <img src="/images/brands/olyves-logo.svg" alt="Logo" />
        </Box>
      </Box>
      <Drawer
        size="xs"
        isOpen={sidebarOpen}
        placement="left"
        onClose={setSidebarClose}
      >
        <DrawerContent backgroundColor="#071932">
          <DrawerHeader mt={{ base: "1.5rem" }}>
            <div className="py-5.5 lg:py-6.5">
              <img src="/images/brands/olyves-logo.svg" alt="Logo" />
            </div>
          </DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
