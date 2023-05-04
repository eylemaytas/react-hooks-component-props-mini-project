import React from "react";

function Article( {title, date="January 1, 1970", preview, minutes}){
    const emojis = emojiList(minutes)
    return(
<article>
  <h3>{title}</h3>
  <small>
    {date} {emojis} {minutes} min read
    </small>
  <p>{preview}</p>
</article>
    )
}

function emojiList(minutes){
    const difference = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️" : "🍱"
    let emojis= " "
  for(let i=0; i < minutes; i+= difference){
    emojis = emojis + emoji
  }
    return emojis
    
}


export default Article