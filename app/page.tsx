
export default async function Page() {
  const res = await fetch(
    "https://league-backend-w6hn.onrender.com/api/fpl/league/605818/standings",
    { cache: "no-store" }
  );

  const data = await res.json();
  const teams = data?.standings?.results || [];

  return (
    <div style={{ padding: 20 }}>
      <h1>FPL League Standings</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Manager</th>
            <th>Team Name</th>
            <th>GW Points</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team: any) => (
            <tr key={team.entry}>
              <td>{team.rank}</td>
              <td>{team.player_name}</td>
              <td>{team.entry_name}</td>
              <td>{team.event_total}</td>
              <td>{team.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
