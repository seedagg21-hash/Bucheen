import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        width: '100%',
        height: '76px',
        background: '#fff',
        flexShrink: 0,
      }} />
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          left: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/circles.png"
          alt=""
          style={{
            width: '380px',
            height: '380px',
            objectFit: 'contain',
            opacity: 1,
          }}
        />
      </div>

      <div
        className="hidden md:flex max-w-[1200px] mx-auto px-12 items-center justify-end relative z-10"
        style={{ padding: '80px 48px 100px' }}
      >
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: '#1a1a2e',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.5px',
            }}
          >
            Find Match Now and<br />
            Develop Your Feelings
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#888',
              lineHeight: 1.8,
              marginBottom: '40px',
              fontWeight: 400,
              maxWidth: '440px',
            }}
          >
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful,
            and we have it all to get you to be successful
          </p>

          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#F26B4E',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 500,
              padding: '13px 22px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(242,107,78,0.25)',
              fontFamily: 'Poppins, sans-serif',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e05a3c')}
            onMouseLeave={e => (e.currentTarget.style.background = '#F26B4E')}
          >
            Read More
          </button>
        </div>
      </div>

      <div
        className="md:hidden relative z-10"
        style={{
          background: '#fff',
          padding: '78px 28px 98px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#1a1a2e',
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.3px',
          }}
        >
          Find Match Now and<br />
          Develop Your Feelings
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: '#888',
            lineHeight: 1.8,
            marginBottom: '32px',
            fontWeight: 400,
          }}
        >
          There are so many platforms from this Pokan to make a task
          manager manage all your time, the data needed is very useful,
          and we have it all to get you to be successful
        </p>

        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: '#F26B4E',
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            padding: '13px 28px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(242,107,78,0.25)',
            fontFamily: 'Poppins, sans-serif',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e05a3c')}
          onMouseLeave={e => (e.currentTarget.style.background = '#F26B4E')}
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
