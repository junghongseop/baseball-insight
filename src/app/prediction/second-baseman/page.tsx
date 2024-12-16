'use client';

import { AppLayout } from '@/layouts';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import secondData from '@/data/prediction/secondBaseMan.json';
import Image from 'next/image';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PredictionSecondBasemanPage = () => {
  const [first, second] = secondData;

  const allStats = Object.keys(first).filter(
    (key) =>
      key !== '이닝' &&
      key !== 'id' &&
      key !== '경기' &&
      typeof first[key as keyof typeof first] === 'number'
  ) as (keyof typeof first)[];

  const [selectedStat, setSelectedStat] = useState<string>('전체');

  const renderStatChart = (stat: keyof typeof first) => {
    const roundedValue = (value: any) => Math.round(value * 1000) / 1000;

    const data = {
      labels: [`${first.선수명}`, `${second.선수명}`],
      datasets: [
        {
          label: stat,
          data: [roundedValue(first[stat]), roundedValue(second[stat])],
          backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: `${stat} 비교`,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return (
      <ChartWrapper key={stat}>
        <Bar data={data} options={options} />
      </ChartWrapper>
    );
  };

  const filteredStats =
    selectedStat === '전체' ? allStats : [selectedStat as keyof typeof first];

  return (
    <AppLayout header footer>
      <StyledContainer>
        <ImageContainer>
          <PlayerImageWrapper>
            <img src={first.imageUrl} alt={first.선수명} />
            <PlayerInfo>
              <TeamLogo>
                <Image
                  width={30}
                  height={30}
                  src={`/teams/${first.구단}.svg`}
                  alt="구단 로고"
                />
              </TeamLogo>
              <PlayerName>{first.선수명}</PlayerName>
            </PlayerInfo>
          </PlayerImageWrapper>
          <PlayerImageWrapper>
            <img src={second.imageUrl} alt={second.선수명} />
            <PlayerInfo>
              <TeamLogo>
                <Image
                  width={30}
                  height={30}
                  src={`/teams/${second.구단}.svg`}
                  alt="구단 로고"
                />
              </TeamLogo>
              <PlayerName>{second.선수명}</PlayerName>
            </PlayerInfo>
          </PlayerImageWrapper>
        </ImageContainer>
        <FilterContainer>
          {['전체', ...allStats].map((stat) => (
            <FilterButton
              key={stat}
              active={selectedStat === stat}
              onClick={() => setSelectedStat(stat)}
            >
              {stat}
            </FilterButton>
          ))}
        </FilterContainer>
        <ChartsContainer>
          {filteredStats.map((stat) => renderStatChart(stat))}
        </ChartsContainer>
      </StyledContainer>
    </AppLayout>
  );
};

export default PredictionSecondBasemanPage;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 20px;
`;

const PlayerImageWrapper = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 120px;
    height: 150px;
    border-radius: 8px;
    z-index: 2;
    position: relative;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const TeamLogo = styled.div`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PlayerName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#3B4873' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : '#343a40')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;

const ChartsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
