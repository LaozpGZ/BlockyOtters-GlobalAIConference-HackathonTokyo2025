import React from 'react'

function page() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe 
        width="100%" 
        height="100%" 
        allow="microphone *" 
        src="https://www.gptbots.ai/widget/ee7hnuzllaqyyfxjma6kb0s/chat.html"
        style={{ border: 'none' }}
      />
    </div>
  )
}

export default page