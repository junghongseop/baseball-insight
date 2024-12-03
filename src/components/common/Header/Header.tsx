import styled from 'styled-components';
import Image from 'next/image';

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src="/Victory.svg" width={100} height={50} alt="Logo" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0 1px 0 0 #eef0f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
`;

const StyledImage = styled(Image)`
  display: block;
`;
