import { useState } from "react"
import { AddFolders } from "./modals/addFolders"

export const FolderContainer = ({ folders, setFolders, setSelectedFolder }) => {

    const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);

    function openModal() {
        setIsFolderModalOpen(true)
      }

    return (
        <div className="flex-grow grid grid-cols-2 justify-items-center pt-4 auto-rows-min gap-2 bg-green-100 w-2/3">
            {
              Object.entries(folders).map(([foldername, { emoji }]) => {
                return (
                      <div 
                        key={foldername}
                        className="cursor-pointer flex flex-col justify-end items-center w-24 h-24 bg-fictional-purple text-white font-berkshire rounded-xl"
                        onClick={ e => {
                          if (e.detail === 2) setSelectedFolder(foldername)
                        }}>
                        <p className="text-4xl mb-1">{emoji}</p>
                        <p className="mb-1">{foldername}</p>
                      </div>
                  )
              })
            }
            <button
              onClick={openModal}
              className="w-24 h-24 bg-rose-500">
              +
            </button>

            <AddFolders 
              isFolderModalOpen={isFolderModalOpen}
              setIsFolderModalOpen={setIsFolderModalOpen}
              folders={folders}
              setFolders={setFolders}
              />

          </div>
    )
}