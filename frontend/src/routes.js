import { createRouter, createWebHistory } from 'vue-router';

import AddProduct from './components/AddProduct.vue';
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import ProductBasket from './components/ProductBasket.vue';
import ContactPage from './components/ContactPage.vue';

const routes = [
  { path: '/add', component: AddProduct },
  { path: '/about', component: AboutPage },
  { path: '/home', component: HomePage },
  { path: '/product_basket', component: ProductBasket },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
