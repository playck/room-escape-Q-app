import { Question13, Question19, Question26 } from '@/components/InteractiveQuestion'

export const switchInteractiveQuestion = (id: number) => {
  switch (id) {
    case 13:
      return <Question13 />
    case 19:
      return <Question19 />
    case 26:
      return <Question26 />
    default:
      return null
  }
}
