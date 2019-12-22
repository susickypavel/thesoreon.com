import { Application, Sprite, Texture, Point } from "pixi.js"

function createAvatar(app: Application): Sprite {
  const avatar = new Sprite(Texture.from("avatar.png"))

  avatar.position = new Point(0, 0)

  avatar.height = app.view.height
  avatar.width = app.view.height

  return avatar
}

export function initialize(): Application {
  const app = new Application({
    backgroundColor: 0x000000,
  })

  app.view.height = 500
  app.view.width = 500

  const avatar = createAvatar(app)

  app.stage.addChild(avatar)

  return app
}
