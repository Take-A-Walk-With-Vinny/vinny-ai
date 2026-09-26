import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: messages } = await supabase.from('messages').select()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Vinny AI Chat Companion</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="h-96 overflow-y-auto mb-4 bg-gray-50 rounded p-4">
            {messages && messages.length > 0 ? (
              <ul className="space-y-4">
                {messages.map((msg: any) => (
                  <li key={msg.id} className="p-3 bg-white border border-gray-200 rounded">
                    <p className="text-sm text-gray-600">{msg.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-center mt-20">Start chatting with Vinny...</p>
            )}
          </div>
          
          <input 
            type="text" 
            placeholder="Type your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}
