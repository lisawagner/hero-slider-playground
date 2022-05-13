import './App.css';
import Slider from './components/Slider/Slider';
import SliderTwo from './components/SliderTwo/SliderTwo';

const images = [
  "https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80",
  "https://images.unsplash.com/photo-1596993098914-4a3aa84704a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1504733895167-3ae3cb9e27b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1583846762363-5fc36ec494a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1589194375169-d5e34dfea4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80"
]

function App() {
  return (
    <>

      <div className="App">
        <h1>Slider Header Test</h1>
      </div>

      <Slider slides={images} />
      <SliderTwo slides={images} />

      <div className="App">
        <h1>Slider Footer Test</h1>
      </div>
      
    </>
  );
}

export default App;
