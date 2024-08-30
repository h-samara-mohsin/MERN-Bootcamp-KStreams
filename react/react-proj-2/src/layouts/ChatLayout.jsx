import React from 'react'

const ChatLayout = () => {
  return (
    <div className='h-screen w-screen flex-col'>
        <Navbar />
        <div className='flex w-full'>
            <div className='w-1/2'><h1>List of Chats</h1></div>
            <div className='w-1/2'><h1>My entire conversation/messages for the chat</h1></div>
        </div>
        <Footer />
    </div>
  )
}

export default ChatLayout
