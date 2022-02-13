import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import axios from 'axios'
// Import all your submodules
// import * as submodule from '~/store/submodule'

export interface User {
  name: string
  email: string
}

export const state = () => ({
  name: 'Maurycy',
  users: [] as User[]
})

export type RootState = ReturnType<typeof state>

export const getters = {}

export const mutations = mutationTree(state, {
  setUsers(state, users: User[]) {
    state.users = users
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchUsers({ commit }) {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      commit('setUsers', data)
    }
  }
)

// https://typed-vuex.roe.dev/
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    // submodule,
  }
})
