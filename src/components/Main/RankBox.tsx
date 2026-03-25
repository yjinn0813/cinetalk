// 박스오피스 랭킹 박스

import React from 'react';
import '../../styles/Main/RankBox.scss';

type RankProps = {
  Rank: number;
  Boxoffice: string;
  RankName: string;
}

const RankBox =({ Rank, Boxoffice, RankName }: RankProps) => {
  return (
    <div className="rank-box">
      <span className="rank">{Rank}</span>
      <img
        className="rank-poster"
        src={`images/Main/${Boxoffice}`}
        alt={Boxoffice}
      />
      <span className="rank-name">{RankName}</span>
    </div>
  );
}

export default RankBox;
