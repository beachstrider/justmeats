import { useState } from 'react'
import Slider from 'react-slick'

import { useLoaderData } from '@remix-run/react'

import { ProductCard } from '../CustomBundle/ProductCard'

const settings = {
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        className: 'center',
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        centerPadding: '20px',
      },
    },
    {
      breakpoint: 500,
      settings: {
        className: 'center',
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        centerPadding: '30px',
      },
    },
  ],
}

export const Featured = () => {
  const { collections } = useLoaderData()
  const [collection, setCollection] = useState(collections[0])

  const [activeIndex, setActiveIndex] = useState(0)

  const handleCollectionClick = (index, collection) => {
    setActiveIndex(index)
    setCollection(collection)
  }

  const slides = {}

  for (const el of collections) {
    slides[el.id] = el.products.nodes.map((product, index) => (
      <ProductCard
        type="home"
        key={index}
        product={product}
        className="mb-[60px]"
      />
    ))
  }

  return (
    <section className="relative z-0 sm:pt-[74px] sm:pb-[64px] pt-[35px] pb-[48px]">
      <div className="flex flex-col items-center overflow-hidden container-small sm:block">
        <div className="text-center font-hudson sm:text-[36px] text-[24px] font-bold sm:tracking-[1.8px] tracking-[1.2px]">
          NOW SERVING
        </div>
        <div className="w-[360px] sm:w-auto pt-6">
          <div className="slider-container homeFeaturedSlider">
            <Slider {...settings}>{slides[collection.id]}</Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
