// 스포일러 포함, 비공개 여부 - 토글 스위치
import React from 'react';
import '../../styles/Write/Toggles.scss';

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
}

const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <div className={`toggle-switch ${checked ? 'on' : ''}`} 
      onClick={onChange}
    >
      <div className="switch"></div>
    </div>
  );
};

export default Toggle;
