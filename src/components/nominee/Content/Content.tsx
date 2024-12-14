import { useState } from 'react';
import styled from 'styled-components';
import Nominee1BList from '../NomineeList/Nominee1BList';
import Nominee2BList from '../NomineeList/Nominee2BList';
import Nominee3BList from '../NomineeList/Nominee3BList';
import NomineeSSList from '../NomineeList/NomineeSSList';
import NomineeCList from '../NomineeList/NomineeCList';
import NomineeOutFilederList from '../NomineeList/NomineeOutFilederList';
import NomineePList from '../NomineeList/NomineePList';

const NomineeContent = () => {
  const [selectedPosition, setSelectedPosition] = useState<string>('전체');

  const renderList = () => {
    if (selectedPosition === '전체') {
      return (
        <ListWrapper>
          <Wrapper>
            <Title>투수 후보</Title>
            <NomineePList />
          </Wrapper>
          <Wrapper>
            <Title>포수 후보</Title>
            <NomineeCList />
          </Wrapper>
          <Wrapper>
            <Title>1루수 후보</Title>
            <Nominee1BList />
          </Wrapper>
          <Wrapper>
            <Title>2루수 후보</Title>
            <Nominee2BList />
          </Wrapper>
          <Wrapper>
            <Title>3루수 후보</Title>
            <Nominee3BList />
          </Wrapper>
          <Wrapper>
            <Title>유격수 후보</Title>
            <NomineeSSList />
          </Wrapper>
          <Wrapper>
            <Title>외야수 후보</Title>
            <NomineeOutFilederList />
          </Wrapper>
        </ListWrapper>
      );
    }

    switch (selectedPosition) {
      case '투수':
        return (
          <PositionWrapper>
            <Title>투수 후보</Title>
            <NomineePList />
          </PositionWrapper>
        );
      case '포수':
        return (
          <Wrapper>
            <Title>포수 후보</Title>
            <NomineeCList />
          </Wrapper>
        );
      case '1루수':
        return (
          <Wrapper>
            <Title>1루수 후보</Title>
            <Nominee1BList />
          </Wrapper>
        );
      case '2루수':
        return (
          <Wrapper>
            <Title>2루수 후보</Title>
            <Nominee2BList />
          </Wrapper>
        );
      case '3루수':
        return (
          <Wrapper>
            <Title>3루수 후보</Title>
            <Nominee3BList />
          </Wrapper>
        );
      case '유격수':
        return (
          <Wrapper>
            <Title>유격수 후보</Title>
            <NomineeSSList />
          </Wrapper>
        );
      case '외야수':
        return (
          <PositionWrapper>
            <Title>외야수 후보</Title>
            <NomineeOutFilederList />
          </PositionWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <StyledNomineeContent>
      <FilterContainer>
        {['전체', '투수', '포수', '1루수', '2루수', '3루수', '유격수', '외야수'].map(
          (position) => (
            <FilterButton
              key={position}
              active={selectedPosition === position}
              onClick={() => setSelectedPosition(position)}
            >
              {position}
            </FilterButton>
          )
        )}
      </FilterContainer>
      {renderList()}
    </StyledNomineeContent>
  );
};

export default NomineeContent;

const StyledNomineeContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #343a40;
  text-align: left;
  margin: 50px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  top: 0;
  background-color: none;
  padding: 0px 20px;
  z-index: 2;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#3B4873' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : '#343a40')};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

const PositionWrapper = styled.div`
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const ListWrapper = styled.div`
  margin-bottom: 50px;
`;
