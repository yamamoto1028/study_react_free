import React from 'react'

export const OsakaMap = () => {
  return (
    <div>
      <h2 className="mapName">大阪</h2>
      <div className="mapContainer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7401967172605!2d135.51647107600118!3d34.6865059729248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e72eec024ee9%3A0xc16016433ae5a8dc!2z44CSNTQwLTAwMDgg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65aSn5omL5YmN77yS5LiB55uu77yR4oiS77yS77yS!5e0!3m2!1sja!2sjp!4v1712977038159!5m2!1sja!2sjp" 
        className="townMap" width="1120" height="680" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="大阪の地図"></iframe>
      </div>
      <div className="addressBox">
        <div className="addressNumber">〒540-8570</div>
        <div className="addressText">大阪府大阪市中央区大手前2-1-22</div>
      </div>
    </div>
  )
}

