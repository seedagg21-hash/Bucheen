import React, { useState } from 'react';
const CustomSelect = ({ value, onChange, options, fontSize = '15px', paddingLeft = '0px' }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} style={{ flex: 1, position: 'relative', paddingLeft }}>
      <div onClick={() => setOpen(o => !o)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', userSelect: 'none' }}
      >
        <span style={{ fontSize, color: '#555', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>{value}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: '12px', height: '12px', marginLeft: '8px', flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff', borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.14), 0 4px 14px rgba(0,0,0,0.06)',
          overflow: 'hidden', minWidth: '150px', zIndex: 999,
        }}>
          {options.map((opt, i) => (
            <div key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              onMouseEnter={e => { if (value !== opt) e.currentTarget.style.background = '#FFF8F7'; }}
              onMouseLeave={e => { if (value !== opt) e.currentTarget.style.background = '#fff'; }}
              style={{
                padding: '14px 22px', fontSize: '15px', fontFamily: 'Poppins, sans-serif',
                color: value === opt ? '#FF725E' : '#444',
                fontWeight: value === opt ? 600 : 400,
                background: value === opt ? '#FFF5F4' : '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                borderBottom: i < options.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}
            >
              {value === opt
                ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="#FF725E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ width: '14px', height: '14px', flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                : <span style={{ width: '14px', display: 'inline-block' }} />}
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Phone1 = () => (
  <div
    style={{
      width: '260px',
      height: '535px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 20,
      marginRight: '-28px',
      borderRadius: '20px',
      background: '#FABDAF',
      boxShadow: '0 24px 48px rgba(242,107,78,0.22), 0 6px 18px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: '18px',
        margin: '0 10px 12px 10px',
        padding: '28px 18px 18px',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '17px', fontWeight: 500, color: '#FF725E', lineHeight: 1.4, marginBottom: '10px' }}>
        Find Your Dream<br />Partner Now
      </p>
      <p style={{ fontSize: '10px', color: '#999', lineHeight: 1.7, marginBottom: '16px', fontWeight: 400 }}>
        Find your partner now, all<br />easy with us.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '16px' }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e0e0e0', display: 'block' }} />
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e0e0e0', display: 'block' }} />
        <span style={{ width: '18px', height: '7px', borderRadius: '10px', background: '#FF725E', display: 'block' }} />
      </div>
      <div style={{ background: '#FF725E', color: '#fff', fontSize: '11px', fontWeight: 400, padding: '9px 0', borderRadius: '8px' }}>
        Get Started
      </div>
    </div>
  </div>
);

const Phone2 = () => (
  <div
    style={{
      width: '260px',
      height: '535px',
      flexShrink: 0,
      transform: 'rotate(14deg)',
      transformOrigin: 'bottom left',
      position: 'relative',
      zIndex: 10,
      marginBottom: '-30px',
      background: '#fff',
      borderRadius: '20px',
      boxShadow: '24px 32px 64px rgba(0,0,0,0.10)',
      padding: '18px 14px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      overflow: 'hidden',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FABDAF', flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: '12px', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.2 }}>Hello Naida</div>
        <div style={{ fontSize: '9px', color: '#bbb', fontWeight: 400, marginTop: '2px' }}>Find Your Love Now</div>
      </div>
    </div>
    <div style={{ background: '#FABDAF', borderRadius: '12px', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      <div style={{ background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '8px 12px', width: '100%' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#aaa', fontWeight: 400 }}>Male</span>
          <span style={{ fontSize: '7px', color: '#ccc' }}>▼</span>
        </div>
        <div style={{ width: '1px', height: '14px', background: '#eee', margin: '0 8px' }} />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#aaa', fontWeight: 400 }}>Female</span>
          <span style={{ fontSize: '7px', color: '#ccc' }}>▼</span>
        </div>
      </div>
      <div style={{ background: '#FF725E', color: '#fff', fontSize: '10px', fontWeight: 400, padding: '7px 32px', borderRadius: '6px', textAlign: 'center' }}>
        Find Now
      </div>
    </div>
    <div style={{ overflow: 'hidden', marginTop: '6px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', marginBottom: '10px' }}>Event Datting</div>
      <div style={{ display: 'flex', gap: '8px', overflow: 'hidden' }}>
        <div style={{ flex: '0 0 118px' }}>
          <div style={{ height: '132px', background: '#FABDAF', borderRadius: '10px', marginBottom: '6px' }} />
          <div style={{ fontSize: '9px', color: '#555', fontWeight: 500 }}>Wedding party</div>
        </div>
        <div style={{ flex: '0 0 118px' }}>
          <div style={{ height: '132px', background: '#9B8EF0', borderRadius: '10px', marginBottom: '6px' }} />
          <div style={{ fontSize: '9px', color: '#555', fontWeight: 500 }}>Birtday Dinda po...</div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: '16px', overflow: 'hidden' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', marginBottom: '10px' }}>Most Popular</div>
      <div style={{ display: 'flex', gap: '5px', overflow: 'hidden' }}>
        {[
          { src: '/javar.png', bg: '#F9CEC4' },
          { src: '/fausiah.png', bg: '#C8BDFF' },
          { src: '/shreryl.png', bg: '#F5E6B8' },
          { src: '/javar.png', bg: '#D4E8FF' },
        ].map((av, i) => (
          <div key={i} style={{ width: '62px', height: '62px', borderRadius: '50%', background: av.bg, overflow: 'hidden', flexShrink: 0 }}>
            <img src={av.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);


const Hero = () => {
  const [gender, setGender] = useState({ looking: 'Male', for: 'Female' });

  return (
    <>
      <section
        id="home"
        className="hidden md:flex relative overflow-hidden items-center"
        style={{ background: '#fdf5f3', minHeight: '100vh' }}
      >
        <div
          style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', padding: '42px 24px 80px', display: 'flex', alignItems: 'center', gap: '80px' }}
        >
          <div style={{ flex: '1 1 560px', minWidth: '320px' }}>
            <h1 style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', fontWeight: 600, color: '#1a1a2e', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-1px' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Find <span style={{ color: '#FF725E' }}>Match Now</span></span><br />
              and Grow Your<br />Feelings
            </h1>
            <p style={{ fontSize: '16px', color: '#777', lineHeight: 1.8, maxWidth: '500px', marginBottom: '26px' }}>
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful, and we have it all to get you to be successful
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', borderRadius: '16px', padding: '10px 10px 10px 28px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', gap: '12px' }}>
              <CustomSelect value={gender.looking} onChange={val => setGender({ ...gender, looking: val })} options={['Male', 'Female']} fontSize="16px" />
              <div style={{ width: '1px', height: '24px', background: '#E2E8F0', margin: '0 12px' }} />
              <CustomSelect value={gender.for} onChange={val => setGender({ ...gender, for: val })} options={['Female', 'Male']} fontSize="16px" />
              <button style={{ background: '#FF725E', color: '#fff', fontWeight: 600, fontSize: '16px', padding: '16px 36px', borderRadius: '12px', border: 'none', cursor: 'pointer', marginLeft: '12px', boxShadow: '0 8px 20px rgba(242,107,78,0.25)', fontFamily: 'Poppins, sans-serif', transition: 'background 0.2s' }} onMouseEnter={e => (e.currentTarget.style.background = '#e05a3c')} onMouseLeave={e => (e.currentTarget.style.background = '#FF725E')}>
                Find Now
              </button>
            </div>
          </div>
          <div style={{ flex: '1 1 420px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minHeight: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }} className="md:-translate-x-[60px]">
              <Phone1 /><Phone2 />
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-mobile"
        className="md:hidden relative"
        style={{ background: '#fdf5f3', overflowX: 'hidden' }}
      >
        <img src="/circles.png" aria-hidden="true" alt=""
          style={{ position: 'absolute', width: '320px', height: '320px', objectFit: 'contain',
            left: '-100px', top: '-10px', zIndex: 1, opacity: 0.85, pointerEvents: 'none' }} />
        <img src="/circles.png" aria-hidden="true" alt=""
          style={{ position: 'absolute', width: '280px', height: '280px', objectFit: 'contain',
            right: '-100px', top: '200px', zIndex: 1, opacity: 0.80, pointerEvents: 'none' }} />
        <img src="/circles.png" aria-hidden="true" alt=""
          style={{ position: 'absolute', width: '300px', height: '300px', objectFit: 'contain',
            left: '-110px', bottom: '40px', zIndex: 1, opacity: 0.82, pointerEvents: 'none' }} />

        <div style={{
          position: 'relative',
          height: '340px',
          width: '100%',
          marginTop: '14px',
          zIndex: 2,
        }}>
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translateX(calc(-50% - 18px)) scale(0.60)',
            transformOrigin: 'top center',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
            <Phone1 />
            <Phone2 />
          </div>
        </div>
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '40px 28px 72px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '40px', fontWeight: 700, color: '#1a1a2e',
            lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px',
          }}>
            Find <span style={{ color: '#FF725E' }}>Match Now</span><br />
            and Grow Your<br />Feelings
          </h1>

          <p style={{
            fontSize: '16px', color: '#888', lineHeight: 1.75,
            marginBottom: '28px', maxWidth: '320px',
          }}>
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful,
            and we have it all to get you to be successful
          </p>

          <div style={{
            display: 'flex', alignItems: 'center', background: '#fff',
            borderRadius: '12px', padding: '12px 20px', width: '100%',
            maxWidth: '280px', boxShadow: '0 10px 24px rgba(0,0,0,0.07)', marginBottom: '16px',
          }}>
            <CustomSelect value={gender.looking} onChange={val => setGender({ ...gender, looking: val })} options={['Male', 'Female']} fontSize="15px" />
            <div style={{ width: '1px', height: '22px', background: '#E5E7EB', flexShrink: 0 }} />
            <CustomSelect value={gender.for} onChange={val => setGender({ ...gender, for: val })} options={['Female', 'Male']} fontSize="15px" paddingLeft="16px" />
          </div>

          <button style={{
            background: '#FF725E', color: '#fff', fontWeight: 600, fontSize: '16px',
            lineHeight: 1, padding: '15px 52px', borderRadius: '12px', border: 'none',
            cursor: 'pointer', boxShadow: '0 8px 20px rgba(242,107,78,0.25)', fontFamily: 'Poppins, sans-serif',
          }}>
            Find Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
