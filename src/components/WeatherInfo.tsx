import React, { useEffect, useState } from 'react'

interface UserInfo {
  ip: string
  city: string
  country: string
  temperature: number
  humidity: number
  windSpeed: number
  windDirection: number
}

const WeatherInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Получение информации о пользователе
        const ipResponse = await fetch('https://ipapi.co/json/')
        if (!ipResponse.ok) throw new Error('Ошибка получения IP-информации')
        const ipData = await ipResponse.json()

        // Получение погодных данных с использованием города и страны
        const { city, country } = ipData
        const weatherApiKey = 'd34686c3c50968a1e38c1bda9dc1e438' // Замените на ваш ключ API OpenWeatherMap
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApiKey}&units=metric`
        )

        if (!weatherResponse.ok) throw new Error('Ошибка получения данных погоды')
        const weatherData = await weatherResponse.json()

        const userWeather: UserInfo = {
          ip: ipData.ip,
          city: city,
          country: country,
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          windSpeed: weatherData.wind.speed,
          windDirection: weatherData.wind.deg
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

  // if (loading) {
  //   return <div>Загрузка...</div>
  // }

  // if (error) {
  //   return <div>Ошибка: {error}</div>
  // }

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <p>
        <strong>IP:</strong> {userInfo?.ip}
      </p>
      <p>
        <strong>Город:</strong> {userInfo?.city}
      </p>
      <p>
        <strong>Страна:</strong> {userInfo?.country}
      </p>
      <p>
        <strong>Температура:</strong> {userInfo?.temperature} °C
      </p>
      <p>
        <strong>Влажность:</strong> {userInfo?.humidity} %
      </p>
      <p>
        <strong>Скорость ветра:</strong> {userInfo?.windSpeed} м/с
      </p>
      <p>
        <strong>Направление ветра:</strong> {userInfo?.windDirection} °
      </p>
    </div>
  )
}

export default WeatherInfo
