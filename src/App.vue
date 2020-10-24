<template>
  <router-view class="transition" v-slot="{ Component }">
    <transition :name="$route.meta.transitionName" :mode="$route.meta.transitionMode">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App"
};
</script>
