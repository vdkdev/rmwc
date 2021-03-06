// @flow
import * as React from 'react';

import { simpleTag } from '../Base';

const ThemeRoot = simpleTag({
  tag: 'span'
});

type ThemePropsT = {
  /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
  use: string | string[]
};

/**
 * A Theme Component.
 */
export const Theme = ({ use, ...rest }: ThemePropsT) => (
  <ThemeRoot theme={use} {...rest} />
);

Theme.displayName = 'Theme';
