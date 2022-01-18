import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Button, Typography } from '@mui/material'
const BackButton = () => {
  const context: ContextType = useContext(Context)
  return (
    <div className="absolute top-8 left-4">
      <Button
        size="large"
        variant="text"
        onClick={() => context.setStep(context.step - 1)}
      >
        <Typography variant="h6" align="center">
          Back
        </Typography>
      </Button>
    </div>
  )
}

export default BackButton
