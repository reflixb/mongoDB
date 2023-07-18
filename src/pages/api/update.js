import { Mongodb } from "@/utils/mongodb";

export default async function hand(req, res) {
  if (req.method !== "PUT") {
    res.status(405).end();
    return;
  }

  const id = req.query.id;
  const text = req.body.text;
  const result = await Mongodb("updateOne", {
    filter: { _id: { $oid: id } },
    update: {
      $set: {
        text: text,
      },
    },
  });

  res.status(200).json(result);
}
