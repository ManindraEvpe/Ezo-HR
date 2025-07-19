import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/context/theme-provider";
import MainLayout from "@/components/layouts/main-layout";
import LandingPage from "@/pages/landing-page";
import PrivacyPolicy from "@/pages/privacy-policy";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
