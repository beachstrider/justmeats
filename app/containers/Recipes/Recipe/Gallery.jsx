import React, { Fragment, useEffect, useState } from 'react'

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

export const Gallery = ({ imgs }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <CarouselProvider
      className="flex flex-col justify-between lg:flex-row lg:gap-0 gap-[20px]"
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={imgs.length}
      visibleSlides={1}
      step={1}
      dragStep={1}
      touchEnabled={false}
      dragEnabled={false}
      currentSlide={currentSlide}
      infinite={true}
    >
      <Slider
        classNameTray="tray"
        className="lg:w-[74%] w-full overflow-hidden"
      >
        {imgs.map((img, index) => (
          <Slide className="slide" index={index} key={index}>
            <div className="w-[100%]">
              <img className="mx-auto" draggable="false" src={img} />
            </div>
          </Slide>
        ))}
      </Slider>

      <Thumbs
        imgs={imgs}
        currentSlide={currentSlide}
        onClick={setCurrentSlide}
      />
    </CarouselProvider>
  )
}

function Thumbs({ imgs, currentSlide, onClick }) {
  return (
    <div className="flex lg:flex-col flex-row lg:gap-[16px] gap-[8px] thumbnail-container lg:w-[22%]">
      {imgs.map((img, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onClick(index)}
          className={`focus:ring ring-offset-2 ring-indigo-500 focus:outline-none w-16 h-16 relative ${
            currentSlide === index ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <img
            src={img}
            alt=""
            className="absolute top-0 bottom-0 left-0 right-0 object-contain w-full h-full"
          />
        </button>
      ))}
    </div>
  )
}
