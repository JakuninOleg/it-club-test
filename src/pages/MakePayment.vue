<template>
  <main class="main">
    <form @submit.prevent="makePayment">
      <h1 class="mb-10 font-semibold text-3xl text-center">Make payment</h1>
      <div class="mb-5">
        <router-link
          v-if="!contact"
          to="/contacts"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block text-center mb-6"
        >Select contact</router-link>
        <div v-else class="mb-4 text-m bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block text-center">Contact: {{contact.lastName}} {{contact.firstName}}</div>
        <button
          v-if="contact"
          @click="deletePaymentInfo('contact')"
          class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >Delete</button>
      </div>
      <div class="mb-5">
        <router-link
          v-if="!paymentMethod"
          to="/methods"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block text-center"
        >Select payment method</router-link>
        <div v-else class>
          <p class="text-lg mb-4">Payment method:</p>
          <EntityCard entity="paymentMethod" :payment-info="paymentMethod" />
          <button
            @click="deletePaymentInfo('paymentMethod')"
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >Delete</button>
        </div>
      </div>
      <Input
        v-if="paymentMethod && contact"
        :input="{type: 'text', label: 'Amount', id: 'amount', name: 'amount'}"
        class="mb-6"
      />
      <button
        v-if="contact && paymentMethod && amount"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
      >Pay</button>
    </form>
  </main>
</template>

<script>
import { computed } from "vue";
import { usePaymentState } from "../payment-state";
import { useStore } from "../store";
import { useRouter } from "vue-router";
import Input from "../components/Input.vue";
import EntityCard from "../components/EntityCard.vue";

export default {
  components: {
    Input,
    EntityCard
  },
  setup() {
    const router = useRouter();
    const paymentState = usePaymentState();
    const store = useStore();

    const contact = computed(() => paymentState.paymentData.contact);
    const paymentMethod = computed(
      () => paymentState.paymentData.paymentMethod
    );
    const amount = computed(() => paymentState.formData.amount);

    const deletePaymentInfo = paymentLabel => {
      paymentState.clearPaymentLabel(paymentLabel);
    };

    const makePayment = () => {
      store.addPayment(paymentState.paymentData);
      paymentState.clearFormData("amount");
      paymentState.clearPaymentData();
      router.push("/success");
    };

    return {
      contact,
      paymentMethod,
      amount,
      deletePaymentInfo,
      makePayment
    };
  }
};
</script>
