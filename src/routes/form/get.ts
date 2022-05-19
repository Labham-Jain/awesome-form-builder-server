import { RequestHandler } from "express";
import FormTemplateModel from "../../model/FormTemplateMarket";

const getForms: RequestHandler = (req, res) => {
  FormTemplateModel.find({}).then(result => {
    res.deliver(result)
  })
}

export default getForms