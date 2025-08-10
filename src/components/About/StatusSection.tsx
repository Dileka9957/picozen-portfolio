import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CounterProps = {
  target: number;
  duration?: number;
  label: string;
  delay?: number;
};

const Counter = ({
  target,
  duration = 2000,
  label,
  delay = 0,
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (end === 0) return;

    // Calculate increment time based on duration
    const incrementTime = duration / end;

    // Delay the start of the animation
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
        {count}+
      </p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const StatsSection = ({
  bgColor = "bg-[rgba(255,255,255,0.03)]",
  duration = 2000,
}) => {
  const stats = [
    { number: 50, label: "Happy Clients" },
    { number: 100, label: "Projects Completed" },
    { number: 5, label: "Years Experience" },
  ];
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              target={stat.number}
              label={stat.label}
              duration={duration}
              delay={index * 200} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
