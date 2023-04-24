import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
  Route,
  HashRouter,
  Routes,
  Navigate,
  NavLink,
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: (
    <NavLink exact to = "/">
     <h1>Testing Testing</h1>
     <a href="/#/tasks">To Tasks</a>
    </NavLink>
    )
  },
  {
    path: "/tasks",
    element: (
    <>
      <h1>TASKS</h1>
      <a href="/#/tasks/t1">Task 1</a>
    </>),
  },
  {
    path: "*",
    element: (
    <Navigate replace to="/"/>
    )
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HashRouter>

        <Routes>
          <Route path="" element={<h1>Gome!</h1>}/>
        </Routes>
      </HashRouter>
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
