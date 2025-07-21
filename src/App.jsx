import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/context/theme-provider";
import MainLayout from "@/components/layouts/main-layout";
import LandingPage from "@/pages/landing-page";
import PrivacyPolicy from "@/pages/privacy-policy";
import ContactUs from "@/pages/contact-us";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress className="h-0.5" />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
