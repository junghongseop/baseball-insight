import styled from 'styled-components';
import PitcherCard from '../Card/PitcherCard';
import CatcherCard from '../Card/CatcherCard';
import FirstBaseManCard from '../Card/FirstBaseManCard';
import SecondBaseManCard from '../Card/SecondBaseManCard';
import ThirdBaseManCard from '../Card/ThirdBaseManCard';
import ShortStopCard from '../Card/ShortStopCard';
import OutFileder1Card from '../Card/OutFileder1Card';
import OutFileder2Card from '../Card/OutFileder2Card';
import OutFileder3Card from '../Card/OutFileder3Card';
import DHCard from '../Card/DHCard';

const PredictionContent = () => {
  return (
    <StyledPredictionContent>
      <PitcherCard />
      <CatcherCard />
      <FirstBaseManCard />
      <SecondBaseManCard />
      <ThirdBaseManCard />
      <ShortStopCard />
      <OutFileder1Card />
      <OutFileder2Card />
      <OutFileder3Card />
      <DHCard />
    </StyledPredictionContent>
  );
};

export default PredictionContent;

const StyledPredictionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 110px 100px;
  width: 100%;
  box-sizing: border-box;
  justify-items: center;
`;
