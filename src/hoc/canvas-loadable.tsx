import React from "react"
import Loadable, { LoadingComponentProps } from "react-loadable"

function Loading(props: LoadingComponentProps) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    )
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

export default function MyLoadable(opts: any) {
  return Loadable({
    loading: Loading,
    delay: 1000,
    timeout: 10000,
    ...opts,
  })
}
