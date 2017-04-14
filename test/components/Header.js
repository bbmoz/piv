import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Header from './../../src/components/Header'

test('new Header($element, { name, content, listener })', t => {
  t.plan(7)
  const $element = doc.getElementById('header')
  const name = 'header with info'
  const content = 'click me'
  const listener = spy()

  const header = new Header($element, {
    name, content, listener
  })

  // context
  t.is(header.$element, $element)
  t.is(header.name, name)
  t.is(header.content, content)
  t.is(header.listener, listener)

  // render
  t.is($element.innerHTML, content)
  t.is($element.getAttribute('role'), 'contentinfo')
  t.is($element.getAttribute('aria-label'), name)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Header(...): no config', t => {
  t.plan(7)
  const $element = doc.getElementById('header')

  const header = new Header($element)

  // context
  t.is(header.$element, $element)
  t.is(header.name, undefined)
  t.is(header.content, undefined)
  t.is(header.listener, undefined)

  // render
  t.is($element.innerHTML, '')
  t.is($element.getAttribute('role'), null)
  t.is($element.getAttribute('aria-label'), null)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Header(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <header id="header"></header>
      </body>
    </html>
  `)
})
