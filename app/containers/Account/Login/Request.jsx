import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { cn } from '~/lib/utils'

export const RequestForm = ({ onSubmit }) => {
  const submit = useSubmitPromise()
  const [submitting, setSubmitting] = useState(false)

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  // Function to run on form submit that sends data to Zapier
  const onFormSubmit = async ({ email }) => {
    setSubmitting(true)

    try {
      const res = await submit(
        {
          body: JSON.stringify({
            api: 'request',
            email,
          }),
        },
        {
          method: 'post',
          action: '/account/signin',
        },
      )

      if (res.success) {
        onSubmit({ email, sessionToken: res.sessionToken })
      } else {
        setError('email', { message: res.message })
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className="flex flex-col gap-[30px]"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="text-[28px] font-bold">Login</div>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
          className={cn(
            'block w-full text-sm rounded-md border-0 py-[10px] text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset',
            errors.email
              ? 'ring-red-300 focus:ring-red-500'
              : 'ring-gray-300 focus:ring-gray-500',
          )}
          minLength={2}
        />
        {errors.email && (
          <div className="mt-1 text-red-500">{errors.email.message}</div>
        )}
      </div>
      <Button
        loading={submitting}
        className="rounded bg-[#163840] hover:bg-[#2d4b53] text-white py-[10px] font-medium"
      >
        Send login code (sends SMS and email)
      </Button>
    </form>
  )
}
