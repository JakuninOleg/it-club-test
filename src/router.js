import { createWebHistory, createRouter } from "vue-router";
import MakePayment from "./pages/MakePayment.vue";
import Contacts from "./pages/Contacts.vue";
import NewContact from "./pages/NewContact.vue";
import Methods from "./pages/Methods.vue";
import NewMethod from "./pages/NewMethod.vue";
import Success from "./pages/Success.vue";

const history = createWebHistory();

const routes = [
  { path: "/", component: MakePayment },
  { path: "/contacts", component: Contacts },
  { path: "/contacts/new-contact", component: NewContact },
  { path: "/methods", component: Methods },
  { path: "/methods/new-method", component: NewMethod },
  { path: "/success", component: Success }
];

const router = createRouter({ history, routes });

router.afterEach((to, from) => {
  if (to.path == '/' && from.path == '/success') {
    to.meta.transitionName = 'fade-slide-down'
    to.meta.transitionMode = ''
    return
  } else if (to.path == '/') {
    to.meta.transitionName = 'slide-right'
    to.meta.transitionMode = ''
    return
  }

  if (to.path == '/success') {
    to.meta.transitionName = 'fade-slide-up'
    to.meta.transitionMode = 'in-out'
    return
  }

  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  to.meta.transitionMode = toDepth < fromDepth ? '' : 'in-out'
})

export default router;
