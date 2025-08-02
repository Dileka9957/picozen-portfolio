import FloatingNavBar from "../components/Navbar";
import logo from "../assets/logo.webp";

export const Header = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between sm:gap-10 items-center">
        <div className="relative w-30 h-12">
          <img
            src={logo}
            alt="PICOZEN Logo"
            className="object-contain w-22 h-22"
          />
        </div>
        <FloatingNavBar />
        {/* <button className="md:hidden">☰</button> */}
      </div>
    </nav>
  );
};

export default FloatingNavBar;
