export async function Mongodb(action, params) {
  const result = await fetch(
    `https://ap-south-1.aws.data.mongodb-api.com/app/data-laghj/endpoint/data/v1/action/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "kPYsTQSzWrahtW0gtdTKNZXYqO2XLj503JdIw6GfCoha7knP0q3LLyv8fjj1AeTW",
      },
      body: JSON.stringify({
        dataSource: "Cluster0",
        database: "Proj",
        collection: "Collection",
        ...params,
      }),
    }
  ).then((res) => res.json());

  return result;
}
