import * as yup from 'yup';

export const dishCreationSchema = yup
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
