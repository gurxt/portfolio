import { PhoneIcon, EnvelopeIcon, CodeBracketIcon } from "@heroicons/react/24/solid"

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-item">
        <PhoneIcon className="w-16 h-16 pr-4" />
        <span>(416)-995-5011</span>
      </div>
      <div className="contact-item">
        <EnvelopeIcon className="w-16 h-16 pr-4" />
        <span>pisa0014@algonquincollege.com</span>
      </div>
      <div className="contact-item">
        <CodeBracketIcon className="w-16 h-16 pr-4" />
        <a rel="noreferrer" href="http://github.com/gurxt" target="_blank">github profile</a>
      </div>
    </section>
  )
}