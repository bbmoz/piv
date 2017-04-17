import test from 'ava'
import $ from 'jsdom'
import Anchor from './../../src/components/Anchor'

test('new Anchor($element, { name, content, href })', t => {
  t.plan(7)
  const $element = doc.getElementById('anchor')
  const name = 'link to hello'
  const content = 'click me'
  const href = 'hello'

  const anchor = new Anchor($element, {
    name, content, href
  })

  // context
  t.is(anchor.$element, $element)
  t.is(anchor.name, name)
  t.is(anchor.content, content)
  t.is(anchor.href, href)

  // render
  t.is($element.name, name)
  t.is($element.href, href)
  t.is($element.innerHTML, content)
})

test('new Anchor(...): no config', t => {
  t.plan(7)
  const $element = doc.getElementById('anchor')

  const anchor = new Anchor($element)

  // context
  t.is(anchor.$element, $element)
  t.is(anchor.name, undefined)
  t.is(anchor.content, undefined)
  t.is(anchor.href, undefined)

  // render
  t.is($element.name, '')
  t.is($element.href, '')
  t.is($element.innerHTML, '')
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
