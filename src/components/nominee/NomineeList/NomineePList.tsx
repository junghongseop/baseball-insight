import NomineeItem from './NomineeItem/NomineeItem';
import { useState, useEffect } from 'react';
import pitcher from '@/data/nominee/pitcher.json';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

interface Player {
  id: number;
  선수명: string;
  imageUrl: string | undefined;
  구단: string;
  경기: number;
  평균자책점: number;
  승: number;
  패: number;
  세: number;
  홀: number;
  승률: number;
  이닝: string;
  탈삼진: number;
  수비율: number;
  실책: number;
  자살: number;
  보살: number;
  비고: string | { [key: string]: string | undefined } | null;
}

const NomineePList = () => {
  const router = useRouter();
  const [pitchers, setPitchers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPitchers = async () => {
      const data: Player[] = await Promise.resolve(pitcher);
      setPitchers(data);
    };

    fetchPitchers();
  }, []);

  return (
    <GridContainer>
      {pitchers.map((player) => {
        let primaryStat: string;
        if (player.승 >= player.세 && player.승 >= player.홀) {
          primaryStat = `승: ${player.승}승`;
        } else if (player.세 >= player.승 && player.세 >= player.홀) {
          primaryStat = `세: ${player.세}세이브`;
        } else {
          primaryStat = `홀: ${player.홀}홀드`;
        }

        return (
          <NomineeItem
            key={player.id}
            imageUrl={player.imageUrl || 'https://via.placeholder.com/80'}
            name={player.선수명}
            teamLogoUrl={`teams/${player.구단}.svg`}
            rank={[
              `평균 자책점: ${player.평균자책점}`,
              `승률: ${player.승률}`,
              primaryStat,
            ]}
            onClick={() => router.push('/nominee/' + `${player.id}`)}
          />
        );
      })}
    </GridContainer>
  );
};

export default NomineePList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(550px, 1fr));
  gap: 32px;
  justify-items: center;
  align-items: start;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
`;
