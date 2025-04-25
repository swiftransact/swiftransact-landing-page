import 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-black relative text-center px-4">
      <p className="text-sm text-gray-400 mb-2">Crypto Off-Ramp Platform Built For Everyone</p>
      <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-snug">
        Swift Crypto Transactions for <br /> the Future of <span className="text-white underline decoration-orange-500">Finance.</span>
      </h1>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          Learn More
        </button>
        <button className="bg-black border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
          Join Our Community
        </button>
      </div>
    </section>
  );
}

export default Hero;