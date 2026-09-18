import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { certifications } = usePortfolio();

  return (
    <section className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>CERTIFICATIONS &amp; ACCREDITED TRAINING</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Verified Credentials
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            IIT MADRAS &bull; INDUSTRY STANDARDS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="system-panel p-5 bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/50 transition-all space-y-3 flex flex-col justify-between relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-[#141414] border border-white/10 text-[#C5A059]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono text-white/60 bg-[#141414] px-2 py-0.5 border border-white/5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A059]" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-serif-title text-xl font-normal text-[#F4F4F0] leading-snug">
                  {cert.name}
                </h3>

                <div className="text-xs font-mono text-[#C5A059]">
                  {cert.issuer}
                </div>

                {cert.description && (
                  <p className="text-xs text-white/70 leading-relaxed pt-2 border-t border-white/10 font-sans font-light">
                    {cert.description}
                  </p>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-2 border-t border-white/10">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-[#C5A059] transition-colors"
                  >
                    <span>INSPECT CERTIFICATE</span>
                    <ExternalLink className="w-3 h-3 text-[#C5A059]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
