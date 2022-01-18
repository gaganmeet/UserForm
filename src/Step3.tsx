import { TextField, Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { Context, ContextType } from './context'
import NextButton from './NextButton'
import BackButton from './BackButton'

const Step3: React.FC = () => {
  const context: ContextType = useContext(Context)
  return (
    <>
      <BackButton />
      <div className="flex flex-col justify-around items-center w-4/5 md:w-1/3 h-screen">
        <Typography variant="h2" align="center">
          Enter Password
        </Typography>
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          type="password"
          autoComplete="off"
          required
          placeholder="Password"
        />
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          type="password"
          autoComplete="off"
          required
          placeholder="Confirm Password"
        />
        <NextButton />
      </div>
    </>
  )
}

export default Step3
