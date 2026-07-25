import React from 'react';

interface Props {
  svgType: string;
  side?: 'A' | 'B';
  customImageUrl?: string;
  className?: string;
}

export const CharacterIllustration: React.FC<Props> = ({
  svgType,
  side = 'A',
  customImageUrl,
  className = 'w-full h-full',
}) => {
  if (customImageUrl) {
    return (
      <img
        src={customImageUrl}
        alt="Custom Keychain Character"
        className={`object-contain ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Render SVG illustrations based on svgType and side
  switch (svgType) {
    case 'koichi':
      if (side === 'B') {
        // Crying / Nuv Koichi
        return (
          <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="220" fill="none" />
            {/* Pink messy hair */}
            <path d="M40 90 C30 50, 70 20, 100 20 C130 20, 170 50, 160 90 C175 100, 165 140, 150 145 C130 170, 70 170, 50 145 C35 140, 25 100, 40 90 Z" fill="#FFA3C5" stroke="#333" strokeWidth="4" />
            {/* Hair bangs */}
            <path d="M60 50 Q80 80 100 60 Q120 80 140 50 Q110 90 90 85 Z" fill="#FF80AB" stroke="#333" strokeWidth="3" />
            {/* Face */}
            <ellipse cx="100" cy="105" rx="42" ry="36" fill="#FFF0F5" stroke="#333" strokeWidth="4" />
            {/* Crying eyes */}
            <path d="M75 95 Q85 110 95 95" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M105 95 Q115 110 125 95" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Blue tears */}
            <path d="M78 105 Q75 130 80 135 Q85 130 82 105 Z" fill="#38BDF8" />
            <path d="M118 105 Q115 130 120 135 Q125 130 122 105 Z" fill="#38BDF8" />
            {/* Sad mouth */}
            <path d="M90 125 Q100 115 110 125" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Body - White suit & maroon shirt */}
            <path d="M70 140 L130 140 L145 200 L55 200 Z" fill="#FFFFFF" stroke="#333" strokeWidth="4" />
            <path d="M90 140 L110 140 L105 175 L95 175 Z" fill="#800020" stroke="#333" strokeWidth="3" />
            <text x="100" y="190" textAnchor="middle" fill="#666" fontSize="12" fontWeight="bold">PERDÓN POR EXISTIR</text>
          </svg>
        );
      }
      // Happy Koichi Side A
      return (
        <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pink messy hair */}
          <path d="M35 85 C25 45, 65 15, 100 15 C135 15, 175 45, 165 85 C180 95, 170 135, 155 140 C135 165, 65 165, 45 140 C30 135, 20 95, 35 85 Z" fill="#FFA3C5" stroke="#222" strokeWidth="4" />
          {/* Hair strands */}
          <path d="M55 45 Q75 75 100 55 Q125 75 145 45 Q115 85 90 80 Z" fill="#FF80AB" stroke="#222" strokeWidth="3" />
          {/* Face */}
          <ellipse cx="100" cy="100" rx="42" ry="36" fill="#FFF3F8" stroke="#222" strokeWidth="4" />
          {/* Star eyes */}
          <polygon points="80,85 83,93 91,93 85,98 87,106 80,101 73,106 75,98 69,93 77,93" fill="#FFD700" stroke="#222" strokeWidth="2" />
          <polygon points="120,85 123,93 131,93 125,98 127,106 120,101 113,106 115,98 109,93 117,93" fill="#FFD700" stroke="#222" strokeWidth="2" />
          {/* Blush */}
          <ellipse cx="68" cy="106" rx="8" ry="5" fill="#FFB6C1" opacity="0.8" />
          <ellipse cx="132" cy="106" rx="8" ry="5" fill="#FFB6C1" opacity="0.8" />
          {/* Tongue out mouth */}
          <path d="M90 112 Q100 120 110 112" stroke="#222" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M96 115 Q100 126 104 115" fill="#FF4D6D" stroke="#222" strokeWidth="2" />
          {/* Suit & Thumbs Up */}
          <path d="M68 135 L132 135 L145 195 L55 195 Z" fill="#FFFFFF" stroke="#222" strokeWidth="4" />
          <path d="M92 135 L108 135 L104 170 L96 170 Z" fill="#7209B7" stroke="#222" strokeWidth="2" />
          {/* Thumbs up hands */}
          <circle cx="50" cy="155" r="10" fill="#FFF3F8" stroke="#222" strokeWidth="3" />
          <circle cx="150" cy="155" r="10" fill="#FFF3F8" stroke="#222" strokeWidth="3" />
        </svg>
      );

    case 'robert':
      if (side === 'B') {
        // Robert Harto
        return (
          <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="220" fill="none" />
            <ellipse cx="100" cy="85" rx="38" ry="34" fill="#FCE7F3" stroke="#1E293B" strokeWidth="4" />
            {/* Messy black hair */}
            <path d="M60 70 C50 40, 90 20, 100 20 C110 20, 150 40, 140 70 C150 80, 145 100, 138 105 C110 100, 90 100, 62 105 Z" fill="#1E1E2E" stroke="#1E293B" strokeWidth="3" />
            {/* Annoyed eye and hand on face */}
            <line x1="75" y1="80" x2="90" y2="85" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
            <line x1="75" y1="88" x2="90" y2="83" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
            {/* Hand covering forehead */}
            <ellipse cx="115" cy="75" rx="14" ry="10" fill="#FCE7F3" stroke="#1E293B" strokeWidth="3" />
            {/* Dark circles */}
            <path d="M70 92 Q82 100 94 92" fill="#818CF8" opacity="0.4" />
            <path d="M85 105 Q100 98 115 105" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Slouched Body */}
            <path d="M65 118 L135 118 L142 190 L58 190 Z" fill="#181825" stroke="#1E293B" strokeWidth="4" />
            <polygon points="100,118 95,140 100,165 105,140" fill="#991B1B" />
            <text x="100" y="208" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="bold">MÁTENME POR FAVOR</text>
          </svg>
        );
      }
      // Robert Bolita Side A
      return (
        <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Huddled body ball */}
          <ellipse cx="100" cy="130" rx="55" ry="50" fill="#1E1E2E" stroke="#0F172A" strokeWidth="5" />
          {/* Head tucked in */}
          <circle cx="100" cy="85" r="36" fill="#FDF2F8" stroke="#0F172A" strokeWidth="4" />
          {/* Messy hair */}
          <path d="M64 70 C54 45, 90 25, 100 25 C110 25, 146 45, 136 70 C145 80, 138 95, 132 100 C110 95, 90 95, 68 100 Z" fill="#11111B" stroke="#0F172A" strokeWidth="3" />
          {/* Heavy dark circles */}
          <ellipse cx="82" cy="88" rx="10" ry="6" fill="#A5B4FC" opacity="0.6" />
          <ellipse cx="118" cy="88" rx="10" ry="6" fill="#A5B4FC" opacity="0.6" />
          <circle cx="82" cy="86" r="3" fill="#0F172A" />
          <circle cx="118" cy="86" r="3" fill="#0F172A" />
          {/* Straight sad line mouth */}
          <line x1="90" y1="102" x2="110" y2="102" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          {/* Hugging arms */}
          <path d="M55 130 C70 160, 130 160, 145 130" fill="none" stroke="#0F172A" strokeWidth="5" />
          <circle cx="85" cy="150" r="8" fill="#FDF2F8" stroke="#0F172A" strokeWidth="2" />
          <circle cx="115" cy="150" r="8" fill="#FDF2F8" stroke="#0F172A" strokeWidth="2" />
          {/* Shoes underneath */}
          <ellipse cx="80" cy="178" rx="12" ry="8" fill="#450A0A" stroke="#0F172A" strokeWidth="3" />
          <ellipse cx="120" cy="178" rx="12" ry="8" fill="#450A0A" stroke="#0F172A" strokeWidth="3" />
          {/* Little HELP :( sign */}
          <rect x="70" y="188" width="60" height="22" rx="4" fill="#FEF08A" stroke="#0F172A" strokeWidth="2" />
          <text x="100" y="203" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="bold">HELP : (</text>
        </svg>
      );

    case 'michael':
      return (
        <svg viewBox="0 0 200 230" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tall pale head */}
          <ellipse cx="100" cy="75" rx="34" ry="42" fill="#F8FAFC" stroke="#0F172A" strokeWidth="4" />
          {/* Cat ears / black pointed ears */}
          <path d="M68 55 L55 20 L80 42 Z" fill="#0F172A" stroke="#0F172A" strokeWidth="2" />
          <path d="M132 55 L145 20 L120 42 Z" fill="#0F172A" stroke="#0F172A" strokeWidth="2" />
          {/* Deadpan void eyes */}
          <ellipse cx="85" cy="72" rx="7" ry="9" fill="#0F172A" />
          <ellipse cx="115" cy="72" rx="7" ry="9" fill="#0F172A" />
          <circle cx="87" cy="70" r="2" fill="#FFFFFF" />
          <circle cx="117" cy="70" r="2" fill="#FFFFFF" />
          {/* Minimal creeping smile */}
          <path d="M90 92 Q100 98 110 92" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Whiskers */}
          <line x1="60" y1="80" x2="45" y2="78" stroke="#0F172A" strokeWidth="2" />
          <line x1="60" y1="86" x2="45" y2="88" stroke="#0F172A" strokeWidth="2" />
          <line x1="140" y1="80" x2="155" y2="78" stroke="#0F172A" strokeWidth="2" />
          <line x1="140" y1="86" x2="155" y2="88" stroke="#0F172A" strokeWidth="2" />
          {/* Body */}
          <path d="M72 115 L128 115 L135 200 L65 200 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          {/* Pointing finger arm */}
          <path d="M128 130 L160 110 L165 90" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="165" cy="85" r="5" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <text x="100" y="218" textAnchor="middle" fill="#A855F7" fontSize="11" fontWeight="bold">NO HAY NADIE EN CASA</text>
        </svg>
      );

    case 'ratman':
      return (
        <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Round chaotic rat ears */}
          <circle cx="60" cy="50" r="28" fill="#475569" stroke="#0F172A" strokeWidth="4" />
          <circle cx="60" cy="50" r="16" fill="#F472B6" />
          <circle cx="140" cy="50" r="28" fill="#475569" stroke="#0F172A" strokeWidth="4" />
          <circle cx="140" cy="50" r="16" fill="#F472B6" />
          {/* Head */}
          <ellipse cx="100" cy="90" rx="42" ry="38" fill="#94A3B8" stroke="#0F172A" strokeWidth="4" />
          {/* Void Skull Eye (Left) */}
          <circle cx="80" cy="85" r="12" fill="#0F172A" />
          <path d="M75 80 L85 90 M85 80 L75 90" stroke="#EF4444" strokeWidth="3" />
          {/* Normal/Cursed Eye (Right) */}
          <circle cx="120" cy="85" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <circle cx="120" cy="85" r="4" fill="#0F172A" />
          {/* Anxious mouth */}
          <path d="M85 105 Q100 115 115 105" stroke="#0F172A" strokeWidth="3" fill="none" />
          <line x1="95" y1="108" x2="95" y2="114" stroke="#0F172A" strokeWidth="2" />
          <line x1="105" y1="108" x2="105" y2="114" stroke="#0F172A" strokeWidth="2" />
          {/* Anxious paws body */}
          <ellipse cx="100" cy="150" rx="36" ry="32" fill="#64748B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="82" cy="138" r="8" fill="#F472B6" stroke="#0F172A" strokeWidth="2" />
          <circle cx="118" cy="138" r="8" fill="#F472B6" stroke="#0F172A" strokeWidth="2" />
          <text x="100" y="200" textAnchor="middle" fill="#84CC16" fontSize="11" fontWeight="bold">CURSED BUT CUTE :3</text>
        </svg>
      );

    case 'shin':
      if (side === 'B') {
        // Shin AI Glitch Mode
        return (
          <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="220" fill="none" />
            {/* Beanie */}
            <path d="M60 60 C60 25, 140 25, 140 60 L145 75 L55 75 Z" fill="#0891B2" stroke="#06B6D4" strokeWidth="4" />
            <rect x="50" y="70" width="100" height="12" rx="4" fill="#06B6D4" />
            {/* Face */}
            <ellipse cx="100" cy="100" rx="38" ry="32" fill="#ECFEFF" stroke="#0891B2" strokeWidth="4" />
            {/* Glitch Eyes */}
            <rect x="70" y="92" width="18" height="8" fill="#22D3EE" />
            <rect x="112" y="92" width="18" height="8" fill="#22D3EE" />
            <line x1="65" y1="96" x2="135" y2="96" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" />
            {/* Giant Scarf Checkered */}
            <rect x="50" y="120" width="100" height="40" rx="10" fill="#155E75" stroke="#0891B2" strokeWidth="4" />
            <line x1="50" y1="130" x2="150" y2="130" stroke="#06B6D4" strokeWidth="2" />
            <line x1="50" y1="145" x2="150" y2="145" stroke="#06B6D4" strokeWidth="2" />
            {/* Body */}
            <path d="M65 155 L135 155 L140 200 L60 200 Z" fill="#0F172A" stroke="#0891B2" strokeWidth="4" />
            <text x="100" y="185" textAnchor="middle" fill="#22D3EE" fontSize="12" fontWeight="bold">[SHIN_AI.EXE]</text>
          </svg>
        );
      }
      // Shin Tsukimi Side A
      return (
        <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Beanie */}
          <path d="M60 58 C60 25, 140 25, 140 58 L146 72 L54 72 Z" fill="#1D4ED8" stroke="#0F172A" strokeWidth="4" />
          <rect x="50" y="68" width="100" height="12" rx="4" fill="#3B82F6" stroke="#0F172A" strokeWidth="2" />
          {/* Face */}
          <ellipse cx="100" cy="98" rx="38" ry="32" fill="#FEF2F2" stroke="#0F172A" strokeWidth="4" />
          {/* Dark Circles & Tired Eyes */}
          <ellipse cx="80" cy="96" rx="9" ry="5" fill="#C084FC" opacity="0.5" />
          <ellipse cx="120" cy="96" rx="9" ry="5" fill="#C084FC" opacity="0.5" />
          <circle cx="80" cy="94" r="3" fill="#0F172A" />
          <circle cx="120" cy="94" r="3" fill="#0F172A" />
          {/* Nervous mouth */}
          <path d="M90 110 Q100 106 110 110" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Giant Checkered Scarf */}
          <rect x="45" y="118" width="110" height="42" rx="12" fill="#16A34A" stroke="#0F172A" strokeWidth="4" />
          <line x1="45" y1="130" x2="155" y2="130" stroke="#DC2626" strokeWidth="3" />
          <line x1="45" y1="142" x2="155" y2="142" stroke="#DC2626" strokeWidth="3" />
          <line x1="80" y1="118" x2="80" y2="160" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="120" y1="118" x2="120" y2="160" stroke="#FFFFFF" strokeWidth="2" />
          {/* Body */}
          <path d="M65 158 L135 158 L140 200 L60 200 Z" fill="#334155" stroke="#0F172A" strokeWidth="4" />
          <text x="100" y="188" textAnchor="middle" fill="#22C55E" fontSize="11" fontWeight="bold">0.0% PROBABILIDAD</text>
        </svg>
      );

    case 'danmei':
      return (
        <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Imperial Prince Jing Shao + Mu Zhiyan */}
          {/* Puppy Ears for Jing Shao */}
          <path d="M50 45 Q35 15 65 30 Z" fill="#78350F" stroke="#0F172A" strokeWidth="3" />
          <path d="M150 45 Q165 15 135 30 Z" fill="#78350F" stroke="#0F172A" strokeWidth="3" />
          {/* Long Black Hair */}
          <path d="M40 80 Q20 150 35 190 M160 80 Q180 150 165 190" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="100" cy="85" rx="42" ry="36" fill="#FFFBEB" stroke="#0F172A" strokeWidth="4" />
          {/* Simp Heart Eyes */}
          <path d="M72 82 C72 76, 80 76, 80 82 C80 88, 72 92, 72 95 C72 92, 64 88, 64 82 C64 76, 72 76, 72 82 Z" fill="#EF4444" />
          <path d="M128 82 C128 76, 136 76, 136 82 C136 88, 128 92, 128 95 C128 92, 120 88, 120 82 C120 76, 128 76, 128 82 Z" fill="#EF4444" />
          {/* Blush */}
          <ellipse cx="68" cy="98" rx="8" ry="4" fill="#FCA5A5" />
          <ellipse cx="132" cy="98" rx="8" ry="4" fill="#FCA5A5" />
          {/* Happy smile */}
          <path d="M90 102 Q100 112 110 102" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Imperial Hanfu Robe */}
          <path d="M55 120 L145 120 L155 200 L45 200 Z" fill="#B91C1C" stroke="#0F172A" strokeWidth="4" />
          <path d="M75 120 L100 160 L125 120" fill="none" stroke="#F59E0B" strokeWidth="4" />
          <text x="100" y="185" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold">WIFE IS FIRST :3</text>
        </svg>
      );

    case 'caceres':
      return (
        <svg viewBox="0 0 200 230" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Andrés Avelino Cáceres Quepí Military Hat */}
          <path d="M60 45 L140 45 L150 70 L50 70 Z" fill="#991B1B" stroke="#0F172A" strokeWidth="4" />
          <rect x="50" y="65" width="100" height="12" fill="#0F172A" />
          <ellipse cx="100" cy="45" rx="10" ry="6" fill="#F59E0B" />
          {/* Face & Mustache */}
          <ellipse cx="100" cy="95" rx="36" ry="30" fill="#FEF3C7" stroke="#0F172A" strokeWidth="4" />
          <ellipse cx="82" cy="90" rx="4" ry="5" fill="#0F172A" />
          <ellipse cx="118" cy="90" rx="4" ry="5" fill="#0F172A" />
          {/* Epic Mustache */}
          <path d="M70 105 Q100 112 100 102 Q100 112 130 105 Q115 118 85 118 Z" fill="#0F172A" />
          {/* Military Coat */}
          <path d="M60 125 L140 125 L150 180 L50 180 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="4" />
          {/* Gold buttons */}
          <circle cx="90" cy="140" r="4" fill="#F59E0B" />
          <circle cx="110" cy="140" r="4" fill="#F59E0B" />
          <circle cx="90" cy="160" r="4" fill="#F59E0B" />
          <circle cx="110" cy="160" r="4" fill="#F59E0B" />
          {/* Military Llama Soldier at side */}
          <ellipse cx="35" cy="160" rx="18" ry="25" fill="#F1F5F9" stroke="#0F172A" strokeWidth="3" />
          <path d="M25 125 L45 125 L48 140 L22 140 Z" fill="#991B1B" />
          <circle cx="30" cy="150" r="2" fill="#0F172A" />
          <text x="100" y="202" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">ESTRATEGIA LLAMA 🦙</text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-400 font-bold p-4 text-center rounded-xl">
          [Ilustración Nuv]
        </div>
      );
  }
};
