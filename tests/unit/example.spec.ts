import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import SampleText from "@/components/SampleText.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
})

const App = {
  template: `
  <div>Hello World</div>
  `
}

describe('Sample Text', () => {
  test('display SampleText Component name', function() {
    const msg = 'Hoge';
    const wrapper = shallowMount(SampleText, {
      props: { msg }
    });
    console.log(wrapper.vm.state.name)
  })
  it('computed property upper case', () => {
    const msg = 'Hoge';
    const wrapper = shallowMount(SampleText, {
      props: { msg }
    })
    const name = wrapper.find('[data-testid="upperMsg"]').text();
    expect(name).toBe(msg.toUpperCase())
  })
})


