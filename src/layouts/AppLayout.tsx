import { Footer } from '@/components/common';
import { Header } from '@/components/common/';
import styled from 'styled-components';

interface Props {
  header?: boolean;
  footer?: boolean;
  children: React.ReactNode;
}

const AppLayout = ({ children, header = false, footer = false }: Props) => {
  return (
    <StyledAppLayout>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  width: 100%;
  min-height: 100vh;
`;
