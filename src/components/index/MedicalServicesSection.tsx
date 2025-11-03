"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Stethoscope, Users } from "lucide-react";

const MedicalServicesSection = () => {
  const services = [
    {
      title: "Staffing Services",
      icon: Users,
      description: "Professional healthcare staff placement for your facility",
      image: "/image/staffing-service.jpg",
    },
    {
      title: "CPR/BLS Certifications",
      icon: Award,
      description:
        "Comprehensive life-saving training and certification programs",
      image: "/image/certifications.webp",
    },
    {
      title: "Local and Travel Contracts",
      icon: Stethoscope,
      description: "Flexible healthcare staffing solutions nationwide",
      image: "/image/contracts.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700 text-white py-20 md:py-28 w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase mb-2 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Medical Services
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Comprehensive healthcare solutions delivered by experienced
            professionals
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  />
                </div>

                {/* Content */}
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="bg-yellow-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-teal-700" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-teal-100 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalServicesSection;
