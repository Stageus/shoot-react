import { useState } from "react"

const useGetFetch = () => {
  const [data, setData] = useState(null)

  const fetchData = async (url) => {
    const res = await fetch(`https://api.슛.site/${url}`, {
      method: "GET",
      credentials: "include",
    })
    const result = await res.json()
    console.log(result)
    setData(result)

    console.log(`get : ${url}`)
  }

  return [data, fetchData]
}

const usePostFetch = () => {
  const [data, setData] = useState(null)

  const fetchData = async (url, info) => {
    const res = await fetch(`https://api.슛.site/${url}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
    const result = await res.json()
    console.log(result)
    setData(result)

    console.log(`post : ${url}`)
  }

  return [data, fetchData]
}

const useDeleteFetch = (url) => {
  const [data, setData] = useState(null)

  const fetchData = async (url) => {
    const res = await fetch(`https://api.슛.site/${url}`, {
      method: "DELETE",
      credentials: "include",
    })
    const result = await res.json()
    console.log(result)
    setData(result)

    console.log(`delete : ${url}`)
  }

  return [data, fetchData]
}

export { useGetFetch, usePostFetch, useDeleteFetch }
