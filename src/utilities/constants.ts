const graphCmsEndpointUrl = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT_URL;
const rentalFormUrl = process.env.NEXT_PUBLIC_RENTAL_FORM_URL;
const editUrl = process.env.NEXT_PUBLIC_EDIT_URL;

if (!graphCmsEndpointUrl || !rentalFormUrl || !editUrl) {
  throw new Error("Required environment variables not supplied.");
}

export const constants = {
  graphCmsEndpointUrl,
  rentalFormUrl,
  editUrl,
};
