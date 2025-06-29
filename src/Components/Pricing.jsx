import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const prices = {
    monthly: [80, 120, 260],
    yearly: [800, 1200, 2600],
  };

  const handleToggle = (value) => {
    setIsYearly(value === 'yearly');
  };

  return ( 
    <main className="max-w-6xl mx-auto px-6 py-16 relative overflow-x-hidden">
      <FadeInSection direction='up'>
        <section className="text-center mb-16">
          <div className="uppercase text-orange-500 tracking-wide font-semibold text-xs mb-2">
                🤑 OUR PRICING
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Flexible plans for every creator</h1>
          <p className="text-gray-500 mb-6 text-sm md:text-base">No contracts. No hidden charges. Upgrade anytime.</p>
          <div className="inline-flex rounded-full bg-white shadow-md overflow-hidden">
            <button
              className={`px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded-l-full focus:outline-none focus:ring-2 ${
                !isYearly ? 'bg-orange-500 text-white ring-orange-500' : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => handleToggle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded-r-full focus:outline-none focus:ring-2 ${
                isYearly ? 'bg-orange-500 text-white ring-orange-500' : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => handleToggle('yearly')}
            >
              Yearly
            </button>
          </div>
        </section>
      </FadeInSection>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Starter', 'Pro', 'Elite'].map((plan, index) => {
          const price = isYearly ? prices.yearly[index] : prices.monthly[index];
          const isPopular = plan === 'Pro';

          return (
            <article
              key={plan}
              className={`rounded-3xl p-8 shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 ${
                isPopular ? 'relative bg-orange-500 text-white shadow-xl' : 'bg-white'
              }`}
            >
              {isPopular && (
                <div className="absolute top-4 right-4 bg-green-500 rounded-full px-3 py-1 text-xs tracking-wide font-semibold">
                  Most Popular
                </div>
              )}

              <div>
                <p className={`text-3xl font-extrabold mb-1 ${isPopular ? '' : 'text-gray-900'}`}>
                  ${price}{' '}
                  <span className={`text-sm font-normal ${isPopular ? 'text-white' : 'text-gray-500'}`}>
                    {isYearly ? '/year' : '/month'}
                  </span>
                </p>
                <h3 className={`font-semibold text-lg mb-3 ${isPopular ? '' : 'text-gray-900'}`}>{plan}</h3>
                <p className={`text-sm mb-5 ${isPopular ? 'text-white' : 'text-gray-500'}`}>
                  Perfect for {plan === 'Starter' ? 'beginners' : plan === 'Pro' ? 'growing teams' : 'large organizations'}
                </p>
                <ul className={`space-y-3 mb-10 text-sm ${isPopular ? 'text-white' : 'text-gray-600'}`}>
                  {[
                    'Custom branding',
                    'Analytics dashboard',
                    'Priority support',
                    'Team collaboration',
                    'Unlimited projects',
                  ].map((feature, i) => (
                    <li className="flex items-center gap-2" key={i}>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${isPopular ? '' : 'text-orange-500'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 ${
                  isPopular
                    ? 'bg-white text-orange-500 hover:bg-blue-50 focus:ring-white'
                    : 'bg-gray-100 text-orange-500 hover:bg-blue-50 focus:ring-green-200'
                }`}
              >
                {plan === 'Starter' ? 'Get Started' : 'Choose Plan'}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Pricing;
