export default function Resume({ setPage }) {
  return (
    <section className="popup-container">
      Resume 
      <button onClick={() => setPage("home")}>Leave Page</button>
    </section>
  )
}
