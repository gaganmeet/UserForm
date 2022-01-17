// set context for all components
import { createContext, useState } from 'react'

interface InitialState {
  email: string
  name: string
  number: string
  audio: string
  password: string
}

const INITIAL_STATE: InitialState = {
  email: '',
  name: '',
  number: '',
  audio: '',
  password: ''
}
export type ContextType = {
  state: InitialState
  step: number
  setStep: (step: number) => void
  postState: (state: InitialState) => void
  setState: (state: InitialState) => void
}
type Props = {
  children: React.ReactNode
}
export const Context = createContext<ContextType>({} as ContextType)

export const Provider = ({ children }: Props) => {
  const [state, setState] = useState<InitialState>(INITIAL_STATE)
  const [step, setStep] = useState<number>(1)
  const postState = (state: InitialState) => {
    setState({ ...state })
  }
  return (
    <Context.Provider value={{ state, postState, setState, step, setStep }}>
      {children}
    </Context.Provider>
  )
}
