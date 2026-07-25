import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Calculator, 
  UserCheck, 
  BookOpen, 
  ShoppingBag,
  Flame,
  Maximize2
} from 'lucide-react';
import { CharacterItem, KeychainConfig } from './types';
import { INITIAL_CHARACTERS } from './data/characters';
import { KeychainSimulator } from './components/KeychainSimulator';
import { CharacterCatalog } from './components/CharacterCatalog';
import { WilsonCalculator } from './components/WilsonCalculator';
import { PreOrderTracker } from './components/PreOrderTracker';
import { GuideSection } from './components/GuideSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'catalog' | 'calculator' | 'preorders' | 'guide'>('simulator');
  const [characters, setCharacters] = useState<CharacterItem[]>(INITIAL_CHARACTERS);

  // Default selected character: Koichi
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>(INITIAL_CHARACTERS[0]);

  // Active Keychain Configuration
  const [keychainConfig, setKeychainConfig] = useState<KeychainConfig>({
    characterId: INITIAL_CHARACTERS[0].id,
    characterName: INITIAL_CHARACTERS[0].name,
    fandomName: INITIAL_CHARACTERS[0].fandom,
    borderColor: INITIAL_CHARACTERS[0].defaultBorderColor,
    borderWidth: INITIAL_CHARACTERS[0].defaultBorderWidth,
    keyring: INITIAL_CHARACTERS[0].defaultKeyring,
    sizeCm: INITIAL_CHARACTERS[0].defaultSizeCm,
    acrylicThicknessMm: 3,
    isDoubleSided: INITIAL_CHARACTERS[0].hasDoubleSide,
    activeSide: 'A',
    backgroundColor: 'grid',
    customText: '✨ PREVENTA ECONÓMICA S/ 10 • Combo 2x S/ 18 ✨',
    customImage: INITIAL_CHARACTERS[0].customImageUrl,
  });

  const handleSelectCharacterFromCatalog = (char: CharacterItem) => {
    setSelectedCharacter(char);
    setKeychainConfig({
      ...keychainConfig,
      characterId: char.id,
      characterName: char.name,
      fandomName: char.fandom,
      borderColor: char.defaultBorderColor,
      borderWidth: char.defaultBorderWidth,
      keyring: char.defaultKeyring,
      sizeCm: char.defaultSizeCm,
      isDoubleSided: char.hasDoubleSide,
      activeSide: 'A',
      customImage: char.customImageUrl,
    });
    setActiveTab('simulator');
  };

  const handleAddCustomCharacter = (newChar: CharacterItem) => {
    setCharacters([newChar, ...characters]);
    handleSelectCharacterFromCatalog(newChar);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('simulator')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 p-0.5 shadow-lg shadow-pink-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-pink-400 font-bold text-lg">
                :3
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">
                  NuvStore <span className="text-pink-400 font-medium text-xs">Studio</span>
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  Llaveros Rancios
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Merch de Fandoms Olvidados • Wilson & Centro de Lima
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-2xl text-xs overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'simulator'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador Llavero</span>
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'catalog'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Catálogo ({characters.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculadora Wilson</span>
            </button>

            <button
              onClick={() => setActiveTab('preorders')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'preorders'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Gestor Preventas</span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ruta Emprendedora</span>
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            {/* Quick Character Picker Ribbon */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-zinc-400 font-bold whitespace-nowrap px-2 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Personajes:</span>
              </span>
              {characters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCharacterFromCatalog(c)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCharacter.id === c.id
                      ? 'bg-pink-500 text-white shadow'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.defaultBorderColor }} />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>

            {/* SIMULATOR COMPONENT */}
            <KeychainSimulator
              config={keychainConfig}
              onChangeConfig={setKeychainConfig}
              svgType={selectedCharacter.svgType}
              hasDoubleSide={selectedCharacter.hasDoubleSide}
              sideAName={selectedCharacter.sideAName}
              sideBName={selectedCharacter.sideBName}
            />
          </div>
        )}

        {activeTab === 'catalog' && (
          <CharacterCatalog
            characters={characters}
            onSelectCharacter={handleSelectCharacterFromCatalog}
            onAddCustomCharacter={handleAddCustomCharacter}
          />
        )}

        {activeTab === 'calculator' && <WilsonCalculator />}

        {activeTab === 'preorders' && <PreOrderTracker />}

        {activeTab === 'guide' && <GuideSection />}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-6 px-4 text-center text-xs text-zinc-500 space-y-1">
        <p className="font-mono text-zinc-400">
          NuvStore • Emprendimiento de Llaveros Rancios para Fandoms Olvidados :3
        </p>
        <p className="text-[11px] text-zinc-600">
          Everyday Host • Ranfren • YTTD • Danmei Qi Wei Shang • Cursed Historia Peruana
        </p>
      </footer>
    </div>
  );
}
