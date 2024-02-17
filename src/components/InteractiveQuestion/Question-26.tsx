import { GridBoard } from '../GridBoard'

interface Questions26Props {}

function Questions26(props: Questions26Props) {
  return (
    <>
      <GridBoard
        boardTextList={['START▶', 'R', 'D', 'L', 'U', 'L', 'D', 'R', 'U', 'D', 'R', 'FINSHI', 'R', 'L', 'U', 'D']}
        gridRootNum={4}
        answer={'12371112'}
        finishIdx={'12'}
      />
    </>
  )
}

export default Questions26
