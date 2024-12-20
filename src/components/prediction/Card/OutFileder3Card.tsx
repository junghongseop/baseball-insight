import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const OutFileder3Card = () => {
  const router = useRouter();

  return (
    <StyledOutFileder3Card
      onClick={() => {
        router.push('/prediction/outfielder');
      }}
    >
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://cdn.joongboo.com/news/photo/201912/363389362_2106662_2334.jpg"
          width={900}
          height={453}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>외야수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/kt.svg" width={30} height={30} alt="samsung" />
          <PlayerName>로하스</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledOutFileder3Card>
  );
};

export default OutFileder3Card;

const StyledOutFileder3Card = styled.div`
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
  margin-right: 100px;
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
