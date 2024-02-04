import { BasicToast } from '@/components/Toast'

export const alertInputReset = {
  containerStyle: { margin: 0 },
  render: () => <BasicToast text="초기화 되었습니다." />,
}

export const alertisNotAnswer = {
  containerStyle: { margin: 0 },
  render: () => <BasicToast text="정답이 아닙니다." />,
}
