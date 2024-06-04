import { useState } from 'react'

import { useNavigate } from '@remix-run/react'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { Close } from '~/icons/Close'
import { cn } from '~/lib/utils'

const optionValues = [
  'This is too expensive',
  'This was created by accident',
  'I already have more than I need',
  'I no longer use this product',
  'I want a different product or variety',
  'Other reason',
]

export const FeedbackAside = ({ open, onClose, subscriptionId }) => {
  const navigate = useNavigate()
  const submit = useSubmitPromise()

  const [option, setOption] = useState('')
  const [feedback, setFeedback] = useState('')
  const [canceling, setCanceling] = useState(false)

  const handleCancel = async () => {
    setCanceling(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'cancel-subscription',
          feedback: feedback || option,
        }),
      },
      { method: 'post', action: `/account/subscriptions/${subscriptionId}` },
    )

    if (res.success) {
      navigate('..', { replace: true })
    }

    setCanceling(false)
  }

  return (
    <aside
      className={cn(
        'w-full sm:w-[360px] border-[#B2B2B2] border-l fixed overflow-y-auto md:overflow-y-hidden h-screen top-0 right-0 bg-white z-10 flex flex-col',
        open ? 'block' : 'hidden',
      )}
    >
      <div className="w-full px-4 py-4 border-b-2 border-gray-700">
        <div className="flex items-center justify-between ">
          <h1 className="text-[20px] font-bold py-1 px-5">Custom Bundle</h1>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="font-medium mb-[20px]">
          Select a reason for cancelling your subscription (optional):
        </div>

        <div className="flex flex-col gap-[10px]">
          {optionValues.map((value, index) => (
            <label
              key={index}
              htmlFor={`o${index}`}
              className="flex items-center gap-[10px] cursor-pointer"
            >
              <input
                type="radio"
                name="option"
                id={`o${index}`}
                value={value}
                onClick={() => setOption(value)}
              />
              {value}
            </label>
          ))}
        </div>
        {option === optionValues.at(-1) && (
          <div className="py-[20px]">
            <div className="mb-[10px]">
              Please help us process your request by tellin us why you&apos;re
              cancelling.
            </div>
            <textarea
              rows={4}
              className="w-full"
              placeholder="Additional comments (optional)"
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
        )}
        <Button
          loading={canceling}
          onClick={handleCancel}
          className="relative disabled:cursor-not-allowed bg-black text-[15px] py-[8px] text-white px-[16px] mt-4"
        >
          CANCEL SUBSCRIPTION
        </Button>
      </div>
    </aside>
  )
}
