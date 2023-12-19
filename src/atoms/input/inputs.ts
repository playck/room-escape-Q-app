import { atom, atomFamily } from 'recoil'

interface IclockInputProps {
  hour: number
  min: number
}

export const clockInputArrayAtomState = atomFamily<IclockInputProps, string>({
  key: 'clockInputArrayAtomState',
  default: {
    hour: 0,
    min: 0,
  },
})

export const gridBoardAtomState = atomFamily<boolean, number>({
  key: 'gridBoardAtomState',
  default: false,
})

export const gridArrayState = atom<string[]>({
  key: 'gridArrayState',
  default: [''],
})

export const activeBoardIdxState = atom<string>({
  key: 'activeBoardIdxState',
  default: '',
})
