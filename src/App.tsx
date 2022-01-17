import { ReactElement, useContext } from 'react'
import { Context, ContextType } from './context'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
function App(): ReactElement {
  const context: ContextType = useContext(Context)
  console.log(context)
  if (context.step === 1) return <Step1 />
  else if (context.step === 2) return <Step2 />
  else return <Step3 />
}

export default App
