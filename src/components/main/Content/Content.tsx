import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const MainContent = () => {
  const teams = [
    { logo: '/teams/dosan.svg', color: '#131230' },
    { logo: '/teams/hanwha.svg', color: '#FC4E00' },
    { logo: '/teams/kia.svg', color: '#ea0029' },
    { logo: '/teams/kiwoom.svg', color: '#570514' },
    { logo: '/teams/kt.svg', color: '#000000' },
    { logo: '/teams/lg.svg', color: '#c30452' },
    { logo: '/teams/nc.svg', color: '#315288' },
    { logo: '/teams/ssg.svg', color: '#ce0e2d' },
    { logo: '/teams/samsung.svg', color: '#074CA1' },
    { logo: '/teams/lotte.svg', color: '#d00f31' },
  ];

  const [currentTeam, setCurrentTeam] = useState(teams[0]);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    const startSpinning = () => {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * teams.length);
        setCurrentTeam(teams[randomIndex]);
      }, 200);
    };

    const stopSpinning = () => {
      setTimeout(() => {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * teams.length);
        setCurrentTeam(teams[randomIndex]);
        setIsSpinning(false);
      }, 2000);
    };

    startSpinning();
    stopSpinning();

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledMainContent>
      <Title>
        골든 글러브는 누구의 것?
        <br />
        당신만의 팀은 어디?
      </Title>
      <br />
      <SubTitle>
        수상자 예측과 팀 추천을 통해 야구 팬들에게 새로운 관점을 제공합니다.
      </SubTitle>
      {isSpinning ? (
        <Logo src={currentTeam.logo} alt="Spinning Team Logo" width={400} height={400} />
      ) : (
        <>
          <BackgroundCircle color={currentTeam.color} />
          <FinalLogo
            src={currentTeam.logo}
            alt="Selected Team Logo"
            width={400}
            height={400}
          />
        </>
      )}
    </StyledMainContent>
  );
};

export default MainContent;

const StyledMainContent = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 750px;
  height: 750px;
  background: radial-gradient(circle, ${({ color }) => color} 5%, transparent);
  filter: blur(150px);
  z-index: 0;
  bottom: 0px;
  right: 0px;
`;

const Logo = styled(Image)`
  object-fit: contain;
  position: absolute;
  bottom: 200px;
  right: 200px;
  z-index: 1;
  animation: spin-stop 2s ease-out;

  @keyframes spin-stop {
    0% {
      transform: rotateY(0deg);
    }
    80% {
      transform: rotateY(1080deg);
    }
    100% {
      transform: rotateY(1080deg);
    }
  }
`;

const FinalLogo = styled(Image)`
  object-fit: contain;
  position: absolute;
  bottom: 200px;
  right: 200px;
  z-index: 1;
`;

const Title = styled.div`
  position: absolute;
  bottom: 150px;
  left: 50px;
  font-size: 40px;
  font-weight: 700;
  color: #13192b;
  text-align: left;
`;

const SubTitle = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  font-size: 16px;
  font-weight: 200;
  color: #6e6e82;
  text-align: left;
`;
