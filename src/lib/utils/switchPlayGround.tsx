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
} from '@/components/InteractiveQuestion'

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
      return null
  }
}
