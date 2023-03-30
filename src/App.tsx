import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { QuizInfo } from './pages/QuizInfo';
import { ExperimentProvider } from './components/ExperimentContext'

function App() {
  return (
    <>
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
