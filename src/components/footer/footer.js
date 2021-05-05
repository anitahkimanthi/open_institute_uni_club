import React from 'react'
import { data } from '../data/content'

export default function footer () {
  
  // destructuring the imported data
  const footerData = data.footer

  return (
    <div className='row no-gutters justify-content-center pageFooter'>
      <div className='col-12 col-lg-10'>
        <div className='row no-gutters padding'>
          {footerData.map((item, i) => (
            <div className='col-12 col-sm-3 col-md-3' key={i}>
              <h5>
                <b>{item.title}</b>
              </h5>
              <ul className={item.class}>
                {item.content.map((text, index) => (
                  <li key={index} className='list-unstyled'>
                    <span>{text.icon}</span>
                    <span className='text'>{text.text} </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
