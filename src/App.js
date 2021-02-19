import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeComponent from './components/CakeComponent';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';
import NewCakeComponent from './components/NewCakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer />
      {/*<ItemContainer cake isUpi/>
      <ItemContainer />
        <CakeComponent />
        <HooksCakeContainer />
        <IceCreamContainer />
      <NewCakeComponent /> */}
      </div>
    </Provider>
  );
}

export default App;
