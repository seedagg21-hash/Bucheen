import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundColor: '#FFF1EF' }} className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-16">

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:flex-none md:w-[560px]">
              <a href="#home" className="text-2xl font-bold inline-block mb-4">
                <span style={{ color: '#756aa5ff' }}>Bu</span>
                <span className="text-primary">cheen</span>
              </a>
              <p className="text-gray-500 text-base leading-relaxed">
                The most accurate and simplest time tracking for all of<br />
                you. and we have been serving for more than 4 years<br />
                and have made you happy
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 md:ml-auto w-full md:w-auto">

              <div className="flex flex-row gap-10">
                <div>
                  <h4 style={{ fontSize: '18px' }} className="text-primary font-semibold mb-6">About Us</h4>
                  <ul className="space-y-3 text-base text-gray-500">
                    {['Our people', 'Our categories', 'Testimonial'].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-primary transition-colors duration-200">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '18px' }} className="text-primary font-semibold mb-6">Product</h4>
                  <ul className="space-y-3 text-base text-gray-500">
                    {['Task Management', 'Service', 'Task Schedule'].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-primary transition-colors duration-200">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '18px' }} className="text-primary font-semibold mb-6">Contact us</h4>
                <ul className="space-y-4 text-base text-gray-500">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(021) 3258 4930</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Pokan@Hola.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Sukabumi, Jawa Barat<br />Indonesia, IDN</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Bucheen. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
