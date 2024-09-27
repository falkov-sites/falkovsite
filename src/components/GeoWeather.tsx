// 'use client'

import { cn } from '@/lib/utils'

type propsType = {
  className?: string
}

const wind_direction = (wind_degree: number) => {
  if (wind_degree > 337.5 && wind_degree < 22.5) return 'N'
  if (wind_degree > 22.5 && wind_degree < 67.5) return 'NE'
  if (wind_degree > 67.5 && wind_degree < 112.5) return 'E'
  if (wind_degree > 112.5 && wind_degree < 157.5) return 'SE'
  if (wind_degree > 157.5 && wind_degree < 202.5) return 'S'
  if (wind_degree > 202.5 && wind_degree < 247.5) return 'SW'
  if (wind_degree > 247.5 && wind_degree < 292.5) return 'W'
  if (wind_degree > 292.5 && wind_degree < 337.5) return 'NW'
  return '?'
}

const GeoWeather = async (props: propsType) => {
  const geoUrl = 'http://api.sypexgeo.net/json/'
  const geoRes = await (await fetch(geoUrl)).json()
  const ip = geoRes.ip
  const city = geoRes.city.name_en
  const country = geoRes.country.name_en
  const lat = geoRes.city.lat
  const lon = geoRes.city.lon

  const apiKey = 'd34686c3c50968a1e38c1bda9dc1e438'
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  const weatherRes = await (await fetch(weatherUrl)).json()
  const temperature = weatherRes.main.temp
  const description = weatherRes.weather[0].description
  const humidity = weatherRes.main.humidity
  const windSpeed = weatherRes.wind.speed
  const windDirection = wind_direction(weatherRes.wind.deg)

  return (
    <>
      <div className={cn('my-6 flex flex-col items-center justify-center text-xs text-primary/70', props.className)}>
        <span>
          {ip}&nbsp; • &nbsp;{city}&nbsp; • &nbsp;{country}
        </span>
        <span>
          {Math.round(temperature)}°C&nbsp; • &nbsp;{description}&nbsp; • &nbsp;{humidity}%
        </span>
        <span>
          {Math.round(windSpeed)}m/s&nbsp; • &nbsp;{windDirection}
        </span>
      </div>
    </>
  )
}

export { GeoWeather }
