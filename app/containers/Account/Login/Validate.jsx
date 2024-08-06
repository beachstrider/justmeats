import { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'

import { useNavigate } from '@remix-run/react'

import { useSubmitPromise } from '~/hooks/useSubmitPromise'

export const ValidateForm = ({ email, sessionToken, setRequestResponse }) => {
  const submit = useSubmitPromise()
  const navigate = useNavigate()

  const [code, setCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onFormSubmit = async () => {
    setSubmitting(true)

    try {
      const res = await submit(
        {
          body: JSON.stringify({
            api: 'validate',
            email,
            code,
            sessionToken,
          }),
        },
        {
          method: 'post',
          action: '/account/login',
        },
      )

      if (res.success) {
        navigate('/account/dashboard', { replace: true })
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    setIsError(false)

    if (code.length === 4) {
      onFormSubmit()
    }
  }, [code])

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[28px] font-bold">We sent you a code!</div>
      <div>
        <div className="mb-1">Enter verification code</div>
        <OtpInput
          shouldAutoFocus
          value={code}
          onChange={setCode}
          numInputs={4}
          renderInput={(props) => <input disabled={submitting} {...props} />}
          containerStyle={{ gap: 20 }}
          inputStyle={{
            width: '100%',
            fontSize: 20,
            fontWeight: 500,
            paddingTop: 22,
            paddingBottom: 22,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: isError ? 'rgb(244,67,54)' : '',
          }}
        />
        {submitting && <div className="mt-1">Validating...</div>}
        {isError && <div className="mt-1 text-red-500">Invalid code</div>}
      </div>
      <button
        className="mt-1 text-left underline"
        onClick={() => setRequestResponse(null)}
      >
        Back
      </button>
    </div>
  )
}
