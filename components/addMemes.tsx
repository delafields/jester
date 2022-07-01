import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const AddMemes = ({ test_memes, isOpen, setIsOpen, folders, setFolders, name, setName}) => {

    const handleSubmit = (event): string => {
        event.preventDefault();

        console.log(event.target.value)

        let newFolders = folders;
        newFolders[name] = [];
        setFolders(newFolders);
        closeModal();
      }
    
      function closeModal() {
        setIsOpen(false)
      }

    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" open={isOpen} onClose={setIsOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Add a new folder
                        </Dialog.Title>

                        <div className="mt-4 flex flex-col">
                          <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name"
                                className="text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"  
                              />
                            <input type="submit" />
                          </form>
                          
                          {/* <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button> */}
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
        </>
    )
}