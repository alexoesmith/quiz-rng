<template>
  <div class="bg-body text-center h-screen w-full py-10 flex flex-col items-center justify-between">
    <div>
      <h1 class="text-center font-bold text-4xl">Go Media Quiz</h1>
      <h2 class="text-center font-semibold text-xl pt-2 tracking-widest">RNG</h2>
    </div>
    <div id="number">
      <h2
        class="
          text-8xl
          bg-action
          w-[160px]
          h-[160px]
          rounded-full
          flex
          items-center
          justify-center
          text-white
          m-auto
        "
        :class="{ 'bg-black': altColor }"
      >
        {{ number }}
      </h2>
    </div>
    <button @click="rng" class="bg-action px-20 py-4 rounded-lg shadow-xl text-white text-4xl">
      Giz a number then
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const number = ref(0);
    const count = ref(0);
    const altColor = ref(false);

    const rng = () => {
      count.value++;
      if (count.value % 2 == 0) {
        altColor.value = true;
      } else {
        altColor.value = false;
      }
      console.log(altColor.value);
      if (count.value) number.value = Math.floor(Math.random() * 3) + 1;
    };
    return {
      number,
      rng,
      count,
      altColor,
    };
  },
};
</script>

<style lang="scss" scoped></style>
