import { FaAward, FaHandshake, FaLightbulb, FaRocket } from "react-icons/fa";

export const Values = () => {
  const valuesData = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Creativity",
      description:
        "Our creative approach ensures unique and tailored solutions for every client challenge.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices.",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for excellence in every project, exceeding expectations consistently.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.03)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-teal-600 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
