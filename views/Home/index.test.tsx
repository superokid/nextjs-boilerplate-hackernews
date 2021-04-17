import React from 'react';
import { render } from '../../test/testUtils';
import App from './index';

describe('Home page', () => {
  it('render safely', () => {
    render(<App />);
  });
});
