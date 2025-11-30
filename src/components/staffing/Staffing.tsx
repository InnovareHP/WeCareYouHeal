import { ExternalLink, FileText, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function StaffResourcesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialty: "",
    position: "",
    message: "",
  });

  const benefits = [
    "Competitive Pay",
    "Flexible Scheduling (which is great for students)",
    "Weekly Pay with Direct Deposit",
    "Opportunities to Advance Your Career and Leadership Skills",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Board of Nursing Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Board of Nursing Links
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Please note that this is general information, you will need to
                reach out to each state's registry board for detailed
                information or any questions.
              </p>
              <a
                href="https://www.rncareers.org/guides/complete-list-of-state-boards-of-nursing/"
                target="_blank"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group"
              >
                View Links
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Employee Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Employee Information
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                If you would like to access your payroll information or view
                your employee documents, access GOCO here.
              </p>
              <a
                href="https://login.flex.paychex.com/login_static/UsernameOnly.html?lang=en&downtime=false"
                target="_blank"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group"
              >
                Link
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Career Advancement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Career Advancement
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Explore opportunities to grow your career and develop leadership
                skills.
              </p>
              <div className="inline-flex items-center text-gray-500 font-semibold">
                Coming soon!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-28 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Benefits */}
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
                  alt="Healthcare professionals"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Why Join Our Team?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="ml-3 text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Column - Form */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 ">
                Schedule a meeting with me
              </h3>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <a
                  href="https://doodle.com/sign-up-sheet/participate/9718d90b-71e7-4457-aac6-cbf165b0eb74/select"
                  target="_blank"
                >
                  Schedule a meeting with me
                </a>
              </Button>
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
