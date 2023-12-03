import { apiRest, apiRestInterface } from "../api/xpandApi";
class connectDB {

  get(url: string) {
    const dataApi: apiRestInterface = {
      url,
      method: 'GET',
    };
    return apiRest(dataApi);
  }

  post(url: string, body: {}) {
    const dataApi: apiRestInterface = {
      url,
      method: 'POST',
      body,
    }
    return apiRest(dataApi);
  }
  delete(url: string) {
    const dataApi: apiRestInterface = {
      url,
      method: 'DELETE',
      body: {}
    }
    return apiRest(dataApi);
  }

  update(url: string, body: {}) {
    const dataApi: apiRestInterface = {
      url,
      method: 'PATCH',
      body
    }
    return apiRest(dataApi);
  }
}

export default connectDB;
