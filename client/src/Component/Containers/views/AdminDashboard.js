import React, { useState } from "react";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";


  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';


  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  

const AdminDashboard = () => {

      
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
    
    

    return (
      <div>
        <AccountBar />
        <NavigationBar />
        
        
        <div>
                <div style={{width: "100%"}}>
                    <h3>Tableau de bord administrateur</h3>
                </div>

                <Bar options={options} data={data} />
                
        </div>
        <Footer />
    </div>
    );
  }

export default AdminDashboard;

