import { Container } from "@mui/material";
import { useState, useEffect } from "react";

import DashboardHeader from "../../components/citizen/dashboard/DashboardHeader";
import WelcomeCard from "../../components/citizen/dashboard/WelcomeCard";
import SummaryCards from "../../components/citizen/dashboard/SummaryCards";
import RecentComplaints from "../../components/citizen/dashboard/RecentComplaints";

import Loader from "../../components/common/Loader";


function Dashboard() {


  const [loading, setLoading] = useState(true);

  const [complaints, setComplaints] = useState([]);



  useEffect(() => {


    const fetchDashboardData = async () => {


      try {


        // Temporary Dummy Data
        // Backend connect zalyavar ithe API call yeil


        const dummyComplaints = [

          {
            id: 1,
            title: "Road Damage",
            category: "Road",
            status: "Pending",
            priority: "High",
          },


          {
            id: 2,
            title: "Street Light Not Working",
            category: "Electricity",
            status: "In Progress",
            priority: "Medium",
          },


          {
            id: 3,
            title: "Garbage Collection Issue",
            category: "Cleanliness",
            status: "Resolved",
            priority: "Low",
          }

        ];



        setComplaints(dummyComplaints);



      } catch(error) {


        console.log(
          "Dashboard Error:",
          error
        );


      } finally {


        setLoading(false);


      }


    };



    fetchDashboardData();



  }, []);




  if(loading){

    return <Loader />;

  }




  return (

    <Container
      maxWidth="xl"
      sx={{
        py:4
      }}
    >


      <DashboardHeader />


      <WelcomeCard />


      <SummaryCards />



      <RecentComplaints
        complaints={complaints}
      />


    </Container>

  );


}


export default Dashboard;