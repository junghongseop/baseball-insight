'use client';

import { Content } from '@/components/main';
import { AppLayout } from '@/layouts';
import styled from 'styled-components';
import './global.style';

export default function Home() {
  return (
    <>
      <AppLayout header footer>
        <StyledMainPage>
          <Content />
        </StyledMainPage>
      </AppLayout>
    </>
  );
}

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;
`;
