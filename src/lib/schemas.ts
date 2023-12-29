import * as yup from 'yup';

export const menuFormSchema = yup
  .object()
  .shape({
    title: yup.string().required(`The menu's title is required.`),
    index: yup
      .number()
      .min(0, `The minimum index for a menu is 0.`)
      .required(`The menu's index is required.`),
  })
  .noUnknown(`The object should not have any unknown keys`);

export const dishFormSchema = yup
  .object()
  .shape({
    media: yup.mixed().required(`The product's media is required.`),
    title: yup.string().required(`The product's price is required.`),
    price: yup
      .string()
      .min(2, `The minimum price for a dish is $2.`)
      .required(`The product's price is required.`),
  })
  .noUnknown(`The object should not have any unknown keys`);
