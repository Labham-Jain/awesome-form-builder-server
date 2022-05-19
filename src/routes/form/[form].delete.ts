import { RequestHandler } from "express";
import FormTemplateModel from "../../model/FormTemplateMarket";

const deleteSingleForm: RequestHandler = (req, res) => {
  const formId = req.params.formId;
  FormTemplateModel.findByIdAndDelete(formId).then((result) => {
    if(!result){
      return res.deliver('error.internal-error');
    }
    res.deliver("ok.success")
  }).catch((error) => {
    console.log(error.message);
    res.deliver('error.internal-error')
  })
}
export default deleteSingleForm