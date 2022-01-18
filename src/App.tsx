import { ReactElement, useContext } from 'react'
import { Context, ContextType } from './context'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import BackButton from './BackButton'
function App(): ReactElement {
  const context: ContextType = useContext(Context)
  console.log(context)
  if (context.step === 1)
    return (
      <>
        
        <Step1 />{' '}
      </>
    )
  else if (context.step === 2) return <Step2 />
  else if (context.step === 3) return <Step3 />
  else return <Step4 />
}

export default App
