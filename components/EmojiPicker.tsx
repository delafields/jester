import React, { useEffect, useRef } from "react";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

const EmojiPicker = ({ setSelectedEmoji }) => {

  const ref = useRef(null);

  useEffect(() => {
    new Picker({ 
        // ...props, 
        data, 
        ref,
        onEmojiSelect: (emoji) => {
            console.log("selected emoji is " , emoji.native);
            setSelectedEmoji(emoji.native);
        }
    });
  }, []);

  return <div ref={ref} />;
};

export default EmojiPicker;