/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        //active slide 'dot' is coloured black, otherwise they are white dots
        background: ${active ? 'black' : 'white'};
      `}
    />
  )
}

const DotsTwo = ({ slides, activeIndex }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  )
}

export default DotsTwo