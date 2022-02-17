/* Register view */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Register from '@/views/Register.vue'

describe('Register.vue', () => {
  it('Shows the user the Registration text', () => {
    const registerText = 'REGISTER'
    const wrapper = shallowMount(Register, {})
    expect(wrapper.text()).to.include(registerText)
  })
})
