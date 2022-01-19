import { TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { Context, ContextType } from './context'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import NextButton from './NextButton'

const Step1: React.FC = () => {
  const context: ContextType = useContext(Context)
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Required'),
    number: Yup.string()
      .required('Required')
      .min(10, 'Too Short!')
      .required('Required')
      .max(10, 'Too Long!')
  })
  const formik = useFormik({
    initialValues: {
      name: context.state.name,
      email: context.state.email,
      number: context.state.number
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      context.setStep(context.step + 1)
      context.setState({
        ...context.state,
        name: values.name,
        email: values.email,
        number: values.number
      })
    },
    enableReinitialize: true
  })
  return (
    <div className="flex  justify-center items-center w-4/5 md:w-1/3 h-screen">
      <form
        className="flex flex-col w-full h-full justify-around"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h2" align="center">
          Enter Details
        </Typography>
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          autoComplete="off"
          placeholder="Full Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          size="medium"
          variant="standard"
          fullWidth
          type="Email"
          autoComplete="off"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          size="medium"
          variant="standard"
          fullWidth
          autoComplete="off"
          placeholder="Phone Number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <NextButton />
      </form>
    </div>
  )
}

export default Step1
