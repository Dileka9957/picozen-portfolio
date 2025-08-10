import // FaQuoteLeft,
// FaLinkedin,
// FaTwitter,
"react-icons/fa";
import StatsSection from "../components/About/StatusSection";
import { Overview } from "../components/About/Overview";
import { Values } from "../components/About/Values";

const About = () => {
  // const team = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "CEO & Founder",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  //     bio: "Visionary leader with 20+ years of industry experience.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "CTO",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  //     bio: "Tech innovator passionate about scalable solutions.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Head of Design",
  //     image:
  //       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  //     bio: "Creative genius transforming ideas into stunning designs.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     name: "David Kim",
  //     role: "Head of Operations",
  //     image:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  //     bio: "Operations expert ensuring smooth project delivery.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Company Overview */}
      <Overview />

      {/* Stats Section */}
      <StatsSection />

      {/* Values Section */}
      <Values />

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience
            and a shared passion for innovation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="pb-16 border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-[42px] font-semibold hover:bg-teal-700 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default About;
