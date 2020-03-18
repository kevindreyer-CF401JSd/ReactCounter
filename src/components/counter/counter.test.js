import React from 'react'
import Counter from './counter'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { exportAllDeclaration } from '@babel/types'

describe('<Counter />', () => {
  it('renders correctly, snapshot testing', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('For Up and Down events', () => {
    it('Assert state changes properly', () => {
      const component = mount(<Counter />)
      const buttonDown = component.find('#down')
      const buttonUp = component.find('#up')
      buttonDown.simulate('click')
      expect(component).toHaveState({ count: -1 })
      expect(component.find('div')).toIncludeText('-1')
      buttonUp.simulate('click')
      buttonUp.simulate('click')
      expect(component).toHaveState({ count: 1 })
      expect(component.find('div')).toIncludeText('1')
    })
    it('Assert that state is being transferred to the DOM', () => {

    })
  })
})