import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '~/components/Button'
import { GreenCircleCheck } from '~/icons/GreenCircleCheck'

const zapierHook = 'https://hooks.zapier.com/hooks/catch/18523736/2okif3w/'

export const ContactForm = ({ formName }) => {
  const [submitting, setSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  // Function to run on form submit that sends data to Zapier
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
          ? 'relative pt-[20px] pb-[40px] xl:px-[50px] px-[33px] flex flex-col items-start gap-[16px]'
          : 'relative pt-[20px] pb-[40px] xl:px-[50px] px-[33px] flex flex-col items-start gap-[16px]'
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
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter your full name"
          className={
            formName === 'first'
              ? 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.name && (
          <p
            className={
              formName === 'first'
                ? 'text-[#6b1626] uppercase text-[12px]'
                : 'text-[#6b1626] uppercase text-[12px]'
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
              ? 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.email && (
          <p
            className={
              formName === 'first'
                ? 'text-[#6b1626] uppercase text-[12px]'
                : 'text-[#6b1626] uppercase text-[12px]'
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
              ? 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.gym_name && (
          <p
            className={
              formName === 'first'
                ? 'text-[#6b1626] uppercase text-[12px]'
                : 'text-[#6b1626] uppercase text-[12px]'
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
              ? 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.phone && (
          <p
            className={
              formName === 'first'
                ? 'text-[#6b1626] uppercase text-[12px]'
                : 'text-[#6b1626] uppercase text-[12px]'
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
              ? 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
              : 'bg-[#FFFFFF] rounded-[4px] text-[17px] font-semibold lg:px-[17px] lg:py-[10px] px-[10px] py-[3px] border-none w-full'
          }
        />
        {errors.gym_address && (
          <p
            className={
              formName === 'first'
                ? 'text-[#6b1626] uppercase text-[12px]'
                : 'text-[#6b1626] uppercase text-[12px]'
            }
          >
            {errors.gym_address.message}
          </p>
        )}
      </div>
      <div className="flex gap-2 m-auto">
        <Button
          type="submit"
          loading={submitting}
          className={
            formName === 'first'
              ? 'text-white font-semibold px-[18px] md:px-[24px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] tracking-[1px] uppercase'
              : 'text-white font-semibold px-[18px] md:px-[24px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] tracking-[1px] uppercase'
          }
        >
          Get started
        </Button>
        <div className=""></div>
      </div>
    </form>
  )
}
