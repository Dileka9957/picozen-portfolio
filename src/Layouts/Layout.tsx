import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import { Header } from "../components/Common/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
