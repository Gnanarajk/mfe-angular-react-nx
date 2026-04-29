import { render } from '@testing-library/react';

import KitchenFeatures from './kitchen-features';

describe('KitchenFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KitchenFeatures />);
    expect(baseElement).toBeTruthy();
  });
});
