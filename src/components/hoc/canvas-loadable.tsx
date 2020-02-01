import React from "react"
import Loadable, { LoadingComponentProps } from "react-loadable"

function Loading(props: LoadingComponentProps) {
  const { error, pastDelay } = props

  if (error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    )
  }
  if (pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

export default function MyLoadable(opts: any) {
  return Loadable({
    loading: Loading,
    delay: 1000,
    timeout: 10000,
    ...opts,
  })
}
