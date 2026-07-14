import { Routes, Route } from "react-router-dom";

function LandingPage() {
  return <h1>Welcome to CivicAI</h1>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRoutes;