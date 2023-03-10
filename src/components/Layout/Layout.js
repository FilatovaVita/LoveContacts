import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '../App/App.styled';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </>
  );
};
