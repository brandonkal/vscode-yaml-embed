function y(..._: any) {}

const yaml = y`
first: second ${100 + 10}
`

function css(..._: any) {}

const s = css`
  thisis: something else;
`

const html = y
// HTML
const h = html`
  first: value second: value third: value
`
