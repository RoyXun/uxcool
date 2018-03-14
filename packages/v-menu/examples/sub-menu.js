import Vue from 'vue';

import '@suning/v-menu/css/index.scss';
import VMenu, { VMenuItem, VMenuItemGroup, VSubMenu } from '@suning/v-menu';

const vue = new Vue({
  el: '#app',
  methods: {
    openSubMenu(openKeys) {
      console.log(openKeys);
    },
  },
  components: {
    VMenu,
    VSubMenu,
    VMenuItem,
    VMenuItemGroup,
  },
});
