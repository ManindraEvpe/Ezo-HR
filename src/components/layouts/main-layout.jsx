import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-b from-primary/15 to-transparent">
      <Header />
      <div className="flex justify-center flex-col items-center pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
