import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function HomeHero() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Hero Section with Form */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-800 mb-6">
              Building Digital Solutions <br />
              <span className="text-teal-600 dark:text-teal-400">
                That Drive Growth
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10">
              We help businesses transform through custom software development,
              AI solutions, and cloud technologies.
            </p>
            <div className="space-x-4">
              <button className="bg-teal-600 dark:bg-teal-500 text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition">
                Get Started
              </button>
              <button className="bg-gray-600 dark:bg-gray-800 text-white dark:text-gray-100 px-8 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-300 dark:bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl shadow-xl dark:shadow-[rgba(255,255,255,0.05)]/60">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-teal-500 mb-6">
              Start Your Digital Transformation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-teal-500 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-teal-500 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-teal-500 mb-2"
                >
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 dark:bg-teal-500 text-white dark:text-gray-900 py-3 rounded-lg font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
