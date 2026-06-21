// HTML 요소 가져오기
const pomBtn = document.getElementById('pom-btn');
const corgiBtn = document.getElementById('corgi-btn');
const dogImage = document.getElementById('dog-image');

// 강아지 사진을 불러오는 공통 함수
async function fetchDogImage(breed) {
    try {
        // 버튼을 누르는 즉시 로딩 중임을 알리기 위해 투명도 조절
        dogImage.style.opacity = '0.5'; 
        
        // Dog API 호출 (견종에 따라 URL 변경)
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();

        // 이미지 주소 적용 및 화면에 표시
        dogImage.src = data.message;
        dogImage.style.display = 'block';
        
        // 이미지가 완전히 로드되면 투명도 복구
        dogImage.onload = () => {
            dogImage.style.opacity = '1';
        };

    } catch (error) {
        alert('사진을 불러오는 데 실패했습니다. 인터넷 연결을 확인해주세요.');
        console.error(error);
    }
}

// 버튼 클릭 이벤트 리스너 등록
pomBtn.addEventListener('click', () => {
    fetchDogImage('pomeranian');
});

corgiBtn.addEventListener('click', () => {
    fetchDogImage('corgi');
});
