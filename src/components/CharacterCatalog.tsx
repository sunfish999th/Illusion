import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  Play, 
  CheckCircle, 
  Clock, 
  Heart, 
  Flame, 
  Upload, 
  Bookmark,
  Layers
} from 'lucide-react';
import { CharacterItem, FandomCategory } from '../types';
import { CharacterIllustration } from './CharacterIllustration';

interface Props {
  characters: CharacterItem[];
  onSelectCharacter: (char: CharacterItem) => void;
  onAddCustomCharacter: (newChar: CharacterItem) => void;
}

export const CharacterCatalog: React.FC<Props> = ({
  characters,
  onSelectCharacter,
  onAddCustomCharacter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // New Custom Character Form
  const [name, setName] = useState('');
  const [fandom, setFandom] = useState('');
  const [description, setDescription] = useState('');
  const [borderColor, setBorderColor] = useState('#FF99C8');
  const [customImageUrl, setCustomImageUrl] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !fandom.trim()) return;

    const newChar: CharacterItem = {
      id: 'custom_' + Date.now(),
      name,
      fandom,
      fandomCategory: 'custom',
      description: description || 'Diseño personalizado subido por el emprendedor.',
      defaultBorderColor: borderColor,
      defaultBorderWidth: 10,
      defaultKeyring: 'star_gold',
      defaultSizeCm: 5,
      status: 'boceto',
      suggestedPriceSoles: 15,
      hasDoubleSide: false,
      svgType: 'custom',
      customImageUrl: customImageUrl || undefined,
    };

    onAddCustomCharacter(newChar);
    setShowAddModal(false);
    setName('');
    setFandom('');
    setDescription('');
    setCustomImageUrl('');
  };

  const filteredCharacters = characters.filter((c) => {
    if (selectedCategory === 'all') return true;
    return c.fandomCategory === selectedCategory;
  });

  const FANDOM_TABS: { id: string; label: string; icon: string }[] = [
    { id: 'all', label: 'Todos los Fandoms', icon: '✨' },
    { id: 'everyday_host', label: 'Everyday Host', icon: '🌸' },
    { id: 'ranfren', label: 'Ranfren', icon: '💀' },
    { id: 'yttd', label: 'YTTD', icon: '🧣' },
    { id: 'danmei', label: 'Danmei BL', icon: '🏮' },
    { id: 'historia_curseada', label: 'Historia Peruana', icon: '🦙' },
    { id: 'custom', label: 'Mis Diseños', icon: '🎨' },
  ];

  return (
    <div className="space-y-6">
      {/* Category Tabs & Add Custom Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {FANDOM_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-pink-500 text-white font-bold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg transition"
        >
          <Plus className="w-4 h-4" />
          <span>Subir Mi Propio Diseño</span>
        </button>
      </div>

      {/* CUSTOM UPLOAD MODAL */}
      {showAddModal && (
        <div className="bg-zinc-900 border border-purple-500/40 rounded-3xl p-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2">
              <Upload className="w-4 h-4 text-purple-400" />
              <span>Subir Dibujo o Imagen Personalizada</span>
            </h3>
            <button
              onClick={() => setShowAddModal(false)}
              className="text-zinc-500 hover:text-white text-xs font-bold"
            >
              ✕ Cerrar
            </button>
          </div>

          <form onSubmit={handleCreateCustom} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Nombre del Personaje:</label>
              <input
                type="text"
                required
                placeholder="Ej: Llama Revolucionaria"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Fandom / Serie:</label>
              <input
                type="text"
                required
                placeholder="Ej: Memes de Historia / Mi Arte Original"
                value={fandom}
                onChange={(e) => setFandom(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Color de Borde / Sticker Predeterminado:</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                  className="w-10 h-10 rounded bg-transparent border-none cursor-pointer"
                />
                <span className="font-mono text-zinc-400">{borderColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Imagen del Dibujo (PNG / JPG):</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-1.5 text-zinc-400 text-xs focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-zinc-300 mb-1 font-semibold">Descripción o Lore Nuv:</label>
              <input
                type="text"
                placeholder="Ej: Hecho en IbisPaint X a full cel mientras escuchaba el docu de Lenin."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg"
              >
                Guardar en Catálogo
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CHARACTER CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            className="bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group"
          >
            <div>
              {/* Card Image Preview Container */}
              <div
                className="w-full aspect-square rounded-2xl mb-4 p-4 flex items-center justify-center relative overflow-hidden transition-all group-hover:scale-[1.02]"
                style={{
                  backgroundColor: char.defaultBorderColor + '22',
                  border: `2px solid ${char.defaultBorderColor}55`,
                }}
              >
                <CharacterIllustration
                  svgType={char.svgType}
                  side="A"
                  customImageUrl={char.customImageUrl}
                  className="w-full h-full max-h-40"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur border border-zinc-700/80 rounded-lg px-2 py-0.5 text-[10px] font-bold text-zinc-300">
                  {char.status === 'listo_imprenta' ? (
                    <span className="text-emerald-400">✅ Listo Wilson</span>
                  ) : char.status === 'en_preventa' ? (
                    <span className="text-amber-400">🔥 En Preventa</span>
                  ) : (
                    <span className="text-purple-400">✍️ Boceto Nuv</span>
                  )}
                </div>

                {/* Double sided badge */}
                {char.hasDoubleSide && (
                  <div className="absolute top-3 right-3 bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-500/30">
                    2 Lados
                  </div>
                )}
              </div>

              {/* Title & Fandom Tag */}
              <div className="space-y-1 mb-3">
                <span className="text-[11px] font-bold text-pink-400 uppercase tracking-wide block">
                  {char.fandom}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                  {char.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {char.description}
                </p>
              </div>
            </div>

            {/* Price & Simulator Action Button */}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between mt-2">
              <div>
                <span className="text-[10px] text-zinc-500 block">Sugerido</span>
                <span className="text-sm font-bold text-amber-300 font-mono">
                  S/ {char.suggestedPriceSoles.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => onSelectCharacter(char)}
                className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow transition-all group-hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simular Llavero</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
