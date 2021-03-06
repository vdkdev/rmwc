// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

type RipplePropsT = {
  /** Uses the primary palette. */
  primary?: boolean,
  /** Uses the accent palette. */
  accent?: boolean,
  /** Lets a ripple grow outside of its bounds, just like on Checkboxes. */
  unbounded?: boolean
};

export class Ripple extends React.Component<RipplePropsT> {
  static defaultProps = {
    primary: false,
    accent: false,
    unbounded: false
  };

  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    this.initRipple();
  }

  componentWillReceiveProps(nextProps: RipplePropsT) {
    this.checkProps(nextProps);
  }

  componentDidUpdate(prevProps: RipplePropsT) {
    const didChange = ['primary', 'accent', 'unbounded'].some(
      key => this.props[key] !== prevProps[key]
    );
    if (didChange) {
      this.destroyRipple();
      this.initRipple();
      this.forceUpdate();
    }
  }

  api: Object;
  el: null | Element | Text;

  checkProps(nextProps: RipplePropsT) {
    if (this.api.unbounded !== nextProps.unbounded) {
      this.api.unbounded = nextProps.unbounded;
    }
  }

  initRipple() {
    // a stupid hack for the test environment where this ends up undefined
    if (process.env.NODE_ENV === 'test' && this.el) {
      this.el.dataset = {};
    }

    this.api = new MDCRipple(this.el);
    this.checkProps(this.props);
  }

  destroyRipple() {
    this.api.destroy();
  }

  render() {
    const child = React.Children.only(this.props.children);
    const { accent, primary } = this.props;

    /**
     * Collect the ripple classes so we make sure React doesnt
     * destroy them when we re-render.
     */
    const rippleClasses = (this.el ?
      this.el.getAttribute('class').split(' ') :
      []
    ).filter(cls => {
      if (
        ~[
          'mdc-ripple-surface--primary',
          'mdc-ripple-surface--accent',
          'mdc-ripple-surface'
        ].indexOf(cls)
      ) {
        return false;
      }

      return cls.startsWith('mdc-ripple');
    });

    const classes = classNames(child.props.className, ...rippleClasses, {
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent
    });

    const dedupedClasses = Array.from(new Set(classes.split(' '))).join(' ');

    return React.cloneElement(child, {
      ...child.props,
      className: dedupedClasses
    });
  }
}

export default Ripple;
