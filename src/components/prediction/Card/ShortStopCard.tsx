import Image from 'next/image';
import styled from 'styled-components';

const ShortStopCard = () => {
  return (
    <StyledShortStopCard onClick={() => {}}>
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://leecosports.com/wp-content/uploads/2023/11/%EB%B0%95%EC%B0%AC%ED%98%B8_%ED%94%84%EB%A1%9C%ED%95%84-1.jpg"
          width={230}
          height={240}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>유격수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/kia.svg" width={30} height={30} alt="samsung" />
          <PlayerName>박찬호</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledShortStopCard>
  );
};

export default ShortStopCard;

const StyledShortStopCard = styled.div`
  width: 210px;
  height: 320px;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const StyledImage = styled(Image)`
    margin-left: 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 73%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: top;
  margin-bottom: 19px;
`;

const CardInfo = styled.div`
  text-align: center;
`;

const PlayerName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333333;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const PlayerPosition = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #333333;
`;
