import NomineeItem from './NomineeItem/NomineeItem';
import { useState, useEffect } from 'react';
import outfielder from '@/data/nominee/outfielder.json';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

interface Player {
  id: number;
  선수명: string;
  imageUrl: string | undefined;
  구단: string;
  경기: number;
  '외야수 수비이닝': string;
  타율: number;
  득점: number;
  안타: number;
  홈런: number;
  타점: number;
  도루: number;
  장타율: number;
  출루율: number;
  수비율: number;
  실책: number;
  자살: number;
  보살: number;
  비고: string | { [key: string]: string | undefined } | null;
}

const NomineeCList = () => {
  const router = useRouter();
  const [firstBasemen, setFirstBasemen] = useState<Player[]>([]);

  useEffect(() => {
    const fetchFirstBasemen = async () => {
      const data: Player[] = await Promise.resolve(outfielder);
      setFirstBasemen(data);
    };

    fetchFirstBasemen();
  }, []);

  return (
    <GridContainer>
      {firstBasemen.map((player) => (
        <NomineeItem
          key={player.id}
          imageUrl={player.imageUrl || 'https://via.placeholder.com/80'}
          name={player.선수명}
          teamLogoUrl={`teams/${player.구단}.svg`}
          rank={[
            `타율: ${player.타율.toFixed(3)}`,
            `홈런: ${player.홈런}`,
            `안타: ${player.안타}`,
          ]}
          onClick={() => router.push('/nominee/' + `${player.id}`)}
        />
      ))}
    </GridContainer>
  );
};

export default NomineeCList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(550px, 1fr));
  gap: 32px;
  padding: 32px;
  justify-items: center;
  align-items: start;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
`;
