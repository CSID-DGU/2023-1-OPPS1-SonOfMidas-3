const buildingInfo = [
  {
    img: "/건물정보 이미지/경영관.jpg",
    name: "경영관",
    info: new Map([
      ["학사운영실", "경영대 학사운영실"],
      ["학사운영실위치", "경영관 2층"],
      ["전화번호", "02-2260-3502\n02-2260-3517/3518\n02-2260-8889"],
      ["운영시간", "학기중 09:00~17:00\n방학중 10:00~17:00"],
      [
        "열람실",
        "[경영대 비즈마루]\n평일/토: 09:00-22:00\n스터디룸: 09:00-20:00\n(1일전 예약)",
      ],
      ["카페", "[경영관 야외(그루터기)]\n평일: 09:00-18:00\n주말: 휴무"],
    ]),
  },

  { name: "계산관A" },
  { name: "계산관B" },
  { name: "고시반 기숙사" },
  { name: "과학관" },
  { name: "기숙사" },
  { name: "금강관" },

  {
    img: "/건물정보 이미지/다향관.jpg",
    name: "다향관",
    info: new Map([
      ["분류", "매장/서점"],
      ["전화번호", "매점: 02-2260-8964\n서점: 02-2260-8956"],
      ["운영시간", "평일: 08:30~18:30\n주말: 휴무"],
    ]),
  },

  { name: "대운동장" },
  { name: "동국백년비" },

  {
    img: "/건물정보 이미지/만해관.jpg",
    name: "만해관",
    info: new Map([
      ["학사운영실", "불교대학 학사운영실"],
      ["학사운영실위치", "법학관 B166호"],
      ["전화번호", "02-2260-3098\n02-2260-8701"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
    ]),
  },

  { name: "만해광장" },
  { name: "만해시비" },

  {
    img: "/건물정보 이미지/명진관.jpg",
    name: "명진관",
    info: new Map([
      // [
      //   "설명",
      //   "서울 동국대학교 구 본관(석조관)은 1958년 건립된 건물로 당시 우리나라를 대표하는 건축가 중의 한 사람인 송민구에 의해 설계된 고딕풍 건물이며, 전체적으로 평면은 중앙부를 중심으로 좌우 대칭성을 강조하고 외부는 석재로 마감하는 등 당시 대학 본관으로서의 상징성을 잘 표현해 주고 있다.",
      // ],
      ["학사운영실", "문과대학/이과대학 학사운영실"],
      ["학사운영실위치", "명진관 156호"],
      ["전화번호", "02-2260-3757\n02-2260-3756\n02-2260-3750"],
      ["운영시간", "학기중 09:00~17:00\n방학중 10:00~17:00"],
      ["열람실", "[명진관 1층(명진라운지)]\n평일: 09:00-17:00"],
    ]),
  },

  {
    img: "/건물정보 이미지/문화관.jpg",
    name: "문화관",
    info: new Map([
      ["학사운영실", "예술대학 학사운영실"],
      ["학사운영실위치", "문화관 1층"],
      ["전화번호", "02-2260-3605\n02-2260-3608"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
    ]),
  },

  { name: "박물관" },
  { name: "반야관" },

  {
    img: "/건물정보 이미지/법학관.jpg",
    name: "법학관",
    info: new Map([
      ["학사운영실", "법과대학 학사운영실"],
      ["학사운영실위치", "법학관 1층"],
      ["전화번호", "02-2260-8742\n02-2260-3226\n02-2260-3227"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      ["열람실", "[법학/만해관 열람실]\n06:00-24:00(학기중, 방학중 동일)"],
    ]),
  },

  { name: "법학생활관" },
  { name: "보현 보살코끼리상" },

  {
    img: "/건물정보 이미지/본관.jpg",
    name: "본관",
    info: new Map([
      [
        "설명",
        "예전에는 명진관이 본관으로 사용되었지만 현재에는 이 건물로 바뀌어 본관으로 사용되고있다. 주로 교직원분들의 근무처이다.",
      ],
      ["카페", "[본관 야외(가온누리)]\n평일: 09:00-18:00\n주말: 휴무"],
      [
        "카페2",
        "[본관 야외(블루포트)]\ntel: 02-2260-8970\n평일: 08:30-19:00\n주말: 휴무",
      ],
    ]),
  },

  {
    img: "/건물정보 이미지/사회과학관.jpg",
    name: "사회과학관",
    info: new Map([
      ["학사운영실", "사회과학대학 학사운영실"],
      ["학사운영실위치", "사회과학관 3층"],
      ["전화번호", "02-2260-3104\n02-2260-3105"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      // ["열람실", "사과대 능금 : 아이스페이스 09:00-23:00 / 열람실 09:00-22:00"],
      ["열람실", "[사과대 능금]\n개방시간: 09:00-23:00\n\n[열람실]\n개방시간: 09:00-22:00"],
    ]),
  },

  {
    img: "/건물정보 이미지/상록원.jpg",
    name: "상록원",
    info: new Map([
      ["분류", "식당"],
      ["전화번호", "02-2260-8979,\n8980,8977"],
      [
        "상록원 1층 운영시간",
        "평일: 11:00~19:00\n(15-16 Break time)\n주말: 운영중단",
      ],
      [
        "상록원 2층 운영시간",
        "평일: 10:00~16:00\n(2시~3시 Break time)\n주말: 운영중단",
      ],
      [
        "상록원 3층 운영시간",
        "평일: 11:00~14:00/17:00~18:00\n주말: 11:00~14:00",
      ],
    ]),
  },

  { name: "생활협동조합" },

  {
    img: "/건물정보 이미지/신공학관.jpg",
    name: "신공학관",
    info: new Map([
      ["학사운영실", "공과대학 학사운영실"],
      ["학사운영실위치", "신공학관 9103호"],
      [
        "전화번호",
        "[융합에너지신소재공학과]\n02-2260-8513\n\n[전자전기공학부]\n02-2260-8735, 8736\n\n[정보통신공학전공]\n02-2260-8755",
      ],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      ["카페", "[신공학관 1층 카페]\n오전 8:30 ~ 오후 7:30"],
    ]),
  },

  {
    img: "/건물정보 이미지/원흥관.jpg",
    name: "원흥관",
    info: new Map([
      ["학사운영실1", "공과대학 학사운영실"],
      ["학사운영실위치1", "원흥관 4층 423호"],
      [
        "전화번호1",
        "학부학사\n(수업/성적/졸업/학점인정)\n02-2260-3862\n\n학부학사\n(학적/휴.복학/취업/창업/현장실습)\n02-2260-3858\n[건설환경공학과]\n02-2260-8737\n\n[건축공학부]\n02-2260-8738\n\n[기계로봇에너지공학과]\n02-2260-8580\n\n[산업시스템공학과]\n02-2260-8743\n\n[화공생물공학과]\n02-2260-8739"
      ],
      ["운영시간1", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      ["학사운영실2", "AI융합대학 학사운영실"],
      ["학사운영실위치2", "원흥관 4층 427호"],
      ["전화번호2", "02-2260-8957\n02-2260-8963\n\n[컴퓨터공학전공]\n02-2260-8742\n\n[멀티미디어공학과]\n02-2260-8760\n\n[AI융합학부]\n02-2260-8957"],
      ["운영시간2", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      ["열람실", "[원흥관 3층(아리수 북카페)]\n평일: 09:00-18:00\n주말: 휴무"],
      [
        "열람실2",
        "[원흥관 3층(아이스페이스)]\n평일: 10:00-16:50\n(17시 이후, 주말 사용 금지)",
      ],
    ]),
  },

  { name: "원흥별관" },
  { name: "정각원" },
  { name: "정문" },

  {
    img: "/건물정보 이미지/정보문화관.jpg",
    name: "정보문화관",
    info: new Map([

    ]),
  },

  {
    img: "/건물정보 이미지/중앙도서관.jpg",
    name: "중앙도서관",
    info: new Map([
      [
        "운영시간",
        "[학기중]\n평일: 09:00-21:00\n주말: 09:00-17:00\n\n[방학중]\n평일/주말: 09:00-17:00",
      ],
    ]),
  },

  { name: "충무로 영상센터" },
  { name: "팔정도" },

  {
    img: "/건물정보 이미지/학림관.jpg",
    name: "학림관",
    info: new Map([
      ["학사운영실", "사범대학 학사운영실"],
      ["학사운영실위치", "학림관 1층"],
      ["전화번호", "02-2260-3110\n02-2260-3108"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      [
        "열람실",
        "[1층 라운지 : 샘)]\n02-2260-3110(대관문의)\n[학기중\n평일: 09:00-18:00\n(수,목 -21:00)\n\n[방학중]\n평일: 10:00-17:00",
      ],
    ]),
  },

  {
    img: "/건물정보 이미지/학생회관.jpg",
    name: "학생회관",
    info: new Map([["열람실", "[1층 아이스페이스]\n평일: 10:00-22:00"]]),
  },

  {
    img: "/건물정보 이미지/학술관.jpg",
    name: "학술관",
    info: new Map([
      ["식당", "지하1층 가든쿡"],
      ["운영시간", "평일: 11:00~18:00\n(14:00~16:30 Break time)\n주말: 휴무"],
      ["카페", "[지하1층 카페두리터]\n평일: 09:00-18:00\n주말: 휴무"],
    ]),
  },

  {
    img: "/건물정보 이미지/혜화관.jpg",
    name: "혜화관",
    info: new Map([
      ["학사운영실", "경찰사법대 학사운영실"],
      ["학사운영실위치", "혜화관 2층"],
      ["전화번호", "02-2260-8719\n02-2260-3370"],
      ["운영시간", "학기중: 09:00~17:00\n방학중: 10:00~17:00"],
      ["학사운영실2", "미래융합대 학사운영실"],
      ["학사운영실위치2", "혜화관 2층(G239)"],
      ["전화번호2", "02-2260-3633"],
      ["운영시간2", "학기중: 09:00-21:30\n방학중: 10:00-17:00"],
    ]),
  },

  { name: "혜화문" },
  { name: "혜화별관" },
  { name: "후문" },
];
export default buildingInfo;
