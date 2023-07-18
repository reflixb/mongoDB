import { Mongodb } from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
  }

  const id = req.query.id;

  console.log(id);
  const result = await Mongodb("deleteOne", {
    filter: { _id: { $oid: id } },
  });

  res.status(200).json(result);
}
