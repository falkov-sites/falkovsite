import { headers } from 'next/headers'
import { Result } from 'postcss'
import { arrayBuffer } from 'stream/consumers'

export async function getUserIP() {
  const ip = (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  // console.log(ip)
  // return (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  return ip
}

export async function getUserHost() {
  return headers().get('host')
}

export async function getUserGeo() {
  const ip = getUserIP()
  const geo_url = 'http://api.sypexgeo.net/json/' + ip
  const jsonPlaceHolder_url = 'https://jsonplaceholder.typicode.com/users'

  // const res = await fetch(geo_url)
  const res = await fetch(jsonPlaceHolder_url)
  const data = await res.json()

  // console.log('=== ' + data.stringify() + ' ===')

  return data.country

  // $ip = $_SERVER['REMOTE_ADDR'];
  // $ch = curl_init('http://api.sypexgeo.net/json/' . $ip);
  // // $ch = curl_init('http://api.sypexgeo.net/json/35.193.167.223'); // для проверки
  // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // curl_setopt($ch, CURLOPT_HEADER, 0);
  // $data = curl_exec($ch);
  // curl_close($ch);
  // $obj_data = json_decode($data);https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/%40tinakaratasheva/%25D0%25BA%25D0%25B0%25D0%25BA-%25D1%2581%25D0%25B4%25D0%25B5%25D0%25BB%25D0%25B0%25D1%2582%25D1%258C-get-%25D0%25B7%25D0%25B0%25D0%25BF%25D1%2580%25D0%25BE%25D1%2581-%25D0%25B2-next-js-%25D0%25BF%25D0%25BE%25D1%2588%25D0%25B0%25D0%25B3%25D0%25BE%25D0%25B2%25D0%25BE%25D0%25B5-%25D1%2580%25D1%2583%25D0%25BA%25D0%25BE%25D0%25B2%25D0%25BE%25D0%25B4%25D1%2581%25D1%2582%25D0%25B2%25D0%25BE-ece49b4d9702&ved=2ahUKEwiupY6GmLiIAxWBTUEAHap7CLUQFnoECBAQAQ&usg=AOvVaw3qvQbKQOiz5XIsh5fuS_ng
  // return @[$obj_data->ip, $obj_data->city->name_en, $obj_data->country->name_en];
}

export async function getAllHeaders() {
  const headersList = headers()
  return headersList
}

export async function sendToTg(msg: string) {
  const tel_token = '585930160:AAESsCh16tE2bUEsnQJZoRxQLz9xAi3Zb3U'
  const tel_chat_id = 85623632
  const array_ip_not_send = ['37.193.167.223', '::1']
  // const ip = $_SERVER["REMOTE_ADDR"];
  let message = '-' + encodeURIComponent(msg) + '-'
  let url = `https://api.telegram.org/bot${tel_token}/sendMessage?chat_id=${tel_chat_id}&text=${message}&parse_mode=html`
  let oReq = new XMLHttpRequest()
  oReq.open('GET', url, true)
  oReq.send()
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log('=== ' + data.stringify() + ' ===')

  return { props: { contacts: data } }
}

// функция принимает массив и возвращает случайный элемент этого массива
export function getRandomFromArray<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined // Возвращаем undefined, если массив пустой
  }

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
