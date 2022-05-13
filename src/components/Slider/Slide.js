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