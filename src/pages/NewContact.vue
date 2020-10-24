<template>
  <div class="page">
    <Nav navTittle="New Contact" />
    <main class="main">
      <Form :inputs="inputs" entity="contact" />
    </main>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Form from "../components/Form.vue";

export default {
  setup() {
    const inputs = [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        id: "first-name"
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        id: "last-name"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        id: "email"
      }
    ]

    return {
      inputs
    }
  },
  components: {
    Nav,
    Form
  }
};
</script>
