<template>
  <div>
    <normal-demo />
    <extra-demo />
    <login-demo />
    <login-horizontal-demo />
    <register-demo />
    <search-demo />
    <modal-demo />
    <dynamic-demo />
    <method-demo />
    <vuex-demo />
    <validator-demo />
    <custom-rules-demo />
    <file-demo />
    <search-form-demo />
  </div>
</template>


<script>
  import NormalDemo from './normal.vue';
  import LoginDemo from './login.vue';
  import LoginHorizontalDemo from './login-horizontal.vue';
  import RegisterDemo from './register.vue';
  import SearchDemo from './search.vue';
  import ModalDemo from './modal.vue';
  import DynamicDemo from './dynamic.vue';
  import MethodDemo from './method.vue';
  import VuexDemo from './vuex.vue';
  import ValidatorDemo from './rules.vue';
  import CustomRulesDemo from './customRules.vue';
  import ExtraDemo from './extra.vue';
  import FileDemo from './file.vue';
  import SearchFormDemo from './search-form.vue';

  export default {
    components: {
      NormalDemo,
      LoginDemo,
      LoginHorizontalDemo,
      RegisterDemo,
      SearchDemo,
      ModalDemo,
      MethodDemo,
      DynamicDemo,
      VuexDemo,
      ValidatorDemo,
      CustomRulesDemo,
      ExtraDemo,
      FileDemo,
      SearchFormDemo,
    },
  };
</script>

<style scoped>
  ::v-deep .demo {
    width: 600px;
  }
</style>
