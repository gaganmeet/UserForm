import { TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { Context, ContextType } from './context'
import NextButton from './NextButton'
import BackButton from './BackButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Step3: React.FC = () => {
  const context: ContextType = useContext(Context)
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required('Required')
        .min(8, 'Too Short!')
        .max(50, 'Too Long!'),
      confirmPassword: Yup.string()
        .required('Required')
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: (values) => {
      context.setStep(context.step + 1)
      context.setState({
        ...context.state,
        password: values.password
      })
    }
  })
  return (
    <>
      <BackButton />
      <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
        <form
          className="flex flex-col w-full h-full justify-around"
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h2" align="center">
            Enter Password
          </Typography>
          <TextField
            size="medium"
            name="password"
            variant="standard"
            fullWidth
            type="password"
            autoComplete="off"
            required
            onChange={formik.handleChange}
            placeholder="Password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            size="medium"
            variant="standard"
            fullWidth
            type="password"
            name="confirmPassword"
            autoComplete="off"
            required
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <NextButton />
        </form>
      </div>
    </>
  )
}

export default Step3
