import css from './App.css';
import MainView from './../MainView';
import ContextProvider from '../../Contexts';

function App() {
  return (
    
    <ContextProvider className={css.bg} >
      <MainView />
    </ContextProvider>
    
  );
}

export default App;
