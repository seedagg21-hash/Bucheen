import React, { useRef, useState } from 'react';

const profiles = [
  {
    id: 1,
    name: 'Javar Saripun',
    desc: 'A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.',
    cardBg: '#FDE8E4',    
    avatarBg: '#F9CEC4',  
    img: '/javar.png',
    textBg: '#fff',       
    stagger: 0,           
  },
  {
    id: 2,
    name: 'Fausiah Fera',
    desc: 'Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.',
    cardBg: '#E9E4FF',    
    avatarBg: '#C8BDFF',  
    img: '/fausiah.png',
    textBg: '#fff',       
    stagger: 44,          
  },
  {
    id: 3,
    name: 'Shreryl Olap',
    desc: 'Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.',
    cardBg: '#FDF6E3',    
    avatarBg: '#F5E6B8',  
    img: '/shreryl.png',
    textBg: '#fff',       
    stagger: 88,          
  },
];

const Popular = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef(null);

  const onMobileScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (scrollLeft >= maxScroll - 10) {
      if (activeIdx !== profiles.length - 1) setActiveIdx(profiles.length - 1);
      return;
    }

    const cardWidth = 230 + 16;
    const idx = Math.round(scrollLeft / cardWidth);
    const bounded = Math.max(0, Math.min(idx, profiles.length - 1));
    if (bounded !== activeIdx) setActiveIdx(bounded);
  };

  return (
    <section id="pricing" style={{ background: '#FFF8F7', paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>

        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 className="text-[24px] md:text-[46px] font-semibold md:font-medium" style={{ color: '#1a1a2e', marginBottom: '12px' }}>
            Most Popular In This Week
          </h2>
          <p style={{ fontSize: '16px', color: '#999', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            There are so many platforms from this Pokan to make a task<br />
            manager manage all your time, the data needed is very useful<br />
            and we have it all to get you to be successful
          </p>
        </div>

        <div className="md:hidden">
          <div
            ref={sliderRef}
            onScroll={onMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="w-[230px] min-w-[230px] snap-start"
                style={{
                  background: profile.cardBg,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    background: profile.avatarBg,
                    width: '100%',
                    height: '170px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '20px 20px 0 0',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={profile.img}
                    alt={profile.name}
                    style={{
                      width: '118px',
                      height: '142px',
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '16px 16px 24px', background: profile.textBg, flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a2e', marginBottom: '8px', lineHeight: 1.15 }}>
                    {profile.name}
                  </h3>
                  <p style={{ fontSize: '16px', fontWeight: 400, color: '#666', lineHeight: 1.45 }}>
                    {profile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            {profiles.map((profile, idx) => (
              <span
                key={profile.id}
                className="rounded-full transition-all"
                style={{
                  width: idx === activeIdx ? '8px' : '6px',
                  height: idx === activeIdx ? '8px' : '6px',
                  background: idx === activeIdx ? '#F26B4E' : '#F7C9C0',
                  opacity: idx === activeIdx ? 1 : 0.9,
                }}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-12 items-start">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="w-full md:w-[328px] md:h-[521px] mx-auto"
              style={{
                background: profile.cardBg,
                borderRadius: '20.87px',
                overflow: 'hidden',
                marginTop: `${profile.stagger}px`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                background: profile.avatarBg,
                width: '100%',
                height: '247px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '20.87px 20.87px 0 0',
                flexShrink: 0,
              }}>
                <img
                  src={profile.img}
                  alt={profile.name}
                  style={{
                    width: '159px',
                    height: '184px',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{ padding: '24px 22px 36px', background: profile.textBg, flex: 1 }}>
                <h3 style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a2e', marginBottom: '10px' }}>
                  {profile.name}
                </h3>
                <p style={{ fontSize: '16px', fontWeight: 400, color: '#888', lineHeight: 1.75 }}>
                  {profile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Popular;
