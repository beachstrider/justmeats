import { useState } from 'react'

import { addDays, format } from 'date-fns'

import * as Dialog from '@radix-ui/react-dialog'
import { NavLink, useLoaderData, useNavigate } from '@remix-run/react'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'

export const SubscriptionEditLayout = ({ children }) => {
  const submit = useSubmitPromise()
  const navigate = useNavigate()

  const { id, subscription, upcomingChargeId } = useLoaderData()

  const [processing, setProcessing] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isProcessDialogOpen, setProcessDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: '',
    description: '',
  })

  const [delayDialogOpen, setDelayDialogOpen] = useState(false)
  const [delayResultDialogOpen, setDelayResultDialogOpen] = useState(false)
  const [delayDialogContent, setDelayDialogContent] = useState({
    title: '',
    description: '',
  })

  const [delaying, setDelaying] = useState(false)
  const [canceling, setCanceling] = useState(false)

  const handleProcess = async () => {
    setProcessing(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'process-charge',
          chargeId: upcomingChargeId,
        }),
      },
      {
        method: 'post',
        action: `/account/subscriptions/${id}`,
      },
    )

    if (res.msg === 'ok') {
      console.debug('ok')
      setDialogContent({
        title: 'Congrats!',
        description: 'Your order is being processed immediately.',
      })
    } else {
      setDialogContent({
        title: 'Error!',
        description: 'There was a problem processing your order.',
      })
    }

    setProcessing(false)
    setDialogOpen(false)
    setProcessDialogOpen(true)
    //navigate('..')
  }

  const handleDelay = async () => {
    setDelaying(true)

    const date = format(
      addDays(subscription.next_charge_scheduled_at, 7),
      'yyyy-MM-dd',
    )

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'delay-subscription',
          date,
        }),
      },
      { method: 'post', action: `/account/subscriptions/${id}` },
    )

    if (res.msg === 'ok') {
      console.debug('ok')
      setDelayDialogContent({
        title: 'Success!',
        description: 'Your order is now delayed 1 week.',
      })
    } else {
      setDelayDialogContent({
        title: 'Error!',
        description: 'There was a problem delaying your order.',
      })
    }

    setDelaying(false)
    setDelayDialogOpen(false)
    setDelayResultDialogOpen(true)
    //navigate('..')
  }

  const handleCancel = async () => {
    setCanceling(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'cancel-subscription',
        }),
      },
      { method: 'post', action: `/account/subscriptions/${id}` },
    )

    if (res.msg === 'ok') {
      console.debug('ok')
      navigate('..', { replace: true })
    }

    setCanceling(false)
    navigate('..')
  }

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#eeeeee]">
      <div className="container mb-10 custom-collection-wrap">
        <div className="relative flex sm:flex-row flex-col lg:gap-x-2 gap-y-2 sm:justify-start sm:items-center items-start mt-[36px] mb-[30px] flex-wrap gap-x-[35px]">
          <NavLink
            end
            prefetch="intent"
            className="sm:left-0 py-[5px] px-[30px] border-2 border-[#425B34] border-solid bg-white"
            to="/account/subscriptions"
          >
            Back to Account
          </NavLink>
          <h3 className="text-2xl font-bold sm:text-4xl static [transform:inherit] lg:absolute lg:left-2/4 top-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
            Customize Your Order
          </h3>
        </div>
        <hr className="border border-[#707070] border-solid" />

        <div className="flex gap-2 mt-6 mb-3 sm:mt-10 sm:mb-5">
          <Button
            onClick={() => setDialogOpen(true)}
            className="py-[5px] px-[15px] sm:px-[30px] border-2 border-[#425B34] border-solid bg-white sm:w-auto w-full"
          >
            Process Now
          </Button>
          <Button
            onClick={() => setDelayDialogOpen(true)}
            className="py-[5px] px-[15px] sm:px-[30px] border-2 border-[#425B34] border-solid bg-white sm:w-auto w-full"
          >
            1 Week Delay
          </Button>
        </div>
        {children}
        <div className="my-5">
          {subscription.status === 'active' && (
            <div className="mb-10">
              <Button
                loading={canceling}
                onClick={handleCancel}
                className="static block py-[5px] px-[30px] border-2 border-[#425B34] border-solid bg-white"
              >
                Cancel Subscription
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 bg-white shadow-lg">
            <Dialog.Title className="text-lg font-bold">WAIT!</Dialog.Title>
            <Dialog.Description className="mt-2">
              If you click Process Now, your credit card or PayPall will be
              charged immediately, and the order will be placed today. Each time
              the button is clicked, it will place a new order, so please be
              sure to press it only once, even if it appears that it did not go
              through.
              <br />
              If you don’t want to be charged today with a new order, press back
              now. The changes to your order have automatically been saved.
            </Dialog.Description>
            <div className="flex justify-end mt-4 space-x-2">
              <Button
                onClick={() => setDialogOpen(false)}
                className="bg-red-500 text-white hover:bg-red-700 px-6 py-2 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
              >
                Back Now
              </Button>
              <Button
                loading={processing}
                onClick={() => {
                  handleProcess()
                }}
                className="bg-green-500 text-white hover:bg-green-700 px-6 py-2 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
              >
                Process Now
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root
        open={isProcessDialogOpen}
        onOpenChange={setProcessDialogOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 bg-white shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              {dialogContent.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              {dialogContent.description}
            </Dialog.Description>
            <div className="flex justify-end mt-4">
              <Button
                className="px-6 py-2 text-white rounded-md shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: '#862e1b', borderColor: '#862e1b' }}
                onClick={() => setProcessDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={delayDialogOpen} onOpenChange={setDelayDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 bg-white shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Are you Sure?
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              If you press this button you will push your next schedule order
              out by 1 week. If you would like to push out your order for a
              longer period, you can also repeatedly press this button to push
              it out an additional week each time. You can also contact{' '}
              <a
                href="mailto:support@justmeats.com"
                style={{ color: '#0000EE' }}
              >
                support@justmeats.com
              </a>{' '}
              for assistance in pushing out your order, or updating your
              subscription frequency
            </Dialog.Description>
            <div className="flex justify-end mt-4 space-x-2">
              <Button
                onClick={() => setDelayDialogOpen(false)}
                className="bg-red-500 text-white hover:bg-red-700 px-6 py-2 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
              >
                Back Now
              </Button>
              <Button
                loading={delaying}
                onClick={() => {
                  handleDelay()
                }}
                className="bg-green-500 text-white hover:bg-green-700 px-6 py-2 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
              >
                Confirm
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root
        open={delayResultDialogOpen}
        onOpenChange={setDelayResultDialogOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 bg-white shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              {delayDialogContent.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              {delayDialogContent.description}
            </Dialog.Description>
            <div className="flex justify-end mt-4">
              <Button
                className="px-6 py-2 text-white rounded-md shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: '#862e1b', borderColor: '#862e1b' }}
                onClick={() => setDelayResultDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
