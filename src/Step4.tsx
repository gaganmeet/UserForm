import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Typography, Checkbox, Button } from '@mui/material'
import BackButton from './BackButton'

const Step4: React.FC = () => {
  const context: ContextType = useContext(Context)
  const label = { inputProps: { 'aria-label': 'Terms & Conditions' } }
  return (
    <>
      <BackButton />
      <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
        <form className="flex flex-col  w-full h-full justify-around">
          <Typography variant="h3" align="center">
            {'Terms & Conditions'}
          </Typography>
          <div className="flex w-full justify-center items-center">
            <Checkbox
              {...label}
              defaultChecked
              sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
            />
            <Typography variant="h4" align="center">
              Accept Terms and Conditions
            </Typography>
          </div>
          <Button
            type="submit"
            size="large"
            variant="text"
            onClick={() => context.postState()}
          >
            <Typography variant="h4" align="center">
              Submit
            </Typography>
          </Button>
        </form>
      </div>
    </>
  )
}

export default Step4
