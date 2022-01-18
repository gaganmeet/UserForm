import { TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { Context, ContextType } from './context'
import NextButton from './NextButton'

const Step1: React.FC = () => {
  const context: ContextType = useContext(Context)

  return (
    <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
      <form className="flex flex-col w-full h-full justify-around">
        <Typography variant="h2" align="center">
          Enter Details
        </Typography>
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          required
          autoComplete="off"
          placeholder="Full Name"
          value={context.state.name}
          name="name"
          onChange={(e) => context.updateState(e)}
        />
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          type="Email"
          autoComplete="off"
          required
          rows={2}
          placeholder="Email"
          value={context.state.email}
          name="email"
          onChange={(e) => context.updateState(e)}
        />

        <TextField
          size="medium"
          variant="standard"
          fullWidth
          required
          autoComplete="off"
          placeholder="Phone Number"
          value={context.state.number}
          name="number"
          onChange={(e) => context.updateState(e)}
        />
        <NextButton />
      </form>
    </div>
  )
}

export default Step1
