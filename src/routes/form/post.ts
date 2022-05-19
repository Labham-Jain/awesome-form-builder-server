import { RequestHandler } from "express";
import FormTemplateModel from '../../model/FormTemplateMarket';

interface BodyPayload {
  title: string;
  fields: {
    name: string;
    label: string;
    required: boolean;
    type: string;
    config?: {
      value: string;
      label: string;
    }[]
  }[]
}

const saveForm: RequestHandler = (req, res) => {
  const {title, fields}: BodyPayload = req.body;

  if(!fields || !Array.isArray(fields)){
    return res.deliver('payload.insufficient-payload')
  }

  FormTemplateModel.create({
    title,
    fields,
  }).then((result) => {
    if(!result) {
      return res.deliver('error.internal-error');
    }
    return res.deliver(result)
  }).catch((error) => {
    console.log(error.message)
    return res.deliver("error.internal-error");
  })
}

export default saveForm;