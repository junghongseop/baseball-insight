import Link from 'next/link';
import styled from 'styled-components';

const Category = () => {
  return (
    <StyledCategory>
      <StyledLink href="/">홈</StyledLink>
      <StyledLink href="/nominee">후보자</StyledLink>
      <StyledLink href="/prediction">골든 글러브 예측</StyledLink>
      <StyledLink href="/recommand">팀 추천</StyledLink>
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.div`
  width: 100%;
  max-width: 520px;
  min-width: 520px;
  height: 48px;
  background-color: hsla(0, 0%, 100%, 0.6);
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #75777d;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  margin: 0 30px;

  &:hover {
    color: #3b4873;
  }
`;
