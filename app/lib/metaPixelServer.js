import FormData from 'form-data'
import fetch from 'node-fetch'

const datasetId = '339994655121583'
const accessToken =
  'EAADiaB9aHL8BO4A7wQSWLwJ0Ur5zW4tnkjx0DS0YLOQSSqU2iPE8vWVGPiZBepErdvZBN6cUn8H00SDZAHJ9kBwW7stzMODmzhboftHr8X4LNCWJY4ZCzm0qoPofg72OfycJESXl1OcqMA9NfbhAgj1m5XPmJTPIr8qL11s7aic0s4P7ZAQd1Qs14fssINobZCYlt4nAZDZD'

export const sendPageView = async () => {
  const formData = new FormData()

  formData.append(
    'data',
    JSON.stringify([
      {
        event_name: 'PageView',
        event_time: 1719259987,
        user_data: {
          em: [
            '309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd',
          ],
          ph: [
            '254aa248acb47dd654ca3ea53f48c2c26d641d23d7e2e93a1ec56258df7674c4',
            '6f4fcb9deaeadc8f9746ae76d97ce1239e98b404efe5da3ee0b7149740f89ad6',
          ],
        },
        action_source: 'website',
      },
    ]),
  )
  formData.append('access_token', accessToken)

  await fetch(`https://graph.facebook.com/v15.0/${datasetId}/events`, {
    method: 'POST',
    body: formData,
    // Note: node-fetch does not automatically set Content-Type header for multipart/form-data,
    // so we don't set it here as form-data will set it for us, including the boundary parameter.
  })
}
