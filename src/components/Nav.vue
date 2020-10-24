<template>
  <nav
    class="grid grid-flow-col nav-grid border-b-2 border-black-600 px-5 py-5 bg-blue-400 text-white sticky top-0 left-0 right-0"
  >
    <button @click="returnHome">Back</button>
    <p class="text-center">{{ navTittle }}</p>
    <template v-if="link">
      <router-link :to="'/' + link" class="justify-self-center">+</router-link>
    </template>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const returnHome = () => {
      if (router.options.history.state.back) {
        router.go(-1);
      } else {
        const splittedRoute = router.options.history.state.current.split("/");
        splittedRoute.pop();
        const backRoute = splittedRoute.join("");
        router.push("/" + backRoute);
      }
    };
    return {
      returnHome
    };
  },
  props: {
    addButton: {
      type: Boolean,
      required: false
    },
    link: {
      type: String,
      required: false
    },
    navTittle: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.nav-grid {
  grid-template-columns: 50px 1fr 50px;
}
</style>
