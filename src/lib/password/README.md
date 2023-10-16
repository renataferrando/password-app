
## How to use

Component with none requirements enabled:

```jsx
<Password />
```

```jsx
<Password
  number
  character
  uppercase
  noConsecutiveLetter
/>
```

### Password Props
| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |number, character, uppercase, noConsecutive
| `number` | Password requirement to have a number | `boolean` | `false` |  |
| `character` |  Password requirement to have a special character | `boolean` | `false` |  |
| `uppercase` |  Password requirement to have at least one letter in Uppercase | `boolean` | `false` |  |
| `noConsecutiveLetter` |  Password requirement to not have more than two consecutive letters eg: "aaa" | `boolean` | `true` | |

