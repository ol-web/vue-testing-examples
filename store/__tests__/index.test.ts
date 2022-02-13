// eslint-disable-next-line
import axios from 'axios'
import { useAccessor } from 'typed-vuex'
import { mocked } from 'ts-jest/utils'

import getVuexStore from '@/tests/helpers/getVuexStore'
import { state, mutations, actions, User } from '@/store'

jest.mock('axios')
const mockedAxios = mocked(axios, true)

describe('Index', () => {
  it('fetches users from api and sets them to store', async () => {
    expect.assertions(1)
    const store = { state, mutations, actions }
    const vuexStore = getVuexStore(store, {})
    const accessor = useAccessor(vuexStore, store)

    const mockedGetData: User[] = [{ name: 'a', email: 'b' }]
    mockedAxios.get.mockResolvedValueOnce({ data: mockedGetData })

    await accessor.getFacts()

    expect(accessor.users).toEqual(mockedGetData)
  })
})
