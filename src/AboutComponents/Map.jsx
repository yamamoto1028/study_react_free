import React from "react";

export const Map = (props) => {
  return (
    <div>
      <h2 className="mapName">{props.cityName}</h2>
      <div className="mapContainer">
        <iframe
          src={props.src}
          className={props.className}
          width={props.width}
          height={props.height}
          allowfullscreen={props.allowfullscreen}
          loading={props.loading}
          referrerpolicy={props.referrerpolicy}
          frameborder={props.frameborder}
          aria-hidden={props.ariaHidden}
          tabindex={props.tabindex}
          title={props.title}
        ></iframe>
      </div>
      <div className="addressBox">
        <div className="addressNumber">{props.addressNum}</div>
        <div className="addressText">{props.addressTxt}</div>
      </div>
    </div>
  );
};
