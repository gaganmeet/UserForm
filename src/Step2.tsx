import { Typography, Button } from '@mui/material'
import useRecorder from './useRecorder'
import NextButton from './NextButton'
import BackButton from './BackButton'
import { useContext } from 'react'
import { Context } from './context'
const Step2: React.FC = () => {
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
  const context = useContext(Context)
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
          <NextButton
            onClick={() =>
              context.state.audio && context.setStep(context.step + 1)
            }
          />
        </div>
      </div>
    </>
  )
}

export default Step2
