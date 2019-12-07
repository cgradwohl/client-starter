import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

const WindowContext = createContext(null);

const WindowProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <WindowContext.Provider value={dimensions}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;

export const useWindowContext = () => useContext(WindowContext);

export const ResponsiveView = ({ breakpoint, renderMobile, renderDesktop }) => {
  const { width } = useWindowContext();

  return (width > breakpoint ? renderDesktop() : renderMobile());
};

/**
 * use it like diss
 * <ResponsiveView
    breakPoint={767}
    renderDesktop={() => <DesktopLayout>{children}</DesktopLayout>}
    renderMobile={() => <MobileLayout>{children}</MobileLayout>}
  />
 */
