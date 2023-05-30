import React from 'react'
import '../styles/what_this_info.css'
const What_this_info = (props) => {
  return (
    <div style={{'flexDirection': props.orientation.toString()}} className='outer_div_what_this_info'>

        <div style={{transform: `rotate(${props.rotation_angle}deg)`}} className='witers_data_image_outer_div_what_this_info'>
            <img className='witers_data_image_what_this_info' src={props.image_url} ></img>
            <div className='witers_data_image_date_what_this_info'>10 June, 2022</div>

        </div>

        <div className='writers_data_what_this_info'>
            <div className='writers_text_para_what_this_info'>Pariatur officia amet nostrud velit ad pariatur qui magna cillum. Voluptate est exercitation dolor aute nostrud excepteur. Sit consequat do nisi minim. Consectetur ut anim ut cupidatat. In ut aliqua veniam adipisicing officia sunt eu laborum nostrud nostrud aute. Sint veniam adipisicing quis deserunt velit commodo nisi culpa cillum excepteur. Reprehenderit consectetur eu sint proident aliqua tempor consequat officia cillum exercitation aliquip nostrud occaecat.</div>
            <div className='writers_name_what_this_info'>Mr. Loren</div>
            <div className='writers_designation_what_this_info'>Entrepreneur, Author, Speaker</div>
        </div>

    </div>
  )
}

export default What_this_info