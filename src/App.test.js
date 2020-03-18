import React from 'react'
import App from './app'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('is alive at application start', () => {
    const component = shallow(<App />)
    expect(component.find('div')).toExist()
  })
  describe('For Up and Down events', () => {
    it('Assert state changes properly', () => {

    })
    it('Assert that state is being transferred to the DOM', () => {

    })
    it('Assert DOM stability via snapshot testing', () => {

    })
  })
})