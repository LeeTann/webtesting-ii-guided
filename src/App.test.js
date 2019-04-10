import React from 'react';
import { render } from 'react-testing-library'; 
import 'jest-dom/extend-expect'

import App from './App';


describe('<App />', () => {
  it('renders without crashing', () => {
    const helpers = render(<App />)
    // console.log('helpers', helpers)
  });

  it('renders "Hello World"', () => {
    const { getByText } = render(<App />)

    const text = getByText(/hello world/i)

    expect(text).toBeInTheDocument()
  })
})


