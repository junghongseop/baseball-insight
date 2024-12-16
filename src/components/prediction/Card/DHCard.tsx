import Image from 'next/image';
import styled from 'styled-components';

const DHCard = () => {
  return (
    <StyledDHCard onClick={() => {}}>
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://img.hankyung.com/photo/202209/PYH2022090222040001300_P4.jpg"
          width={624}
          height={266}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>지명타자</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/kt.svg" width={30} height={30} alt="samsung" />
          <PlayerName>강백호</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledDHCard>
  );
};

export default DHCard;

const StyledDHCard = styled.div`
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
