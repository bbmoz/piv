import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Img from './../../src/components/Img'

test('new Img($element, { name, alt, listener })', t => {
  t.plan(6)
  const $element = doc.getElementById('img')
  const name = 'img with info'
  const src = '#some-name'
  const listener = spy()

  const img = new Img($element, {
    name, src, listener
  })

  // context
  t.is(img.$element, $element)
  t.is(img.name, name)
  t.is(img.src, src)
  t.is(img.listener, listener)

  // render
  t.is($element.alt, name)
  t.is($element.getAttribute('src'), src)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Img(...): no config', t => {
  t.plan(6)
  const $element = doc.getElementById('img')

  const img = new Img($element)

  // context
  t.is(img.$element, $element)
  t.is(img.name, undefined)
  t.is(img.src, undefined)
  t.is(img.listener, undefined)

  // render
  t.is($element.alt, '')
  t.is($element.getAttribute('src'), null)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Img(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <img id="img" />
      </body>
    </html>
  `)
})
