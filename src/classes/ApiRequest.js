import Axios from "axios";

class ApiRequest {
  constructor() {
    this.Axios = Axios;
    this.url = "http://localhost:1337/api/";
  }

  get(url) {
    return this.submit("get", url);
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      this.Axios({
        method: requestType,
        url: this.url + url,
      })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }
}

export default ApiRequest;
