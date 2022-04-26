import axios from 'axios'

const baseURL = 'http://localhost:8080/euclidean-distance-api/learning-style/1/calculation'

export const createInputs = async (inputs) => {
  try {
    const response = await axios.post(baseURL, {
      inputs: inputs
    })
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
