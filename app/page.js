'use client'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'

export default function Home() {

  const [remainder, setremainder] = useState({ title: "", desc: "" })


  const addremainder = () => {
    let remainders = localStorage.getItem("remainders")
    if (remainders) {
      let remaindersJson = JSON.parse(remainders)
      if (remaindersJson.filter(value => { return value.title == remainder.title }).length > 0) {
        alert("Remainder with this title already exists")
      }
      else {
        remaindersJson.push(remainder)
        localStorage.setItem("remainders", JSON.stringify(remaindersJson))
        alert("Reaminder has been added")
        setremainder({ title: "", desc: "" })
      }
    }
    else {
      localStorage.setItem("remainders", JSON.stringify([remainder]))
    }
  }


  const onChange = (e) => {

    setremainder({ ...remainder, [e.target.name]: e.target.value })
    console.log(remainder)
  }
  

  return (
    <div className="my-2 text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add a Remainder</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">Remainder Title</label>
              <input onChange={onChange} value={remainder.title} placeholder="Whats Your Remainder!" type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Remainder Text</label>
              <input onChange={onChange} value={remainder.desc} placeholder="Any Details Here!" type="text" id="desc" name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
            <button onClick={addremainder} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">Add Reamainder</button>
            <p className="text-xs text-gray-500 mt-3">The best Remainder list app out there!</p>
          </div>
        </div>
      </section>
    </div>
  )
}
