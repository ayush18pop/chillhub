import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { LoginPage } from './pages/LoginPage';
import { ExamplePage } from './pages/ExamplePage';
import './App.css';

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  return isSignedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/example" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/example"
          element={
            <ProtectedRoute>
              <ExamplePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
