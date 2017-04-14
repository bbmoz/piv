import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Footer from './../../src/components/Footer'

test('new Footer($element, { name, content, listener })', t => {
  t.plan(7)
  const $element = doc.getElementById('footer')
  const name = 'footer with copyright info'
  const content = 'click me'
  const listener = spy()

  const footer = new Footer($element, {
    name, content, listener
  })

  // context
  t.is(footer.$element, $element)
  t.is(footer.name, name)
  t.is(footer.content, content)
  t.is(footer.listener, listener)

  // render
  t.is($element.innerHTML, content)
  t.is($element.getAttribute('role'), 'contentinfo')
  t.is($element.getAttribute('aria-label'), name)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new footer(...): no config', t => {
  t.plan(7)
  const $element = doc.getElementById('footer')

  const footer = new Footer($element)

  // context
  t.is(footer.$element, $element)
  t.is(footer.name, undefined)
  t.is(footer.content, undefined)
  t.is(footer.listener, undefined)

  // render
  t.is($element.innerHTML, '')
  t.is($element.getAttribute('role'), null)
  t.is($element.getAttribute('aria-label'), null)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Footer(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <footer id="footer"></footer>
      </body>
    </html>
  `)
})
