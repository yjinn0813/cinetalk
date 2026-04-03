/* 페이지 타이틀 동적 렌더링 훅 */

import { useEffect } from 'react';

const DEFAULT_TITLE = 'cinetalk';

const useTitle = (title?: string) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${DEFAULT_TITLE}`;
    } else {
      document.title = DEFAULT_TITLE;
    }

    // 언마운트 시 기본 타이틀로 복구
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
};

export default useTitle;