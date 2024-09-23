import pastor from "../assets/images/pastor.jpeg";

export const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16 animate-fadeIn">
          {/* Author's Picture */}
          <div className="mb-12 lg:mb-0 w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={pastor}
                alt="Author"
                className="rounded-2xl shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover z-10 relative transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-purple-200 rounded-2xl transform rotate-6 -z-10"></div>
            </div>
          </div>

          {/* Author's Bio and Assessment View */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4 tracking-tight animate-slideIn">
              Meet the Author
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-fadeInUp">
              The free assessment test is designed to help participants identify
              their emotional states and their relative positions. It addresses
              those who are overwhelmed by emotions and aware of feelings but
              struggle to differentiate, understand, or appropriately respond to
              various emotions.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed animate-fadeInUp delay-100">
              Based on years of research on emotional intelligence by Olugbenga
              Akanle, this user-friendly assessment tool offers valuable
              insights into your emotional landscape.
            </p>

            {/* Author's Quote */}
            <div className="mt-12">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-purple-500 pl-4 py-2 animate-fadeInUp delay-200">
              &quot;The author, having completed two master&apos;s research degrees on
                emotional intelligence in Nigeria and England respectively, is
                now pursuing a PhD on the cutting-edge intersection between
                emotional and spiritual intelligences in Paris, France. As a
                certified Complementary Therapist and Accredited Association
                (CTAA) member, the author brings a unique perspective to this
                research. This study seeks to illuminate how these
                often-overlooked facets of human experience influence
                decision-making, interpersonal dynamics, and organizational
                outcomes. Emotional and spiritual intelligences are crucial in
                everyday life, shaping interactions in relationships, families,
                organizations, and communities. They are also essential for
                maintaining a healthy mental, emotional, physical, and
                psychological lifestyle.&quot;
              </blockquote>
              <h1 className="text-2xl font-bold text-purple-950 mt-4 animate-fadeInUp delay-300">
                Author&apos;s recommendation:
              </h1>
              <p className="text-lg text-gray-700 mt-2 animate-fadeInUp delay-400">
                Regularly taking an emotional intelligence assessment test is
                indeed a useful practice for enhancing emotional intelligence
                (EI) skills. The author recommends sincerity in answering the
                test for accurate results, which will help identify strengths
                and areas for improvement in personal and professional settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
