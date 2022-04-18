import axios from 'axios'

const baseURL = ''

export const createInputs = async (inputs) => {
  try {
    const response = await axios
      .post(baseURL, {
        inputs: inputs
      })
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
