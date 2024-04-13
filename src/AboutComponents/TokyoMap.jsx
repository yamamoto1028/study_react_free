import React from 'react'

export const TokyoMap = () => {
  return (
    <div>
      <h2 className="mapName">東京</h2>
      <div className="mapContainer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6318123560263!2d139.75772137604204!3d35.686066872585734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c08ff0f8917%3A0x6df258eeb505808e!2z44CSMTAwLTAwMDEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Y2D5Luj55Sw77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1712977233540!5m2!1sja!2sjp" 
        className="townMap" width="1120" height="680" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" aria-hidden="false"
        tabindex="0" title="東京の地図"></iframe>
      </div>
      <div className="addressBox">
        <div className="addressNumber">〒100-0001</div>
        <div className="addressText">東京都千代田区千代田1-1</div>
      </div>
    </div>
  )
}
