import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import SliderContent from './SliderContent'
import Slide from './Slide'


// or destructure: const Slider = (props) => to const Slider = ({slides}) =>
const Slider = (props) => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  console.log(props)
  return (
    // <div style={{ height: "100vh", width: "100%", background: "#333" }} >
    //   <SliderContent translate={450} />
    // </div>
    
    <SliderCSS>
      <SliderContent translate={translate} transition={transition} width={getWidth()}  >
        slider content
      
        <Slide />
      </SliderContent>
    </SliderCSS>

  )
}

const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  background: #333;
`

export default Slider