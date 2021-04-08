import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders with default value", () => {
    const wrapper = shallowMount(Counter, {});

    const count = wrapper.get('[data-test="count"]');

    expect(count.text()).toEqual("0");
  });

  it("increments by 1 when clicking increment button", async () => {
    const wrapper = shallowMount(Counter, {});

    const count = wrapper.get('[data-test="count"]');

    expect(count.text()).toEqual("0");

    await wrapper.get('[data-test="increment"]').trigger("click");

    expect(count.text()).toEqual("1");
  });

  it("decrements by 1 when clicking decrement button", async () => {
    const wrapper = shallowMount(Counter, {});

    const count = wrapper.get('[data-test="count"]');

    expect(count.text()).toEqual("0");

    await wrapper.get('[data-test="decrement"]').trigger("click");

    expect(count.text()).toEqual("-1");
  });
});
