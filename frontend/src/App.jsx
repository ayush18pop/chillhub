import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ExamplePage } from './pages/ExamplePage';
import { PortfolioPage } from './pages/PortfolioPage';

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  return isSignedIn ? children : <Navigate to="/login" />;
}

function App() {
  const { isSignedIn, isLoaded } = useUser();
  
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
