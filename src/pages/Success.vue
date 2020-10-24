<template>
  <div class="page">
    <main class="main">
      <router-link to="/">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >Make another one</button>
      </router-link>
      <Success class="w-24" />
    </main>
  </div>
</template>

<script>
import { VueComponent as Success } from "../assets/icons/success.svg";
export default {
  components: {
    Success
  }
};
</script>
