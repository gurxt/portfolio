import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header({ setPage, title, setFadeOut }) {
  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setPage("home")
      setFadeOut(false)
    }, 1000)
  }

  return (
    <header className="header-container">
      <h1 className="text-slate-600 text-3xl fixed z-50 w-1/2 text-center">{ title }</h1>
      <button className="h-12 w-12 z-50 " onClick={handleClick}>
        <XMarkIcon className="w-10 h-10 bg-slate-100 p-1 rounded-xl text-slate-600 hover:text-red-500" />
      </button>
    </header>
  )
}