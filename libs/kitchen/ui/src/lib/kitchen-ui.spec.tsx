import { render } from '@testing-library/react';

import KitchenUi from './kitchen-ui';

describe('KitchenUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KitchenUi />);
    expect(baseElement).toBeTruthy();
  });
});
