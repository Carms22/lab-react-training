import React from "react";

const Greetings = ({lang, children}) => {
  let message = (lang) =>{
    switch (lang) {
      case 'de':
        return <p>Hallo {children}</p>
      case 'fr':
        return <p>Bonjour {children}</p>
      case 'es':
        return <p>Hola {children}</p>
      case 'en':
        return <p>Hello {children}</p>
      default:
      }
  }
   
    return(
      <div>
      {message(lang)}
      </div>
  )
}

export default Greetings;