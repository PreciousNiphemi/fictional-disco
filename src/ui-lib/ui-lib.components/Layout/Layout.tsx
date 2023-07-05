import React from "react";
import { SideBar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Box, BoxProps, useDisclosure } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
  bg?: string;
};
export const Layout = ({
  children,
  bg,
  ...restProps
}: LayoutProps & Partial<BoxProps>) => {
  const sideBarDisclosure = useDisclosure();

  return (
    <Box>
      <Box display="flex" minH="100vh" overflow="hidden">
        {/* sidebar */}
        <SideBar
          sidebarOpen={sideBarDisclosure.isOpen}
          setSidebarClose={sideBarDisclosure.onClose}
        />

        {/* ==== Content Area Start ===== */}
        <Box
          position="relative"
          overflowY="hidden"
          display="flex"
          flexDirection="column"
          flex={1}
          overflowX="hidden"
        >
          {/* Header   */}

          <Header
            sidebarOpen={sideBarDisclosure.isOpen}
            setSidebarOpen={sideBarDisclosure.onOpen}
          />

          {/* Main Content Start */}
          <Box as="main">
            <Box
              mx="auto"
              maxWidth="100vw"
              paddingX={{ base: 4, md: 6, lg: 10 }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
