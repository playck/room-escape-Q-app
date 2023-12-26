import { atom } from 'recoil'

export const InputAnswerState = atom<string>({
  key: 'InputAnswerState',
  default: '',
})

export const isAnswerCorrectState = atom<boolean>({
  key: 'isAnswerCorrectState',
  default: false,
})
