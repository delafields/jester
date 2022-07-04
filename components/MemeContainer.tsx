import Image from "next/image"

export const MemeContainer = ({ folders, selectedFolder, setSelectedFolder }) => {

    return (
        <div className="flex-grow w-2/3 bg-green-100 p-6">
              <div className="flex justify-center">
                <button 
                className="bg-blue-200 px-2 py-1 rounded-2xl font-black"
                onClick={() => setSelectedFolder(null)}>
                  home
                </button>
                <p className="text-2xl">{selectedFolder}</p>
              </div>
              <div className="grid grid-cols-2 bg-red-100 justify-center pt-4 auto-rows-min gap-2 bg-green-100">
                {
                  folders[selectedFolder].map(({ name, url }) => {
                    return (
                      <div className="flex flex-col w-48">
                        {name}
                        {/* {url} */}
                        <Image
                          src={url}
                          height={200}
                          width={200}
                          className="rounded-2xl"
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
    )
}
