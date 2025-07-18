import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
