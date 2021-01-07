<template>
  <div class="container">
    <div>
      <label for="name">Name</label>
      <input
        id="name"
        data-cy="name"
        v-model="name"
      />
    </div>
    <div>
      <label for="money">Money</label>
      <input
        id="money"
        data-cy="money"
        v-model="money"
      />
    </div>
    <div>
      <button
        data-cy="submit"
        @click="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const name = ref('');
    const money = ref(0);

    const submit = () => {
      console.log(name.value, money.value);
    };

    return {
      name,
      money,

      submit,
    };
  },
});
</script>

<style scoped>

</style>
