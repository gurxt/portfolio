export default function Courses({ setPage }) {
  return (
    <section className="popup-container">
      Courses 
      <button onClick={() => setPage("home")}>Leave Page</button>
    </section>
  )
}
