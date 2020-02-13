import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders wrapper', () => {
  const { getByTestId } = render(<App />)
  const wrapper = getByTestId('wrapper')
  expect(wrapper).toBeInTheDocument()
})

// describe('<MyComponent />', () => {
//   it('renders three <Foo /> components', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Route)).to.have.lengthOf(3);
//   });
// });