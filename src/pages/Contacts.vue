<template>
  <div class="page">
    <Nav navTittle="Make Contact" link="contacts/new-contact" :addButton="true" />
    <main class="main">
      <div v-if="contacts.length > 0">
        <EntityCard v-for="contact in contacts" entity="contact" :contact-info="contact" />
      </div>
      <div v-else>Your contacts list is empty. Let's add someone</div>
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
    const contacts = store.contacts;
    return {
      contacts
    };
  }
};
</script>
