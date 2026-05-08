import React, { useRef, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Tasha Wijayanti',
    location: 'Cimag',
    text: 'This Bucheen is so cool, I found the partner I wanted, and it\'s very easy to use and steady for bcheen, cheers and hopefully many other people can find their partner here',
    stars: 5,
    initials: 'TW',
    color: 'bg-gray-400',
  },
  {
    id: 2,
    name: 'Sizuka engkol',
    location: 'Indonesia',
    text: 'Very interesting services are provided to customers, access is very fast and we can also see the development of our partners, and the information provided is accurate and genuine.',
    stars: 5,
    initials: 'SE',
    color: 'bg-gray-400',
  },
  {
    id: 3,
    name: 'Gundam gandim',
    location: 'Bulgarian',
    text: "It's crazy that this application can make me find my soul mate very easily and quickly.",
    stars: 4,
    initials: 'GG',
    color: 'bg-gray-400',
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center gap-1 mt-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const mobileSliderRef = useRef(null);

  const scrollToIndex = (index) => {
    const target = (index + reviews.length) % reviews.length;
    setActiveIdx(target);
    if (mobileSliderRef.current) {
      const cardWidth = mobileSliderRef.current.clientWidth * 0.86 + 12;
      mobileSliderRef.current.scrollTo({
        left: target * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const prev = () => scrollToIndex(activeIdx - 1);
  const next = () => scrollToIndex(activeIdx + 1);

  const handleScroll = () => {
    if (!mobileSliderRef.current) return;
    const cardWidth = mobileSliderRef.current.clientWidth * 0.86 + 12;
    const idx = Math.round(mobileSliderRef.current.scrollLeft / cardWidth);
    const bounded = Math.max(0, Math.min(idx, reviews.length - 1));
    if (bounded !== activeIdx) setActiveIdx(bounded);
  };

  return (
    <section className="pt-[155px] pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[24px] md:text-[40px] font-semibold text-gray-900 leading-tight">
            What Our Customers
            <br />
            Have To Say
          </h2>

          <p className="mt-3 text-gray-500 text-[16px] font-normal">
            Here's what our customers say with Bucheen
          </p>
        </div>
        <div className="hidden md:grid grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                {review.text}
              </p>

              <StarRating count={review.stars} />
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div
            ref={mobileSliderRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-[86%] min-w-[86%] snap-start bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>

                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {review.text}
                </p>

                <StarRating count={review.stars} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-orange-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;