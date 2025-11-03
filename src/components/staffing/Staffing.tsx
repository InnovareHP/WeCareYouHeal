import { ExternalLink, FileText, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

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
                href="https://secure.goco.io/login"
                target="_blank"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group"
              >
                GOCO Sign-In
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
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Join our team
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specialty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="specialty"
                    required
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Position Applying For{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="nurse">Registered Nurse</option>
                    <option value="cna">Certified Nursing Assistant</option>
                    <option value="caregiver">Caregiver</option>
                    <option value="admin">Administrative Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
