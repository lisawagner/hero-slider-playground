
import './App.css';
import Slider from './components/Slider/Slider';
import Slider2 from './components/Slider2/Slider2';
// import SliderTwo from './components/SliderTwo/SliderTwo';
// import Slider3 from './components/SliderThree/Slider3'
import images from './images'
import { sliderItems } from './data'


function App() {

  return (
    <>
      <div className="App">
        <h1>Slider Header Test</h1>
      </div>

      <Slider2 slides={sliderItems} />
      <Slider slides={images} />
      
      {/* <Slider3 slides={images} autoPlay={3} /> */}

      <div className="App">
        <h1>Slider Footer Test</h1>
      </div>
      
    </>
  );
}

export default App;
