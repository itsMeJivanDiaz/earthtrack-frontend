import axios from 'axios';
import {getEnvVars} from './Environment';
import Endpoints from './Endpoints';
import type {ApiCallModel as _ApiCallModel} from '../interfaces';

const {apiUrl} = getEnvVars();

const axiosInstance = axios.create({
  baseURL: apiUrl.earthtrack,
});

const apiPoint = {
  earthtrack: 'earthtrack',
};

const newApi = (apiPointTo: string, apiToken: string) => {
  var bearer = `Bearer ${apiToken}`;
  if (!apiToken) {
    bearer = '';
  }
  if (apiPointTo === apiPoint.earthtrack) {
    return {
      url: apiUrl.earthtrack,
      bearer: bearer,
    };
  }
};

export const ApiMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

export const ApiCall = ({
  apiEndpoint,
  apiData,
  apiToken = '',
  method,
  apiPointTo = apiPoint.earthtrack,
  timeout = 20000,
}: _ApiCallModel) => {
  const api = newApi(apiPointTo, apiToken);

  apiEndpoint = api?.url + apiEndpoint;

  let params = {
    method: method,
    url: apiEndpoint,
    baseUrl: apiUrl.earthtrack,
    timeout: timeout,
    headers: {
      'Content-Type': 'application/json',
      Authorization: api?.bearer,
    },
    data: {},
  };

  if (method === ApiMethod.POST || method === ApiMethod.PATCH) {
    params.data = apiData;
  }

  return axiosInstance(params);
};

export const ApiEndpoints = () => {
  return Endpoints;
};
