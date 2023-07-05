import { Box } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/ui-lib";
import { Dashboard } from "@/features";

export default function DashboardPage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
