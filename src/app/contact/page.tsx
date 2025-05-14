<form 
  action="https://formspree.io/f/meogvobo"
  method="POST"
  className="card p-8"
>
  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

  <div className="mb-4">
    <label htmlFor="name">Your Name</label>
    <input id="name" name="name" type="text" required />
  </div>

  <div className="mb-4">
    <label htmlFor="email">Your Email</label>
    <input id="email" name="email" type="email" required />
  </div>

  <div className="mb-4">
    <label htmlFor="subject">Subject</label>
    <input id="subject" name="subject" type="text" />
  </div>

  <div className="mb-6">
    <label htmlFor="message">Your Message</label>
    <textarea id="message" name="message" rows={4} required></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>
