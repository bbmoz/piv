import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Button from './../../src/components/Button'

test('new Button($element, { name, text, listener })', t => {
  t.plan(6)
  const $element = doc.getElementById('button')
  const name = 'learn more about cats'
  const text = 'click me'
  const listener = spy()

  const button = new Button($element, {
    name, text, listener
  })

  // context
  t.is(button.$element, $element)
  t.is(button.name, name)
  t.is(button.text, text)
  t.is(button.listener, listener)

  // wcag
  t.is($element.getAttribute('aria-label'), name)
  t.is($element.innerHTML, text)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Button(...): no config', t => {
  t.plan(6)
  const $element = doc.getElementById('button')

  const button = new Button($element)

  // context
  t.is(button.$element, $element)
  t.is(button.name, undefined)
  t.is(button.text, undefined)
  t.is(button.listener, undefined)

  // wcag
  t.is($element.getAttribute('aria-label'), null)
  t.is($element.innerHTML, '')

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Button(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <button id="button"></button>
      </body>
    </html>
  `)
})
