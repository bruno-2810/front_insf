import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chamados from "./pages/consulta";

export default function Roteamento() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/chamados" element={<Chamados/>}/>
            </Routes>
        </BrowserRouter>
    )
}