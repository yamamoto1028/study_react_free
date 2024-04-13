import React from 'react'
import { TokyoMap } from './TokyoMap'
import { OsakaMap } from './OsakaMap'

export const Access = () => {
  return (
    <div className="AccessPage">
      <h1 className="sectionTitle">アクセス</h1>
      <TokyoMap />
      <OsakaMap />
    </div>
  )
}

