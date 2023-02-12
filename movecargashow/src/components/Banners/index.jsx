import React, { useEffect, useState } from 'react';

export const BannerNative = () => {
    useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl18434907.highcpmrevenuenetwork.com/4101bbe4fd1c7debe2db51d68d098158/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    const intervalId = setInterval(() => {
      window.location.reload();
    }, 130000);

    return () => clearInterval(intervalId);
    }, []);
  

  return (
    
      <div id="container-4101bbe4fd1c7debe2db51d68d098158"></div>
   
  );
};

export const BannerNative2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl18434907.highcpmrevenuenetwork.com/4101bbe4fd1c7debe2db51d68d098158/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);
  })
  return (
    
      <div id="container-4101bbe4fd1c7debe2db51d68d098158"></div>
   
  );
};

export const BannerLateral = () => {
 useEffect(() => {
    const atOptions = {
      key: "24912721a4e43d770e62378228ec76fc",
      format: "iframe",
      height: 261,
      width: 152,
      params: {}
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `http${location.protocol === "https:" ? "s" : ""}://www.effectivecreativeformat.com/24912721a4e43d770e62378228ec76fc/invoke.js`;
    document.body.appendChild(script);
  }, []);

  return <div id="frame_24912721a4e43d770e62378228ec76fc" />;
};




