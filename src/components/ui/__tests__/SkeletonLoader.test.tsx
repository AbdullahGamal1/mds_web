import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import SkeletonLoader from '../SkeletonLoader';

describe('SkeletonLoader Component', () => {
  it('should render the skeleton loader', () => {
    const { container } = render(<SkeletonLoader />);
    expect(container).toBeInTheDocument();
  });
});
