import {
  Question13,
  Question19,
  Question26,
  Question29,
  Question34,
  Question36,
  Question42,
  Question44,
  Question50,
  QuestionTemp,
} from '@/components/InteractiveQuestion'
import QuestionTemp2 from '@/components/InteractiveQuestion/Question-temp2'
import QuestionTemp3 from '@/components/InteractiveQuestion/Question-temp3'
import QuestionTemp4 from '@/components/InteractiveQuestion/Question-temp4'
import QuestionTemp5 from '@/components/InteractiveQuestion/Question-temp5'

export const switchInteractiveQuestion = (id: number) => {
  switch (id) {
    case 13:
      return <Question13 />
    case 19:
      return <Question19 />
    case 26:
      return <Question26 />
    case 29:
      return <Question29 />
    case 34:
      return <Question34 />
    case 36:
      return <Question36 />
    case 42:
      return <Question42 />
    case 44:
      return <Question44 />
    case 50:
      return <Question50 />
    default:
      return <QuestionTemp5 />
  }
}
