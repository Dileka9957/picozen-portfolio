import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className=" bg-[#0a0a0a] dark:bg-[#0a0a0a] hover:text-teal-500 hover:opacity-[0.9] dark:text-teal-400 dark:hover:text-teal-500"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(3px)",
        // border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-16 h-9">
              <img
                src={logo}
                alt="PICOZEN Logo"
                className="object-contain w-14 h-14"
              />
            </div>
            <p className="text-sm text-teal-600 leading-relaxed py-4">
              {/* Building amazing digital experiences with modern web technologies. */}
              We're passionate about creating solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="  text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Portfolio", "Blog", "Careers"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Consulting",
                "Cloud Solutions",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors duration-300 block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn
                  className="text-teal-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-sm">
                  123 Business Street
                  <br />
                  Colombo, Western Province
                  <br />
                  Sri Lanka
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-teal-400 flex-shrink-0" size={20} />
                <a
                  href="tel:+94112345678"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-teal-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@yourcompany.com"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  info@yourcompany.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm text-gray-400">
                Get the latest updates and news right in your inbox!
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 md:ml-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 w-full sm:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-teal-400 text-center md:text-left">
              © {currentYear} Picozen. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-6">
              <a
                href="#"
                className="text-sm text-teal-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-teal-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-teal-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
