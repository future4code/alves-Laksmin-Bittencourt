import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../Pages/AdminPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage";



export  const Router = () => {
    return(

        <BrowserRouter>
        
            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path="ListTrip" element={<ListTripsPage/>}/>
                <Route path="Admin" element={<AdminPage/>}/>
                <Route path="Form" element={<ApplicationFormPage/>}/>
                <Route path="CreateTrip" element={<CreateTripPage/>}/>
                <Route path="Login" element={<LoginPage/>}/>
                <Route path="Details" element={<TripDetailsPage/>}/>


            </Routes>
        
        </BrowserRouter>
    )
}
