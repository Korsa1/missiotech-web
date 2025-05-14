<form 
  action="https://formspree.io/f/meogvobo" 
  method="POST"
  className="card p-8"
>
  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
  
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
      placeholder="John Doe"
      required
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
      placeholder="john@example.com"
      required
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
    <input 
      type="text" 
      id="subject" 
      name="subject"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
      placeholder="How can we help you?"
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
    <textarea 
      id="message" 
      name="message" 
      rows={5}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
      placeholder="Tell us about your project or inquiry..."
      required
    ></textarea>
  </div>
  
  <button type="submit" className="btn-primary w-full">Send Message</button>
</form>
