import AppBar from 'components/AppBar/AppBar';
import { StyledLayout } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <StyledLayout>
        <Suspense>
          <Outlet fallback={<div>Loading...</div>} />
        </Suspense>
      </StyledLayout>
    </div>
  );
};

export default Layout;
