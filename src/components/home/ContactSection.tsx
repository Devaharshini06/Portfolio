import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Terminal } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { profile, addToast } = usePortfolio();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    addToast(`Copied ${label} to clipboard!`, 'success');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      addToast('Please complete all required fields.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('Thank you! Your dispatch has been routed to Devaharshini.', 'success');
      setForm({ name: '', email: '', organization: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>COMMUNICATION TELEMETRY &amp; DISPATCH</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Initiate Signal
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            SECURE DIRECT INBOX
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-serif-title text-2xl font-normal text-[#F4F4F0] leading-snug">
              Let's engineer resilient intelligent architectures together.
            </h3>

            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              Open to technical AI engineering dialogues, ML &amp; Full-Stack engineering internship opportunities, research initiatives, and collaborative system builds.
            </p>

            {/* Direct Copyable Contact Cards */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3.5 bg-[#0e0e0e] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#141414] border border-white/10 text-[#C5A059]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="mono text-[9px] text-white/40 uppercase">PRIMARY INBOX</div>
                    <div className="text-xs font-mono text-white/90">{profile.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.email, 'Email')}
                  className="p-1.5 bg-[#141414] border border-white/10 text-white/60 hover:text-[#C5A059] cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-3.5 bg-[#0e0e0e] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#141414] border border-white/10 text-[#C5A059]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="mono text-[9px] text-white/40 uppercase">PHONE TELEMETRY</div>
                    <div className="text-xs font-mono text-white/90">{profile.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.phone, 'Phone')}
                  className="p-1.5 bg-[#141414] border border-white/10 text-white/60 hover:text-[#C5A059] cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 bg-[#0e0e0e] border border-white/10 text-white/80 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 text-xs font-mono"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 bg-[#0e0e0e] border border-white/10 text-white/80 hover:text-white hover:border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 text-xs font-mono"
              >
                <Github className="w-3.5 h-3.5 text-white/70" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="system-panel p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-4 relative"
            >
              <h3 className="font-serif-title text-xl font-normal text-[#F4F4F0]">Transmit Direct Inquiry</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="mono text-[9px] text-white/50 uppercase">IDENTIFIER / NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter / Collaborator"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#141414] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="mono text-[9px] text-white/50 uppercase">RETURN EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#141414] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="mono text-[9px] text-white/50 uppercase">ORGANIZATION / TEAM</label>
                <input
                  type="text"
                  placeholder="Enterprise, Lab, or Startup..."
                  value={form.organization}
                  onChange={e => setForm({ ...form, organization: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#141414] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="mono text-[9px] text-white/50 uppercase">DISPATCH CONTENT *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Message regarding AI engineering roles, systems architecture, or technical projects..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#141414] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-crimson w-full py-2.5 flex items-center justify-center gap-2 cursor-pointer font-mono text-xs"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING DISPATCH...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
