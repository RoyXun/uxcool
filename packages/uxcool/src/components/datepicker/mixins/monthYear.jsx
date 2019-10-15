import omit from 'object.omit';
import { format as formatDate } from 'date-fns';
import { VMonthYearDecadePicker } from '@suning/v-datepicker';
import localeCN from '../locale/zh_CN';
import Icon from '../../icon';

export default {
  props: {
    ...omit(VMonthYearDecadePicker.props, ['mode', 'disabledMonth', 'disabledYear']),
    prefixCls: {
      type: String,
      default: 'ux-calendar',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    locale: {
      type: Object,
      default() {
        return localeCN.lang;
      },
    },
    transitionName: {
      type: String,
      default: 'slide-up',
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'large', 'default'].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      innerValue: null,
    };
  },
  computed: {
    formatValue() {
      const { format, innerValue } = this;
      if (!innerValue) {
        return '';
      }

      return formatDate(innerValue, format);
    },
    isCanClear() {
      const { disabled, innerValue, allowClear } = this;
      return !disabled && innerValue && allowClear;
    },
    pickerClasses() {
      const { prefixCls, size } = this;
      return {
        [`${prefixCls}-picker`]: true,
        [`${prefixCls}-picker-${size}`]: true,
      };
    },
    pickerInputClass() {
      const { prefixCls, disabled, size } = this;
      const inputPrefix = 'ux-input';
      const map = {
        small: 'sm',
        large: 'lg',
      };
      return {
        [inputPrefix]: true,
        [`${prefixCls}-picker-input`]: true,
        [`${inputPrefix}-disabled`]: disabled,
        [`${inputPrefix}-${map[size]}`]: size !== 'default',
      };
    },
    inputPlaceholder() {
      const { placeholder, locale } = this;
      return placeholder || locale.placeholder;
    },
  },
  watch: {
    value(nVal) {
      this.setInnerValue(nVal, false);
    },
  },
  created() {
    this.setInnerValue(this.innerValue, false);
  },
  methods: {
    setInnerValue(value, trigger = true) {
      const { format } = this;
      this.innerValue = value;
      if (trigger) {
        this.$emit('input', value);
        this.$emit('change', value, value ? formatDate(value, format) : undefined);
      }
    },
    onChange(value) {
      this.setInnerValue(value);
    },
    onClearClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setInnerValue(null);
    },
  },
  render() {
    const {
      $props,
      $listeners,
      prefixCls,
      pickerClasses,
      pickerInputClass,
      mode,
      disabled,
      innerValue,
      formatValue,
      inputPlaceholder,
      isCanClear,
      onChange,
      onClearClick,
    } = this;
    const pickerProps = {
      ...omit($props, ['allowClear', 'placeholder']),
      value: innerValue,
      pickerPrefixCls: `${prefixCls}-picker-container`,
      mode,
    };
    const pickerEvents = {
      ...$listeners,
      change: onChange,
    };
    const inputDomProps = {
      value: formatValue,
    };
    const attrs = {
      readonly: true,
      disabled,
      placeholder: inputPlaceholder,
    };
    return (
      <VMonthYearDecadePicker {...{ props: pickerProps, on: pickerEvents }}>
        <div slot="trigger" class={pickerClasses}>
          <input
            type="text"
            {...{
              class: pickerInputClass,
              attrs,
              domProps: inputDomProps,
            }}
          />
          {isCanClear ? (
            <Icon class={`${prefixCls}-picker-clear`} type="close_circle" on-click={onClearClick} />
          ) : null}
          <span class={`${prefixCls}-picker-icon`} />
        </div>
      </VMonthYearDecadePicker>
    );
  },
};
