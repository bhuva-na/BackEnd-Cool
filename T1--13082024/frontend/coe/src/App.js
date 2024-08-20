import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Only import once
import COEdetails from "./components/COEdetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MBAprojects from "./components/MBAprojects";
import Cvwriting from "./components/Cvwriting";
import Interships from "./components/Interships";
import Consulting from "./components/consulting";
import EnquiryForm from "./components/enquiry";
import Header from "./components/header"; // Import Header component
import './App.css'; // Import additional CSS for modal styling

function App() {
  const [projects, setProjects] = useState([]);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false); // State for showing/hiding enquiry form

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
      path: "/mbaprojects",
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
    {
      path: "/enquiry",
      element: <EnquiryForm />,
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

  const handleLetsTalkClick = () => {
    setShowEnquiryForm(true);
  };

  const handleCloseEnquiryForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <div className="App">
      <Header onLetsTalkClick={handleLetsTalkClick} />
      <RouterProvider router={router} />

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleCloseEnquiryForm}>
              X
            </button>
            <EnquiryForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
