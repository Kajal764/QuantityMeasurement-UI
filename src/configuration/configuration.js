import Axios from "axios";

function configuration(obj1, obj2, obj3) {
  let unit = { value: obj1, unit1: obj2, unit2: obj3 };
  return Axios({
    method: "POST",
    url: "http://localhost:8080//convert",
    data:unit
  });
}

export default configuration;
