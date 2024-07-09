import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Link } from '@remix-run/react'

import { GreenCircleCheck } from '~/icons/GreenCircleCheck'

const zapierHook = 'https://hooks.zapier.com/hooks/catch/5498123/23gca9v/'

export const JoinusForm = () => {
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
    <div className="w-full px-[20px]">
      <div
        className="bg-white p-12 lg:px-20 px-10 rounded-lg shadow md:w-3/4 lg:w-1/2 text-[#231B19] sm:text-[18px] text-[16px] mx-auto"
        style={{ boxShadow: '0px 40px 45px -15px rgba(0, 0, 0, 0.15)' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitted && (
            <div className="flex gap-3 px-[10px] py-[8px] mb-[40px] bg-[#eef3eb] rounded-[4px] text-black tracking-normal font-normal">
              <div className="w-[26px] py-[2px] shrink-0">
                <GreenCircleCheck />
              </div>
              Thanks for joining us! We&apos;ll get back to you as soon as
              possible.
            </div>
          )}
          <div className="mb-8">
            <label htmlFor="first_name" className="block mb-2 text-gray-600">
              * First Name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="First name"
              {...register('first_name', {
                required: 'First Name is required',
              })}
              className="w-full p-2 border border-gray-300 rounded-lg shadow"
            />
            {errors.first_name && (
              <p className={'text-red-500 uppercase text-[12px]'}>
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="last_name" className="block mb-2 text-gray-600">
              * Last Name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="First name"
              {...register('last_name', { required: 'Last Name is required' })}
              className="w-full p-2 border border-gray-300 rounded-lg shadow"
            />
            {errors.last_name && (
              <p className={'text-red-500 uppercase text-[12px]'}>
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block mb-2 text-gray-600">
              * Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@test.com"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 border border-gray-300 rounded-lg shadow"
            />
            {errors.email && (
              <p className={'text-red-500 uppercase text-[12px]'}>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="instagram" className="block mb-2 text-gray-600">
              * Instagram
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="@yourhandle"
              {...register('instagram', { required: 'Instagram is required' })}
              className="w-full p-2 border border-gray-300 rounded-lg shadow"
            />
            {errors.instagram && (
              <p className={'text-red-500 uppercase text-[12px]'}>
                {errors.instagram.message}
              </p>
            )}
          </div>

          <button className="block w-full p-2 mb-5 font-bold text-white bg-blue-500 rounded-lg">
            Apply
          </button>

          <div className="mb-8">
            <label className="block mb-2 text-gray-600">
              Questions? Reach us at{' '}
              <a
                href="mailto:chrisclark@justmeats.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#167cf5]"
              >
                chrisclark@justmeats.com
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
