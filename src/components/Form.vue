<template>
  <form class="grid gap-8 text-lg" @submit.prevent="createEntity">
    <Input v-for="input in inputs" :key="input.name" :input="input" />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >Save</button>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "../store";
import { usePaymentState } from "../payment-state";
import { useRouter } from "vue-router";
import Input from "../components/Input.vue";

export default {
  components: {
    Input
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const paymentState = usePaymentState();

    const storeActions = {
      card: store.addCard,
      contact: store.addContact,
      account: store.addAccount
    };

    const createEntity = () => {
      storeActions[props.entity](paymentState.formData);

      props.inputs.forEach(input => {
        paymentState.clearFormData(input.name);
      });

      const splittedRoute = router.options.history.state.current.split("/");
      splittedRoute.pop();
      const backRoute = splittedRoute.join("");
      router.push("/" + backRoute);
    };

    return {
      createEntity
    };
  },
  props: {
    inputs: {
      type: Array,
      required: true
    },
    entity: {
      type: String,
      required: true
    }
  }
};
</script>
