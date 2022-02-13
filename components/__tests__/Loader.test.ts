import { shallowMount, Wrapper } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import getMountOptions from '@/tests/helpers/getMountOptions'
import Component from '@/components/Loader.vue'

describe('ArticleButton', () => {
  let wrapper: Wrapper<Component, Element>

  afterAll(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    jest.useFakeTimers()

    wrapper = shallowMount(
      Component,
      getMountOptions({
        slots: {
          default: '<p>Loaded!</p>'
        },
        mocks: {
          $accessor: {
            name: 'Janusz'
          }
        }
      })
    )
  })

  it('renders the name from store when loading', () => {
    expect(wrapper.html()).toContain('Janusz')
  })

  it("renders the slot only after it's been loaded", async () => {
    expect.assertions(2)
    expect(wrapper.html()).not.toContain('Loaded')

    jest.runAllTimers()
    await flushPromises()

    expect(wrapper.html()).toContain('Loaded')
  })

  it('emits the "loaded" event on loaded', async () => {
    expect.assertions(1)

    jest.runAllTimers()
    await flushPromises()

    expect(wrapper.emitted()).toHaveProperty('loaded')
  })

  it('clears timeout on component destroy', async () => {
    expect.assertions(1)

    const clearTimeout = jest.spyOn(window, 'clearTimeout')
    clearTimeout.mockImplementation()

    wrapper.destroy()
    await flushPromises()

    expect(clearTimeout).toHaveBeenCalled()
  })
})
