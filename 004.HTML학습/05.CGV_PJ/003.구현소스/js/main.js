// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 영화 유튜브 아이디 정보객체
const 유튜브 = {
    "프랑켄슈타인":"dkb-CZE-ANk",
    "독립군":"kMBiiWLBZ_o",
    "좀비딸":"0uZ7l2fCwEg",
    "킹 오브 킹스":"K9a6wnfPE9Q",
    "살인자 리포트":"i8tpqVza0BQ",
    "어쩔수가없다":"ckHwZNuV-wQ",
};

// 1. 대상선정
// 1-1. 포스터 링크 이미지 a요소
const 링크 = document.querySelectorAll('.poster-menu-box li a');
// 1-2. 영화상영 아이프레임 -> 변경대상
const 아이프레임 = document.querySelector('.screen iframe');

// 2. 이벤트 대상에 클릭이벤트 적용하기
// forEach()메서드 내부함수에 첫번째 전달값으로 순회하는
// 요소나 값 하나하나가 순서대로 전달됨!
링크.forEach((요소)=>{
    요소.onclick = () => {

        // 3. 클릭된 a요소 자식중 h2요소의 글자읽기
        let 영화명 = 요소.querySelector('h2').innerText;
        console.log("클릭된 영화명;", 영화명);

        // 4. 아이프레임 소스 변경하기
        아이프레임.src = `https://www.youtube.com/embed/${유튜브[영화명]}?autoplay=1`;
    };
})


// 원래는 a요소에 직접 이벤트 속성에 코딩해서 데스트 했었음!
/* 

    onclick="
    document.querySelector('.screen iframe')
    .src = `https://www.youtube.com/embed/dkb-CZE-ANk?autoplay=1`;
    "

    onclick="
    // dkb-CZE-ANk
    document.querySelector('.screen iframe')
    .src = `https://www.youtube.com/embed/dkb-CZE-ANk?autoplay=1`;
    "

*/




// 2. 포스터 메뉴 클릭시 클래스 on 넣기 (나머지는 빼기)
// 2-1. 이벤트 대상 === 변경대상 -> 포스터 메뉴 a링크
링크.forEach((el,idx,arr)=>{
    // el-각요소, idx-순번, arr-html컬렉션 유사배열

    // 2-2. 클릭이벤트 적용 === 변경대상 -> 포스터메뉴 a링크
    // 이벤트 등록 전문이벤트 addEventListener()를 사용한다!
    el.addEventListener('click', () => {

        // (1) 모든 li의 on 클래스 제거하기
        // parentElement
        arr.forEach(x => {
            x.parentElement.classList.remove('on');
        });

        // (2) 포스터메뉴 a링크의 부모인 li에 on넣기
        // parentElement: a링크의 부모인 li
        el.parentElement.classList.add('on');
    }); /////// addEventLisnter 끝 ///////




        // 만약 onclick 이벤트 속성으로 셋팅하면
        // 이전에 셋팅된 onclick 이벤트 속성 값이 지워진다!
        // 왜? 한 요소 안에 한 개의 동일 이벤트 속성만 있기 때문!
    // el.onclick = () => {
    //     // 2-3. 포스터메뉴 a링크의 부모인 li에 on넣기
    //     // parentElement: a링크의 부모인 li
    //     el.parentElement.classList.add('on');
    // }

}); /////// forEach 끝 ///////


링크.forEach(헐=>console.log(헐));
// -> 링크를 돌면서 변수 헐...에 각 요소를 순서대로 전달한다!