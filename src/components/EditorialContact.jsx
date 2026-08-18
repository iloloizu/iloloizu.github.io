import React, { useState, useEffect } from 'react'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function EditorialContact({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // { ok: boolean, text: string }
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'd2244be5-c3cf-4024-b947-124ab8db998b',
          ...formData,
        }),
      }).then((r) => r.json())

      if (res.success) {
        setStatus({ ok: true, text: 'Message sent — thank you!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ ok: false, text: res.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ ok: false, text: 'Submission error. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="ed-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Contact">
      <div className="ed-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ed-icon-button ed-modal-close" onClick={onClose} aria-label="Close contact form">
          <CloseIcon />
        </button>
        <h2 className="ed-modal-title">Let&rsquo;s connect</h2>
        <p className="ed-modal-blurb">
          Always open to hearing about opportunities, mentorship, or a good conversation.
          Reach out below or email{' '}
          <a href="mailto:iloloizu97@gmail.com">iloloizu97@gmail.com</a>.
        </p>
        <form className="ed-form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="ed-name">Name</label>
            <input id="ed-name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="ed-email">Email</label>
            <input id="ed-email" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="ed-message">Message</label>
            <textarea id="ed-message" name="message" rows="5" placeholder="What's on your mind?" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="ed-submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>
          {status && <p className={`ed-form-status ${status.ok ? 'ok' : 'err'}`}>{status.text}</p>}
        </form>
      </div>
    </div>
  )
}
