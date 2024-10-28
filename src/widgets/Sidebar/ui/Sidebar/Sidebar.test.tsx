import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/Sidebar';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('Sidebar', () => {
  beforeEach(() => {
    jest.mock('react-i18next', () => ({
      useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      }),
      initReactI18next: {
        type: '3rdParty',
        init: () => {},
      },
    }));
  });

  test('test render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test sidebar toggle', () => {
    renderComponent(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleButton);

    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleButton);

    expect(sidebar).not.toHaveClass('collapsed');
  });
});
