import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  BookOpen,
  Heart,
  Home,
  Stethoscope,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const medicalServices = [
    {
      title: "Staffing Services",
      description:
        "Medical staffing services play a vital role in connecting healthcare facilities with qualified healthcare professionals. Whether it's nurses, physicians, therapists, or administrative staff, staffing agencies help match the skills and expertise of healthcare workers with the specific needs of healthcare organizations. They work to fill both temporary and permanent positions, ensuring that medical facilities have the staff they need to provide quality care. Medical staffing services offer flexibility to healthcare organizations by providing staffing solutions for various situations, such as seasonal demand, staff shortages, leaves, or specialized positions. They maintain a pool of qualified professionals who are seeking the opportunity to work.",
      icon: Stethoscope,
      image:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
    },
    {
      title: "CPR/BLS/Heartsaver Certifications",
      description:
        "CPR/BLS certifications and Heartsaver certifications are essential training programs that equip individuals with life-saving skills. CPR/BLS (Cardiopulmonary Resuscitation/Basic Life Support) certifications focus on techniques for adults, children, and infants, including chest compressions, rescue breathing, and the use of automated external defibrillators (AEDs), and basic airway management. Heartsaver certifications cater to the general public, teaching non-healthcare professionals, such as babysitters, parents, and workplace employees. The training covers CPR, AED usage, and first aid, addressing choking, injuries, and other life-threatening emergencies. These training programs are often provided through the American Heart Association.",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop",
    },
    {
      title: "Local and Travel Nursing Contracts",
      description:
        "Local and travel nursing contracts are agreements between healthcare professionals and healthcare facilities that outline the terms and conditions of their employment. Local nursing contracts typically refer to assignments within a specific geographic area, often close to the nurse's home. These contracts can vary in duration, ranging from short-term or long-term, depending on the staffing needs of the facility. Travel nursing contracts involve nurses accepting assignments in locations away from their home, often in different cities or even states. These contracts are typically for a fixed duration and offer benefits such as housing allowances, travel reimbursements, and competitive pay. Both local and travel nursing contracts aim to address temporary or ongoing staffing gaps in various healthcare settings, including hospitals, clinics, and long-term care facilities.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
  ];

  const nonMedicalServices = [
    {
      title: "Tutoring",
      description:
        "Tutoring services can cover a wide range of subjects, including math, science, language arts, foreign languages, test preparation, and more. Tutors work closely with students to understand their learning styles, strengths, and areas of improvement and implementing effective strategies to foster learning and growth. By offering personalized education and mentorship, tutoring services empower students to reach their full potential and achieve academic success.",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    },
    {
      title: "Public Health Consulting",
      description:
        "Public Health Consulting services play a crucial role in promoting and improving the overall health and well-being of communities and populations. These professionals work with governments, non-profit organizations, and institutions in public health and work collaboratively with organizations, governments, and individuals to address various health challenges and promote healthier lifestyles and communities.",
      icon: Activity,
      image:
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop",
    },
    {
      title: "Household Assistance",
      description:
        "Household Assistance services connect professionals with other fellow expertise in managing households back, efficiently and comfortably. Household assistance services cater to the unique needs of individuals and families, providing shopping, pet care, and general household maintenance. Their goal is to create a clean, tidy, and comfortable living environment while alleviating the burden of household chores and responsibilities.",
      icon: Home,
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Medical Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Medical Services
          </h2>
          <div className="h-1 w-24 bg-teal-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-teal-600 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed line-clamp-6">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 italic">
            We offer classes at all times of the day, one on one, and are 3rd
            party for certified and organizations.
          </p>
          <Button className="mt-6 bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg rounded-full shadow-lg">
            <a
              href="https://doodle.com/sign-up-sheet/participate/9718d90b-71e7-4457-aac6-cbf165b0eb74/select"
              target="_blank"
            >
              Book Now
            </a>
          </Button>
        </div>
      </div>

      {/* Non-Medical Services Section */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Non-Medical Services
            </h2>
            <div className="h-1 w-24 bg-teal-600 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonMedicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-teal-600 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed line-clamp-6">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
