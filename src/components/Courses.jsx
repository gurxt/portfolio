import Header from "./Header";

export default function Courses({ setPage, setFadeOut }) {
  return (
    <section className="popup-container">
      <Header title="College Course Information" setPage={setPage} setFadeOut={setFadeOut} />
    </section>
  )
}
