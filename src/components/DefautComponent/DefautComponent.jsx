import React from 'react'
import HeaderCompoent from '../HeaderCompoent/HeaderCompoent'

const DefautComponent = ({children}) => {
  return (
    <div>
        <HeaderCompoent />
        {children}
    </div>
  )
}

export default DefautComponent