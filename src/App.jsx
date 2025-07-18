import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/context/theme-provider";
import MainLayout from "@/components/layouts/main-layout";
import LandingPage from "@/pages/landing-page";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
