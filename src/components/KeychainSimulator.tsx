import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  RotateCw, 
  Download, 
  Palette, 
  Maximize2, 
  ShieldAlert, 
  Layers, 
  Share2,
  Check,
  Type
} from 'lucide-react';
import { KeychainConfig, KeyringType } from '../types';
import { CharacterIllustration } from './CharacterIllustration';

interface Props {
  config: KeychainConfig;
  onChangeConfig: (newConfig: KeychainConfig) => void;
  svgType: string;
  hasDoubleSide: boolean;
  sideAName?: string;
  sideBName?: string;
}

export const KeychainSimulator: React.FC<Props> = ({
  config,
  onChangeConfig,
  svgType,
  hasDoubleSide,
  sideAName = 'Lado A',
  sideBName = 'Lado B',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isWobbling, setIsWobbling] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onChangeConfig({
      ...config,
      activeSide: isFlipped ? 'A' : 'B',
    });
  };

  const triggerWobble = () => {
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 800);
  };

  const handleCopyMockupText = () => {
    const text = `✨ PREVENTA ABIERTA ✨\nLlavero Acrílico: ${config.characterName} (${config.fandomName})\n📏 Tamaño: ${config.sizeCm} cm | Doble Cara: ${config.isDoubleSided ? 'Sí' : 'No'}\n💸 Precio: S/ 15.00 Soles\n📩 Envíos a todo el Perú por Shalom / Olva / Entrega C.C. Arenales!`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  // Color Swatches
  const PRESET_COLORS = [
    { name: 'Koichi Pink', hex: '#FF99C8' },
    { name: 'Robert Navy', hex: '#3A506B' },
    { name: 'Ratman Green', hex: '#84CC16' },
    { name: 'Shin Cyan', hex: '#06B6D4' },
    { name: 'Danmei Gold', hex: '#EAB308' },
    { name: 'Cáceres Red', hex: '#DC2626' },
    { name: 'Michael Purple', hex: '#A855F7' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Noir Black', hex: '#18181B' },
  ];

  // Render Hardware Keyring SVG
  const renderKeyring = (type: KeyringType) => {
    switch (type) {
      case 'star_gold':
        return (
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none" className="drop-shadow-md">
            <polygon points="30,5 37,20 53,22 41,33 45,49 30,40 15,49 19,33 7,22 23,20" fill="url(#goldGradient)" stroke="#B45309" strokeWidth="2" />
            <circle cx="30" cy="55" r="7" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="50%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'star_silver':
        return (
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none" className="drop-shadow-md">
            <polygon points="30,5 37,20 53,22 41,33 45,49 30,40 15,49 19,33 7,22 23,20" fill="url(#silverGradient)" stroke="#475569" strokeWidth="2" />
            <circle cx="30" cy="55" r="7" fill="none" stroke="url(#silverGradient)" strokeWidth="3" />
            <defs>
              <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'heart_pink':
        return (
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none" className="drop-shadow-md">
            <path d="M30 45 C30 45 10 30 10 18 C10 10 18 5 25 10 C30 15 30 15 30 15 C30 15 30 15 35 10 C42 5 50 10 50 18 C50 30 30 45 30 45 Z" fill="url(#pinkGradient)" stroke="#BE185D" strokeWidth="2" />
            <circle cx="30" cy="55" r="7" fill="none" stroke="url(#pinkGradient)" strokeWidth="3" />
            <defs>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#DB2777" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'lobster_black':
        return (
          <svg width="50" height="70" viewBox="0 0 50 70" fill="none" className="drop-shadow-md">
            <path d="M25 5 Q35 5 35 20 Q35 32 25 38 Q15 32 15 20 Q15 5 25 5 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="21" y="38" width="8" height="12" fill="#334155" />
            <circle cx="25" cy="56" r="7" fill="none" stroke="#334155" strokeWidth="3" />
          </svg>
        );
      default: // classic_silver
        return (
          <svg width="50" height="70" viewBox="0 0 50 70" fill="none" className="drop-shadow-md">
            <circle cx="25" cy="22" r="18" fill="none" stroke="url(#silverGrad2)" strokeWidth="4" />
            <line x1="25" y1="40" x2="25" y2="52" stroke="url(#silverGrad2)" strokeWidth="3" />
            <circle cx="25" cy="56" r="6" fill="none" stroke="url(#silverGrad2)" strokeWidth="3" />
            <defs>
              <linearGradient id="silverGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: Interactive Visual Stage / Canvas Preview */}
      <div className="lg:col-span-7 flex flex-col items-center">
        {/* Background Selector & Actions Bar */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-pink-400" />
            <span className="text-zinc-300 font-medium text-xs sm:text-sm">Fondo de Muestra:</span>
            <div className="flex gap-1.5">
              {[
                { id: 'grid', label: 'Cuadrícula', bg: 'bg-zinc-950 border border-zinc-700' },
                { id: 'cream', label: 'Crema Nuv', bg: 'bg-[#FAF7F2]' },
                { id: 'pastel', label: 'Pastel', bg: 'bg-gradient-to-tr from-pink-100 to-purple-100' },
                { id: 'dark', label: 'Elegante', bg: 'bg-zinc-900' },
              ].map((bgItem) => (
                <button
                  key={bgItem.id}
                  onClick={() => onChangeConfig({ ...config, backgroundColor: bgItem.id })}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    config.backgroundColor === bgItem.id
                      ? 'bg-pink-500 text-white shadow-md'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {bgItem.label}
                </button>
              ))}
            </div>
          </div>

          {hasDoubleSide && (
            <button
              onClick={handleFlip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 font-semibold text-xs transition-all"
            >
              <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
              Voltear Llavero ({isFlipped ? sideBName : sideAName})
            </button>
          )}
        </div>

        {/* MOCKUP CANVAS DISPLAY CONTAINER */}
        <div
          ref={canvasContainerRef}
          className={`relative w-full aspect-square max-w-lg rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 border border-zinc-800 shadow-2xl ${
            config.backgroundColor === 'cream'
              ? 'bg-[#FAF7F2] text-zinc-900'
              : config.backgroundColor === 'pastel'
              ? 'bg-gradient-to-tr from-pink-200 via-purple-100 to-blue-200 text-zinc-900'
              : config.backgroundColor === 'dark'
              ? 'bg-zinc-950 text-white'
              : 'bg-zinc-950 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] text-white'
          }`}
        >
          {/* Custom Overlay Banner Text */}
          {config.customText && (
            <div className="absolute top-4 left-4 right-4 bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/40 rounded-xl px-3 py-1.5 text-center text-xs font-bold tracking-wide shadow-lg z-20">
              {config.customText}
            </div>
          )}

          {/* Size Tag Badge */}
          <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-md text-zinc-300 text-xs px-2.5 py-1 rounded-lg border border-zinc-700 font-mono flex items-center gap-1.5 z-20">
            <Maximize2 className="w-3 h-3 text-pink-400" />
            <span>{config.sizeCm}.0 cm</span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-400">{config.acrylicThicknessMm}mm Acrílico</span>
          </div>

          {/* KEYCHAIN SIMULATOR WRAPPER (WOBBLE & DRAG PHYSICS) */}
          <motion.div
            onClick={triggerWobble}
            animate={{
              rotate: isWobbling ? [0, -6, 6, -3, 3, 0] : [0, -1, 1, 0],
            }}
            transition={{
              duration: isWobbling ? 0.8 : 4,
              repeat: isWobbling ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="cursor-pointer flex flex-col items-center relative select-none group"
            style={{ width: `${Math.min(config.sizeCm * 38, 280)}px` }}
          >
            {/* KEYCHAIN HARDWARE RING */}
            <div className="z-10 -mb-4 transition-transform group-hover:scale-105">
              {renderKeyring(config.keyring)}
            </div>

            {/* ACRYLIC BODY WITH CUSTOM STICKER BORDER & GLOSS EFFECTS */}
            <div
              className="relative rounded-3xl p-3 flex flex-col items-center transition-all duration-300 shadow-2xl"
              style={{
                backgroundColor: config.borderColor,
                boxShadow: `0 20px 40px -15px ${config.borderColor}55, 0 8px 16px rgba(0,0,0,0.4)`,
                padding: `${config.borderWidth}px`,
              }}
            >
              {/* Hole cut for keyring */}
              <div className="w-4 h-4 bg-zinc-900 rounded-full border-2 border-white/80 -mt-2 mb-2 shadow-inner" />

              {/* ACRYLIC GLOSS REFLECTION LAYER */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60 z-10" />

              {/* INNER CHARACTER CANVAS */}
              <div className="w-full bg-white/95 rounded-2xl p-2 shadow-inner overflow-hidden flex items-center justify-center min-h-[160px]">
                <CharacterIllustration
                  svgType={svgType}
                  side={config.activeSide}
                  customImageUrl={config.customImage}
                />
              </div>

              {/* Double sided badge overlay */}
              {config.isDoubleSided && (
                <div className="absolute bottom-2 right-2 bg-purple-900/90 text-purple-200 text-[10px] font-bold px-1.5 py-0.5 rounded border border-purple-400/50 shadow">
                  2-LADOS ({config.activeSide})
                </div>
              )}
            </div>
          </motion.div>

          <p className="mt-4 text-xs text-zinc-500 font-mono tracking-tight z-10">
            [ Haz clic en el llavero para simular movimiento ]
          </p>
        </div>

        {/* QUICK SHARE & COPY BUTTONS */}
        <div className="w-full flex gap-3 mt-2">
          <button
            onClick={handleCopyMockupText}
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 py-2.5 px-4 rounded-xl font-medium text-xs transition-all shadow"
          >
            {copiedNotification ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">¡Texto de Preventa Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-pink-400" />
                <span>Copiar Ficha de Preventa (IG / TikTok)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: Customization Controls Panel */}
      <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Personalizar Llavero</span>
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Configura el borde, grosor de acrílico y herraje para enviar a imprenta.
          </p>
        </div>

        {/* 1. BORDER COLOR SELECTOR */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center justify-between">
            <span>Color de Borde / Sticker:</span>
            <span className="font-mono text-zinc-400">{config.borderColor}</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {PRESET_COLORS.map((color) => (
              <button
                key={color.hex}
                onClick={() => onChangeConfig({ ...config, borderColor: color.hex })}
                className={`h-9 rounded-xl border-2 transition-all flex items-center justify-center ${
                  config.borderColor.toLowerCase() === color.hex.toLowerCase()
                    ? 'border-white scale-105 shadow-lg'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {config.borderColor.toLowerCase() === color.hex.toLowerCase() && (
                  <Check className={`w-4 h-4 ${color.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-400">Personalizado:</span>
            <input
              type="color"
              value={config.borderColor}
              onChange={(e) => onChangeConfig({ ...config, borderColor: e.target.value })}
              className="w-8 h-8 rounded border-none bg-transparent cursor-pointer"
            />
          </div>
        </div>

        {/* 2. BORDER THICKNESS SLIDER */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-zinc-300">
            <span>Grosor del Borde:</span>
            <span className="font-mono text-pink-400">{config.borderWidth} px</span>
          </div>
          <input
            type="range"
            min="4"
            max="20"
            value={config.borderWidth}
            onChange={(e) => onChangeConfig({ ...config, borderWidth: Number(e.target.value) })}
            className="w-full accent-pink-500 cursor-pointer"
          />
        </div>

        {/* 3. KEYRING HARDWARE SELECTOR */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300">
            Herraje / Argolla (Centro de Lima / Mesa Redonda):
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'star_gold', label: '⭐ Estrella Dorada' },
              { id: 'heart_pink', label: '💖 Corazón Rosado' },
              { id: 'lobster_black', label: '🖤 Mosquetón Negro' },
              { id: 'classic_silver', label: '⚙️ Plata Clásica' },
            ].map((hw) => (
              <button
                key={hw.id}
                onClick={() => onChangeConfig({ ...config, keyring: hw.id as KeyringType })}
                className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all ${
                  config.keyring === hw.id
                    ? 'bg-pink-500/20 border-pink-500 text-pink-300 font-bold'
                    : 'bg-zinc-800/80 border-zinc-700/80 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {hw.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. SIZE & ACRYLIC THICKNESS */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">
              Tamaño (cm):
            </label>
            <select
              value={config.sizeCm}
              onChange={(e) => onChangeConfig({ ...config, sizeCm: Number(e.target.value) })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
            >
              <option value={4}>4.0 cm (Mini)</option>
              <option value={5}>5.0 cm (Estándar Nuv)</option>
              <option value={6}>6.0 cm (Mediano Pro)</option>
              <option value={8}>8.0 cm (Dúo Grande)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">
              Acrílico:
            </label>
            <select
              value={config.acrylicThicknessMm}
              onChange={(e) => onChangeConfig({ ...config, acrylicThicknessMm: Number(e.target.value) })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
            >
              <option value={3}>3mm Acrílico Simple</option>
              <option value={4}>4mm Acrílico Sándwich</option>
            </select>
          </div>
        </div>

        {/* 5. DOUBLE SIDED TOGGLE */}
        <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-zinc-200 block">Doble Cara (Double-Sided)</span>
            <span className="text-[11px] text-zinc-500">Diseño protegido en ambas caras</span>
          </div>
          <button
            onClick={() => onChangeConfig({ ...config, isDoubleSided: !config.isDoubleSided })}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              config.isDoubleSided ? 'bg-pink-500' : 'bg-zinc-700'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                config.isDoubleSided ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* 6. OVERLAY TEXT INPUT FOR SOCIAL MOCKUPS */}
        <div className="pt-2 border-t border-zinc-800 space-y-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-amber-400" />
            <span>Texto Superpuesto en Foto de Muestra:</span>
          </label>
          <input
            type="text"
            placeholder="Ej: ✨ PREVENTA S/ 15 - Stock Limitado ✨"
            value={config.customText || ''}
            onChange={(e) => onChangeConfig({ ...config, customText: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500"
          />
        </div>
      </div>
    </div>
  );
};
