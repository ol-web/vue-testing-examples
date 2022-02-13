import { shallowMount, Wrapper } from '@vue/test-utils'

import getMountOptions from '@/tests/helpers/getMountOptions'
import Component from '@/components/ArticleButton.vue'

describe('ArticleButton', () => {
  let wrapper: Wrapper<Component, Element>

  beforeEach(() => {
    jest.restoreAllMocks()

    wrapper = shallowMount(
      Component,
      getMountOptions({
        propsData: {
          to: '/about-us',
          label: 'Test Label'
        },
        mocks: {
          $route: {
            params: {
              slug: 'test-slug'
            }
          },
          $router: {
            push: jest.fn()
          }
        }
      })
    )
  })

  it('renders the current slug from router', () => {
    expect(wrapper.find('.slug').text()).toEqual(wrapper.vm.$route.params.slug)
  })

  it('reroutes user to given route after clicking button if "to" prop was specified', () => {
    wrapper.find('button').trigger('click')

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(wrapper.vm.$props.to)
  })

  it('opens google if there was no "to" prop specified', () => {
    const windowOpen = jest.spyOn(window, 'open')
    windowOpen.mockImplementation()

    wrapper = shallowMount(
      Component,
      getMountOptions({
        propsData: {
          label: 'Test Label'
        },
        mocks: {
          $route: {
            params: {
              slug: 'test-slug'
            }
          }
        }
      })
    )

    wrapper.find('button').trigger('click')

    expect(windowOpen).toHaveBeenCalledWith(
      'https://google.com',
      '_blank',
      'noopener,noreferrer,resizable'
    )
  })
})
