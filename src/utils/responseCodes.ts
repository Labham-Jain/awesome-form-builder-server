interface ResponseCodesType {
  [x: string]: {
    status: number,
    message: string,
  } | ResponseCodesType
}

const ResponseCodes: ResponseCodesType = {
  payload: {
    'insufficient-payload': {
      status: 422,
      message: `Insufficient payload was provided!`
    },
    'invalid-payload': {
      status: 400,
      message: `Invalid payload data was provided!`
    }
  },
  ok: {
    'success': {
      status: 200,
      message: `Success!`
    }
  },
  error: {
    'internal-error': {
      status: 500,
      message: `Internal server error occurred!`
    },
    'not-found': {
      status: 404,
      message: ``
    }
  }
}
export default ResponseCodes