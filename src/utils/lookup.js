import { OUTLETS } from "../data/outlets";
import { DONORS } from "../data/donors";

const outletById = (id) => OUTLETS.find((o) => o.id === id);
const donorById = (id) => DONORS.find((d) => d.id === id);

export { outletById, donorById };
