/* convert to WebP */

export const convertToWebp = (file: File): Promise<File> => {

  // FileReader, Canvas 등은 비동기적으로 진행되어 최종 파일을 promise로 반환
  return new Promise((resolve, reject) => {
    // 이미 WebP라면 변환하지 않고 그대로 반환
    if (file.type === 'image/webp') {
      resolve(file);
      return;
    }

    const reader = new FileReader();
    
    /* 이미지 파일을 정상적으로 읽었을 때 */
    reader.onload = () => {
      const img = new Image();

      // 이미지 객체가 데이터를 모두 불러오면 실행
      img.onload = () => {
        // canvas 생성하고 그림을 그릴 수 있게 context를 가져옴
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Canvas를 생성할 수 없습니다.'));
          return;
        }

        // 원본 이미지와 동일한 크기로 canvas를 설정하여 그리기
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        // Canvas에 그려진 이미지를 WebP 형식의 Blob으로 변환
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('WebP 변환에 실패했습니다.'));
              return;
            }

            // Blob을 File 객체로 변환
            const webpFile = new File(
              [blob],
              `${crypto.randomUUID()}.webp`,
              { type: 'image/webp' }
            );

            resolve(webpFile); // 변환 완료된 파일 반환
          },
          'image/webp', // 이미지 품질 0~1, 숫자가 클수록 고품질
          0.8
        );
      };

      img.onerror = () => {
        reject(new Error('이미지를 불러올 수 없습니다.'));
      };

      // FileReader가 읽은 이미지 데이터를 Image 객체에 전달
      img.src = reader.result as string;
    };

    reader.onerror = () => {
      reject(new Error('파일을 읽을 수 없습니다.'));
    };

    // 이미지 파일을 브라우저에서 읽을 수 있는 Data URL로 변환
    reader.readAsDataURL(file);
  });
};