import { useState } from "react";
import UserForm from "./components/StepperForm";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ExamplePage } from './pages/ExamplePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  return isSignedIn ? children : <Navigate to="/login" />;
}
export default function App() {
  const { isSignedIn, isLoaded } = useUser();
  const [userData, setUserData] = useState({});

  if (!isLoaded) return null;


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/example" /> : <LoginPage />} />
        <Route path="/login" element={isSignedIn ? <Navigate to="/example" /> : <LoginPage />} />
        <Route
          path="/example"
          element={
            <ProtectedRoute>
              <ExamplePage />
            </ProtectedRoute>
          }
        />

        <Route path="/:username" element={<PortfolioPage />} />

        {/* <Route path="/form" element={<UserForm onFormChange={setUserData} />} /> */}

      </Routes>
      <div className="min-h-screen bg-black text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-bold mb-4">👤 Fill Your Developer Info</h1>
          <UserForm onFormChange={setUserData} />
        </div>
      </div>
    </BrowserRouter>
  );
}
