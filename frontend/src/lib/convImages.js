const convImages = {
  복사기: {
    경영관1층: "/편의시설이미지/경영관/경영관_1_복사기.png",
    과학관1층: "/편의시설이미지/과학관/과학관_1_복사기.png",
    명진관1층: "/편의시설이미지/명진관/명진관_1_복사기.png",
    문화관1층: "/편의시설이미지/문화관/문화관_1_복사기.png",
    만해관2층: "/편의시설이미지/만해관/만해관_2_복사기.png",
    사회과학관2층: "/편의시설이미지/사회과학관/사회과학관_2_복사기.png",
    신공학관3층: "/편의시설이미지/신공학관/신공학관_3_복사기.png",
    신공학관9층: "/편의시설이미지/신공학관/신공학관_9_복사기.png",
    원흥관3층: "/편의시설이미지/원흥관/원흥관_3_복사기.png",
    정보문화관P3층: "/편의시설이미지/정보문화관P/정보문화관P_3층_복사기.png",
    중앙도서관지하2층:
      "/편의시설이미지/중앙도서관/중앙도서관_B2_복사기(복사만).png",
    중앙도서관지하1층: "/편의시설이미지/중앙도서관/중앙도서관_B1_복사기.png",
    중앙도서관1층: "/편의시설이미지/중앙도서관/중앙도서관_1_복사기(복사만).png",
    중앙도서관3층: "/편의시설이미지/중앙도서관/중앙도서관_3_복사기(복사만).png",
    중앙도서관4층: "/편의시설이미지/중앙도서관/중앙도서관_4_복사기.png",
    학림관1층: "/편의시설이미지/학림관/학림관_1_복사기.png",
    학림관2층: "/편의시설이미지/학림관/학림관_2_복사기.png",
    학생회관1층: "/편의시설이미지/학생회관/학생회관_1_복사기.png",
    학술관1층: "/편의시설이미지/학술관/학술관_1_복사기.png",
    혜화관1층: "/편의시설이미지/혜화관/혜화관_1_복사기.png",
  },

  유인복사실: {
    과학관야외교재실: "/편의시설이미지/과학관/과학관_바깥_교재실.png",
    명진관1층: "/편의시설이미지/명진관/명진관_1_유인복사실.png",
    중앙도서관지하1층:
      "/편의시설이미지/중앙도서관/중앙도서관_B1_유인복사실.png",
  },

  열람실: {
    경영관지하1층비즈마루: "",
    명진관1층명진라운지: "/편의시설이미지/명진관/명진관_1_명진라운지.png",
    사회과학관2층능금: "",
    원흥관3층북카페: "/편의시설이미지/원흥관/원흥관_3_북카페.png",
    원흥관3층ispace: "/편의시설이미지/원흥관/원흥관_3_아이스페이스.png",
    학림관1층라운지샘: "/편의시설이미지/학림관/학림관_1_라운지.png",
    학생회관1층ispace: "/편의시설이미지/학생회관/학생회관_1_아이스페이스.png",
    혜화관1층라운지: "/편의시설이미지/혜화관/혜화관_1_라운지.png",
  },

  atm: {
    명진관야외신한: "/편의시설이미지/명진관/명진관_바깥_atm신한.png",
    문화관1층신한: "/편의시설이미지/문화관/문화관_1_atm신한.png",
    본관야외국민: "/편의시설이미지/본관/본관_바깥_atm국민.png",
    상록원1층신한국민: "/편의시설이미지/상록원/상록원_1_atm신한국민.png",
    신공학관1층신한: "/편의시설이미지/신공학관/신공학관_1_atm신한.png",
    원흥관4층신한: "/편의시설이미지/원흥관/원흥관_4_atm신한.png",
    학림관1층신한: "/편의시설이미지/학림관/학림관_1_atm신한.png",
    혜화관1층국민: "/편의시설이미지/혜화관/혜화관_1_atm국민.png",
  },

  증명서자동발급기: {
    문화관1층: "/편의시설이미지/문화관/문화관_1_증명서자동발급기.png",
    사회과학관2층:
      "/편의시설이미지/사회과학관/사회과학관_2_증명서자동발급기.png",
    중앙도서관2층:
      "/편의시설이미지/중앙도서관/중앙도서관_2_증명서자동발급기.png",
    학림관1층: "/편의시설이미지/학림관/학림관_1_증명서자동발급기.png",
  },

  제세동기: {
    과학관1층: "/편의시설이미지/과학관/과학관_1_제세동기.png",
    문화관1층: "/편의시설이미지/문화관/문화관_1_제세동기.png",
    법학관1층: "/편의시설이미지/법학관/법학관_1_제세동기.png",
    본관3층: "/편의시설이미지/본관/본관_3_제세동기.png",
    사회과학관2층: "/편의시설이미지/사회과학관/사회과학관_2_제세동기.png",
    학림관1층: "/편의시설이미지/학림관/학림관_1_제세동기.png",
  },

  식당: {
    상록원1층: "/편의시설이미지/상록원/상록원_1_식당.png",
    상록원2층: "/편의시설이미지/상록원/상록원_2_식당.png",
    상록원3층: "/편의시설이미지/상록원/상록원_3_식당.png",
    신공학관1층: "/편의시설이미지/신공학관/신공학관_1_식당.png",
    학술관지하1층가든쿡: "/편의시설이미지/학술관/학술관_B1_식당가든쿡.png",
  },

  카페: {
    경영관야외그루터기: "/편의시설이미지/경영관/경영관_야외_카페그루터기.png",
    본관야외가온누리: "/편의시설이미지/본관/본관_야외_카페가온누리.png",
    본관야외블루포트: "/편의시설이미지/본관/본관_야외_카페블루포트.png",
    신공학관1층: "/편의시설이미지/신공학관/신공학관_1_카페.png",
    학술관지하1층두리터: "/편의시설이미지/학술관/학술관_B1_카페.png",
    혜화관1층무인카페: "/편의시설이미지/혜화관/혜화관_1_무인카페.png",
    혜화관야외카페ing: "/편의시설이미지/혜화관/혜화관_야외_카페ing.png",
  },

  매점: {
    다향관지하1층: "/편의시설이미지/다향관/다향관_1_매점.png",
    법학관2층: "/편의시설이미지/법학관/법학만해관_2_매점.png",
    상록원1층: "/편의시설이미지/상록원/상록원_1_매점.png",
    신공학관1층: "/편의시설이미지/신공학관/신공학관_1_매점.png",
    중앙도서관4층: "/편의시설이미지/중앙도서관/중앙도서관_4_매점.png",
    학림관지하1층: "/편의시설이미지/학림관/학림관_B1_매점.png",
    혜화관4층: "/편의시설이미지/혜화관/혜화관_4_매점.png",
  },
};
export default convImages;