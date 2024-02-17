import {
  Question13,
  Question19,
  Question26,
  Question29,
  Question34,
  Question36,
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
    default:
      return null
  }
}
