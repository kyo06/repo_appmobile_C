
import './App.css';
import MainView from './../MainView';
import ContextProvider from '../../Contexts';

function App() {
  return (
    <ContextProvider>
      <MainView />
    </ContextProvider>
  );
}

export default App;
