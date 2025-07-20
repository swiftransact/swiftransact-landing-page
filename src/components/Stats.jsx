export default function Stats() {
  const stats = [
    {
      value: "50+",
      label: "Waitlisted Users",
    },
    {
      value: "100K+",
      label: "Transaction Volume (USD)",
    },
    {
      value: "99%",
      label: "Customer Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Numbers are <br className="hidden md:block" />
            telling our story
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
           In the world of crypto, numbers shape the narrative. 
           Market caps define dominance, block confirmations validate trust 
           and hash rates reveal network strength. 
           Each digit tells a tale of value, security 
           and the relentless march of decentralization.
          </p>
        </div>

        {/* Stat Box */}
        <div className="relative">
          {/* Glow Background */}
          <div className="absolute -inset-2 rounded-xl bg-purple-500 blur-2xl opacity-30" />

          <div className="relative bg-gradient-to-b from-[#1e1e2f] to-[#0a0a0f] rounded-xl overflow-hidden divide-y divide-[#2b2b3a] backdrop-blur-md border border-zinc-800">
            {stats.map((stat, index) => (
              <div key={index} className="px-8 py-6">
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
