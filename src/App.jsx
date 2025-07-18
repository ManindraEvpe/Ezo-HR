import { Route, Routes } from "react-router-dom";

import MainLayout from "@/components/layouts/main-layout";
import LandingPage from "@/pages/landing-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
