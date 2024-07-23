import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register, Home, Login, NotFound } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const Logout = () => {
        localStorage.clear();
        return <Navigate to="/login" />;
    };

    const RegisterAndLogout = () => {
        localStorage.clear();
        return <Register />;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
