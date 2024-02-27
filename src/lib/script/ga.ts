import ReactGA from 'react-ga4'

export const initGA = () => {
  try {
    ReactGA.initialize('G-5CMK9EMZRJ')
  } catch (err) {
    console.log(err)
  }
}

export const trackingPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

export const trackingEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  })
}
