import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { usePathname } from 'next/navigation'

function Ga4Script({}) {
  const [initialized, setInitialized] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize('G-5CMK9EMZRJ')
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: pathname })
      ReactGA.send('pageview')
    }
  }, [initialized, pathname])

  return <></>
}

export default Ga4Script
