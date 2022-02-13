import { shallowMount } from '@vue/test-utils'

import type RelaxedVue from '@/tests/RelaxedVue'
import getMountOptions from '@/tests/helpers/getMountOptions'
import mixin from '@/mixins/text'

describe('text mixin', () => {
  it('shows an install prompt if exists in accessor', () => {
    const wrapper = shallowMount<RelaxedVue>(
      {},
      getMountOptions({
        mixins: [mixin]
      })
    )

    wrapper.vm.changeText('hey!')

    expect(wrapper.vm.text).toEqual('hey!')
  })
})
