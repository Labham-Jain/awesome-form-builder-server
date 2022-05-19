import { Router } from "express";
import getForms from "./get";
import saveForm from "./post";
import updateForm from "./put";
import deleteSingleForm from "./[form].delete";
import getSingleForm from "./[form].get";

const FormRouter = Router();

FormRouter.get('/', getForms);
FormRouter.get('/:formId', getSingleForm);
FormRouter.delete('/:formId', deleteSingleForm);
FormRouter.post('/', saveForm);
FormRouter.patch('/', updateForm);

export default FormRouter