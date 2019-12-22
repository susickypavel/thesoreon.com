import { Application } from "pixi.js"

export const initialize = () => {
  const app = new Application({
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: 0xff0000,
  })

  return app.view
}
