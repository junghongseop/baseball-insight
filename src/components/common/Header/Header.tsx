import Image from 'next/image';
import styled from 'styled-components';
import Category from './Category/Category';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <ImageWrapper>
        <Image
          src="/logo.svg"
          width={84.05}
          height={30}
          alt="Logo"
          onClick={() => router.push('/')}
        />
      </ImageWrapper>
      <CategoryWrapper>
        <Category />
      </CategoryWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 100;
  background-color: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;
