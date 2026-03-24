/* 리뷰 작성하기 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import Toggles from '../components/Write/Toggles';
import '../styles/pages/Write.scss';

const inputList = [
  { name: 'title', label: '리뷰제목', type: 'text', className: 'ipt-title' },
  { name: 'body', label: '리뷰본문', type: 'textarea', className: 'ipt-body' },
  { name: 'date', label: '관람일', type: 'date', className: 'ipt-date' },
  { name: 'url', label: 'URL 추가', type: 'text', className: 'ipt-url' },
];

// ==============================
const Write = () => {
  const navigate = useNavigate();
  const { addPost } = usePostStore();

  const [form, setForm] = useState({
    title: '',
    body: '',
    date: '',
    url: '',
  });

  const [img, setImg] = useState(null);
  const [spoiler, setSpoiler] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) setImg(URL.createObjectURL(file));
  };

  const handleImgRemove = () => setImg(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      ...form,
      poster: img ? img : 'default_poster',
      spoiler,
      isPrivate,
    };

    const newId = addPost(newPost);
    alert('리뷰가 등록되었습니다!🙌');

    navigate(`/Review/${newId}`);
  };

  return (
    <div className="write-container">
      <div className="w-title">리뷰 작성하기</div>
      <form className="write-input" onSubmit={handleSubmit}>
        {/* 입력 영역 */}
        {inputList.map((input) => (
          <div key={input.name} className={`${input.name}-area`}>
            <label>
              <div>{input.label}</div>

              {input.type === 'textarea' ? (
                <textarea
                  name={input.name}
                  className={`inputarea ${input.className}`}
                  value={form[input.name]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  className={`inputarea ${input.className}`}
                  value={form[input.name]}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>
        ))}

        {/* 이미지 */}
        <div className="img-upload-area">
          <div>사진 첨부</div>
          <label htmlFor="ipt-img" className="choose-img">
            찾기
          </label>
          <input type="file" id="ipt-img" onChange={handleImgChange} />
        </div>

        {img && (
          <div className="img-preview-area">
            <img src={img} alt="preview" className="img-preview" />
            <button type="button" className="img-delete" onClick={handleImgRemove}>
              삭제
            </button>
          </div>
        )}

        {/* 토글 */}
        <div className="write-toggle">
          <div className="tg-btn">
            스포일러 포함&nbsp;&nbsp;
            <Toggles checked={spoiler} onChange={() => setSpoiler(!spoiler)} />
          </div>
          <div className="tg-btn">
            비공개 여부&nbsp;&nbsp;
            <Toggles
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
          </div>
        </div>

        {/* 버튼 */}
        <div className="apply">
          <button type="submit" className="apply-btn">확인</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
