import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  status_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
