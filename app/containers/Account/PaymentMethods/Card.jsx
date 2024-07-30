import React, { useState } from 'react'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'

export const Card = ({ paymentMethod }) => {
  const submit = useSubmitPromise()

  const {
    id: payment_method_id,
    payment_details,
    billing_address,
  } = paymentMethod

  const [sendingEmail, setSendingEmail] = useState(false)

  const handleSendUpdateEmail = async () => {
    setSendingEmail(true)

    const res = await submit(
      {
        body: JSON.stringify({ payment_method_id }),
      },
      {
        method: 'post',
        action: `/account/payment-methods`,
      },
    )

    if (res.success) {
      console.debug('ok')
    }

    setSendingEmail(false)
  }

  return (
    <div className="bg-white [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-[25px] lg:px-[50px] lg:py-[40px] px-[26px] py-[32px] border-b border-b-[#EFEEED]">
        <div className="text-[24px] font-bold italic text-[#172b85] uppercase px-[12px] py-[6px] rounded-[6px] border border-[#D9D9D9]">
          {payment_details.brand}
        </div>
        <div className="font-bold text-[18px] leading-[26px]">
          •••• •••• •••• {payment_details.last4}
        </div>
      </div>
      <div className="lg:px-[50px] lg:pt-[26px] lg:pb-[44px] px-[26px] pt-[26px] pb-[35px]">
        <div className="lg:mb-[20px] mb-[27px]">
          <div className="font-bold text-[18px] leading-[175%] mb-[11px]">
            Billing address
          </div>
          <div>
            <p className="capitalize leading-[175%] text-[16px]">
              {billing_address.first_name} {billing_address.last_name}
            </p>
            <p className="capitalize leading-[175%] text-[16px]">
              {billing_address.address1}
            </p>
            <p className="capitalize leading-[175%] text-[16px]">
              {billing_address.address2}
            </p>
            <p className="capitalize leading-[175%] text-[16px]">
              {billing_address.province} {billing_address.zip}
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button
            loading={sendingEmail}
            onClick={handleSendUpdateEmail}
            className="font-bold text-[14px] py-[12px] tracking-[0.7px] bg-[#BF4745] text-white px-[24px]"
          >
            SEND UPDATE EMAIL
          </Button>
        </div>
      </div>
    </div>
  )
}
