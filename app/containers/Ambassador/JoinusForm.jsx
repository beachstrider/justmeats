import React, { useState } from 'react'
import { Link } from '@remix-run/react' 

export const JoinusForm = () => {
  return (
    <div className="w-full px-[20px]">
    <div className="bg-white p-12 lg:px-20 px-10 rounded-lg shadow md:w-3/4 lg:w-1/2 text-[#231B19] sm:text-[18px] text-[16px] mx-auto" style={{boxShadow: '0px 40px 45px -15px rgba(0, 0, 0, 0.15)'}}>
      <form action="">
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* First Name</label>
          <input type="text" id="name" name="name" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Last Name</label>
          <input type="text" id="name" name="lname" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Email</label>
          <input type="email" id="email" name="email" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Address1</label>
          <input type="text" id="address" name="address" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">Address2</label>
          <input type="text" id="address" name="optionladdress" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* City</label>
          <input type="text" id="city" name="city" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label  className="block mb-2 text-gray-600">* State</label>
          <input type="text" id="state" name="state" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Postal Code</label>
          <input type="text" id="postalcode" name="postalcode" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Country</label>
          <input type="text" id="country" name="country" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8 relative">
          <label className="block mb-2 text-gray-600">Birthday</label>
          <input type="text" id="birthday" name="birthday" placeholder="Select date" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
          <div className="absolute bottom-0 right-0 px-3 py-2">
            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-gray-600">Phone</label>
          <input type="text" id="phone" name="phone" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
         <div className="mb-8">
          <label className="block mb-2 text-gray-600">* Instagram</label>
          <input type="text" id="instagram" name="instagram" placeholder="@yourhandle" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="mb-8">
          <label className="block mb-2  text-gray-600">* What is your PayPal  email?</label>
          <input type="email" id="paypalemail" name="paypalemail" className="border border-gray-300 shadow p-2 w-full rounded-lg" />
        </div>
        <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" className="w-5 h-5 border rounded focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3">
                  <label className="block mb-5 text-gray-600">
                      Our program is managed by Aspire. By applying to our program, you accept the Aspire
                      <Link to={`/term-services`} className="text-[#167cf5]">Terms of Service  &nbsp;</Link>
                      and 
                      <Link to={`/privacy-policy`} className="text-[#167cf5]">&nbsp; Privacy Policy  </Link>
                  </label>
              </div>
          </div>

        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg mb-5">Apply</button>

        <div className="mb-8">
          <label className="block mb-2  text-gray-600">
            Questions? Reach us at <a href="mailto:chrisclark@justmeats.com" target="_blank" rel="noreferrer" className="text-[#167cf5]">chrisclark@justmeats.com</a>
          </label>
        </div>
      </form>
    </div>
  </div>
  )
}
