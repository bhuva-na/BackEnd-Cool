import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Only import once
import COEdetails from "./components/COEdetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MBAprojects from "./components/MBAprojects";
import Cvwriting from "./components/Cvwriting";
import Interships from "./components/interships";
import Consulting from "./components/consulting";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ceodetails",
      element: <COEdetails />,
    },
    {
      path: "/mbaprojects", // Fixed typo here
      element: <MBAprojects />,
    },
    {
      path: "/cvwriting",
      element: <Cvwriting />,
    },
    {
      path: "/interships",
      element: <Interships />,
    },
    {
      path: "/consulting",
      element: <Consulting />,
    },
  ]);

  const addProject = (newProject) => {
    axios
      .post("http://localhost:5000/projects", newProject)
      .then((response) => {
        setProjects([...projects, newProject]);
      })
      .catch((error) => {
        console.error("There was an error adding the project!", error);
      });
  };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
