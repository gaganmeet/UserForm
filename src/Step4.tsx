import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Typography, Checkbox, Button } from '@mui/material'
import BackButton from './BackButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Step4: React.FC = () => {
  const context: ContextType = useContext(Context)
  const label = { inputProps: { 'aria-label': 'Terms & Conditions' } }
  const formik = useFormik({
    initialValues: {
      terms: false
    },
    validationSchema: Yup.object().shape({
      terms: Yup.boolean().oneOf(
        [true],
        'You must accept the terms and conditions'
      )
    }),
    onSubmit: () => context.postState()
  })
  return (
    <>
      <BackButton />
      <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
        <form
          className="flex flex-col  w-full h-full justify-around"
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h3" align="center">
            {'Terms & Conditions'}
          </Typography>
          <div className="flex w-full justify-center items-center">
            <Checkbox
              {...label}
              defaultChecked={false}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
              onChange={formik.handleChange}
              name="terms"
              value={formik.values.terms}
            />
            <Typography variant="h4" align="center">
              Accept Terms and Conditions
            </Typography>
          </div>
          <Button type="submit" size="large" variant="text">
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
