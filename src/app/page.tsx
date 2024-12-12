'use client';

import { Content } from '@/components/main';
import { AppLayout } from '@/layouts';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
}


  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
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
