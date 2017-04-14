import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Anchor from './../../src/components/Anchor'

test('new Anchor(name, $element, text, href, listener)', t => {
  t.plan(8)
  const $element = doc.getElementById('anchor')
  const name = 'link to hello'
  const text = 'click me'
  const href = 'hello'
  const listener = spy()

  const anchor = new Anchor($element, {
    name, text, href, listener
  })

  // context
  t.is(anchor.$element, $element)
  t.is(anchor.name, name)
  t.is(anchor.text, text)
  t.is(anchor.href, href)
  t.is(anchor.listener, listener)

  // wcag
  t.is($element.name, name)
  t.is($element.href, href)
  t.is($element.innerHTML, text)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Anchor(...): no config', t => {
  t.plan(8)
  const $element = doc.getElementById('anchor')

  const anchor = new Anchor($element)

  // context
  t.is(anchor.$element, $element)
  t.is(anchor.name, undefined)
  t.is(anchor.text, undefined)
  t.is(anchor.href, undefined)
  t.is(anchor.listener, undefined)

  // wcag
  t.is($element.name, '')
  t.is($element.href, '')
  t.is($element.innerHTML, '')

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Anchor(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <a id="anchor"></a>
      </body>
    </html>
  `)
})
