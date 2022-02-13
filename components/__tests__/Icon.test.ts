import { shallowMount } from '@vue/test-utils'

import getMountOptions from '@/tests/helpers/getMountOptions'
import Component from '@/components/Icon.vue'

describe('PrettyTextFromArray', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Component, getMountOptions({}))

    expect(wrapper.html()).toMatchSnapshot()
  })
})
