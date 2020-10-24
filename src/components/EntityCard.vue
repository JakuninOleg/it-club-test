<template>
  <div
    class="max-w rounded overflow-hidden shadow-lg mb-8 border border-gray-300"
    @click="addPaymentInfo"
  >
    <div v-if="contactInfo" class="p-5">{{ contactInfo.lastName }} {{ contactInfo.firstName }}</div>
    <div v-if="paymentInfo && paymentInfo.type == 'card'" class="p-5">
      <Mc class="w-24 mb-5" />
      <p class="mb-2">{{ paymentInfo.fullName }}</p>
      <div class="flex max-w justify-between">
        <span>{{ paymentInfo.cardNumber }}</span>
        <span>{{ paymentInfo.expirationDate }}</span>
      </div>
    </div>
    <div v-if="paymentInfo && paymentInfo.type == 'account'" class="p-5">
      <p>{{ paymentInfo.accountName }}</p>
      <p class="mb-5">{{ paymentInfo.accountNumber }}</p>
      <p>{{ paymentInfo.bsb }}</p>
    </div>
  </div>
</template>

<script>
import { usePaymentState } from "../payment-state";
import { useRouter } from "vue-router";
import { VueComponent as Mc } from "../assets/icons/mc.svg";

export default {
  components: {
    Mc
  },
  setup(props) {
    const paymentState = usePaymentState();
    const router = useRouter();

    const paymentEntity = {
      contact: props.contactInfo,
      paymentMethod: props.paymentInfo
    };

    const addPaymentInfo = () => {
      if (!props.clickable) return;
      paymentState.updatePaymentData(props.entity, paymentEntity[props.entity]);
      router.push("/");
    };

    return {
      addPaymentInfo
    };
  },
  props: {
    entity: {
      type: String,
      required: true
    },
    contactInfo: {
      type: Object,
      required: false
    },
    paymentInfo: {
      type: Object,
      required: false
    },
    clickable: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};
</script>
