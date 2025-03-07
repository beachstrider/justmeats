import React from 'react'
import Slider from 'react-slick'

import { NavLink } from '@remix-run/react'
import { Image } from '@shopify/hydrogen-react'

const ProductsSlider = () => {
  var settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <div className="slider-container productsSlider">
      <Slider {...settings}>
        <div>
          <NavLink end prefetch="intent" to="/products/custom-bundle">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0672/4776/7778/files/chicken_thigh.webp'
              }
              sizes="(min-width: 45em) 50vw, 100vw"
              width={300}
              height={450}
            />
          </NavLink>{' '}
        </div>
        <div>
          <NavLink end prefetch="intent" to="/products/custom-bundle">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0672/4776/7778/files/pulled_pork.webp'
              }
              sizes="(min-width: 45em) 50vw, 100vw"
              width={300}
              height={450}
            />
          </NavLink>
        </div>
        <div>
          <NavLink end prefetch="intent" to="/products/custom-bundle">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0672/4776/7778/files/texas_brisket.webp'
              }
              sizes="(min-width: 45em) 50vw, 100vw"
              width={300}
              height={450}
            />
          </NavLink>
        </div>
        <div>
          <NavLink end prefetch="intent" to="/products/custom-bundle">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0672/4776/7778/files/chicken_breast.webp'
              }
              sizes="(min-width: 45em) 50vw, 100vw"
              width={300}
              height={450}
            />
          </NavLink>
        </div>
        <div>
          <NavLink end prefetch="intent" to="/products/custom-bundle">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0672/4776/7778/files/beef_tritip.webp'
              }
              sizes="(min-width: 45em) 50vw, 100vw"
              width={300}
              height={450}
            />
          </NavLink>
        </div>
      </Slider>
    </div>
  )
}

export default ProductsSlider
