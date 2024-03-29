export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  const body = await request.formData();

  console.log(body);

  return Response.json("test");
};
