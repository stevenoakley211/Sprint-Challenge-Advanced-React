import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import NavBar from './components/Navbar'

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('NavBar is displayed', () => {
  const TestApp = rtl.render(<App />)
  const nav = TestApp.queryByText(/nav/)
})
it('players are loading', () =>{
  const TestApp =rtl.render(<App />)
  const player = TestApp.queryByText(/p/)
})