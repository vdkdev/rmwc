// @flow
import * as React from 'react';
import { MDCSelect } from '@material/select/dist/mdc.select';
import { List, ListItem, ListGroup } from '../List';
import { MenuRoot, MenuItems } from '../Menu';
import { simpleTag, withMDC } from '../Base';
import type { SimpleTagPropsT } from '../Base';

export const SelectRoot = simpleTag({
  displayName: 'SelectRoot',
  classNames: 'mdc-select',
  defaultProps: {
    role: 'listbox',
    tabIndex: '0'
  }
});

export const SelectSurface = simpleTag({
  displayName: 'SelectSurface',
  classNames: 'mdc-select__surface'
});

export const SelectLabel = simpleTag({
  displayName: 'SelectLabel',
  classNames: props => [
    'mdc-select__label',
    {
      'mdc-select__label--float-above': props.placeholder || props.value
    }
  ]
});

export const SelectSelectedText = simpleTag({
  displayName: 'SelectSelectedText',
  classNames: 'mdc-select__selected-text'
});

export const SelectBottomLine = simpleTag({
  displayName: 'SelectBottomLine',
  classNames: 'mdc-select__bottom-line'
});

export const SelectMenu = simpleTag({
  displayName: 'SelectMenu',
  tag: MenuRoot,
  classNames: 'mdc-select__menu'
});

export const SelectFormField = simpleTag({
  displayName: 'SelectMenu',
  classNames: 'rmwc-select-form-field',
  defaultProps: {
    style: {
      height: '48px',
      marginTop: '16px',
      marginBottom: '8px',
      display: 'inline-flex',
      alignItems: 'flex-end'
    }
  }
});

export const MultiSelect = simpleTag({
  tag: List,
  classNames: 'mdc-multi-select'
});

type SelectPropsT = {
  /** An array of values or a map of {value: "label"}. Arrays will be converted to a map of {value: value}. */
  options: Object | mixed[],
  /** A label for the form control. */
  label?: string,
  /** Placeholder text for the form control. */
  placeholder?: string,
  /** Disables the form control. */
  disabled?: boolean,
  /** Makes a cssOnly select */
  cssOnly?: boolean
} & SimpleTagPropsT;

/**
 * Get the display value for a select from its formatted options
 */
const getDisplayValue = (value, options, placeholder) => {
  placeholder = placeholder || '\u00a0';

  if (options) {
    const option = options.find(v => v.value === value);

    return option ? option.value : placeholder;
  }

  return value || placeholder;
};

/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
const createSelectOptions = (options): Object[] => {
  // preformatted array
  if (Array.isArray(options) && options[0] && typeof options[0] === 'object') {
    return options.map(opt => {
      return { ...opt, options: createSelectOptions(opt.options) };
    });
  }

  // simple array
  if (Array.isArray(options)) {
    return options.map(value => ({ value, label: value }));
  }

  // value => label objects
  if (typeof options === 'object') {
    return Object.entries(options).map(([value, label]) => ({
      value,
      label
    }));
  }

  // default, just return
  return options;
};

export const Select: React.ComponentType<SelectPropsT> = withMDC({
  mdcConstructor: MDCSelect,
  mdcElementRef: true,
  mdcEvents: {
    'MDCSelect:change': (evt, props, api) => {
      evt.target.value = api.value;
      props.onChange && props.onChange(evt);
    }
  },
  defaultProps: {
    cssOnly: false,
    options: undefined,
    label: undefined,
    placeholder: undefined,
    disabled: false
  },
  onMount: (props, api) => {
    window.requestAnimationFrame(() => {
      try {
        api.foundation_.resize();
      } catch (err) {}
    });
  },
  didUpdate: (props, nextProps, api, inst) => {
    // we might be in cssOnly mode, or lacking an api
    if (!api) return;

    const valueDidChange = props && props.value !== nextProps.value;
    const optionsDidChange =
      props &&
      JSON.stringify(props.options) !== JSON.stringify(nextProps.options);
    const isFirstRun = props === undefined;
    const placeholderDidChange =
      props && props.placeholder !== nextProps.placeholder;

    if (optionsDidChange) {
      api.foundation_.selectedIndex = 0;
      inst.mdcComponentReinit();

      // escape out to avoid errors, didUpdate will run again on component init
      return;
    }

    if (
      valueDidChange ||
      optionsDidChange ||
      isFirstRun ||
      placeholderDidChange
    ) {
      const newIndex = api.options.indexOf(api.nameditem(nextProps.value));
      api.selectedIndex =
        newIndex === -1 && nextProps.placeholder ? 0 : newIndex;

      window.requestAnimationFrame(() => {
        try {
          api.foundation_.resize();
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
})(
  class extends React.Component<SelectPropsT> {
    static displayName = 'Select';

    render() {
      const {
        placeholder = '',
        children,
        value,
        label = '',
        options = [],
        mdcElementRef,
        cssOnly,
        ...rest
      } = this.props;

      const selectOptions = createSelectOptions(options);
      const displayValue = getDisplayValue(value, selectOptions, placeholder);

      if (cssOnly) {
        const SelectInnerRoot = rest.multiple ? MultiSelect : SelectSurface;
        const selectInner = (
          <SelectInnerRoot tag="select" value={value} {...rest}>
            {!!placeholder.length && (
              <ListItem tag="option" value="_placeholder" tab-index="0">
                {placeholder}
              </ListItem>
            )}
            {selectOptions &&
              selectOptions.map(({ label, ...option }, i) => {
                if (option.options) {
                  return (
                    <ListGroup tag="optgroup" label={label} key={label}>
                      {option.options.map(({ label, ...option }, i) => (
                        <ListItem
                          tag="option"
                          key={label}
                          {...option}
                          value={option.value}
                        >
                          {label}
                        </ListItem>
                      ))}
                    </ListGroup>
                  );
                }

                return (
                  <ListItem
                    tag="option"
                    key={label}
                    {...option}
                    value={option.value}
                  >
                    {label}
                  </ListItem>
                );
              })}
            {children}
          </SelectInnerRoot>
        );

        // multiple selects dont include the wrapper or underline
        if (rest.multiple) {
          return selectInner;
        }

        return (
          <SelectRoot elementRef={mdcElementRef} {...rest}>
            {selectInner}
            <SelectBottomLine />
          </SelectRoot>
        );
      }

      return (
        <SelectRoot elementRef={mdcElementRef} {...rest}>
          <SelectSurface>
            <SelectLabel placeholder={placeholder} value={value}>
              {label}
            </SelectLabel>
            <SelectSelectedText>{displayValue}</SelectSelectedText>
            <SelectBottomLine />
          </SelectSurface>
          <SelectMenu>
            <MenuItems>
              {!!placeholder.length && (
                <ListItem role="option" id="_placeholder" tab-index="0">
                  {placeholder}
                </ListItem>
              )}
              {selectOptions &&
                selectOptions.map(({ label, ...option }, i) => (
                  <ListItem
                    key={i}
                    role="option"
                    tabIndex="0"
                    {...option}
                    id={option.value}
                  >
                    {label}
                  </ListItem>
                ))}
              {children}
            </MenuItems>
          </SelectMenu>
        </SelectRoot>
      );
    }
  }
);

export default Select;
