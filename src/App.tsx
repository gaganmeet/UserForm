import { ReactElement, useContext } from 'react'
import { Context, ContextType } from './context'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function App(): ReactElement {
  const context: ContextType = useContext(Context)
  console.log(context)
  switch (context.step) {
    case 1:
      return <Step1 />
    case 2:
      return <Step2 />
    case 3:
      return <Step3 />
    default:
      return <Step4 />
  }
}

export default App
