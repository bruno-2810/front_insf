import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/login";

export default function Roteamento() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}