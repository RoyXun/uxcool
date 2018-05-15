import Vue from 'vue';
import Router from 'vue-router';
import UxModal from '@suning/uxcool/es/modal';
import NProgress from 'nprogress';

import store from '../store';
import {
  UPDATE_NAV_PAGE_INDEX,
  CHANGE_PAGE_NAME
} from '../store/mutation-types';

Vue.use(Router);

const router = new Router({
  routes: store.getters.routes,
});

NProgress.configure({
  minimum: 0.2,
  speed: 500,
  showSpinner: false,
});

router.beforeEach((to, from, next) => {
  store.commit(UPDATE_NAV_PAGE_INDEX, to.meta.pos);
  UxModal.destroy();

  NProgress.start();
  next();
});

router.afterEach(({
  meta = {}
}) => {
  const {
    title,
    subTitle = ''
  } = meta;

  document.title = title ? `${title}${subTitle ? ' ' : ''}${subTitle}` : 'UXCool Vue组件';
  store.commit(CHANGE_PAGE_NAME, `pgtitle=vue组件-${subTitle || title}`);
  window.scrollTo(0, 0);
  NProgress.done();

  /* eslint-disable no-underscore-dangle */
  // 这边埋点函数会读取dom 所以要延迟一下
  Vue.nextTick(() => {
    try {
      const fromUrl = window._getFromUrl();
      const toUrl = window._getToUrl();
      window._ssaSendPvData(fromUrl, toUrl, document.title);
    } catch (e) {
      console.error('小场面 不要慌 埋点脚本服务器连不上而已\n', e);
    }
  });
  /* eslint-enable no-underscore-dangle */
});

export default router;
