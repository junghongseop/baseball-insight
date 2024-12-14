import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  imageUrl: string;
  name: string;
  teamLogoUrl: string;
  rank: string[];
  onClick: () => void;
}

const NomineeItem = ({ imageUrl, name, teamLogoUrl, rank, onClick }: Props) => {
  return (
    <StyledNomineeItem onClick={onClick}>
      <ImageWrapper>
        <Image
          className="team-logo"
          width={50}
          height={50}
          alt="team"
          src={teamLogoUrl}
        />
        <StyledImageWrapper>
          <Image
            className="player-image"
            width={50}
            height={50}
            alt="player"
            src={imageUrl}
          />
        </StyledImageWrapper>
        <PlayerName>{name}</PlayerName>
      </ImageWrapper>
      <RankWrapper>
        {rank.map((item, index) => (
          <RankItem key={index}>{item}</RankItem>
        ))}
      </RankWrapper>
    </StyledNomineeItem>
  );
};

export default NomineeItem;

const StyledNomineeItem = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px 30px;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledImageWrapper = styled.div`
  width: 40px;
  height: 50px;
  overflow: hidden;
  border-radius: 10%;
  position: relative;

  .player-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${({ color }) => color} 0%, transparent);
  }
`;

const PlayerName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
  white-space: nowrap;
`;

const RankWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`;

const RankItem = styled.div`
  font-size: 14px;
  color: #666;
  text-align: center;
`;
