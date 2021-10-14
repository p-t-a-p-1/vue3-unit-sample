import { shallowMount } from "@vue/test-utils";
import SampleLink from "@/components/SampleLink.vue";

describe('Sample Link', () => {
  it('test sample link', () => {
    const wrapper = shallowMount(SampleLink)
    const admin = wrapper.find('#admin')
    expect(admin.isVisible()).toBe(false)
  })
})