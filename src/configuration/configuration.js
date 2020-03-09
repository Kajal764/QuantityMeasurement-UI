import Axios from "axios";

export function configuration(obj1, obj2, obj3) {
  let unit = { value: obj1, unit1: obj2, unit2: obj3 };
  return Axios({
    method: "POST",
    url: "http://localhost:8080//convert",
    data:unit
  });
}


export function getFilterList(unitType)
{
  console.log("inside configuration    ",unitType);
 

  var unit=unitType;
  var url="http://localhost:8080/";
  var url1=(url.concat(unit));
  return Axios.get(url1);
}

//export default configuration;
