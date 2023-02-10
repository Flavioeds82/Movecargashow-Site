import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YH07YC6NNY');
  }, []);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YH07YC6NNY"></script>
    </>
  );
};

export default GoogleAnalytics;
