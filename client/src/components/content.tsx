import { Resume } from "./resume/resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";

export function Content()
{
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="resume" element={ <Resume /> } />
                </Routes>
            </BrowserRouter>
        </main>
    );
}