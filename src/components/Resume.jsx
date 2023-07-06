import Header from './Header'

export default function Resume({ setPage, setFadeOut }) {
  return (
    <section className="popup-container">
      <Header title="Resume" setPage={setPage} setFadeOut={setFadeOut} />
    </section>
  )
}
