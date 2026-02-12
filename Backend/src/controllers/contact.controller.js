import Contact from "../models/contact.model.js";

export const submitContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.json({ msg: "Contact submitted", data });
};
