import { render } from '@testing-library/react';

import AppRoutes from './index.jsx';

describe('Routes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
