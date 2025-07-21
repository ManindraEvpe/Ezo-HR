import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-b from-primary/15 to-transparent relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Header />
      <div className="flex justify-center flex-col items-center pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
