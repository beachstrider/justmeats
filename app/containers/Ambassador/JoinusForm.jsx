import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '~/components/Button'
import { GreenCircleCheck } from '~/icons/GreenCircleCheck'


export const JoinusForm = () => {
  return (
    <form
      className="container-small relative rounded-[8px] bg-white flex flex-col items-start gap-[16px] shadow-lg font-nunito">
      <div className="w-full">
        <input
          className="bg-[#fff] border-1 border rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full"/>
      </div>
      <div className="w-full">
        <input
          type="email"
          className="bg-[#fff] border-1 border-gray-400 rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full"/>
      </div>
      <div className="w-full">
        <input
          type="text"
          className="bg-[#fff] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full"/>
      </div>
      <div className="w-full">
        <input
          type="tel"
          className="bg-[#fff] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full"/>
      </div>
      <div className="w-full">
        <textarea
          className="bg-[#fff] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full"/>
      </div>
      <div className="tracking-normal">
        By submitting this form, you agree to the terms stated herein and
        consent to Just Meats contacting you via text, email, and phone for
        purposes related to the subject matter of this form.
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          loading={submitting}
          className="text-[16px] font-normal px-[24px] py-[12px] rounded-[4px] text-white bg-[#B19630]">
          Apply
        </Button>
      </div>
    </form>
  )
}
