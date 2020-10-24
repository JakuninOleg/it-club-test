<template>
  <div class="page flex">
    <main class="main flex flex-col justify-around flex-1">
      <div class="flex flex-col self-center">
        <Success class="w-24 mt-20 mb-5 self-center" />
        <p class="text-center">Payment completed successfully!</p>
      </div>
      <router-link class="justify-self-stretch" to="/">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >Make another one</button>
      </router-link>
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
