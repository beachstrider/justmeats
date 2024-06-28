import FormData from 'form-data'
import fetch from 'node-fetch'

const datasetId = '339994655121583'
const accessToken =
  'EAADiaB9aHL8BO4A7wQSWLwJ0Ur5zW4tnkjx0DS0YLOQSSqU2iPE8vWVGPiZBepErdvZBN6cUn8H00SDZAHJ9kBwW7stzMODmzhboftHr8X4LNCWJY4ZCzm0qoPofg72OfycJESXl1OcqMA9NfbhAgj1m5XPmJTPIr8qL11s7aic0s4P7ZAQd1Qs14fssINobZCYlt4nAZDZD'

export const sendPageView = async (request) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookies = new Map(
    cookieHeader?.split(';').map((cookie) => cookie.trim().split('=')),
  )

  const event_name = 'PageView'
  const action_source = 'website'
  const fbp = cookies.get('_fbp')
  const event_time = Math.floor(Date.now() / 1000)

  if (fbp) {
    const data = [
      {
        event_name,
        event_time,
        action_source,
        user_data: {
          em: [null],
          ph: [null],
          fbc: fbp,
        },
      },
    ]

    const formData = new FormData()

    formData.append('data', JSON.stringify(data))
    formData.append('access_token', accessToken)

    try {
      await fetch(`https://graph.facebook.com/v15.0/${datasetId}/events`, {
        method: 'POST',
        body: formData,
      })
    } catch (err) {
      console.error(err)
    }
  }
}
