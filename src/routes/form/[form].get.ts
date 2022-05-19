import { RequestHandler } from "express";
import FormTemplateModel from "../../model/FormTemplateMarket";

const getSingleForm: RequestHandler = (req, res) => {
  const id = req.params.formId;
  FormTemplateModel.findById(id).then(result => {
    return res.deliver(result)
  }).catch((error) => {
    console.log(error.message);
    return res.deliver('error.internal-error')
  });
}

export default getSingleForm