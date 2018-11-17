import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/game-ui.js"

addEventListener("load",()=>{
	const el = document.createElement("div")	
	document.body.appendChild(el)
	el.style.display="inline-block"
	document.body.style.textAlign="center"
	ReactDOM.render(<App/>,el)
})