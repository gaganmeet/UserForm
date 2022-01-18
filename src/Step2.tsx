import { Typography, Button } from '@mui/material'
import useRecorder from './useRecorder'
import { Context, ContextType } from './context'
import { useContext } from 'react'
import NextButton from './NextButton'
import BackButton from './BackButton'
const Step2: React.FC = () => {
  const context: ContextType = useContext(Context)
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
  return (
    <>
      <BackButton />
      <div className="flex flex-col justify-around items-center w-4/5 md:w-1/3 h-screen">
        <Typography variant="h2" align="center">
          Record your voice
        </Typography>
        <div className="flex flex-col gap-y-6">
          <audio src={audioURL} controls />
          <div className="mb-4">
            <Button onClick={startRecording} disabled={isRecording}>
              start recording
            </Button>
            <Button onClick={stopRecording} disabled={!isRecording}>
              stop recording
            </Button>
          </div>
          <NextButton />
        </div>
      </div>
    </>
  )
}

export default Step2
