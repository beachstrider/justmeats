import React, { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { DialogContent } from './DialogContent'

export const ProductModal = ({ product, onClose }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (product) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [product])

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[967px] rounded-[8px] text-left align-middle transition-all transform bg-white overflow-hidden shadow-xl">
                {product && (
                  <DialogContent product={product} onClose={onClose} />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
