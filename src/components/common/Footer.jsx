// footer

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div style={{ display: 'inline-block' }}>
          <div className="foot-logo">
            <Link to="/">
              <div className="txt-logo">cinetalk</div>
              {/* 로고 클릭시 홈으로 이동 */}
            </Link>
          </div>
          <div>
            <div className="foot-info">(주)시네톡</div>
            <div className="foot-info">대표이사: 조유진</div>
            <div className="foot-info">주소: 서울시 서초구 사평대로 52길</div>
            <div className="foot-info">사업자등록번호: 123-45-67890</div>
            <div className="foot-info">개인정보 관리 책임자: 홍길동</div>
          </div>
          <br />
          <div className="copyright">© 2024 cinetalk Corp.</div>
        </div>
        <div className="right-text">
          <div className="right-up">
            <div className="foot-info">서비스 이용 약관</div>
            <div className="foot-info">개인정보 처리 방침</div>
            <div className="foot-info">회사 소개</div>
          </div>
          <div className="right-down">
            <div className="foot-info">FAX : 1234-5678</div>
            <div className="foot-info">고객센터 : 1588-0000 (유료)</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
