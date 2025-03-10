'use client'

interface ErrorPageProps{
    error:Error,
    reset:()=>void;

}



const error = ({error}:ErrorPageProps) => {
  return (
    <div>{error.message}</div>
  )
}

export default error