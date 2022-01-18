import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Button, Typography } from '@mui/material'

const NextButton: React.FC = () => {
  const context: ContextType = useContext(Context)
  return (
    <Button
      type="submit"
      size="large"
      variant="text"
      onClick={() => context.setStep(context.step + 1)}
    >
      <Typography variant="h4" align="center">
        Next
      </Typography>
    </Button>
  )
}

export default NextButton
