<script>
  import { buildComponentName } from '../utils';

  export default {
    name: buildComponentName('BreadcrumbItem'),
    inject: ['breadcrumbRoot'],
    props: {
      href: {
        type: String,
        default: '',
      },
    },
    computed: {
      rootPrefixCls() {
        return this.breadcrumbRoot.prefixCls;
      },
      separator() {
        return this.breadcrumbRoot.separator;
      },
    },
    render() {
      const {
        $slots, $attrs, rootPrefixCls, separator, href
      } = this;
      let node = null;
      const link = href ? (
        <a class={`${rootPrefixCls}-link`} href={href} {...{ attrs: $attrs }}>
          {$slots.default}
        </a>
        ) : (
        <span class={`${rootPrefixCls}-link`} {...{ attrs: $attrs }}>
          {$slots.default}
        </span>
      );

      const normalizeSeparator = typeof separator === 'function' ? separator() : separator;
      if ($slots.default) {
        node = (
          <span>
            {link}
            <span class={`${rootPrefixCls}-separator`}>{normalizeSeparator}</span>
          </span>
        );
      }
      return node;
    },
  };
</script>
