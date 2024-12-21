import React, { Suspense, useState } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { AppRouter } from './providers/router';
import { Theme, useTheme } from './providers/theme';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={classNames('app', {}, [theme as Theme])}>
      <Suspense fallback={<Loader />}>
        {/* eslint-disable-next-line i18next/no-literal-string,react/button-has-type */}
        <button onClick={() => setIsOpen(true)}>toggle</button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quasi reiciendis sed sequi! A cum labore molestiae quisquam soluta tempora. Ab aut dolorem error molestiae, nobis odio unde! Ipsa, similique?
        </Modal>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
