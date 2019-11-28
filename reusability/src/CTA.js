import React from 'react'
import './styles/main.css';

function CTA(props) {
  return (
    <div className='border'>
      { props.children }
    </div>
  )
}

export default CTA
