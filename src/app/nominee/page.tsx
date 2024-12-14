'use client';

import { Content } from '@/components/nominee';
import { AppLayout } from '@/layouts';
import styled from 'styled-components';

const NomineePage = () => {
  return (
    <AppLayout header footer>
      <StyledNomineePage>
        <Content />
      </StyledNomineePage>
    </AppLayout>
  );
};

export default NomineePage;

const StyledNomineePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
`;
