import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <Image src="/logo.svg" width={100} height={35} alt="Logo" />
        <InfoText>E-mail: dev.widghdtjq@gmail.com</InfoText>
        <Copyright>© junghongseop All Rights Reserved.</Copyright>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;
  box-sizing: border-box;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #70737c;
  margin: 0;
`;

const Copyright = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: #70737c;
  margin: 0;
`;
