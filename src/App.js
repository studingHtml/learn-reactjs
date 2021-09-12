// import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Header from './components/Header';
import AlbumFeature from './features/Album/components';
import TodoFeature from './features/Todo';

function App() {

  return (
    <div className="App">
      {/* header, footer sẽ luôn luôn có còn những phần còn lại sẽ là phần động */}
      <Header />
      <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Album</NavLink></p>
      
      

      <Switch>
        <Redirect from="home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact/>
        <Route path="/" component={TodoFeature} exact/>
        <Route path="/todos" component={TodoFeature} exact/>
        <Route path="/albums" component={AlbumFeature} exact/>
      </Switch>
    </div>
  );
}

export default App;
