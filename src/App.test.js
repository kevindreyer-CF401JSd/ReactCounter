import React from 'react'
import App from './app'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<App />', () => {
  it('renders correctly, snapshot testing', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('is alive at application start, shallow', () => {
    const component = shallow(<App />)
    expect(component.find('div')).toExist()
    expect(component.find('Header')).toExist()
    expect(component.find('Footer')).toExist()
  })
})