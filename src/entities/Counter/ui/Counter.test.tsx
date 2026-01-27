import { fireEvent, screen } from '@testing-library/react';

import { Counter } from '@/entities/Counter';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('Counter', () => {
  test('should Counter value', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('should work increment', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const incrementBtn = screen.getByTestId('increment-btn');

    fireEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should work decrement', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const decrementBtn = screen.getByTestId('decrement-btn');

    fireEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
