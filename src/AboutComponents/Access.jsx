import React from "react";
import { Map } from "./Map";

export const Access = () => {
  return (
    <div className="AccessPage">
      <h1 className="sectionTitle">アクセス</h1>
      <Map
        cityName="東京"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6318123560263!2d139.75772137604204!3d35.686066872585734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c08ff0f8917%3A0x6df258eeb505808e!2z44CSMTAwLTAwMDEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Y2D5Luj55Sw77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1712977233540!5m2!1sja!2sjp"
        className="townMap"
        width="1120px"
        height="680px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        frameborder="0"
        aria-hidden="false"
        tabindex="0"
        title="東京の地図"
        addressNum="〒100-0001"
        addressTxt="東京都千代田区千代田1-1"
      />
      <Map
        cityName="大阪"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7401967172605!2d135.51647107600118!3d34.6865059729248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e72eec024ee9%3A0xc16016433ae5a8dc!2z44CSNTQwLTAwMDgg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65aSn5omL5YmN77yS5LiB55uu77yR4oiS77yS77yS!5e0!3m2!1sja!2sjp!4v1712977038159!5m2!1sja!2sjp"
        className="townMap"
        width="1120px"
        height="680px"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="大阪の地図"
        addressNum="〒540-8570"
        addressTxt="大阪府大阪市中央区大手前2-1-22"
      />
    </div>
  );
};
