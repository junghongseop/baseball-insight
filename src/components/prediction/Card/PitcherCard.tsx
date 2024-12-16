import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const PitcherCard = () => {
  const router = useRouter();

  return (
    <StyledPitcherCard
      onClick={() => {
        router.push('/prediction/pitcher');
      }}
    >
      <ImageWrapper>
        <StyledImage
          alt="카일 하트"
          src="https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2024%2F8%2F19%2F6832718%2Fhigh.jpg&w=1920&q=75"
          width={350}
          height={300}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>투수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/nc.svg" width={30} height={30} alt="nc" />
          <PlayerName>하트</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledPitcherCard>
  );
};

export default PitcherCard;

const StyledPitcherCard = styled.div`
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

const StyledImage = styled(Image)`
  margin-left: 80px;
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
