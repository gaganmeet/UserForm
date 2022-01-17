import { Typography, Button } from '@mui/material'
import useRecorder from './useRecorder'
import { Context, ContextType } from './context'
import { useContext } from 'react'
const Step2: React.FC = () => {
  const context: ContextType = useContext(Context)
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
  return (
    <div className="flex flex-col justify-around items-center w-4/5 md:w-1/3 h-screen">
      <Typography variant="h2" align="center">
        Record your voice
      </Typography>
      <div className="flex flex-col gap-y-4">
        <audio src={audioURL} controls />
        <div>
          <Button onClick={startRecording} disabled={isRecording}>
            start recording
          </Button>
          <Button onClick={stopRecording} disabled={!isRecording}>
            stop recording
          </Button>
        </div>
        <Button size="large" variant="text" onClick={() => context.setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step2
