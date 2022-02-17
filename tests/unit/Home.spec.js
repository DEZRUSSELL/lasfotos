/* Using the HeroSection component to test the home page as I've used components inside the Home view
Note the answer to the Vue warnings is Yes :) */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection.vue'

describe('HeroSection.vue', () => {
  it('Displays the GO! text which indicates the button which links to the images exploration page', () => {
    const linkText = 'GO!'
    const wrapper = shallowMount(HeroSection, {})
    expect(wrapper.text()).to.include(linkText)
  })
})

/* Original Vue Mocha Test

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
*/
