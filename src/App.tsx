import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { QuizInfo } from './pages/QuizInfo';
import { ExperimentProvider } from './components/ExperimentContext';
import { useState, useEffect } from 'react';

const withMousePosition = (WrappedComponent: any) => {
  return (props: any) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePositionChange = (e: { clientX: any; clientY: any; }) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = (props: { mousePosition: { x: number, y: number } }) => {
  if (!props.mousePosition) {
    return null;
  }

  return (
    <div>
      <p>Mouse position:</p>
      <div>
        <span>x: {props.mousePosition.x}</span>
        <span>x: {props.mousePosition.y}</span>
      </div>
    </div >
  );
};

const PointMouseLogger = (props: { mousePosition: { x: number, y: number } }) => {
  if (!props.mousePosition) {
    return null;
  }

  return (
    <p>
      ({props.mousePosition.x}, {props.mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <>
      <div>
        <header>Little Lemon Restorant</header>
        <PanelMouseTracker />
        <PointMouseTracker />
      </div>
      <ExperimentProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<QuizInfo />} />
        </Routes>
      </ExperimentProvider>
    </>
  );
}

export default App;
