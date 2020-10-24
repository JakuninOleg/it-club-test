<template>
  <main class="main">
    <form @submit.prevent="makePayment">
      <h1 class="mb-10 font-semibold text-3xl text-center">Make payment</h1>
      <div class="mb-5">
        <router-link v-if="!contact" to="/contacts">Select contact</router-link>
        <div v-else>Contact: {{contact.lastName}} {{contact.firstName}}</div>
        <span v-if="contact" @click="deletePaymentInfo('contact')">Delete</span>
      </div>
      <div class="mb-5">
        <router-link v-if="!paymentMethod" to="/methods">Select payment method</router-link>
        <EntityCard v-else entity="paymentMethod" :payment-info="paymentMethod" />
        <span v-if="paymentMethod" @click="deletePaymentInfo('paymentMethod')">Delete</span>
      </div>
      <Input
        v-if="paymentMethod && contact"
        :input="{type: 'text', label: 'Amount', id: 'amount', name: 'amount'}"
        class="mb-5"
      />
      <button
        v-if="contact && paymentMethod && amount"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
      paymentState.clearPaymentData(paymentLabel);
    };

    const makePayment = () => {
      // store.addPayment()
      router.push('/success')
    }

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
