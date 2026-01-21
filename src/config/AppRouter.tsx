import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ViewClientsPage from "../pages/ViewClientsPage";
import AddClientPage from "../pages/AddClientPage";
import ViewClient from "../pages/ViewClient";
import ViewLeads from "../pages/ViewLeads";
import AddLead from "../pages/AddLead";
import ViewLead from "../pages/ViewLead";
import ViewProjects from "../pages/ViewProjects";
import AddProject from "../pages/AddProject";
import ViewProject from "../pages/ViewProject";
import Dashboard from "../pages/Dashboard";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />

                <Route path="/" element={<Dashboard />} />

                {/* Clients */}
                <Route path="clients" element={<ViewClientsPage />} />
                <Route path="clients/add" element={<AddClientPage />} />
                <Route path="clients/:clientId" element={<ViewClient />} />

                {/* Leads */}
                <Route path="leads" element={<ViewLeads />} />
                <Route path="leads/add" element={<AddLead />} />
                <Route path="leads/:leadId" element={<ViewLead />} />

                {/* Projects */}
                <Route path="projects" element={<ViewProjects />} />
                <Route path="projects/add" element={<AddProject />} />
                <Route path="projects/:projectId" element={<ViewProject />} />
            </Routes>
        </BrowserRouter >
    );
}
