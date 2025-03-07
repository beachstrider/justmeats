import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '~/components/Button'
import { GreenCircleCheck } from '~/icons/GreenCircleCheck'

const zapierHook = 'https://hooks.zapier.com/hooks/catch/18523736/37rdy17/'

export const ContactForm = ({ formName }) => {
  const [submitting, setSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setSubmitting(true)

    try {
      const response = await fetch(zapierHook, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const result = await response.json()

      reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitting(false)
      setIsSubmitted(true)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        formName === 'first'
          ? 'relative xl:pt-[46px] xl:pb-[36px] xl:px-[50px] pt-[30px] pb-[30px] px-[33px] rounded-[8px] bg-[#262729] flex flex-col items-start gap-[16px] font-nunito'
          : 'relative xl:pt-[46px] xl:pb-[36px] xl:px-[50px] pt-[30px] pb-[30px] px-[33px] rounded-[8px] bg-white flex flex-col items-start gap-[16px] shadow-lg font-nunito'
      }
    >
      {isSubmitted && (
        <div className="flex gap-3 px-[10px] py-[8px] bg-[#eef3eb] rounded-[4px] text-black tracking-normal font-normal">
          <div className="w-[26px] py-[2px] shrink-0">
            <GreenCircleCheck />
          </div>
          Thanks for contacting us! We&apos;ll get back to you as soon as
          possible.
        </div>
      )}
      <div className="w-full">
        <input
          {...register('name', { required: 'Full Name is required' })}
          placeholder="Enter your full name"
          className={
            formName === 'first'
              ? 'bg-[#DDDDDD] text-[#222] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#efeeed] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.name && (
          <p
            className={
              formName === 'first'
                ? 'text-white uppercase text-[12px]'
                : 'text-black uppercase text-[12px]'
            }
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <input
          {...register('email', { required: 'Email is required' })}
          placeholder="Enter your email"
          type="email"
          className={
            formName === 'first'
              ? 'bg-[#DDDDDD] text-[#222] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#efeeed] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.email && (
          <p
            className={
              formName === 'first'
                ? 'text-white uppercase text-[12px]'
                : 'text-black uppercase text-[12px]'
            }
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <input
          {...register('gym_name', { required: 'Gym name is required' })}
          placeholder="Enter your Gym name"
          type="text"
          className={
            formName === 'first'
              ? 'bg-[#DDDDDD] text-[#222]  rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#efeeed] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.gym_name && (
          <p
            className={
              formName === 'first'
                ? 'text-white uppercase text-[12px]'
                : 'text-black uppercase text-[12px]'
            }
          >
            {errors.gym_name.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <input
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="Enter your phone"
          type="tel"
          className={
            formName === 'first'
              ? 'bg-[#DDDDDD] text-[#222] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#efeeed] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.phone && (
          <p
            className={
              formName === 'first'
                ? 'text-white uppercase text-[12px]'
                : 'text-black uppercase text-[12px]'
            }
          >
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <textarea
          {...register('gym_address', { required: 'Gym address is required' })}
          placeholder="Enter your Gym address"
          className={
            formName === 'first'
              ? 'bg-[#DDDDDD] text-[#222] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#efeeed] rounded-[4px] text-[17px] font-bold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.gym_address && (
          <p
            className={
              formName === 'first'
                ? 'text-white uppercase text-[12px]'
                : 'text-black uppercase text-[12px]'
            }
          >
            {errors.gym_address.message}
          </p>
        )}
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
          className={
            formName === 'first'
              ? 'text-[16px] font-normal px-[24px] py-[12px] rounded-[4px] text-white bg-[#B19630]'
              : 'text-[16px] font-normal px-[24px] py-[12px] rounded-[4px] text-white bg-[#B19630]'
          }
        >
          SUBMIT
        </Button>
        <div className=""></div>
      </div>
    </form>
  )
}
