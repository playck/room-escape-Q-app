export interface Question {
  id: number
  questionImage?: string
  questionDesc?: string
  answer: string
  isSolved: boolean
  isInterative?: boolean
  isHintIcon?: string
  answerType: string
  hint: string
  isAnswerImage?: boolean
  answerDesc?: string
}

export const questionList: Question[] = [
  {
    id: 1,
    answer: '5',
    isSolved: false,
    hint: '더한 숫자 값의 영어 단어를 확인해주세요.',
    answerType: 'number',
    answerDesc: '더한 숫자 값의 영어 스펠링 갯수입니다.',
  },
  {
    id: 2,
    answer: '3235',
    isSolved: false,
    isAnswerImage: true,
    hint: '세로로 줄을 그어보면 숫자를 만들 수 있을 것 같습니다.',
    answerType: 'number',
    answerDesc: '',
  },
  {
    id: 3,
    answer: 'HELP',
    isSolved: false,
    hint: '화살표 방향대로 계속 선을 이어보세요.',
    answerType: 'string',
    answerDesc: '화살표 방향대로 선을 그려보면 한 줄에 하나의 알파벳이 나옵니다.',
  },
  {
    id: 4,
    answer: '1320',
    isSolved: false,
    hint: '첫째자리와 넷째자리의 숫자를 곱한 값을 다음 숫자에서 찾아주세요.',
    answerType: 'number',
    answerDesc:
      '가장 바깥 자리의 숫자의 곱한 값의 십의 자리를 첫째 자리, 일의 자리를 넷째 자리 그리고 안쪽 숫자의 곱한 값은 가운데에 위치합니다.',
  },
  {
    id: 5,
    answer: '242',
    isSolved: false,
    questionDesc:
      '카이사르 암호법\nA > B 일 경우, GDKKN => HELLO\n숫자/문자/무늬의 다양한 패턴을 파악하자\n가끔 문과적/이과적/예체능적 능력이 요구됨',
    hint: '네번째 문장의 18번째 글자를 확인해주세요. (공백 제외)',
    answerType: 'number',
    answerDesc:
      '4 - 18 = 9에서 4는 문제의 문단의 행을 뜻하고 18은 문장의 글자 순서를 뜻합니다. \n 1 - 2는 첫번째 문장의 두번째 글자 이(2)를 의미합니다.',
  },
  {
    id: 6,
    answer: '파노라마',
    isSolved: false,
    isAnswerImage: true,
    questionDesc: '패스워드를 입력하시오',
    hint: '패는 파를 뜻하는 것 같습니다.',
    answerType: 'string',
    answerDesc: '패 => 파, 스 => 노, 워 => 라, 드 => 마',
  },
  {
    id: 7,
    answer: '2497',
    isSolved: false,
    hint: '위의 그림에서 빠진 선들을 찾아 주세요',
    answerType: 'number',
    answerDesc: '위의 日 그림과 문제의 그림의 겹치지 않은 부분을 보면 숫자가 그려집니다.',
  },
  {
    id: 8,
    answer: '12',
    isSolved: false,
    isHintIcon: '시계',
    hint: '시계에서 저 방향은 어디를 가리키는 걸까요?',
    answerType: 'number',
    answerDesc: '시계에서 화살표가 가리키는 방향, 즉 시계 숫자를 의미합니다.',
  },
  {
    id: 9,
    answer: '188',
    isSolved: false,
    hint: '첫째 자리 숫자와 넷째 자리 숫자를 곱한 값을 다음 칸에서 찾아주세요.',
    answerType: 'nubmer',
    answerDesc:
      '가장 바깥 자리의 숫자의 곱한 값의 십의 자리를 첫째 자리, 일의 자리를 넷째 자리 그리고 안쪽 숫자의 곱한 값은 가운데에 위치합니다.',
  },
  {
    id: 10,
    answer: 'TIRE',
    isSolved: false,
    hint: '숫자 영단어와 위치',
    answerType: 'string',
    answerDesc:
      '숫자의 영어 스펠링과 각 숫자 자리와 일치하는 자리의 알파벳으로 바꿔주면 됩니다. \n 111은 one(1) => o , one(2) => n, one(3) => e',
  },
  {
    id: 11,
    answer: '0013',
    isSolved: false,
    hint: '가로 라인을 찾아주세여',
    answerType: 'number',
    answerDesc: '각 단어 알파벳의 가로 막대기 갯수를 의미합니다.',
  },
  {
    id: 12,
    answer: 'JTWN',
    isSolved: false,
    hint: '행 과 열의 위치를 가리키고 있습니다.',
    answerType: 'string',
    answerDesc: '3/4 => 네번째 줄의 세번째 칸을 의미합니다.',
  },
  {
    id: 13,
    answer: '753',
    isSolved: false,
    hint: '카드의 앞뒤를 겹쳐서 봐주세요.',
    answerType: 'number',
    answerDesc: '카드 양면의 모양을 겹치면 숫자가 그려집니다.',
    isInterative: true,
  },
  {
    id: 14,
    answer: '812',
    isSolved: false,
    hint: '선 아래의 단어들이 무언가 조금씩 빠져 있는 듯 합니다.',
    answerType: 'number',
    answerDesc: '아래부분의 각 단어의 빠진 알파벳들을 조합하면 숫자 단어를 만들 수 있습니다.',
  },
  {
    id: 15,
    answer: '1211',
    isSolved: false,
    hint: '이름 자체가 아니라 앞 글자의 자음에 집중 해 주세요.',
    answerType: 'device',
    answerDesc: '각 지역 이름의 앞 글자를 보면 ㄷ => 동, ㅅ => 서, ㄴ => 남, , ㅂ => 북을 의미합니다.',
  },
  {
    id: 16,
    answer: 'CHAIR',
    isSolved: false,
    hint: '각각의 이미지의 영어 단어를 빼고 더해주세요. 세 번째 이미지는 HAIR 입니다.',
    answerType: 'string',
    answerDesc: 'CLOCK - LOCK + HAIR',
  },
  {
    id: 17,
    answer: '639',
    isSolved: false,
    hint: 'E A S T를 순서대로 찾아주세요.',
    questionDesc: '동쪽으로 따라가시오.',
    answerType: 'number',
    isAnswerImage: true,
  },
  {
    id: 18,
    answer: '8274',
    isSolved: false,
    hint: '빨간 알파벳의 위치를 확인해 주세요.',
    answerType: 'number',
    answerDesc: '단어의 빨간색 부분의 위치를 숫자에서 찾아줍니다.',
  },
  {
    id: 19,
    answer: '1',
    isSolved: false,
    hint: '더했을 때 , 곱했을 때의 시간은 무엇일까요?',
    answerType: 'device',
    answerDesc: '시계를 맞춰봅니다..',
    isInterative: true,
  },
  {
    id: 20,
    answer: 'SAVE',
    isSolved: false,
    hint: '문양마다 좌우 반전이 되있는 것 같습니다.',
    answerType: 'string',
    answerDesc: '알파벳이 좌우 반전되어 있습니다. 이를 조합하여 SAVE 단어를 만들 수 있습니다.',
  },
  {
    id: 21,
    answer: 'TKTH',
    isSolved: false,
    hint: '단어가 아니라 문장일 수도 있습니다.',
    answerType: 'string',
    answerDesc: 'D is H  F is H ... 단어가 아닌 문장입니다.',
  },
  {
    id: 22,
    answer: '2905',
    isSolved: false,
    hint: '9개의 판에서 특정 칸 특정 숫자를 찾아주세요.',
    answerType: 'number',
    answerDesc: '9개의 판의 각각의 모양에서 점의 갯수가 동일하게 마킹된 숫자의 조합입니다.',
  },
  {
    id: 23,
    answer: 'MOBILE',
    isSolved: false,
    hint: '영어 단어의 특정 부분을 의미하는 것 같습니다.',
    answerType: 'string',
    answerDesc: 'MONEY 5자의 2개, BIRD 4자의 2개, LEMON 5자의 2개를 합친 답입니다.',
  },
  {
    id: 24,
    answer: 'SIX',
    isSolved: false,
    hint: '단어의 알파벳 갯수를 확인 해 주세요.',
    answerType: 'string',
    answerDesc: '아래 블럭의 알파벳 수를 의미합니다.',
  },
  {
    id: 25,
    answer: 'JASON',
    isSolved: false,
    hint: 'AFRIL + MAY',
    answerType: 'string',
    answerDesc: '숫자는 1월, 2월 ... 달(月)을 의미하구 해당 월의 영어 단어의 첫글자의 조합입니다.',
  },
  {
    id: 26,
    answer: '',
    isSolved: false,
    hint: 'UP, DOWN',
    answerType: 'string',
    answerDesc: 'R => Right (오른쪽)  D => DOWN (아래)  U => UP (위)로 각각의 방향대로 눌러서 가면 도달하면 됩니다.',
    isInterative: true,
  },
  {
    id: 27,
    answer: '9612',
    isSolved: false,
    hint: '시계라고 생각해보고 이어봅니다.',
    answerType: 'number',
    answerDesc: '시계에서 화살표대로 차례차례 조합하면 됩니다.',
  },
  {
    id: 28,
    answer: '5022',
    isSolved: false,
    hint: '숫자가 점점 증가하는 것으로 보입니다.',
    answerType: 'number',
    answerDesc: '첫 숫자 2부터 2n씩 증가합니다. 2(+3)5(+5)10(+7)17(+9)....',
  },
  {
    id: 29,
    answer: '5022',
    isSolved: false,
    hint: '',
    answerType: 'device',
    answerDesc: '스위치 버튼을 이용하여 위아래의 그림을 합쳐 올바른 형태의 알파벳의 조합입니다.',
    isInterative: true,
  },
  {
    id: 30,
    answer: 'PHONE',
    isSolved: false,
    hint: '색깔의 영어단어와 위치',
    answerType: 'string',
    answerDesc: '색상의 영어 단어의 알파벳 위치를 의미합니다.',
  },
]
