/* Explore images view */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Explore from '@/views/Explore.vue'

describe('Explore.vue', () => {
  it('Shows the user an Images heading', () => {
    const welcomeText = 'Images'
    const wrapper = shallowMount(Explore, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
