import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatRole, ChatMessage } from '../types';
import { Chat } from "@google/genai";

interface EligibilityAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const EligibilityAssistant: React.FC<EligibilityAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        const session = createChatSession();
        if (session) {
          chatSessionRef.current = session;
          // Initial greeting
          const initialGreeting = "Hello! I'm your Promarch Advisor. Are you looking for Undergraduate or Postgraduate studies in the UK?";
          setMessages([{ role: ChatRole.MODEL, text: initialGreeting }]);
        } else {
           setMessages([{ role: ChatRole.MODEL, text: "System Update: The AI advisor is currently offline. Please use the WhatsApp button to chat with a human counselor." }]);
        }
      } catch (e) {
        console.error("Failed to init chat", e);
        setMessages([{ role: ChatRole.MODEL, text: "Unable to connect to the advisor. Please try again later." }]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMsg });
      const responseText = result.text || "I didn't catch that. Could you rephrase?";
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "I'm having a little trouble connecting to the server. Please try again or contact us on WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px] animate-fade-in-up">
        {/* Header */}
        <div className="bg-promarch-green p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <div>
              <h3 className="font-bold">Eligibility Check</h3>
              <p className="text-xs text-emerald-100">AI-Powered Advisor</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-emerald-600 p-1 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === ChatRole.USER 
                  ? 'bg-promarch-blue text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your qualification/questions..."
              className="flex-1 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-promarch-green/50 text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-promarch-green text-white rounded-lg hover:bg-emerald-800 disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityAssistant;