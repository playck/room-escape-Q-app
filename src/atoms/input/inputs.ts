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
