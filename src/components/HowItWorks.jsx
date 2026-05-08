import React from 'react';

const steps = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    text: 'Find your dating relationship in app and waiting until you get a notification, have a good relationship its started',
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: 'Dating with benefits and you redefine the expectations of a perfect relationship with your partner',
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    text: 'Ideal relationship makes your online dating relationship run more smoothly using this app',
  },
];

const HowItWorks = () => {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="px-[28px] md:px-0 md:pl-[140px] md:pr-6 max-w-6xl">
         <div className="flex flex-col lg:flex-row items-start gap-16">

          <div className="flex-1">
            <h2 className="text-[24px] md:text-[40px] font-semibold text-gray-900 leading-tight mb-10">
              How It Works To Find
              <br />
              Your Relationship
            </h2>

            <div className="flex flex-col gap-5">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-4 group">

                  <div className="flex flex-col items-center mt-[10px] md:mt-0">
                    <div className="w-16 h-16 rounded-full bg-[#ffd6c2] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                      <div className="group-hover:[&_svg]:text-white transition-colors duration-200">
                        {step.icon}
                      </div>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-1 h-10 md:h-8 bg-primary/20 mt-3 mb-1 md:my-0 md:mt-2" />
                    )}
                  </div>

                  <p className="text-gray-500 text-base leading-relaxed pt-3 max-w-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden" style={{ width: '100%', height: '38px', background: '#fff' }} />
      <div className="hidden md:block" style={{ width: '100%', height: '38px', background: '#fff' }} />
    </section>
  );
};

export default HowItWorks;
