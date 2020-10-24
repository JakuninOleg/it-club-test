import { reactive, computed, watch } from "vue";

// Creating store name
const storeName = "main-store";

// Randomize id approach for small collections
const id = () => "_" + Math.random().toString(36).substr(2, 9);

// Get store object from localStorage or create a new one
const state = reactive(
  localStorage.getItem(storeName)
    ? JSON.parse(localStorage.getItem(storeName))
    : {
      contacts: [],
      cards: [],
      accounts: [],
      payments: []
    }
);

// Adding item to localStorage once state was mutated
watch(state, (value) => localStorage.setItem(storeName, JSON.stringify(value)));

// Main store implementation
export const useStore = () => ({
  contacts: computed(() =>
    state.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
  ),
  cards: computed(() => state.cards),
  accounts: computed(() => state.accounts),
  payment: computed(() => state.payments),
  addContact: ({ firstName, lastName, email }) => {
    state.contacts.push({id: id(), firstName, lastName, email})
  },
  addCard: ({ fullName, cardNumber, expirationDate, type = "card"}) => {
    state.cards.push({ id: id(), fullName, cardNumber, expirationDate, type})
  },
  addAccount: ({ accountName, accountNumber, bsb, type = "account"}) => {
    state.accounts.push({ id: id(), accountName, accountNumber, bsb, type})
  },
  addPayment: ({ contact, paymentMethod }) => {
    state.payments.push({ id: id(), contact, paymentMethod })
  }
})
