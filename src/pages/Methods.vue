<template>
  <div class="page">
    <Nav navTittle="Select Method" link="methods/new-method" :addButton="true" />
    <main class="main">
      <div v-if="cards.length > 0 || accounts.length > 0" >
        <h2 v-if="cards.length > 0" class="mb-4 text-lg">Credit/debit Cards</h2>
        <EntityCard v-for="card in cards" entity="paymentMethod" :payment-info="card" />
        <h2 v-if="accounts.length > 0" class="mb-4 text-lg">Bank accounts</h2>
        <EntityCard v-for="account in accounts" entity="paymentMethod" :payment-info="account" />
      </div>
      <div v-else>Your methods list is empty. Let's add some</div>
    </main>
  </div>
</template>

<script>
import { useStore } from "../store";
import Nav from "../components/Nav.vue";
import EntityCard from "../components/EntityCard.vue";

export default {
  components: {
    Nav,
    EntityCard
  },
  setup() {
    const store = useStore();
    const accounts = store.accounts;
    const cards = store.cards;

    return {
      accounts,
      cards
    };
  }
};
</script>
