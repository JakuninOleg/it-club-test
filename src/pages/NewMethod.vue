<template>
  <div class="page">
    <Nav navTittle="New Method" />
    <main class="main">
      <div class="flex max-w text-center mb-10">
        <div
          class="flex-1 py-2"
          :class="state.chosenMethod == 'card' ? 'bg-gray-400' : 'bg-gray-100'"
          @click="state.chosenMethod = 'card'"
        >New Card</div>
        <div
          class="flex-1 py-2"
          :class="state.chosenMethod == 'card' ? 'bg-gray-100' : 'bg-gray-400'"
          @click="state.chosenMethod = 'account'"
        >New Account</div>
      </div>
      <Form :inputs="state.computedInputs" :entity="state.chosenMethod" />
    </main>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Nav from "../components/Nav.vue";
import Form from "../components/Form.vue";

export default {
  setup() {
    const state = reactive({
      chosenMethod: "card",
      computedInputs: computed(() =>
        state.chosenMethod == "card" ? cardInputs : accountInputs
      )
    });

    const cardInputs = [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        id: "full-name"
      },
      {
        name: "cardNumber",
        label: "Card Number",
        type: "number",
        id: "card-number"
      },
      {
        name: "expirationDate",
        label: "Expiry Date",
        type: "date",
        id: "expiry-date"
      }
    ];

    const accountInputs = [
      {
        name: "accountName",
        label: "Account Name",
        type: "text",
        id: "account-name"
      },
      {
        name: "accountNumber",
        label: "Account Number",
        type: "number",
        id: "account-number"
      },
      {
        name: "bsb",
        label: "Bsb",
        type: "number",
        id: "bsb"
      }
    ];

    return {
      state
    };
  },
  components: {
    Nav,
    Form
  }
};
</script>
