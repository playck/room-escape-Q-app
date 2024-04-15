import { BasicToast } from '@/components/Toast'

export const alertInputReset = {
  containerStyle: { margin: 0 },
  render: () => <BasicToast text="초기화 되었습니다." />,
}

export const alertisNotAnswer = {
  containerStyle: { margin: 0 },
  render: () => <BasicToast text="정답이 아닙니다." />,
}

export const alertCopied = {
  containerStyle: { margin: 0 },
  render: () => <BasicToast text="문제 주소가 복사되었습니다." />,
}
