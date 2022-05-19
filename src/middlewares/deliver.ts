import { RequestHandler } from "express";
import parseResponseCode from "../utils/parseResponseCode";

type ResponseType = {
  message?: string;
  data?: any;
  status: number;
}

const deliverMiddleware: RequestHandler = (req, res, next) => {
  res.deliver = (data) => {
    const status = res.statusCode;

    const response: ResponseType = { status };
    // checking if data contains a . and does not contains a <space>
    if(typeof data === "string" && data.includes('.') && !data.includes(' ')){ 
      const msg = parseResponseCode(data)
      if(msg) {
        if(status === 200) {
          return res.status(msg.status).json(msg)
        } else {
          return res.status(status).json(msg)
        }
      } else {
        throw Error("Invalid response code was provided")
      }
    } else {
      if(typeof data === "string"){
        response.message = data;
      } else {
        response.data = data
      }
    }

    return res.json(response);
  };

  return next();
}

export default deliverMiddleware