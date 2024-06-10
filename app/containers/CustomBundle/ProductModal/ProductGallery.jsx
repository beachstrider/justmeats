import React, { Fragment, useEffect, useState } from 'react'

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

export function ProductGallary({ media }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <CarouselProvider
        className="flex justify-between"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={media.length}
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
          className="sm:w-[74%] w-[61%] overflow-hidden"
        >
          {media.map((slide, index) => (
            <Slide className="slide" index={index} key={index}>
              <div className="w-[100%]">
                <img
                  className="mx-auto sm:max-h-[344px] max-h-[240px]"
                  draggable="false"
                  src={slide.url}
                />
              </div>
            </Slide>
          ))}
        </Slider>

        <Thumbs
          media={media}
          currentSlide={currentSlide}
          onClick={setCurrentSlide}
        />
      </CarouselProvider>
    </>
  )
}

function Thumbs({ media, currentSlide, onClick }) {
  return (
    <div className="flex flex-col sm:gap-[16px] gap-[8px] thumbnail-container sm:w-[22%] w-[26%]">
      {media.map((slide, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onClick(index)}
          className={`focus:ring ring-offset-2 ring-indigo-500 focus:outline-none w-16 h-16 relative ${
            currentSlide === index ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <img
            src={slide.url}
            alt=""
            className="absolute top-0 bottom-0 left-0 right-0 object-contain w-full h-full"
          />
        </button>
      ))}
    </div>
  )
}
