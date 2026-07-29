import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import AnalyticsCards from "../../components/citizen/analytics/AnalyticsCards";
import ComplaintTrendChart from "../../components/citizen/analytics/ComplaintTrendChart";
import DepartmentPieChart from "../../components/citizen/analytics/DepartmentPieChart";
import DashboardHeader from "../../components/citizen/analytics/DashboardHeader";
import SearchBar from "../../components/citizen/analytics/SearchBar";
import DashboardFilters from "../../components/citizen/analytics/DashboardFilters";
import ExportButtons from "../../components/citizen/analytics/ExportButtons";

function DashboardAnalytics() {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4 }}
    >
      <AnalyticsCards />

      <DashboardHeader />

      <SearchBar />

      <br />

      <DashboardFilters />

      <ExportButtons />

      <Grid
        container
        spacing={3}
        mt={1}
      >
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <ComplaintTrendChart />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <DepartmentPieChart />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardAnalytics;