'use client';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import pitchers from '@/data/nominee/pitcher.json';
import catchers from '@/data/nominee/catcher.json';
import firstBasemen from '@/data/nominee/firstBaseman.json';
import secondBasemen from '@/data/nominee/secondBaseman.json';
import thirdBasemen from '@/data/nominee/thirdBaseman.json';
import outFileder from '@/data/nominee/outfielder.json';
import shortStop from '@/data/nominee/shortStop.json';
import dh from '@/data/nominee/designatedHitter.json';
import Image from 'next/image';
import { AppLayout } from '@/layouts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MAX_STATS = ['타율', '수비율', '승률', '저지율', '장타율', '출루율'];

const teams = [
  { name: 'dosan', logo: '/teams/dosan.svg', color: '#131230' },
  { name: 'hanwha', logo: '/teams/hanwha.svg', color: '#FC4E00' },
  { name: 'kia', logo: '/teams/kia.svg', color: '#ea0029' },
  { name: 'kiwoom', logo: '/teams/kiwoom.svg', color: '#570514' },
  { name: 'kt', logo: '/teams/kt.svg', color: '#000000' },
  { name: 'lg', logo: '/teams/lg.svg', color: '#c30452' },
  { name: 'nc', logo: '/teams/nc.svg', color: '#315288' },
  { name: 'ssg', logo: '/teams/ssg.svg', color: '#ce0e2d' },
  { name: 'samsung', logo: '/teams/samsung.svg', color: '#074CA1' },
  { name: 'lotte', logo: '/teams/lotte.svg', color: '#d00f31' },
];

const getTeamColor = (teamName: string) => {
  const team = teams.find((t) => teamName.toLowerCase().includes(t.name));
  return team ? team.color : '#4bc0c0';
};

const findNomineeById = (id: number) => {
  const allNominees = [
    ...pitchers.map((nominee) => ({ ...nominee, 포지션: '투수' })),
    ...catchers.map((nominee) => ({ ...nominee, 포지션: '포수' })),
    ...firstBasemen.map((nominee) => ({ ...nominee, 포지션: '1루수' })),
    ...secondBasemen.map((nominee) => ({ ...nominee, 포지션: '2루수' })),
    ...shortStop.map((nominee) => ({ ...nominee, 포지션: '유격수' })),
    ...thirdBasemen.map((nominee) => ({ ...nominee, 포지션: '3루수' })),
    ...outFileder.map((nominee) => ({ ...nominee, 포지션: '외야수' })),
    ...dh.map((nominee) => ({ ...nominee, 포지션: '지명타자' })),
  ];
  return allNominees.find((nominee) => nominee.id === id);
};

const NomineeDetailPage = () => {
  const pathname = usePathname();

  const id = parseInt(pathname.split('/').pop() || '', 10);
  if (isNaN(id)) {
    return <div>유효하지 않은 ID입니다.</div>;
  }

  const nominee: any = findNomineeById(id);

  if (!nominee) {
    return <div>후보자를 찾을 수 없습니다.</div>;
  }

  const renderRadialBarChart = (statName: string, statValue: number) => {
    const roundedValue = Math.round(statValue * 1000) / 10;
    const teamColor = getTeamColor(nominee.구단);

    const options: ApexCharts.ApexOptions = {
      chart: {
        height: 280,
        type: 'radialBar' as 'radialBar',
      },
      series: [statValue * 100],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%',
          },
          dataLabels: {
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '13px',
            },
            value: {
              color: '#111',
              fontSize: '30px',
              show: true,
              formatter: () => `${roundedValue}%`,
            },
          },
        },
      },
      fill: {
        colors: [teamColor],
      },
      stroke: {
        lineCap: 'round',
      },
      labels: [statName],
    };

    return (
      <ChartWrapper key={statName}>
        <Chart options={options} series={options.series} type="radialBar" height={280} />
      </ChartWrapper>
    );
  };

  const renderOtherStatsTable = (stats: [string, string | number][]) => {
    const statNames = stats.map(([statName]) => statName);
    const statValues = stats.map(([, statValue]) => statValue);

    return (
      <StatTable>
        <StatRow>
          {statNames.map((statName, index) => (
            <StatCell key={`name-${index}`}>{statName}</StatCell>
          ))}
        </StatRow>
        <StatRow>
          {statValues.map((statValue, index) => (
            <StatCell key={`value-${index}`}>{statValue}</StatCell>
          ))}
        </StatRow>
      </StatTable>
    );
  };

  const maxStats = Object.entries(nominee).filter(
    ([key]) => MAX_STATS.includes(key) && nominee[key] !== undefined
  );

  const otherStats = Object.entries(nominee)
    .filter(
      ([key, value]) =>
        ![
          ...MAX_STATS,
          '경기',
          '비고',
          '선수명',
          '구단',
          'imageUrl',
          'id',
          '포지션',
          '수비이닝',
          '이닝',
        ].includes(key) &&
        value !== null &&
        value !== undefined
    )
    .map(
      ([key, value]) =>
        [key, typeof value === 'number' ? value : Number(value)] as [
          string,
          string | number,
        ]
    );

  return (
    <AppLayout header footer>
      <DetailContainer>
        <InfoRow>
          <ImageWrapper>
            <Image src={nominee.imageUrl} width={100} height={130} alt={nominee.선수명} />
          </ImageWrapper>
          <Column>
            <TeamWrapper>
              <Image
                src={`/teams/${nominee.구단}.svg`}
                width={50}
                height={50}
                alt={`${nominee.구단} 로고`}
              />
              <Name>{nominee.선수명}</Name>
            </TeamWrapper>
            <OtherStatsWrapper>{renderOtherStatsTable(otherStats)}</OtherStatsWrapper>
          </Column>
        </InfoRow>
        <ChartsContainer>
          <ChartsContainer>
            {maxStats.map(([statName, statValue]: any) =>
              renderRadialBarChart(statName, Number(statValue))
            )}
          </ChartsContainer>
        </ChartsContainer>
      </DetailContainer>
    </AppLayout>
  );
};

export default NomineeDetailPage;

const Column = styled.div`
  flex-direction: column;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 40px;
  margin-left: 200px;
`;

const ImageWrapper = styled.div`
  object-fit: contain;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 24px;
`;

const OtherStatsWrapper = styled.div`
  width: 80%;
  margin-bottom: 40px;
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
`;

const StatTable = styled.div`
  display: table;
  width: 100%;
  max-width: 100%;
  margin: 20px auto;
  border-collapse: collapse;
  table-layout: fixed;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow-x: auto;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const StatCell = styled.div`
  flex: 1 1 0;
  min-width: 60px;
  text-align: center;
  font-size: 14px;
  color: #343a40;
`;
