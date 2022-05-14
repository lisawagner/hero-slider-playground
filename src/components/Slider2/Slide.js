/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { sliderItems } from '../../data'


const Slide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url("${content.img}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;


    `}
  >
    <SlideInnerWrap>
      {/* <ImageStyle>{content.img}</ImageStyle> */}
      <DetailsStyle>
        {content.title}
        {content.desc}
        {content.btn}
      </DetailsStyle>
    </SlideInnerWrap>
  </div>
)

const SlideInnerWrap = styled.div`
  grid-template-columns: none;
  grid-column-end: span 3;
  grid-row-end: span 6;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
`
const ImageStyle = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 999;

`

const DetailsStyle = styled.div`
  background: coral;
  z-index: 999;
`

// import styled from '@emotion/styled'

// const Slide = ({content}) => {
//   return (
//     <SlideStyle url={content}/>
    
//     // optionally could do <img src={} /> instead of using a div
//   )
// }

// const SlideStyle = styled.div`
//   height: 100;
//   width: 100%;
//   background-image: url("${ props => props.url}");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// `

export default Slide