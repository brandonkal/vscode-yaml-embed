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
const h = y`
${1 + 2}
# comment
  first: value ${1 + 2}
  se-${1 + 2}-cond: value
  third: value
`
