export default function About({ setPage }) {
  return (
    <div>
      About 
      <button onClick={() => setPage("home")}>Leave Page</button>
    </div>
  )
}