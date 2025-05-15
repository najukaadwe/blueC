import React from 'react';

const stats = [
  {
    icon: '/icons/tech-spend.png',
    value: '60%',
    label: 'Less Tech Spending',
  },
  {
    icon: '/icons/opex.png',
    value: '20%',
    label: 'Lower OPEX',
  },
  {
    icon: '/icons/engagement.png',
    value: '200%',
    label: 'Higher Learner Engagement',
  },
];

const ScaleImpact = () => {
  return (
    <section className="relative text-[#ffffff] bg-[#0a070b] py-16 px-4 overflow-hidden">
      {/* Background Globe Image */}
      <img
        src="/images/globe-dots.png"
        alt="Globe dots"
        className="absolute right-0 top-0 h-full object-cover z-0 pointer-events-none hidden md:block"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className=" font-medium mb-2">Hit the Ground Running</p>
        <h2 className="text-4xl font-bold  mb-4">
          Scale Within Days Instead of Months
        </h2>
        <p className=" mb-12 max-w-2xl">
          Supercharge your training operations with our speed, precision, and excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto bg-gray-100 p-4 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <img src={item.icon} alt={item.label} className="h-8 w-8" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleImpact;
