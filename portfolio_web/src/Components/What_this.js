import React from 'react'
import '../styles/what_this.css'
import What_this_info from './What_this_info'

const What_this = () => {
  return (
    <div className='outer_div_what_this'>
        <div className='what_this_row_item'>
            <What_this_info orientation='row' rotation_angle='-10' image_url='./image_107.png'/>
        </div>

        <div className='what_this_row_item'>
            <What_this_info orientation='row-reverse' rotation_angle='10' image_url='./image_108.png' className='what_this_row_item'/>
        </div>

        <div className='what_this_row_item'>
            <What_this_info orientation='row' rotation_angle='-10' image_url='./image_107.png'/>
        </div>

    </div>

  )
}

export default What_this