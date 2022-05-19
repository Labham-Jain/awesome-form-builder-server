import { model, Schema } from "mongoose";

const FieldsSchema = {
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
  },
  elementType: {
    type: String,
    required: true
  },
  config: {
    type: {
      options: [{
        label : {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        }
      }]
    },
    default: undefined
  }
}

const FormTemplateMarketSchema = new Schema({
  title: {
    type: String,
  },
  fields: {
    type: [FieldsSchema],
    required: true,
  }
}, {timestamps: true})


const FormTemplateModel = model('FormTemplateMarket', FormTemplateMarketSchema);

export default FormTemplateModel