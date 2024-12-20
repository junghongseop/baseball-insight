import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const SecondBaseManCard = () => {
  const router = useRouter();

  return (
    <StyledSecondBaseManCard
      onClick={() => {
        router.push('prediction/second-baseman');
      }}
    >
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://img.hankyung.com/photo/202308/AKR20230812036300007_01_i_P4.jpg"
          width={516}
          height={340}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>2루수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/nc.svg" width={30} height={30} alt="samsung" />
          <PlayerName>박민우</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledSecondBaseManCard>
  );
};

export default SecondBaseManCard;

const StyledSecondBaseManCard = styled.div`
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
  margin-left: 30px;
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
