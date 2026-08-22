import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import SignupForm from '../app/events/SignupForm'

describe('SignupForm', () => {
  test('shows error when submitting empty name or invalid email', async () => {
    render(<SignupForm eventId="test" eventTitle="Test Event" />)

    // Provide a whitespace name so the HTML `required` constraint is satisfied
    // but the component's `name.trim()` validation still fails.
    fireEvent.change(screen.getByLabelText(/Fulde navn/i), { target: { value: ' ' } })
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'invalid' } })
    const submit = screen.getByRole('button', { name: /tilmeld/i })
    fireEvent.click(submit)

    expect(await screen.findByText(/Udfyld venligst navn og en gyldig e-mail/i)).toBeInTheDocument()
  })

  test('submits successfully with valid data', async () => {
    render(<SignupForm eventId="test" eventTitle="Test Event" />)

    fireEvent.change(screen.getByLabelText(/Fulde navn/i), { target: { value: 'Test Navn' } })
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /tilmeld/i }))

    expect(await screen.findByText(/Tilmelding modtaget. Tak!/i)).toBeInTheDocument()
  })
})
