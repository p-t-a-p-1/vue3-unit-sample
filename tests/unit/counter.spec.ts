import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe('Counter', () => {
  it('click button count up', async () => {
    const wrapper = shallowMount(Counter);
    await wrapper.get('[data-testid="incrementButton"]').trigger('click')
    expect(wrapper.get('[data-testid="count"]').text()).toBe('1')
  })
  it('click button count down', async () => {
    const wrapper = shallowMount(Counter);
    await wrapper.get('[data-testid="decrementButton"]').trigger('click')
    expect(wrapper.get('[data-testid="count"]').text()).toBe('-1')
  })
})