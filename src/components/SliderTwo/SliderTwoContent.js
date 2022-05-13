/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const SliderTwoContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      /* width: 100vw; */
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderTwoContent