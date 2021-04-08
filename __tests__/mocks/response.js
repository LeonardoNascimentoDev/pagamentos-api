exports.response = {
  code: undefined,
  json_obj: undefined,
  status: code => {
    this.response.code = code;
    return this.response;
  },
  json: json => {
    this.response.json_obj = json;
    return this.response;
  },
};
