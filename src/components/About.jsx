import Header from "./Header"

export default function About({ setPage, setFadeOut }) {
  return (
    <section className="popup-container">
      <Header title="About" setPage={setPage} setFadeOut={setFadeOut} />
    </section>
  )
}