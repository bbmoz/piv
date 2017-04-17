class Canvas {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.height = config.height
      this.width = config.width
      this._init()
    }
  }

  _init () {
    if (this.height !== undefined) this.$element.setAttribute('height', this.height)
    if (this.width !== undefined) this.$element.setAttribute('width', this.width)
  }

  get $ () {
    return this.$element
  }

  get context () {
    return this.$element.getContext('2d')
  }
}

export default Canvas
