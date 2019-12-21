import { Application, Sprite, filters, Container, Point } from "pixi.js"
import { CRTFilter, AsciiFilter, AdjustmentFilter } from "pixi-filters"

export function initialize() {
  const app = new Application({
    backgroundColor: 0x212121,
    width: 600,
    height: 600,
  })
  const crtFilter = new CRTFilter({
    curvature: 10,
    lineWidth: 5,
    noise: 0,
  })
  const asciiFilter = new AsciiFilter(10)
  const blurFilter = new filters.BlurFilter(5)
  const adjustmentFilter = new AdjustmentFilter({
    saturation: 0.5,
  })

  app.loader.add("bg", "avatar2-cropped.png").load((_loader, resources) => {
    const container = new Container()
    const bg = new Sprite(resources.bg.texture)

    bg.x = app.renderer.width / 2
    bg.y = app.renderer.height / 2

    bg.anchor.x = 0.5
    bg.anchor.y = 0.5

    container.addChild(bg)

    container.filters = [blurFilter]

    app.stage.addChild(container)

    bg.filters = [adjustmentFilter, crtFilter]
    bg.scale = new Point(0.5, 0.5)

    bg.interactive = true
    bg.addListener("mouseover", () => {
      bg.filters = [asciiFilter]
    })

    bg.addListener("mouseout", () => {
      bg.filters = [adjustmentFilter, crtFilter]
    })

    app.ticker.add(() => {
      crtFilter.seed = Math.random()
      crtFilter.time += 0.5

      if (blurFilter.blur > 0) {
        blurFilter.blur -= 0.1
      } else {
        container.filters = []
      }
    })
  })

  return app
}
