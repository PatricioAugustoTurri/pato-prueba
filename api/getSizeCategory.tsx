import { useEffect, useState } from "react"

export function useGetSizeCategory() {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sizes`
    const [resulte, setResulte] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect (()=>{
        (async()=>{
          try{
            const res = await fetch(url)
            const json = await res.json()
            setResulte(json.data)
            setLoading(false)
          } catch (error: any) {
            setError(error.message)
            setLoading(false)
          }
        })()
    },[url])

    return ({resulte, loading, error})
}