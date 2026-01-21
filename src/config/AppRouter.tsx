import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  />
                    <Route path="/about"  />
                </Routes>
            </BrowserRouter>
        </>
    );
}