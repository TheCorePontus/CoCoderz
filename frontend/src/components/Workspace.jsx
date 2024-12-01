import Split from 'react-split';
import ProblemDescription from './ProblemDescription';
import Playground from './Playground';

const Workspace = () => {
  return (
    <Split className='split' minSize={0}>
        <ProblemDescription />
        <Playground />
    </Split>
  )
}

export default Workspace