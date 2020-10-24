import { reactive, watch } from "vue";

// Creating store name
const storeName = "payment-state";

// Get store object from localStorage or create a new one
const paymentState = reactive(
  localStorage.getItem(storeName)
    ? JSON.parse(localStorage.getItem(storeName))
    : { formData: {}, paymentData: {} }
);

watch(paymentState, (value) => localStorage.setItem(storeName, JSON.stringify(value)));

export const usePaymentState = () => ({
  formData: reactive(paymentState.formData),
  paymentData: reactive(paymentState.paymentData),
  updateFormData: (formInputName, payload) => {
    paymentState.formData[formInputName] = payload
  },
  updatePaymentData: (paymentLabel, payload) => {
    paymentState.paymentData[paymentLabel] = payload
  },
  clearFormData: (formInputName) => {
    paymentState.formData[formInputName] = ""
  },
  clearPaymentData: (paymentLabel) => {
    paymentState.paymentData[paymentLabel] = ""
  }
})
