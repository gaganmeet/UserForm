import { TextField, Button, Typography } from '@mui/material'

const Step3: React.FC = () => {
  return (
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
      <Button size="large" variant="text">
        Next
      </Button>
    </div>
  )
}

export default Step3
