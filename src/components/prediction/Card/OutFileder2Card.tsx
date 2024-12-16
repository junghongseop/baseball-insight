import Image from 'next/image';
import styled from 'styled-components';

const OutFileder2Card = () => {
  return (
    <StyledOutFileder2Card onClick={() => {}}>
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://www.spotvnews.co.kr/news/photo/202402/659715_996734_3721.jpg"
          width={459}
          height={273}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>외야수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/ssg.svg" width={30} height={30} alt="samsung" />
          <PlayerName>에레디아</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledOutFileder2Card>
  );
};

export default OutFileder2Card;

const StyledOutFileder2Card = styled.div`
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
    margin-right: 10px;
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