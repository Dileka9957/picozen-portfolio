import {
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaAward,
  // FaQuoteLeft,
  // FaLinkedin,
  // FaTwitter,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding, HiOutlineGlobeAlt } from "react-icons/hi";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "1000+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
  ];

  const values = [
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We are a leading digital transformation company dedicated to
                helping businesses thrive in the digital age. With over 15 years
                of experience, we've built a reputation for delivering
                innovative solutions that drive real results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experts combines creativity, technical excellence,
                and strategic thinking to create digital experiences that engage
                users and deliver measurable business value.
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
      </section>

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
      <section className="pb-16 border-gray-800">
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
      </section>
    </div>
  );
};

export default About;
