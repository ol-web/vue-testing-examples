import { removeHangingConjunctions } from '@/plugins/vue-conjunctions'

describe('vue-conjunctions', () => {
  it('adds &nbsp; to words with 2 characters or less', () => {
    expect(removeHangingConjunctions('tak, i co?')).toContain('tak, i&nbsp;co?')
  })

  it('adds &nbsp; to predefined words with conjunctions', () => {
    expect(removeHangingConjunctions('tak, ale masz')).toContain(
      'tak, ale&nbsp;masz'
    )
  })

  it('tolerates unusual spacing', () => {
    expect(
      removeHangingConjunctions(`

    tak,    i co?

    `)
    ).toContain('tak, i&nbsp;co?')
  })
})
