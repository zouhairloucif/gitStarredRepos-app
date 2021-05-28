class Api {
  constructor(axios) {
    this.axios = axios;
  }

  buildRequestParams(url, params, operator) {
    console.log(params);
    let endPoint = url + '?q=';
    let index = 0;
    Object.keys(params).map((key) => {
      if(index !== 0) {
        endPoint += "&";
      }
      if(key === 'created') {
        endPoint += `${key}:${params[key].operator}${params[key].value}`;
      } else {
        endPoint += `${key}=${params[key]}`;
      }
      index++;
    })
    return endPoint;
  }

  get(endPoint, params) {
    return this.axios.$get(this.buildRequestParams(endPoint, params));
  }
}


export default function ({$axios}, inject) {

  const api = new Api($axios);
  inject('api', api);
}