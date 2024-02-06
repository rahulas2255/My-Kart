import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ab ut velit laboriosam eum magnam blanditiis, iure fugit, beatae ullam suscipit facilis! Est iste magnam repellat doloremque debitis voluptatem eius!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox