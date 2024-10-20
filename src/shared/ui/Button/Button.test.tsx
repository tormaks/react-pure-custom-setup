import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from '@/shared/ui/Button';

describe('Button', () => {
  test('test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(ThemeButton.CLEAR);
    screen.debug();
  });
});
