/* Login view */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  it('Shows the user the Login text', () => {
    const loginText = 'LOGIN'
    const wrapper = shallowMount(Login, {})
    expect(wrapper.text()).to.include(loginText)
  })
})
