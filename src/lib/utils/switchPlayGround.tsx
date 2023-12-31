import { Question13, Question19 } from '@/components/InteractiveQuestion'

export const switchInteractiveQuestion = (id: number) => {
  switch (id) {
    case 13:
      return <Question13 />
    case 19:
      return <Question19 />
    default:
      return null
  }
}
