import { useState, useEffect, type SetStateAction } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Dummy portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "TechMart Solutions",
      category: "Web Development",
      description:
        "A full-stack e-commerce platform with advanced analytics, inventory management, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: "300% increase in online sales",
      year: "2024",
    },
    {
      id: 2,
      title: "AI-Powered CRM System",
      client: "SalesForce Pro",
      category: "AI Solutions",
      description:
        "Intelligent customer relationship management system with predictive analytics and automated lead scoring.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      results: "45% improvement in lead conversion",
      year: "2024",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Migration",
      client: "FinanceHub Corp",
      category: "Cloud Solutions",
      description:
        "Complete migration from on-premise to AWS cloud with microservices architecture and DevOps automation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      results: "60% reduction in infrastructure costs",
      year: "2023",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      client: "SecureBank Digital",
      category: "Mobile Development",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      results: "2M+ active users",
      year: "2023",
    },
    {
      id: 5,
      title: "IoT Manufacturing Dashboard",
      client: "SmartFactory Industries",
      category: "IoT Solutions",
      description:
        "Real-time monitoring dashboard for manufacturing equipment with predictive maintenance alerts.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "InfluxDB", "MQTT"],
      results: "35% reduction in downtime",
      year: "2023",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length]);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and grow through
            innovative digital solutions
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div
            className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image Side */}
              <div className="relative overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentItem.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.year}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-r-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    {currentItem.title}
                  </h3>

                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <p className="text-lg text-gray-700 font-medium">
                      {currentItem.client}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {currentItem.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <div className="flex items-center">
                      <div className="w-1 h-12 bg-teal-600 rounded-full mr-4"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Key Result
                        </p>
                        <p className="text-xl font-bold text-teal-600">
                          {currentItem.results}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition duration-300 backdrop-blur-sm z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition duration-300 backdrop-blur-sm z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentIndex
                  ? "bg-teal-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-500 text-sm">
            {currentIndex + 1} of {portfolioItems.length}
          </span>
        </div>
      </div>
    </section>
  );
}
