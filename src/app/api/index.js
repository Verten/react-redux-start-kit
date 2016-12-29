/**
 * Created by ebinhon on 12/29/2016.
 */

const host = 'https://api.github.com'

const userEndpoint = 'users'

const API = {
  FETCH_USER() {
    return `${host}/${userEndpoint}`
  }
}

export default API
