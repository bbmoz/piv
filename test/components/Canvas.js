import test from 'ava'
import $ from 'jsdom'
import Canvas from './../../src/components/Canvas'

test('new Canvas($element, { height, width })', t => {
  t.plan(6)
  const $element = doc.getElementById('canvas')
  const height = 200
  const width = 500

  const canvas = new Canvas($element, {
    height, width
  })

  // context
  t.is(canvas.$element, $element)
  t.is(canvas.height, height)
  t.is(canvas.width, width)
  t.is(canvas.context, $element.getContext('2d'))

  // render
  t.is($element.height, height)
  t.is($element.width, width)
})

test('new Canvas(...): no config', t => {
  t.plan(6)
  const $element = doc.getElementById('canvas')

  const canvas = new Canvas($element)

  // context
  t.is(canvas.$element, $element)
  t.is(canvas.height, undefined)
  t.is(canvas.width, undefined)
  t.is(canvas.context, null)

  // render
  t.is($element.height, 150)
  t.is($element.width, 300)
})

test.todo('new Canvas(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <canvas id="canvas"></canvas>
      </body>
    </html>
  `)
})
