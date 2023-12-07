export interface Question {
  id: number
  questionImage?: string
  questionDesc?: string
  answer: string
  isSolved: boolean
  isInterative?: boolean
  isHintIcon?: string
  answerType?: string
  hint?: string
  isAnswerImage?: boolean
  answerDesc?: string
}

export const questionList: Question[] = [
  {
    id: 1,
    answer: '3',
    isSolved: false,
    answerDesc: '숫자의 영어 스펠링 갯수를 의미합니다.',
  },
  {
    id: 2,
    answer: '3235',
    isSolved: false,
    isAnswerImage: true,
    answerDesc: '',
  },
  {
    id: 3,
    answer: 'HELP',
    isSolved: false,
    answerDesc: '화살표 방향대로 선을 그려보면 한 줄에 하나의 알파벳이 나옵니다.',
  },
  {
    id: 4,
    answer: '1320',
    isSolved: false,
    answerDesc:
      '가장 바깥 자리의 숫자의 곱한 값의 십의 자리를 첫째 자리, 일의 자리를 넷째 자리 그리고 안쪽 숫자의 곱한 값은 가운데에 위치합니다.',
  },
  {
    id: 5,
    answer: '242',
    isSolved: false,
    questionDesc:
      '카이사르 암호법\nA > B 일 경우, GDKKN => HELLO\n숫자/문자/무늬의 다양한 패턴을 파악하자\n가끔 문과적/이과적/예체능적 능력이 요구됨',
    answerDesc:
      '4 - 18 = 9에서 4는 문제의 문단의 행을 뜻하고 18은 문장의 글자 순서를 뜻합니다. \n 1 - 2는 첫번째 문장의 두번째 글자 이(2)를 의미합니다.',
  },
  {
    id: 6,
    answer: '9354',
    isSolved: false,
    isAnswerImage: true,
    answerDesc: '문장의 오타를 찾아 올바른 글자로 바꿔보면 됩니다.',
  },
  {
    id: 7,
    answer: '3',
    isSolved: false,
    answerDesc: '총 26개의 숫자가 있습니다. 바로 알파벳의 갯수와 같은데요. 숫자당 알파벳의 발음 글자 수 입니다.',
  },
  {
    id: 8,
    answer: '12',
    isSolved: false,
    isHintIcon: '시계',
    answerDesc: '시계에서 화살표가 가리키는 시간 숫자를 의미합니다.',
  },
  {
    id: 9,
    answer: '188',
    isSolved: false,
    answerDesc:
      '가장 바깥 자리의 숫자의 곱한 값의 십의 자리를 첫째 자리, 일의 자리를 넷째 자리 그리고 안쪽 숫자의 곱한 값은 가운데에 위치합니다.',
  },
  {
    id: 10,
    answer: 'tire',
    isSolved: false,
    answerDesc:
      '숫자의 영어 스펠링과 각 숫자 자리와 일치하는 자리의 알파벳으로 바꿔주면 됩니다. \n 111은 one(1) => o , one(2) => n, one(3) => e',
  },
  {
    id: 11,
    answer: '5',
    isSolved: false,
    answerDesc: '더한 숫자 값의 영어 스펠링 갯수입니다.',
  },
  {
    id: 12,
    answer: '3',
    isSolved: false,
    answerDesc: '숫자의 가운데 자리를 7로 곱한 값을 숫자의 양쪽에 위치하면 됩니다. 124 => 7 x 2 = 14',
  },
  {
    id: 13,
    answer: '753',
    isSolved: false,
    answerDesc: '카드 양면의 모양을 겹치면 숫자가 그려집니다.',
    isInterative: true,
  },
]
