import test from 'ava'
import $ from 'jsdom'
import Section from './../../src/components/Section'

test('new Section($element, { name, content, listener })', t => {
  t.plan(6)
  const $element = doc.getElementById('footer')
  const name = 'footer with copyright info'
  const content = 'click me'

  const footer = new Section($element, {
    name, content
  })

  // context
  t.is(footer.$, $element)
  t.is(footer.name, name)
  t.is(footer.content, content)

  // render
  t.is($element.innerHTML, content)
  t.is($element.getAttribute('role'), 'contentinfo')
  t.is($element.getAttribute('aria-label'), name)
})

test('new Section(...): no config', t => {
  t.plan(6)
  const $element = doc.getElementById('footer')

  const footer = new Section($element)

  // context
  t.is(footer.$, $element)
  t.is(footer.name, undefined)
  t.is(footer.content, undefined)

  // render
  t.is($element.innerHTML, '')
  t.is($element.getAttribute('role'), null)
  t.is($element.getAttribute('aria-label'), null)
})

test.todo('new Section(...): missing config props')

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
