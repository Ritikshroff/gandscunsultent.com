// app/api/contact/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  // You can handle the data here: save to DB, send email, etc
  console.log("Form submission:", body);

  return new Response(JSON.stringify({ message: "Message received!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
