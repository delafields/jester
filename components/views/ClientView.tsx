import { useState } from "react"
import { FolderView } from "./FolderView";
import { MemeView } from "./MemeView";

export const ClientView = ({ memes, setMemes }) => {
    const [selectedFolder, setSelectedFolder] = useState(null);

    return (
        <>
        {selectedFolder === null
            ? <FolderView 
                setSelectedFolder={setSelectedFolder}
                memes={memes}
                setMemes={setMemes} 
              />

            : <MemeView
                memes={memes}
                selectedFolder={selectedFolder}
                setSelectedFolder={setSelectedFolder}
              />
          }
        </>
    )
}