import { useContext } from 'react'
import { Context, ContextType } from './context'
import { Button, Typography } from '@mui/material'

interface propsType {
  onClick?: () => void
}

const NextButton = (props: propsType) => {
  const { onClick } = props
  return (
    <Button type="submit" size="large" variant="text" onClick={onClick && onClick}>
      <Typography variant="h4" align="center">
        Next
      </Typography>
    </Button>
  )
}

export default NextButton
