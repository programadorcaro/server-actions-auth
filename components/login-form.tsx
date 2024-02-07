"use client"
import { useFormState } from 'react-dom'
import { login } from '@/lib'

const initialState = {
  errors: {
    email: ['']
  },
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)
  const emailerrorMessage = state.errors?.email ? state.errors?.email[0] : ''

  return (
    <form
      action={formAction}
    >
      <input name="email" placeholder="Email" />
      {emailerrorMessage ? <span>{emailerrorMessage}</span> : null}

      <input name="password" placeholder="password" type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}