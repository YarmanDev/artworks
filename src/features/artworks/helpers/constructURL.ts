export const constructURL = (id?: string) =>
  `${id ?? ""}?apikey=${process.env["REACT_APP_API_KEY"]}`;
