const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Howlatexnow! At Howlatexnow, we are committed to delivering
          high-quality apparel solutions with style, precision, and innovation.
          Based in the vibrant heart of Winooski, Vermont, we combine
          craftsmanship with creativity to meet the dynamic needs of the fashion
          and textile industry.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is simple:{" "}
          <span className="font-semibold text-gray-800">
            to empower businesses and individuals with premium apparel that
            reflects quality and attention to detail.
          </span>{" "}
          We believe that fashion is more than just clothing—it’s a statement, a
          story, and an opportunity to express identity.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Howlatexnow?
        </h3>
        <ul className="text-left text-lg text-gray-600 mb-8 space-y-4">
          <li>
            <span className="font-semibold text-gray-800">
              Exceptional Quality:
            </span>{" "}
            We prioritize perfection in every stitch and fabric.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Customer-Centric Approach:
            </span>{" "}
            Your satisfaction is our top priority.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Sustainability:</span>{" "}
            We embrace eco-conscious practices to ensure a better tomorrow.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          What We Offer
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          We specialize in a wide range of apparel solutions, including:
        </p>
        <ul className="text-left text-lg text-gray-600 mb-8 space-y-4">
          <li>Customized Designs tailored to your needs.</li>
          <li>
            Diverse Collections featuring casual wear, uniforms, and specialized
            garments.
          </li>
          <li>Reliable Reselling Services to elevate your business.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          We are here to bring your vision to life. Let’s create something
          extraordinary together.
        </p>

        <div className="text-lg text-gray-600">
          <p>
            📍 <span className="font-semibold text-gray-800">Address:</span>{" "}
            2697 Essex Court, Winooski, VT 05404
          </p>
          <p>
            📞 <span className="font-semibold text-gray-800">Phone:</span>{" "}
            802-359-4125
          </p>
          <p>
            📧 <span className="font-semibold text-gray-800">Email:</span>{" "}
            <a href="mailto:BrianKStevens@dayrep.com" className="text-blue-600">
              BrianKStevens@dayrep.com
            </a>
          </p>
          <p>
            📧 <span className="font-semibold text-gray-800">Email:</span>{" "}
            <a href="mailto:BrianKStevens@dayrep.com" className="text-blue-600">
              briank@howlatex.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
