import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Context } from './context'
const useRecorder = () => {
  const [audioURL, setAudioURL] = useState<any>('')
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [recorder, setRecorder] = useState<any>()
  const context = useContext(Context)
  useEffect(() => {
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error)
      }
      return
    }
    if (isRecording) {
      recorder.start()
    } else {
      recorder.stop()
    }
    const handleData = async (e: any) => {
      const blob = e.data
      const blobToBase64 = new Promise((resolve, reject): any => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
      const base64data: any = await blobToBase64
      context.setState({ ...context.state, audio: base64data })
      setAudioURL(URL.createObjectURL(e.data))
    }

    recorder.addEventListener('dataavailable', handleData)
    return () => recorder.removeEventListener('dataavailable', handleData)
  }, [recorder, isRecording])

  const startRecording = () => {
    setIsRecording(true)
  }

  const stopRecording = () => {
    setIsRecording(false)
  }

  return [audioURL, isRecording, startRecording, stopRecording]
}

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  return new MediaRecorder(stream)
}
export default useRecorder
