import { shallowMount, Wrapper } from '@vue/test-utils'

import getMountOptions from '@/tests/helpers/getMountOptions'
import Component from '@/components/PrettyTextFromArray.vue'

describe('PrettyTextFromArray', () => {
  let wrapper: Wrapper<Component, Element>

  beforeEach(() => {
    wrapper = shallowMount(
      Component,
      getMountOptions({
        propsData: {
          textArray: [{ text: 'Hello' }, { text: 'World' }]
        }
      })
    )
  })

  it('renders the correct pretty text from props', () => {
    expect(wrapper.text()).toEqual('Hello ❤ World')
  })

  it('sets a data-text-items attribute with the length of the textArray', () => {
    expect(wrapper.attributes()['data-text-items']).toEqual('2')
  })

  it('sets a pretty-text--big class when textArray has 2 or more items', () => {
    expect(wrapper.classes()).toContain('pretty-text--big')
  })
})
