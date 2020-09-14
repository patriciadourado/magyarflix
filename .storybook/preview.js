import { addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';

import Colors from '../src/styles/settings/Colors';
import Reset from '../src/styles/Reset';

function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <Colors />
      <Reset />
      {storyFn()}
    </Fragment>
  );
}
addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}