/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'


const Slide = ({ content }) => (
  <div
    css={css`
    height: 100%;
    width: 100%;
    background-image: url("${content}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    `}
  />
)


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
      <SliderContent translate={translate} transition={transition} width={getWidth() * props.slides.length }  >
      {
        props.slides.map(slide => (
        <Slide key={slide} content={slide} />
        ))}
      
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