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
                <Route path="ListTrip/:ListaDeViagens" element={<ListTripsPage/>}/>
                <Route path="Admin/:Administrador" element={<AdminPage/>}/>
                <Route path="Form/:Formulario" element={<ApplicationFormPage/>}/>
                <Route path="CreateTrip/:CriarViagens" element={<CreateTripPage/>}/>
                <Route path="Login/:Logar" element={<LoginPage/>}/>
                <Route path="Details/:Detalhes" element={<TripDetailsPage/>}/>


            </Routes>
        
        </BrowserRouter>
    )
}
