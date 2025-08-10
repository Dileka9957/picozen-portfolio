import { HiOutlineGlobeAlt, HiOutlineOfficeBuilding } from "react-icons/hi";

export const Overview = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We are a leading digital transformation company dedicated to
              helping businesses thrive in the digital age. With over 15 years
              of experience, we've built a reputation for delivering innovative
              solutions that drive real results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts combines creativity, technical excellence, and
              strategic thinking to create digital experiences that engage users
              and deliver measurable business value.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <HiOutlineOfficeBuilding className="text-teal-600 w-6 h-6" />
                <span className="text-gray-700">5 Global Offices</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineGlobeAlt className="text-teal-600 w-6 h-6" />
                <span className="text-gray-700">30+ Countries Served</span>
              </div>
            </div>
            <button className="bg-teal-600 text-white mt-8 px-8 py-4 rounded-[42px] font-semibold hover:bg-blue-700 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
