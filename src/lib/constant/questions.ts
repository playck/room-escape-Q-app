export interface Question {
  id: number
  questionImage?: string
  questionDesc?: string
  answer: string
  interativeAnswer?: string
  isInterative?: boolean
  answerType: string
  hint: string
  isAnswerImage?: boolean
  answerDesc?: string
}

export const questionList: Question[] = [
  {
    id: 1,
    answer: '2441',
    hint: '단어를 180도 회전시켜보세요.',
    answerType: 'Number',
    answerDesc: '단어를 좌로 180도 회전시키면 1134 + 1307 = 2441',
  },
  {
    id: 2,
    answer: '3235',
    isAnswerImage: true,
    hint: '세로로 줄을 그어보면 숫자를 만들 수 있을 것 같습니다.',
    answerType: 'Number',
    answerDesc: '',
  },
  {
    id: 3,
    answer: 'HELP',
    hint: '화살표 방향대로 계속 선을 이어보세요.',
    answerType: 'English',
    answerDesc: '화살표 방향대로 선을 그려보면 한 줄에 하나의 알파벳이 나옵니다.',
  },
  {
    id: 4,
    answer: '9612',
    hint: '시계라고 생각해보고 이어봅니다.',
    answerType: 'Number',
    answerDesc: '시계에서 화살표대로 차례차례 조합하면 됩니다.',
  },
  {
    id: 5,
    answer: '242',
    questionDesc:
      '밤이 서서히 지나가던 중\n모두가 사실을 알게 되었다\n시끄러움이 점점 몰려오고\n이 곳에서 나는 영원히 도망치기로 했다',
    hint: '네번째 문장의 7번째 글자를 확인해주세요. (공백 제외)',
    answerType: 'Number',
    answerDesc:
      '4 - 7 = 0에서 4는 문제의 문단의 행을 뜻하고 7은 문장의 글자 순서를 뜻합니다. \n 1 - 2는 첫번째 문장의 두번째 글자 이(2)를 의미합니다.',
  },
  {
    id: 6,
    answer: '8409',
    questionDesc: '패스워드를 입력하시오',
    hint: '패는 팔(8)을 뜻하는 것 같습니다.',
    answerType: 'Number',
    answerDesc: '패 => 팔(8), 스 => 사(4), 워 => 영(0), 드 => 구(9)',
  },
  {
    id: 7,
    answer: '좌상우우하',
    hint: '이름 자체가 아니라 앞 글자의 자음에 집중 해 주세요.',
    answerType: 'direction',
    answerDesc:
      '각 지역 이름의 앞 글자를 보면 ㄷ => 동, ㅅ => 서, ㄴ => 남, ㅂ => 북을 의미합니다. \n 왼,위,오,오,아래 방향 순서입니다.',
  },
  {
    id: 8,
    answer: 'EXIT',
    hint: '화살표 갯수만큼 특정방향으로 알파벳을 이동해보세요.',
    answerType: 'English',
    answerDesc: '화살표 갯수만큼 역방향으로 알파벳을 이동하면 영어단어가 완성됩니다.',
  },
  {
    id: 9,
    answer: '1320',
    hint: '첫째자리와 넷째자리의 숫자를 곱한 값을 다음 숫자에서 찾아주세요.',
    answerType: 'Number',
    answerDesc:
      '가장 바깥 자리의 숫자의 곱한 값의 십의 자리를 첫째 자리, 일의 자리를 넷째 자리 그리고 안쪽 숫자의 곱한 값은 가운데에 위치합니다.',
  },
  {
    id: 10,
    answer: 'TIRE',
    hint: '숫자 영단어와 위치',
    answerType: 'English',
    answerDesc:
      '숫자의 영어 스펠링과 각 숫자 자리와 일치하는 자리의 알파벳으로 바꿔주면 됩니다. \n 111은 one(1) => o , one(2) => n, one(3) => e',
  },
  {
    id: 11,
    answer: '0013',
    hint: '가로 라인을 찾아주세여',
    answerType: 'Number',
    answerDesc: '각 단어 알파벳의 가로 막대기 갯수를 의미합니다.',
  },
  {
    id: 12,
    answer: 'JTWN',
    hint: '행 과 열의 위치를 가리키고 있습니다.',
    answerType: 'English',
    answerDesc: '3/4 => 네번째 줄의 세번째 칸을 의미합니다.',
  },
  {
    id: 13,
    answer: '2497',
    hint: '위의 그림에서 빠진 선들을 찾아 주세요',
    answerType: 'Number',
    answerDesc: '위의 日 그림과 문제의 그림의 겹치지 않은 부분을 보면 숫자가 그려집니다.',
  },
  {
    id: 14,
    answer: '812',
    hint: '선 아래의 단어들이 무언가 조금씩 빠져 있는 듯 합니다.',
    answerType: 'Number',
    answerDesc: '아래부분의 각 단어의 빠진 알파벳들을 조합하면 숫자 단어를 만들 수 있습니다.',
  },
  {
    id: 15,
    answer: '우좌상하상',
    hint: '동물들의 위치를 이어보면 방향이 나옵니다.',
    answerType: 'direction',
    answerDesc: '동물 순서대로 각 동물의 위치를 찾아 이어주면 방향 화살표가 만들어집니다.',
  },
  {
    id: 16,
    answer: 'CHAIR',
    hint: '각각의 이미지의 영어 단어를 빼고 더해주세요. 세 번째 이미지는 HAIR 입니다.',
    answerType: 'English',
    answerDesc: 'CLOCK - LOCK + HAIR',
  },
  {
    id: 17,
    answer: '639',
    hint: 'E A S T를 순서대로 찾아주세요.',
    questionDesc: '동쪽으로',
    answerType: 'Number',
    isAnswerImage: true,
  },
  {
    id: 18,
    answer: '8274',
    hint: '빨간 알파벳의 위치를 확인해 주세요.',
    answerType: 'Number',
    answerDesc: '단어의 빨간색 부분의 위치를 숫자에서 찾아줍니다.',
  },
  {
    id: 19,
    answer: 'true',
    interativeAnswer: '8:10 또는 2:40',
    hint: '더했을 때 , 곱했을 때의 시간은 무엇일까요?',
    answerType: 'device',
    answerDesc: '시계 바늘의 위치가 2 와 8에 있다면 2+8=10 , 2x8=16입니다.',
    isInterative: true,
  },
  {
    id: 20,
    answer: 'TUOH',
    hint: '글자가 반이 잘려있는 듯 합니다.',
    answerType: 'English',
    answerDesc: '글자를 거울에 비춰서 본다 생각하면 ㄱ은 T입니다.',
  },
  {
    id: 21,
    answer: 'TKTH',
    hint: '단어가 아니라 문장일 수도 있습니다.',
    answerType: 'English',
    answerDesc: 'D is H  F is H ... 단어가 아닌 문장입니다.',
  },
  {
    id: 22,
    answer: '2905',
    hint: '9개의 판에서 특정 칸 특정 숫자를 찾아주세요.',
    answerType: 'Number',
    answerDesc: '9개의 판의 각각의 모양에서 점의 갯수가 동일하게 마킹된 숫자의 조합입니다.',
  },
  {
    id: 23,
    answer: 'MOBILE',
    hint: '영어 단어의 특정 부분을 의미하는 것 같습니다.',
    answerType: 'English',
    answerDesc: 'MONEY 5자의 2개, BIRD 4자의 2개, LEMON 5자의 2개를 합친 답입니다.',
  },
  {
    id: 24,
    answer: 'SIX',
    hint: '단어의 알파벳 갯수를 확인 해 주세요.',
    answerType: 'English',
    answerDesc: '아래 블럭의 알파벳 수를 의미합니다.',
  },
  {
    id: 25,
    answer: 'JASON',
    hint: 'AFRIL + MAY',
    answerType: 'English',
    answerDesc: '숫자는 1월, 2월 ... 달(月)을 의미하구 해당 월의 영어 단어의 첫글자의 조합입니다.',
  },
  {
    id: 26,
    answer: '',
    interativeAnswer: 'START - R - D - D - R - FINSHI',
    hint: 'UP, DOWN',
    questionDesc: '올바른 방향대로',
    answerType: 'device',
    answerDesc: 'R => Right (오른쪽)  D => DOWN (아래)  U => UP (위)로 각각의 방향대로 눌러서 가면 도달하면 됩니다.',
    isInterative: true,
  },
  {
    id: 27,
    answer: '324',
    hint: '0의 갯수를 세어주세요.',
    answerType: 'Number',
    answerDesc: '0의 갯수를 뜻합니다.',
  },
  {
    id: 28,
    answer: '3112',
    hint: '달력을 생각해주세요.',
    answerType: 'Number',
    answerDesc: '칸마다 달력 날짜의 마지막 날짜 월이 작성되어 있습니다.',
  },
  {
    id: 29,
    answer: '신발장베란다안방창고',
    interativeAnswer: '↑ ↑ ↓ ↓ ↑ ↓ ↑ ↓ ↑',
    hint: '각 장소의 칸의 화살표 그림의 위치를 확인 해 주세요.',
    answerType: 'device',
    answerDesc: '각 장소의 칸의 화살표 위치대로 스위치 버튼을 바꿔줍니다.',
    isInterative: true,
  },
  {
    id: 30,
    answer: 'PHONE',
    hint: '색깔의 영어단어와 위치',
    answerType: 'English',
    answerDesc: '색상의 영어 단어의 알파벳 위치를 의미합니다.',
  },
  {
    id: 31,
    answer: 'AWYOT',
    hint: '거울에 좌우 반전이 되어도 변함이 없을 알파벳을 찾아보세요.',
    questionDesc: '올바른 알파벳',
    answerType: 'English',
    answerDesc: '거울 속에서도 모습이 그대로인 알파벳 조합입니다.',
  },
  {
    id: 32,
    answer: 'FIVE',
    hint: '거울로 비추어 본듯이 좌우 반전해서 읽어주세요.',
    answerType: 'English',
    answerDesc:
      '글자가 좌우반전 되어 나열되어 있습니다. 다시 좌우반전해서 자음 + 모음을 붙여 읽어보면 파이브(FIVE)가 만들어집니다.',
  },
  {
    id: 33,
    answer: 'ENTER',
    hint: '파란 글자의 우측 별 갯수만큼 카운트 했을때 글자를 찾아주세요.',
    answerType: 'English',
    answerDesc:
      '파란 글자의 별의 위치는 방향, 별의 갯수는 카운트 수입니다. 그렇게 찾으면 이엔티이알(ENTER)이 만들어집니다.',
  },
  {
    id: 34,
    answer: '우좌상좌하우상',
    questionDesc: '가로수 나무 아래',
    hint: '가운데 십자모양을 회전시켜서 두 개의 + 위치의 자음 모음을 조합해서 글자를 만들어질때 화살표 방향을 확인해주세요.',
    answerType: 'direction',
    answerDesc: '가운데 십자모양을 돌려서 두 개의 +를 조합하여 글자를 만들었을 때 화살표 방향을 순서대로 입력해줍니다.',
    isInterative: true,
  },
  {
    id: 35,
    answer: 'STEAK',
    hint: '네 번째 칸에 4는 영어 단어의 네 번째 위치의 네 번째 알파벳입니다. 이렇게 조합하면 LUNCH입니다.',
    answerType: 'English',
    answerDesc:
      '칸마다 영어 알파벳이 순서대로 들어가고 칸에 쓰여진 숫자는 정답의 알파벳 위치를 뜻합니다. 첫번째 칸의 4는 OOOAO 를 의미합니다.',
  },
  {
    id: 36,
    answer: '1723',
    hint: '첫번째 일기와 세번째 일기의 내용을 유심히 확인해주세요.',
    answerType: 'Number',
    answerDesc:
      '첫번째 일기에서 동생은 자기 생일에 3일 뒤라고 했으니 23일입니다. 그리고 세번째 일기에서 2015년에 제대했으니 네번째 일기의 내용에 따라서 2017년 09월 23일날 작성된 일기입니다.',
    isInterative: true,
  },
  {
    id: 37,
    answer: '2016',
    hint: '디지털 숫자의 흰색 선이 없는 부분으로 계산해보세요.',
    answerType: 'Number',
    answerDesc: '디지털 숫자의 흰색 선을 지우고 없는 부분을 그려서 계산하면 올바른 식이 됩니다.',
  },
  {
    id: 38,
    answer: '9105',
    hint: '해당되는 글자의 도형은 이동할 글자 칸 수이고 화살표 방향대로 찾아가보세요.',
    answerType: 'Number',
    answerDesc:
      '글자를 감싼 도형은 움직일 방향의 글자 칸수를 의미합니다. 방향대로 글자 칸수를 찾으면 한글 발음 숫자를 얻을 수 있고 이를 조합하면 됩니다.',
  },
  {
    id: 39,
    answer: 'HOUSE',
    hint: '위의 첫번째 막대기와 두번째 막대기에 아래의 첫번째 가로 막대기를 넣어주면 H가 만들어집니다.',
    answerType: 'English',
    answerDesc: '위의 세로 막대기 사이에 아래 가로 막대기를 넣어주면 H O U S E 글자가 나옵니다.',
  },
  {
    id: 40,
    answer: 'POWER',
    hint: '키보드에서 해당 키의 위치를 찾아 주세요.',
    answerType: 'English',
    answerDesc:
      '첫번째 T -> 4 의 뜻은 키보드에서 T에서 오른쪽으로 4칸 이동했을때의 키보드 키에 쓰여진 글자를 의미합니다.',
  },
  {
    id: 41,
    answer: '2722',
    hint: '기억상실 => 단어의 받침을 모아보면 ㄱ ㅇ ㄹ , 숫자와 비슷한 모양으로 7 0 2 입니다.',
    answerType: 'Number',
    answerDesc: '기억상실 단어의 받침들은 ㄱ ㅇ ㄹ, 숫자로 702 입니다. 따라서 닭과달걀은 ㄺ ㄹ ㄹ, 2722가 됩니다.',
  },
  {
    id: 42,
    answer: '3194',
    hint: '밑의 방의 배치도에 따라 방이름 블럭을 배치해보고 배치된 칸의 색깔을 확인해주세요.',
    answerType: 'Number',
    answerDesc:
      '101호의 방의 배치도에 따라 블럭을 배치했을때, 배치된 칸의 테두리 색깔과 블럭 이름의 자음,모음의 색깔과 일치하는 자음,모음만을 조합하면 삼이 됩니다.',
    isInterative: true,
  },
  {
    id: 43,
    answer: '10912',
    hint: '2:00 ~ 4:00 시간 범위에 따라 보면 E T N, 이를 이용해 숫자단어를 만들어 보세요.',
    questionDesc: ' 2:00 ~ 4:00 \n 4:00 ~ 7:00 \n 9:00 ~ 11:00 \n 11:00 ~ 01:00',
    answerType: 'Number',
    answerDesc:
      '2:00 ~ 4:00 시간 범위에 따라 보면 E T N , 이를 조합하면 TEN(10)을 만들수 있습니다. 다른 시간대도 동일한 방법을 사용해서 숫자단어를 조합해내면 됩니다.',
  },
  {
    id: 44,
    answer: '상우좌하',
    hint: '0 2 3 2 0은 각각 세로 라인의 색이 채워진 칸 수를 의미합니다. 세로로 된 0 0 1 3 5도 동일합니다. 그리드 판을 채워보세요.',
    answerType: 'direction',
    answerDesc:
      '0 2 3 2 0은 각각 세로 라인의 색이 채워진 칸 수 / 세로로 된 0 0 1 3 5은 가로 라인의 색이 채워진 칸수 이를 찾으면 삼각형 화살표 모양이 만들어집니다. 가운데의 화살표 방향대로 방향을 입력하면 됩니다. ',
    isInterative: true,
  },
  {
    id: 45,
    answer: 'LION',
    hint: '각각 동물들의 선을 이어 보세요.',
    answerType: 'English',
    isAnswerImage: true,
    answerDesc: '',
  },
  {
    id: 46,
    answer: 'MAP',
    hint: '4 DIAMOND => M',
    answerType: 'English',
    answerDesc: '문양의 영어단어와 카드의 숫자위치의 알파벳을 조합하면 DIAMOND => M, HEART => A, SPACE => P 입니다.',
  },
  {
    id: 47,
    answer: 'PEN',
    hint: '각 교수의 색깔을 시간표에서 찾아보세요. 색이 겹치는 부분까지 고려해보세요.',
    questionDesc: '강의 준비물은 무엇인가?',
    answerType: 'English',
    answerDesc:
      '각 교수마다의 색깔이 있고 이를 시간표에서 찾으면 됩니다. 다만 색이 겹치는 부분은 수업이 겹치는 부분으로 각 색깔이 겹쳤을 때의 색을 잘 생각해서 찾으면 노랑은 P, 파랑은 E, 빨강은 N입니다.',
  },
  {
    id: 48,
    answer: '하우우상우좌하상',
    hint: '대문자 알파벳과 방향을 연관지어 생각해보세요.',
    answerType: 'direction',
    answerDesc: '대문자 알파벳은 S E N W, South(남), East(동), West(서), North(북)의 방향을 가르킵니다.',
  },
  {
    id: 49,
    answer: '5710',
    hint: '이름을 자음,모음을 순서대로 세보세요.',
    answerType: 'Number',
    answerDesc:
      '민인규 이름에서 국어 숫자만큼 자음모음을 구분지어서 세면 ㅇ입니다. 그렇게 3개의 숫자를 조합하면 ㅇ ㅠ ㄱ 으로 육(6)입니다.',
  },
  {
    id: 50,
    answer: '',
    hint: 'ㅎㅁㅎ 없습니다.',
    answerType: 'device',
    answerDesc: '',
    isInterative: true,
  },
]
