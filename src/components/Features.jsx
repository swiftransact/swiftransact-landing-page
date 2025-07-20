import { FaBolt, FaShieldAlt, FaHeadphones, FaThLarge } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Speed",
      icon: <FaBolt size={24} />,
      description:
        "Swiftransact is designed to process high-traffic transactions swiftly, ensuring you experience zero delays. Whether you're converting fiat to crypto or making transfers, the platform is optimized to handle large volumes smoothly.",
    },
    {
      title: "Security",
      icon: <FaShieldAlt size={24} />,
      description:
        "Security is our top priority. With bank-grade encryption, real-time monitoring and multi-layered defense mechanisms, Swift Transact ensures that your funds and personal information are always protected.",
    },
    {
      title: "24/7 Support",
      icon: <FaHeadphones size={24} />,
      description:
        "Swift Transact offers round-the-clock support to address any questions or technical issues. Whether you need help with a transaction or assistance, our support team is always ready to ensure a smooth experience.",
    },
    {
      title: "Interface",
      icon: <FaThLarge size={24} />,
      description:
        "Swift Transact is designed to process high-traffic transactions swiftly, ensuring you experience zero delays. Whether you're converting fiat to crypto or making transfers, the platform is optimized to handle large volumes smoothly.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-lg text-gray-400 font-medium">Why Use Swiftransact</h2>
        <p className="text-sm text-gray-300 mt-2">
          Swiftransact offers secure, fast, and easy crypto transactions.
          <br />
          Spend your crypto effortlessly without p2p.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 bg-zinc-900/50 text-left backdrop-blur-sm hover:bg-zinc-800/70 transition-all ${
              feature.title ===  "border border-zinc-700" 
            }`}
          >
            <div className="text-orange-500 mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
