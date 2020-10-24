<template>
  <label :for="input.id" class="grid block text-gray-700 font-bold">
    <span class="mb-2">{{input.label}}</span>
    <input :type="input.type" v-model="inputText" :id="input.id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
  </label>
</template>

<script>
import { computed } from "vue";
import { usePaymentState } from "../payment-state";

export default {
  setup(props) {
    const paymentState = usePaymentState();

    const inputText = computed({
      get: () => paymentState.formData[props.input.name],
      set: (value) => paymentState.updateFormData(props.input.name, value)
    })

    return {
      inputText
    }
  },
  props: {
    input: {
      type: Object,
      required: true
    }
  }
};
</script>
