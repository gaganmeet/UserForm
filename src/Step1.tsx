import { TextField, Button, Typography, FormControl } from '@mui/material'
import { useContext } from 'react'
import { Context, ContextType } from './context'
const Step1: React.FC = () => {
  const context: ContextType = useContext(Context)
  const updateState = (e: any) => {
    context.setState({ ...context.state, [e.target.name]: e.target.value })
  }
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
          onChange={updateState}
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
          onChange={updateState}
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
          onChange={updateState}
        />
        <Button
          type="submit"
          size="large"
          variant="text"
          onClick={() => context.setStep(2)}
        >
          Next
        </Button>
      </form>
    </div>
  )
}

export default Step1