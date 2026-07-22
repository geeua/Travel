const buttons = document.querySelectorAll(".date-item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // 모든 버튼 원래 상태로 복구
        buttons.forEach(btn => {
            btn.classList.remove("active");

            btn.querySelector(".day").textContent = btn.dataset.day;
            btn.querySelector(".week").textContent = btn.dataset.week;
            btn.querySelector(".week").style.display = "block";
        });


        // 선택한 버튼 변경
        button.classList.add("active");

        button.querySelector(".day").textContent = "Today";
        button.querySelector(".week").style.display = "none";

        // 날짜별 일정 변경
        renderSchedule(button.dataset.day);

        // 날짜별 교통비 변경
        renderTransportTotal(button.dataset.day);

    });

});

// 처음 로딩 시 24일을 Today 상태로 표시
const firstButton = buttons[0];

firstButton.classList.add("active");
firstButton.querySelector(".day").textContent = "Today";
firstButton.querySelector(".week").style.display = "none";





// 일정 데이터 생성
const scheduleContainer = document.getElementById("scheduleContainer");


// 일정 데이터
const schedules = {
    "24": [
        {
            type: "place",
            time: "🕛 10:05",
            title: "✈️ 후쿠오카 공항(국제선)",
            hours: "",
            desc: [
                "현금 인출(세븐ATM : 트래블로그(master) | 이온ATM : 트래블월렛)",
                "교통카드 충전 : 세븐ATM 부근에 로손(¥1,000)",
                "국내선으로 셔틀 이동"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "약 40분",
            line: "공항선",
            price: "¥260"
        },

        {
            type: "place",
            time: "🕛 12:00",
            title: "🏠 MK호텔 니시나카스",
            hours: "",
            desc: [
                "짐 보관"
            ]
        },

        {
            type: "move",
            transport: "도보",
            duration: "10분",
            line: "",
            price: ""
        },

        {
            type: "place",
            time: "🕛 12:30",
            title: "🥐 아임도넛",
            hours: "10:00 - 19:00",
            desc: [
                "생도넛(엄청 쫀득)",
                "카드 Only"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 효탄스시 솔라리아점",
            hours: "11:00 - 21:00",
            desc: [
                "본점은 판스시, 솔라리아는 회전초밥",
                "현금 Only"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍼 빅카메라 2호점",
            hours: "10:00 - 21:00",
            desc: [
                "- 6F : 아기용품",
                "- 호빵맨 시리즈 아기장난감(아카짱혼포보다 저렴)",
                "- 온도 변하는 이유식 스푼",
                "- 아이폰, 디카 등",
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍼 몽벨",
            hours: "10:00 - 20:00",
            desc: [""
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍼 미츠코시 백화점",
            hours: "10:00 - 20:00",
            desc: [
                "- 3F : GAP 베이비(60(신생아), 70(조금 더 큰), 80(7kg))",
                "- 9F : 면세X_다이소, 스탠다드 프로덕트, 쓰리피(면세 안됨)",
                "- B1 : 게스트카드 발급(적용 제외 : 단가 3,000엔(세금제외)미만 상품, 세일 상품)",
                "- B2 :면세 카운터(카드/구매상품/영수증/여권)",
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 다이코쿠드럭 텐진미나미점",
            hours: "10:05 - 23:50",
            desc: [
                "드럭스토어 체인",
                "가격 저렴"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍼 돈키호테 텐진 본점",
            hours: "24시간",
            desc: [
                "아카짱혼포 가기 전 아기 용품 구경"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍼 이와타야 백화점 블로썸 39",
            hours: "10:00 - 20:00",
            desc: [
                "트립트랩 픽업"
            ]
        },

        {
            type: "move",
            transport: "도보",
            duration: "11분",
            line: "",
            price: ""
        },

        {
            type: "place",
            time: "🕛 15:00",
            title: "🏠 MK호텔 니시나카스",
            desc: [
                "체크인"
            ]
        },

        {
            type: "move",
            transport: "버스",
            duration: "40분",
            line: "46",
            price: "¥370"
        },

        {
            type: "place",
            time: "🕛 16:00",
            title: "🍼 라라포트",
            hours: "10:00 - 21:00",
            desc: [
                "- 3F : 키즈・베이비 의류 매장(유치원생 나이 정도)",
                "- 3F : Petit main(유아・아동복 브랜드, 한국에 없음, 딸 귀여운 거 많음)",
                "- 3F : 아카짱혼포(호빵맨은 빅카메라가 더 쌈)",
                "- 1F : 텍스리펀 카운터 방문(PIE VAT 어플 다운 받아야 함)"
            ]
        },

        {
            type: "move",
            transport: "버스",
            duration: "40분",
            line: "46",
            price: "¥360"
        },

        {
            type: "place",
            time: "",
            title: "🍚 왕교자",
            hours: "일 휴무 | 17:30 - 01:00",
            desc: [
                "간장라멘(830), 볶음밥(880), 짬뽕(1030), 한입만두(550)",
                "근처 유흥가라서 길 조심하기"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 마츠모토키요시 나카스 5쵸메점",
            hours: "09:00 - 23:30",
            desc: [
                "면세O",
                "돈키호테보다 한적",
                "1차 쇼핑하고 없는 제품만 돈키호테"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 돈키호테 나카스점",
            hours: "24시간",
            desc: [
                "5000엔 이상 구매 시 10% 면세",
                "할인 쿠폰 활용하기",
                "일본에서 사용할 물건은 따로 구매"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 편의점 털기",
            hours: "",
            desc: [
                ""
            ]
        },
    ],

    "25": [
        {
            type: "move",
            transport: "도보",
            duration: "15분",
            line: "",
            price: ""
        },

        {
            type: "place",
            time: "🕛 10:30 구글 예약",
            title: "🍚 토리마부시",
            hours: "10:00 - 22:30",
            desc: [
                "카드/현금 가능",
                "추천메뉴 : 오리지널 토리마부시(닭구이덮밥)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 라쿠스이엔 정원",
            hours: "화 휴무 | 09:00 - 17:00",
            desc: [
                "입장료 : ¥100(성인, 현금 Only)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 캐널시티",
            hours: "10:00 - 21:00",
            desc: [
                "Center Walk",
                "- 3F : 노스페이스, ABC 마트 그랜드 스테이지, ABC 마트, GMW 빈티지샵",
                "- 2F : 디즈니 스토어, 아식스",
                "- B1F : 짱구샵, 동구리 공화국, 산리오 갤러리(디즈니/미피/몬치치/지브리/산리오)",
                "",
                "North 빌딩",
                "- 4F : 무인양품",
                "- 3F : 무인양품(with Cafe)",
                "- 2F : 오니츠카타이거"
            ]
        },

        {
            type: "place",
            time: "🕛 12:30",
            title: "🥐 츠키지긴타코 캐널시티",
            hours: "10:00 - 21:00",
            desc: [
                "기본 : ¥702(포장), ¥715(매장)",
                "치즈 명란젓/치즈 데리야끼/네기 : ¥918(포장), ¥935(매장)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 마츠모토키요시 하카타스미요시점",
            hours: "09:00 - 23:30",
            desc: [
                "면세O",
                "돈키호테보다 한적",
                "1차 쇼핑하고 없는 제품만 돈키호테"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "캐널시티 > 하카타",
            line: "",
            price: "¥210"
        },

        {
            type: "place",
            time: "",
            title: "🥐 다코멧카",
            hours: "07:00 - 19:00",
            desc: [
                "웨이팅 10~30분",
                "소시지 빵 강추",
                "15시 전엔 가야함"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 일 포르노 델 미뇽",
            hours: "07:00 - 23:00",
            desc: [
                "하카타역 1F JR 중앙 개찰구",
                "1번 라인 : 플레인(226), 고구마(248), 초코(248) 추천",
                "2번 라인 : 아몬드, 명란, 시즌메뉴?",
                "각각 하나씩 했을 때 ¥262 정도",
                "현금 Only"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 Be! SANDWICH",
            hours: "10:00 - ",
            desc: [
                "멜론 2가지 중 더 비싼게 맛있음",
                "미스터도넛 근처",
                "동쪽 출입구로 진입하면 수월",
                "카드/현금 가능"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "하카타 > 텐진",
            line: "공항선",
            price: "¥210"
        },

        {
            type: "place",
            time: "",
            title: "📍 미나텐진",
            hours: "10:00 - 20:00",
            desc: [
                "- 6F : 세리아(100엔샵)",
                "- 5F : ABC 마트",
                "- 4F : 로프트(화장품, 팝마트 일부 상품 입점, 젤리캣)",
                "- 3F : GU",
                "- 2F : 유니클로",
                "- 1F : 유니클로",
                "- B1F : 3COINS +(300엔샵)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 파르코 백화점",
            hours: "10:00 - 20:30",
            desc: [
                "- 8F : 에니메이트, 키디랜드",
                "- 7F : 무기와라 스토어, 짱구샵, 래그태그, 팝마트",
                "- 5F : 프랑프랑, 러쉬",
                "- 4F : 메리콴트(일본 여자들 사이에서 유명)",
                "- 3F : 어반리서치, 레드윙, ABC 마트 그랜드 스테이지, 오니츠카타이거",
                "- 2F : emmi",
                "- 1F : 비비안 웨스트 우드 액세서리, 저널 스탠다드(여성)",
                "- B1F : 디즈니 스토어"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 링고 애플파이 텐진 지하상가점",
            hours: "09:00 - 21:30",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 일 포르노 델 미뇽",
            hours: "07:00 - 22:00",
            desc: [
                "현금 Only"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 파타고니아",
            hours: "11:00 - 19:00",
            desc: [
                "매장 크고 상품 다양"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 이와타야 백화점",
            hours: "10:00 - 20:00",
            desc: [
                "디올, 아크네, 노페 등"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 몽벨",
            hours: "10:00 - 20:00",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 야끼소룡포 텐텐",
            hours: "11:00 - 19:00",
            desc: [
                "기본, 명란 추천",
                "식기 전에 바로 먹기"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 We ARE READY(케이크)",
            hours: "11:00 - 19:00",
            desc: [
                "딸기 생크림 케이크(¥1,485)",
                "아메리카노(¥500)",
                "라떼(¥550)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 미츠코시 백화점",
            hours: "10:00 - 20:00",
            desc: [
                "- 9F : 다이소, 스탠다드 프로덕트, 쓰리피(면세 안됨)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 다이코쿠드럭 텐진미나미점",
            hours: "10:05 - 23:50",
            desc: [
                "드럭스토어 체인",
                "가격 저렴"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 다이마루 백화점",
            hours: "10:00 - 20:00",
            desc: [
                "- 3F(동관) : 마가렛호웰",
                "- 2F(본관) : 마가렛호웰 아이디어(잡화)",
                "- 1F(본관) : 티파니",
                "- B1F(본관) : 아식스 워킹/(동관)무인양품, 면제 카운터"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 NOOICE(수플레)",
            hours: "08:00 - 17:00",
            desc: [
                "수플레 팬케이크(¥1,280)",
                "콜드브루 라이드 로스팅(¥500)",
                "복숭아 소다(¥700)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 넌투순라이프 앤 오브젝",
            hours: "11:00 - 19:30",
            desc: [
                "도자기 식기류 소품샵"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 B·B·B POTTERS",
            hours: "11:00 - 19:00",
            desc: [
                "소품샵"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 하이타이드 스토어 후쿠오카",
            hours: "11:00 - 19:00",
            desc: [
                "소품샵"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 이츠이스시",
            hours: "17:30 - 22:00",
            desc: [
                "할아버지 스시집"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "야쿠인 > 니시테쓰후쿠오카",
            line: "",
            price: "¥180"
        },

        {
            type: "place",
            time: "",
            title: "🍚 이나바쵸 잇케이",
            hours: "11:00 - 23:00",
            desc: [
                "카드/현금 가능",
                "예약 가능(타베로그)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 카와미야 함바그 파르코 후쿠오카점",
            hours: "11:00 - 20:30",
            desc: [
                "할아버지 스시집"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 규카츠 모토무라 후쿠오카 파르코점",
            hours: "11:00 - 22:00",
            desc: [
                "신관 B2"
            ]
        },

          {
            type: "move",
            transport: "도보",
            duration: "10분",
            line: "",
            price: ""
        },

        {
            type: "place",
            time: "🕛 12:00",
            title: "🏠 MK호텔 니시나카스",
            hours: "",
            desc: [
                "짐 보관"
            ]
        },

    ],

    "26": [
        {
            type: "move",
            transport: "지하철",
            duration: "20분",
            line: "로손 오리엔탈호텔점",
            price: "¥210"
        },

        {
            type: "place",
            time: "🕛 07:30",
            title: "📍유후인 잇쇼이투어 집결",
            hours: "",
            desc: [
                "출발 시간 : 07:50",
                "미팅장소 : 오리엔탈호텔 1층 로손 편의점 앞"
            ]
        },

        {
            type: "place",
            time: "🕛 08:20",
            title: "📍다자이후",
            hours: "",
            desc: [
                "우메가와 모찌롤 제공",
                "60~70분"
            ]
        },

        {
            type: "place",
            time: "🕛 10:50",
            title: "📍유후인",
            hours: "",
            desc: [
                "3시간 20분"
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍유후다케 차창관람",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "🕛 14:50",
            title: "📍쿠스 휴게소",
            hours: "",
            desc: [
                "10분~15분",
                "야마나미 목장 요구르트 유명"
            ]
        },

        {
            type: "place",
            time: "🕛 15:20",
            title: "📍히타・마메다마치",
            hours: "",
            desc: [
                "60~70분"
            ]
        },

        {
            type: "place",
            time: "🕛 18:00",
            title: "📍하카타역 도착",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "🕛 19:30 타베로그 예약",
            title: "🍚 모츠나베 이치타카",
            hours: "17:00 - 23:00",
            desc: [
                "- 매운 된장 모츠나베(느끼X), 말 간 육회(고소)",
                "- 상차림비 1인당 ¥495(코스는 X)=¥1,485",
                "- 산토리 생맥주(¥693), 레몬사와(¥550)=¥2,079",
                "- 모츠나베(매운된장) 1인분(¥1,958)",
                "- 면사리 추가(¥396)",
                "- 카드/현금 가능",
                "- 인원 수만큼 주문하지 않아도 되는 듯(2인분 시킬 것)"
            ]
        },

        {
            type: "place",
            time: "🕛 21:15 구글 예약",
            title: "🍚 친푼칸푼 하카타점",
            hours: "15:00 - 01:00",
            desc: [
                "- 아보카도 된장, 소유라멘, 참깨고등어회절임, 무튀김 등",
                "- 카드/현금 가능",
                "- 숙소까지 도보 25분"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "20분",
            line: "",
            price: "¥210"
        }

    ],

    "27": [
        {
            type: "place",
            time: "🕛 10:30 오픈런",
            title: "🍚 멘야 카네토라 니시도리점",
            hours: "11:00 - 21:00",
            desc: [
                "웨이팅 적음(야외)"
            ]
        },

        {
            type: "place",
            time: "🕛 10:30 오픈런",
            title: "🍚 멘야 카네토라 파르코점",
            hours: "10:45 - 22:00",
            desc: [
                "지하상가 연결(실내), 의자 있음",
                "식권 먼저 구입하고 웨이팅"
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "텐진역에서 탑승",
            line: "공항선",
            price: "¥210"
        },

        {
            type: "place",
            time: "🕛 12:00",
            title: "📍 오호리 공원",
            hours: "10:45 - 22:00",
            desc: [
                "입장료 X",
                "일본 정원은 성인 ¥250"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 카페",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "",
            title: "📍 모모치 해변",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "",
            line: "공항선",
            price: "¥210"
        },

        {
            type: "place",
            time: "",
            title: "🍚 이나바쵸 잇케이",
            hours: "11:00 - 23:00",
            desc: [
                "카드/현금 가능",
                "예약 가능(타베로그)"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 카와미야 함바그 파르코 후쿠오카점",
            hours: "11:00 - 20:30",
            desc: [
                "할아버지 스시집"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🍚 규카츠 모토무라 후쿠오카 파르코점",
            hours: "11:00 - 22:00",
            desc: [
                "신관 B2"
            ]
        },

        {
            type: "place",
            time: "",
            title: "🥐 카페",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "place",
            time: "🕛 16:00",
            title: "🚌 텐진 고속버스 터미널 3층 6번 승차장",
            hours: "16:34, 17:49",
            desc: [
                "1인 ¥500"
            ]
        },

        {
            type: "place",
            time: "🕛 17:00",
            title: "🚈 나카스와바타역",
            hours: "",
            desc: [
                ""
            ]
        },

        {
            type: "move",
            transport: "지하철",
            duration: "",
            line: "공항선",
            price: "¥260"
        },

        {
            type: "place",
            time: "🕛 18:00",
            title: "✈️ 후쿠오카 공항",
            hours: "",
            desc: [
                ""
            ]
        },

        

    ]
};

function renderSchedule(day) {

    scheduleContainer.innerHTML = "";


    schedules[day].forEach(schedule => {


        // 장소 카드
        if(schedule.type === "place") {

            scheduleContainer.innerHTML += `

            <div class="schedule-card">


                ${schedule.time ? `
                    <div class="time">
                        ${schedule.time}
                    </div>
                ` : ""}


                <div class="title-row">

                    <h3 class="card-title">
                        ${schedule.title}
                    </h3>

                    <button class="detail-btn">
                        <img class="arrow" src="images/arrow.svg" alt="">
                    </button>

                </div>


                ${schedule.hours ? `
                    <p class="hours">
                        ${schedule.hours}
                    </p>
                ` : ""}


                <p class="description">
                    ${schedule.desc.join("<br>")}
                </p>


            </div>

            `;
        }



        // 이동 카드
        if(schedule.type === "move") {


            scheduleContainer.innerHTML += `

            <div class="move-card">


                <div class="move-row">

                    <span class="move-type">
                        ${schedule.transport}
                    </span>


                    <span class="move-time">
                        ${schedule.duration}
                    </span>

                </div>



                ${(schedule.line || schedule.price) ? `

                <div class="move-row">

                    <span class="move-line">
                        ${schedule.line || ""}
                    </span>


                    <span class="move-price">
                        ${schedule.price || ""}
                    </span>

                </div>

                ` : ""}


            </div>

            `;

        }


    });

}

const transportTotal = document.getElementById("transportTotal");


function renderTransportTotal(day) {

    let total = 0;


    schedules[day].forEach(item => {


        if(item.type === "move" && item.price) {


            const price = item.price.replace(/[^0-9]/g, "");


            if(price) {
                total += Number(price);
            }

        }


    });


    transportTotal.textContent = `교통비 ¥${total.toLocaleString()}`;

}

renderSchedule("24");
renderTransportTotal("24");







// 설명 펼치기 / 접기
document.addEventListener("click", function(e){


    const button = e.target.closest(".detail-btn");


    if(button){


        const card = button.closest(".schedule-card");

        const description = card.querySelector(".description");

        const arrow = button.querySelector(".arrow");


        description.classList.toggle("show");


        if(description.classList.contains("show")) {

            arrow.classList.add("rotate");

        } else {

            arrow.classList.remove("rotate");

        }

    }


});

const flightBtn = document.getElementById("flightBtn");

flightBtn.addEventListener("click", () => {

    window.location.href = "boarding.html";

});

const searchBtn = document.getElementById("searchBtn");

const searchBox = document.getElementById("searchBox");

const searchInput = document.getElementById("searchInput");

const searchResult = document.getElementById("searchResult");

const dimmer = document.getElementById("dimmer");


const allPlaces = [];


Object.entries(schedules).forEach(([day, items]) => {

    items.forEach((item, index) => {

        if(item.type === "place") {


            allPlaces.push({

                day: day,

                title: item.title,

                hours: item.hours || "",

                desc: item.desc.join(" "),

                index: index

            });


        }

    });

});




searchBtn.addEventListener("click",()=>{


    searchBox.classList.toggle("show");

    dimmer.classList.toggle("show");


    searchResult.classList.remove("show");


    if(searchBox.classList.contains("show")){

        searchInput.focus();

    }


});



searchInput.addEventListener("input",()=>{


    const keyword = searchInput.value.trim();


    searchResult.innerHTML="";


    if(!keyword){

        searchResult.classList.remove("show");

        return;

    }

    const results = allPlaces.filter(place => {


    const text = 
        place.title +
        " " +
        place.hours +
        " " +
        place.desc;


    return text.includes(keyword);


});

    results.forEach(place=>{
        searchResult.innerHTML += `
            <div class="search-item"
                data-day="${place.day}"
                data-index="${place.index}">
                ${place.title}
            </div>
        `;
    });



    searchResult.classList.add("show");


});

dimmer.addEventListener("click",()=>{


    searchBox.classList.remove("show");

    searchResult.classList.remove("show");

    dimmer.classList.remove("show");


    searchInput.value = "";


});

searchResult.addEventListener("click", (e)=>{


    const item = e.target.closest(".search-item");


    if(!item) return;


    const day = item.dataset.day;
    const index = Number(item.dataset.index);



    // 해당 날짜 버튼 찾기
    const targetButton = document.querySelector(
        `.date-item[data-day="${day}"]`
    );


    // 날짜 변경
    targetButton.click();



    setTimeout(()=>{


        const cards = document.querySelectorAll(".schedule-card");


        let count = 0;


        schedules[day].forEach((schedule)=>{


            if(schedule.type === "place"){


                if(count === index){

                    cards[count].scrollIntoView({

                        behavior:"smooth",

                        block:"center"

                    });

                }


                count++;

            }


        });



        // 검색창 닫기

        searchBox.classList.remove("show");

        searchResult.classList.remove("show");

        dimmer.classList.remove("show");

        searchInput.value="";


    },300);


});