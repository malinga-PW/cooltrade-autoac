import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Gauge, 
  AlertTriangle, 
  Wind, 
  Zap, 
  Phone, 
  Car,
  RotateCcw
} from 'lucide-react';

export default function AiAssistantDrawer({ isOpen, onClose, onBookWithDetails }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "ආයුබෝවන්! මම **Cool Trade AI Auto Cooling Advisor**. ඔබගේ වාහනයේ AC එකේ තියෙන ඕනෑම ප්‍රශ්නයක් (Idle වෙද්දි cool නැති එක, Dashboard coil leak, Compressor rattle, Gas refill) මට කියන්න. Bandaragama workshop bay එකෙන් හරියටම විසඳුම සහ Spare parts විස්තර මම දෙන්නම්! How can I assist your vehicle today? 🚗❄️",
      time: 'Just now',
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: "🛑 Traffic එකේදි Cool වෙන්නේ නෑ", text: "වාහනේ දුවද්දි හොඳට cool වෙනවා, හැබැයි traffic එකේදි හරි idle වෙද්දි හරි cool එක නැතිවෙනවා. හේතුව මොකක්ද?" },
    { label: "⚡ Hybrid (Prius/Aqua) Compressor Oil", text: "Hybrid කාර් වල AC එකට සාමාන්‍ය compressor oil දාන්න පුළුවන්ද? වෙනස මොකක්ද?" },
    { label: "💨 Car AC එකෙන් නරක ගඳක් එනවා", text: "AC එක on කරපු ගමන් අමුතු නරක ගඳක් එනවා. මේකට විසඳුම මොකක්ද?" },
    { label: "🔧 Dashboard එක ගලවලා Coil එක මාරු කිරීම", text: "Dashboard එක සම්පූර්ණයෙන්ම ගලවලා Evaporator cooling coil එක මාරු කරද්දි සද්ද එයිද? කොච්චර වෙලාවක් යනවද?" },
    { label: "🏷️ R134a Gas Refill එකක ගාන කීයද?", text: "Bandaragama Cool Trade එකෙන් R134a Vacuum & Gas Refill එකක් කරගන්න කීයක් යනවද?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      const lower = query.toLowerCase();

      if (lower.includes('traffic') || lower.includes('idle') || lower.includes('නැවතුනාම') || lower.includes('slow')) {
        botResponse = `🛑 **Traffic / Idle Cooling Drop Analysis:**\n\nවාහනය ධාවනය වෙද්දි cool වෙලා Traffic එකේදි cool අඩුවීමට ප්‍රධාන හේතු 3ක් ඇත:\n1. **Condenser Cooling Fan Failure:** රේඩියේටර් / Condenser fan එකේ speed එක අඩුවීම නිසා වාහනය නවතා ඇති විට condenser එක රත්වීම.\n2. **Condenser Fin Clogging:** Condenser fin වල මඩ සහ දූවිලි තැන්පත්වී වාතාශ්‍රය අවහිර වීම.\n3. **Low Refrigerant (Gas) Level:** Gas ප්‍රමාණය අඩුවූ විට Compressor low-rpm (idle) වලදී ප්‍රමාණවත් පීඩනයක් නිපදවීමට නොහැකි වීම.\n\n💡 **විසඳුම:** අපගේ Bandaragama workshop එකෙන් **High-Pressure Condenser Wash + Robinair Automated Vacuum Refill (Rs. 4,500 සිට)** මගින් මෙය තත්පර 45කින් සාර්ථකව විසඳාගත හැක.`;
      } 
      else if (lower.includes('hybrid') || lower.includes('prius') || lower.includes('aqua') || lower.includes('oil') || lower.includes('electric') || lower.includes('vezel')) {
        botResponse = `⚡ **Hybrid High-Voltage AC Compressor Warning:**\n\n🚫 **නැත! Hybrid/EV වාහන වලට සාමාන්‍ය PAG Oil භාවිත නොකළ යුතුය!**\n\n• Toyota Prius, Aqua, Vezel, Grace ආදී hybrid වාහන වල AC compressor එක ක්‍රියාකරන්නේ **201V - 650V High-Voltage Battery** එකෙනි.\n• මෙහිදී Compressor motor winding එක refrigerant එක සමඟ සම්බන්ධ වන බැවින්, විදුලිය සන්නයනය නොවන **Dielectric POE Oil (උදා: Denso ND-Oil 11)** පමණක් භාවිත කළ යුතුය.\n• සාමාන්‍ය තෙල් දැමුවහොත් Hybrid Inverter එක short circuit වී ලක්ෂ ගණනක අලාභයක් සිදුවිය හැක!\n\nCool Trade Services අප සතුව 100% Genuine Imported Denso ND-11 Oil සහ Hybrid Diagnostic Tools ඇත.`;
      }
      else if (lower.includes('ගඳ') || lower.includes('odor') || lower.includes('smell') || lower.includes('filter')) {
        botResponse = `👃 **Car AC Bad Odor & Bacteria Solution:**\n\nAC එක දැම්මම නරක ගඳක් එන්නේ Evaporator cooling coil එකේ තෙතමනය නිසා දිලීර (Fungus/Mold) සහ කුණු බැඳීම නිසයි.\n\n✅ **විසඳුම:**\n1. **Activated Charcoal Cabin Filter (Rs. 2,900):** PM2.5 දූවිලි සහ බැක්ටීරියා 99% ක් පෙරා දමයි.\n2. **Anti-Bacterial Foam Misting (Rs. 2,800):** Air ducts සහ cooling coil එක විෂබීජහරණය කර අලුත් සුවඳක් ගෙනදෙයි.\n\nවිනාඩි 30කින් අපගේ Express Bay එකෙන් මෙය සිදු කරගත හැක!`;
      }
      else if (lower.includes('dashboard') || lower.includes('coil') || lower.includes('evaporator') || lower.includes('ගලවලා') || lower.includes('leak')) {
        botResponse = `🔧 **Dashboard Dismantling & Evaporator Replacement:**\n\nවාහනයේ dashboard එක ගැලවීමේදී rattle sounds (කට කට සද්ද) එන්නේ පළපුරුදු නොවන අය clips කඩා දැමීමෙනි.\n\n🛡️ **Cool Trade Services පොරොන්දුව:**\n• අපි විශේෂිත plastic pry tools භාවිතයෙන් clips හා wire harnesses වලට 100% හානි නොවී dashboard එක disassemble කරමු.\n• Brand new Direct Import OEM Evaporator Coils සවිකර **වසර 1ක Leak Warranty** ලබාදේ.\n• කාලය: සාමාන්‍යයෙන් පැය 3 - 4ක් ඇතුළත නිමකෙරේ.`;
      }
      else if (lower.includes('මිල') || lower.includes('price') || lower.includes('cost') || lower.includes('ගාන') || lower.includes('rate')) {
        botResponse = `🏷️ **Cool Trade Services - Bandaragama Pricing Guide:**\n\n1. **Automated Vacuum & Pure R134a Refill:** Rs. 4,500 – 6,500 (වාහනයේ gas ධාරිතාව අනුව)\n2. **250 PSI Nitrogen & UV Dye Leak Test:** Rs. 3,500\n3. **Dashboard Cooling Coil Replacement:** Rs. 18,500 – 24,500 (Coil එක + Workmanship සහිතව)\n4. **WagonR Denso SV07E Direct Import Compressor:** Rs. 42,500 (6-Month Warranty)\n5. **PM2.5 Cabin Filter Replacement:** Rs. 2,900\n\nඔබගේ වාහනයේ මාදිලිය සඳහන් කළහොත් exact estimate එකක් ලබාදිය හැක!`;
      }
      else {
        botResponse = `ස්තූතියි ඔබේ විමසීමට! ඔබගේ වාහනයේ AC ගැටලුව හෝ අවශ්‍ය Spare part එක පිළිබඳව අපගේ Bandaragama workshop එකේ ප්‍රවීණ කාර්මික ශිල්පියෙකු සමඟ සෘජුව කතා කිරීමට පහතින් WhatsApp message එකක් එවන්න, නැතහොත් **077 773 9449** අමතන්න. 🚗❄️`;
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-[#0B101D] text-white shadow-2xl border-l border-slate-800 flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-extrabold text-sm font-heading">Cool Trade AI Advisor</h3>
              <span className="text-[9px] uppercase font-black bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">
                AUTO AC EXPERT
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Bandaragama Workshop • Sinhala & English</p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/70">
        {messages.map((msg, idx) => (
          <div 
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[88%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md rounded-tr-xs'
                : 'bg-[#0E1527] text-slate-200 border border-slate-800 shadow-xs rounded-tl-xs'
            }`}>
              <div className="whitespace-pre-line">{msg.text}</div>
              <span className={`text-[10px] block mt-1.5 text-right ${msg.sender === 'user' ? 'text-slate-900' : 'text-slate-500'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#0E1527] rounded-2xl p-3 border border-slate-800 shadow-xs flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Inquiry Chips */}
      <div className="p-3 border-t border-slate-800 bg-[#0B101D] overflow-x-auto whitespace-nowrap space-x-2 shrink-0">
        {quickPrompts.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q.text)}
            className="inline-block px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-950 hover:text-cyan-300 text-slate-300 text-[11px] font-bold border border-slate-800 transition-colors"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-800 bg-[#0B101D] shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Type vehicle problem in Sinhala or English..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm font-medium text-white placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
          <a href="tel:+94777739449" className="hover:text-cyan-400 flex items-center gap-1 font-bold">
            <Phone className="w-3 h-3 text-emerald-400" /> 077 773 9449
          </a>
          <span>Bandaragama Auto AC Clinic</span>
        </div>
      </div>

    </div>
  );
}
