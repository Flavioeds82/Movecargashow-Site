import React, { useEffect } from 'react';

export const Banner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//pl18434907.highcpmrevenuenetwork.com/4101bbe4fd1c7debe2db51d68d098158/invoke.js';
    script.dataset.cfasync = 'false';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="container-4101bbe4fd1c7debe2db51d68d098158"></div>
    </div>
  );
};

export const BannerNative = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//pl18434907.highcpmrevenuenetwork.com/4101bbe4fd1c7debe2db51d68d098158/invoke.js';
    script.dataset.cfasync = false;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="container-4101bbe4fd1c7debe2db51d68d098158"></div>
  );
};
