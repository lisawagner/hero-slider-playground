import React from 'react'
import { useState } from 'react'

import styled from '@emotion/styled'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const Slider2 = (props) => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    // translate: getWidth(),
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    //edge case for last slide - needs to be reset to 0 index
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        activeIndex: 0,
        translate: 0
      })
    }

    //increment slide
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })

  }

  const prevSlide = () => {
    // edge case for initial slide, needs to be reset to last slide
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: props.slides.length - 1,
        translate: (props.slides.length - 1) * getWidth()
      })
    }

    //decrement slide
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })

  }

  console.log(props)

  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length  }>
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      Slider2
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />


      <Dots slides={props.slides} activeIndex={activeIndex} />
    </SliderCSS>
    
  )
}

const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  // overflow hidden allows us to hide the other slides offscreen
  background: #333;
`

export default Slider2