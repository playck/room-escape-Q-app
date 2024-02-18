import { Question, questionList } from '@/lib/constant/questions'

export const getFilterdQuestion = (id: string) => {
  return questionList.filter((q) => String(q.id) === id)[0]
}
