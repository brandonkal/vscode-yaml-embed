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
    # comment ${1 + 2}
    - list1 ${2 - 1}
    - [first, ${second}]
  ---
  vars:
  vlan:
    key: "{{ item.vlan_id }}"
    values:
      vlan_id: "{{ item.vlan_id }}"
      name: "{{ item.name }}"
      enabled: "{{ item.state != 'act/lshut' }}"
      state: "{{ item.state }}"
`

const k = y`
apiVersion: v1
kind: Pod
metadata:
  name: myapp
  labels:
    name: myapp
spec:
  containers:
  - name: myapp
    image: <Image>
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
    ports:
      - containerPort: <Port>
`
