import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Typography, Checkbox, Button } from '@mui/material'

const Step4: React.FC = () => {
  const context: ContextType = useContext(Context)
  const label = { inputProps: { 'aria-label': 'Terms & Conditions' } }
  return (
    <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
      <form className="flex flex-col w-full h-full justify-around">
        <Typography variant="h2" align="center">
          {'Terms & Conditions'}
        </Typography>
        <Typography variant="h3" align="center">
          Accept Terms and Conditions
        </Typography>
        <Checkbox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
        <Button
          type="submit"
          size="large"
          variant="text"
          onClick={() => context.setStep(3)}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Step4
