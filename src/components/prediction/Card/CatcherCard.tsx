import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const CatcherCard = () => {
  const router = useRouter();

  return (
    <StyledCatcherCard
      onClick={() => {
        router.push('/prediction/catcher');
      }}
    >
      <ImageWrapper>
        <StyledImage
          alt="강민호"
          src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/04/87ce03fb-e65c-48cc-95a9-0d3d5f9bc545.jpg"
          width={459}
          height={273}
        />
      </ImageWrapper>
      <CardInfo>
        <PlayerPosition>포수</PlayerPosition>
        <InfoWrapper>
          <Image src="/teams/samsung.svg" width={30} height={30} alt="samsung" />
          <PlayerName>강민호</PlayerName>
        </InfoWrapper>
      </CardInfo>
    </StyledCatcherCard>
  );
};

export default CatcherCard;

const StyledCatcherCard = styled.div`
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
  margin-left: 100px;
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
