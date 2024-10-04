import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface IUserInfo {
  ip: string
  city: string
  country: string
  latitude: number
  longitude: number
  temperature: string
  humidity: string
  description: string
  windSpeed: string
  windDirection: string
}

type propsType = {
  className?: string
}

const WeatherInfo: React.FC = (props: propsType) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const ipResponse = await fetch('https://ipapi.co/json/')
        if (!ipResponse.ok) throw new Error('Ошибка получения IP-информации')
        const ipData = await ipResponse.json()

        // const { ip, city, country, latitude, longitude } = ipData
        const weatherApiKey = 'd34686c3c50968a1e38c1bda9dc1e438'
        const weatherResponse = await fetch(
          // `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApiKey}&units=metric`
          `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${weatherApiKey}&units=metric`
        )

        if (!weatherResponse.ok) throw new Error('Ошибка получения данных погоды')
        const weatherData = await weatherResponse.json()

        const userWeather: IUserInfo = {
          ip: ipData.ip ? ipData.ip : ' - ',
          city: ipData.city ? ipData.city : ' - ',
          country: ipData.country ? ipData.country : ' - ',
          latitude: ipData.latitude,
          longitude: ipData.longitude,

          temperature: weatherData.main.temp ? `${Math.round(weatherData.main.temp)}°C` : ' - ',
          humidity: weatherData.main.humidity ? `${Math.round(weatherData.main.humidity)}%` : ' - ',
          description: weatherData.weather[0].description ? weatherData.weather[0].description : ' - ',
          windSpeed: weatherData.wind.speed ? `${Math.round(weatherData.wind.speed)}m/s` : ' - ',
          windDirection: weatherData.wind.deg ? wind_direction(weatherData.wind.deg) : ' - '
        }
        setUserInfo(userWeather)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchUserInfo()
  }, [])

  if (loading) {
    return (
      <div className={cn('my-5 flex flex-col items-center justify-center text-xs text-primary/70', props.className)}>
        Loading information ...
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn('my-5 flex flex-col items-center justify-center text-xs text-primary/70', props.className)}>
        Error: {error}
      </div>
    )
  }

  return (
    <div>
      <div className={cn('my-5 flex flex-col items-center justify-center text-xs text-primary/70', props.className)}>
        <span>
          {userInfo?.ip}&nbsp; • &nbsp;{userInfo?.city}&nbsp; • &nbsp;{userInfo?.country}
        </span>
        <span>
          {userInfo?.temperature}&nbsp; • &nbsp;{userInfo?.description}&nbsp; • &nbsp;{userInfo?.humidity}
        </span>
        <span>
          {userInfo?.windSpeed}&nbsp; • &nbsp;{userInfo?.windDirection}
        </span>
      </div>
    </div>
  )
}

export default WeatherInfo

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
