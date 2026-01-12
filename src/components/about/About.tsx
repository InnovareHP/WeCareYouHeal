import { Star } from "lucide-react";

export default function AboutUsPage() {
  const testimonials = [
    {
      text: "When I started the process of applying for an adult foster care license in Michigan, I immediately knew I would have to work with a consultant to help with the development of the numerous policies needed for the license and to better understand the state law and regulations for adult foster care homes. We Care, You Heal has been an invaluable resource in this process. They were knowledgeable about the required policies and procedures for running an adult foster care, they were familiar with the resources in the area to support operations and they were timely and professional in their deliverables. I would highly recommend them and would work with them again!",
      author: "Key, Elmwood Acres Adult Care Home, Lansing, MI",
    },
    {
      text: "Gina was an amazing caregiver and always went above and beyond in her care.",
      author: "Nicole, Rockbridge Senior Care Home, Durham, NC",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Meet Gina Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image */}

            {/* Content */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Our Founder
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Meet Gina Adatsi, <span className="text-teal-600">MPH</span>
                </h2>
                <div className="w-24 h-1 bg-teal-500 rounded-full"></div>
              </div>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The owner, Gina, was{" "}
                  <strong className="text-gray-900">
                    born into healthcare
                  </strong>
                  . She has been surrounded by a multitude of healthcare
                  facilities her entire life. She has received her drive from
                  them and continued to pursue healthcare throughout her college
                  education.
                </p>
                <p>
                  She graduated from the{" "}
                  <strong className="text-gray-900">
                    University of North Carolina at Chapel Hill
                  </strong>{" "}
                  with a Master's in Public Health with a focus in Maternal,
                  Child and Family Health.
                </p>
                <p>
                  Since the age of 16, she has worked in a variety of settings
                  such as: assisted livings, adult foster care homes, hospice
                  care, home health care and skilled nursing facilities. Her
                  drive has fueled her interests in working within health,
                  specifically with the{" "}
                  <strong className="text-gray-900">
                    geriatric population
                  </strong>{" "}
                  and has allowed her to be a systems thinker.
                </p>

                <div className="pt-4">
                  <a
                    href="https://www.linkedin.com/in/georginaadatsi/"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Connect on LinkedIn
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-32 bg-white">
        <svg
          className="absolute bottom-0 w-full h-32"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#14b8a6"
          />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Here's what our clients are saying about us
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-teal-500 rounded-full"></div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full opacity-20 -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-teal-500 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="border-t-2 border-teal-200 mb-6"></div>

                  <div className="flex items-center justify-between">
                    {/* Author info */}
                    <div>
                      <p className="text-gray-900 font-bold text-lg">
                        {testimonial.author.split(",")[0]}
                      </p>
                      <p className="text-teal-600 text-sm font-medium">
                        {testimonial.author.split(",").slice(1).join(",")}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://doodle.com/sign-up-sheet/participate/9718d90b-71e7-4457-aac6-cbf165b0eb74/select"
              target="_blank"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Book Your Consultation
            </a>
            <p className="text-gray-600 mt-4 text-sm">
              Join our satisfied clients today
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <div className="relative h-32 bg-teal-500">
        <svg
          className="absolute top-0 w-full h-32"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
