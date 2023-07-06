export default function About({ setPage }) {
  return (
    <section className="popup-container">
      About 
      <button onClick={() => setPage("home")}>Leave Page</button>
    </section>
  )
}