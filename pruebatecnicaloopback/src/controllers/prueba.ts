const json = require('../../data/db.json');
export const validator = (value: any) => {
  let obj = [];

  for (let i = 1; i < json.ids.AppUser; i++) {
    obj.push(JSON.parse(json.models.AppUser[i]));
  }
  console.log(obj);
  let obje = obj.find(e => e.email === value) ? true : false;
  return obje;
};
