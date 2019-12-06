import React from 'react';

import { useWindowContext } from '../../contexts/Window';

import MobileLayout from './MobileLayout';

import DesktopLayout from './DesktopLayout';

const ResponsiveView = ({ breakpoint, renderMobile, renderDesktop }) => {
  const { width } = useWindowContext();

  return (width > breakpoint ? renderDesktop() : renderMobile());
};

const Layout = ({ children }) => (
  <ResponsiveView
    breakPoint={767}
    renderDesktop={() => <DesktopLayout>{children}</DesktopLayout>}
    renderMobile={() => <MobileLayout>{children}</MobileLayout>}
  />
);

export default Layout;
