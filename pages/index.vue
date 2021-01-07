<template>
  <div class="container">
    <form v-model="formData">
      <div>
        <label for="name">Name</label>
        <input
          id="name"
          data-cy="name"
          v-model="formData.name"
        />
      </div>
      <div>
        <label for="money">Money</label>
        <input
          id="money"
          data-cy="money"
          v-model="formData.money"
        />
      </div>
    </form>
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
export default {
  data() {
    return {
      formData: {
        name: '',
        money: 0,
      },
    };
  },

  methods: {
    submit() {
      console.log(this.formData);
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
