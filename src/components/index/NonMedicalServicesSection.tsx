import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const NonMedicalServicesSection = () => {
  const services = [
    {
      title: "Public Health Consulting",
      icon: Users,
      description: "Expert guidance on health programs and policies",
      color: "from-teal-500 to-green-500",
      image: "/image/public-health.webp",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-2 inline-block">
            Beyond Healthcare
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Non-Medical Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Supporting your overall wellbeing with additional specialized
            services
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
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
              <Card className="group border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 overflow-hidden hover:shadow-xl">
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

                {/* Gradient Accent */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                {/* Content */}
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-colors duration-300"
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-gray-700 group-hover:text-teal-700 transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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

export default NonMedicalServicesSection;
