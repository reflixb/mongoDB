import { Mongodb } from "@/utils/mongodb";

export default async function hand(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { text } = req.body;
  console.log(text);

  const result = await Mongodb("insertOne", {
    document: {
      text: text,
    },
  });

  res.status(200).json(result);
}
