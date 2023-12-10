import { atom } from 'recoil'

export const InputAnswerState = atom<string>({
  key: 'InputAnswerState',
  default: '',
})
