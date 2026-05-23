
export default async function Page() {
  const res = await fetch(
    "https://league-backend-w6hn.onrender.com/health",
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div>
      <h1>LIVE Frontend ↔ LIVE Backend ✅</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
