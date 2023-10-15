import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constants";

export const postService = (data) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.POST,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((res) => {
        console.log(res, "............response post service");
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
