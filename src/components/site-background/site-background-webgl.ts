import { Application, Texture, Sprite, Point } from "pixi.js"
import { PixelateFilter, ShockwaveFilter } from "pixi-filters"

import CyberpunkBG from "./cyberpunk.jpg"

// TODO: investigate the ~12% CPU usage in idle
export class SiteBackgroundWebGL {
  private app: Application

  private bg: Sprite

  public get _app(): Application {
    return this.app
  }

  constructor() {
    this.app = new Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x00ff00,
      resizeTo: window,
    })
    this.app.view.style.position = "fixed"
    this.app.view.style.zIndex = "-1"
    this.bg = this.createBackgroundImage()
    this.app.stage.addChild(this.bg)
    this.app.ticker.add(() => {
      this.tick()
    })
  }

  private tick() {
    this.bg.filters.forEach((filter, index) => {
      if (filter instanceof ShockwaveFilter) {
        filter.time += window.innerWidth / 150000
        if (filter.uniforms.amplitude > 0) {
          filter.uniforms.amplitude -= 0.25
        } else {
          this.bg.filters.splice(index, 1)
        }
      }
    })
  }

  private createBackgroundImage() {
    const bg = new Sprite(Texture.from(CyberpunkBG))

    let lastTimeout: NodeJS.Timeout

    window.onresize = () => {
      clearInterval(lastTimeout)
      lastTimeout = setTimeout(() => {
        bg.height = window.innerHeight
        bg.width = window.innerWidth
      }, 1000)
    }

    const pixelateFilter = new PixelateFilter()
    pixelateFilter.size = new Point(4, 4)

    bg.filters = [pixelateFilter]
    bg.width = window.innerWidth
    bg.height = window.innerHeight

    return bg
  }

  public addShockwave(x: number, y: number) {
    if (this.bg.filters.length >= 10) {
      return
    }
    const shockwave = new ShockwaveFilter()
    shockwave.uniforms.wavelength = (100 * window.innerWidth) / 1000

    shockwave.enabled = true
    shockwave.center = new Point(x, y)
    this.bg.filters.push(shockwave)
  }
}
