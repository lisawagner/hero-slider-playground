import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import SliderTwoContent from './SliderTwoContent'
import SlideTwo from './SlideTwo'
import ArrowTwo from './ArrowTwo'
import DotsTwo from './DotsTwo'

const getWidth = () => window.innerWidth

const SliderTwo = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    // translate: getWidth(),
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state
  const autoPlayRef = useRef()

  // here we have no dependency array, so it's going to update on every re-render
  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    }

    let interval = null
  
    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }
  
    return () => {
      if (props.autoPlay) {
        clearInterval(interval);
      }
    }
  }, [activeIndex])
  
  

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

  return (
    <SliderCSS>
      <SliderTwoContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <SlideTwo key={slide + i} content={slide} />
        ))}
      </SliderTwoContent>

      {/* when autoplay active, arrows and dots are inactive */}
      {
        !props.autoPlay && (
        <>
          <ArrowTwo direction="left" handleClick={prevSlide} />
          <ArrowTwo direction="right" handleClick={nextSlide} />
        </>
        )
      }

      <DotsTwo slides={props.slides} activeIndex={activeIndex} />
    </SliderCSS>
  )
}

SliderTwo.defaultProps = {
  slides: [],
  autoPlay: null
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

export default SliderTwo