import React, { useEffect, useRef } from 'react';

const InstagramEmbed = ({ permalink }) => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[360px] mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '16px',
          margin: '1px auto',
          maxWidth: '360px',
          minWidth: '326px',
          padding: 0,
          width: '100%',
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;