import CrudGenericWForm from "./w-form .js";
export const CrudGeneric = (ListGeneric, DetailGeneric, FormWDef) => (def, defDetail, viewFields, urlPrefix, crud, extras, options) => {
  const Form = FormWDef(defDetail);
  return CrudGenericWForm(ListGeneric, DetailGeneric, Form)(def, viewFields, urlPrefix, crud, extras, options);
};
export default CrudGeneric;
