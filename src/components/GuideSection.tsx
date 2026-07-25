import React, { useState } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Truck, 
  TrendingUp, 
  Sparkles, 
  MessageSquare, 
  Share2, 
  Check, 
  FileText,
  Volume2
} from 'lucide-react';

export const GuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'tiktok' | 'lore'>('roadmap');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const TIKTOK_SCRIPTS = [
    {
      id: 'script1',
      title: '1. El Marketing del Bullying (Autodesprecio Tierno)',
      text: `Hice estos llaveros horribles de Koichi y Robert porque mi mamá dice que no sirvo para nada y quería probar suerte. 😭\nComprame uno a solo S/ 10 soles (o 2 x S/ 15 en combo) para que pueda pagar el pasaje de la combi y la chicha morada. 💖\n\n📍 Envíos a todo el Perú por Shalom / Entregas en C.C. Arenales Lince.\n#Ranfren #EverydayHost #ArtPeru #LlaverosNuv`,
    },
    {
      id: 'script2',
      title: '2. El Fandom Olvidado (Hambre de Merch Económica)',
      text: `¿Te acuerdas de ese personaje que solo conocen 4 gatos locos en todo Perú y nadie le hace merch? 💀\nBueno, yo soy uno de esos 4 gatos locos y mandé a hacer estos llaveros en acrílico pro en Wilson a solo S/ 10 soles porque estaba harto de que la merch oficial cueste S/ 50. 🦙✨\n\nSolo saqué 15 unidades en preventa económicaza. ¡DM para separar el tuyo antes de que se agoten! 📩`,
    },
    {
      id: 'script3',
      title: '3. El Crossover Cursed (Cáceres & Lenin)',
      text: `Mi profe de historia me mandó a ver La Revolución de la Tierra y terminé dibujando a Andrés Avelino Cáceres con sus llamas soldado en IbisPaint X a full cel. 🦙⚔️\nLlavero en acrílico de 7cm para los verdaderos patriotas del shitposting histórico. Oferta especial: S/ 12 soles o 2 por S/ 20.`,
    },
  ];

  const LORE_QUOTES = [
    {
      speaker: 'General Velasco Alvarado',
      quote: '¡Nuv, el patrón ya no comerá más de tu falta de merch!',
      context: 'Sobre la expropiación de planchas A4 en Wilson.',
    },
    {
      speaker: 'Lenin en la Estación de Finlandia',
      quote: 'El Tren Sellado no va a todo el mundo: va directo al grupo de Facebook de Ranfren.',
      context: 'Estrategia de nicho para la revolución del proletariado nuv.',
    },
    {
      speaker: 'Cáceres y sus Llamas',
      quote: 'Disfrazar llamas de soldados fue la estrategia de marketing más brillante de la historia peruana.',
      context: 'La inspiración para los llaveros de 7cm en C.C. Arenales.',
    },
    {
      speaker: 'Koichi',
      quote: 'Perdón por existir :3',
      context: 'El lema oficial de los Llaveros Rancios.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Navigation Tabs */}
      <div className="flex gap-2 border-b border-zinc-800 pb-3">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'roadmap'
              ? 'bg-amber-500 text-black shadow'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Ruta Wilson & Producción Lima</span>
        </button>

        <button
          onClick={() => setActiveTab('tiktok')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'tiktok'
              ? 'bg-pink-500 text-white shadow'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Guiones TikTok / IG Stories</span>
        </button>

        <button
          onClick={() => setActiveTab('lore')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'lore'
              ? 'bg-purple-500 text-white shadow'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Radio Lore Histórico</span>
        </button>
      </div>

      {/* TAB 1: ROADMAP WILSON & PROD LIMA */}
      {activeTab === 'roadmap' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs">
                1
              </span>
              <span>Preparación de Archivo Digital (IbisPaint X)</span>
            </h3>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Lienzo A4 (21 x 29.7 cm) a 300 DPI:</strong> Abre IbisPaint o Procreate y crea un lienzo A4 en alta resolución.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Acomoda tus diseños:</strong> Entran de 20 a 24 llaveros de 5cm en una sola hoja A4.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Línea de corte / Borde:</strong> Deja 0.5cm de espacio entre cada personaje para que el láser de Wilson no los choque.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Exportación:</strong> Exporta en <strong>PNG sin fondo (transparente)</strong> o en PDF de alta calidad.</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs">
                2
              </span>
              <span>Galerías de Wilson / Jr. Camaná</span>
            </h3>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Dónde ir:</strong> CyberPlaza (Av. Garcilaso de la Vega) o las galerías de Jr. Camaná cerca a Plaza Francia.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Qué pedir:</strong> "Impresión UV Cama Plana sobre Acrílico de 3mm / 4mm con Corte Láser".</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Precio estándar:</strong> S/ 80 a S/ 100 por la plancha A4 completa. Te lo entregan el mismo día o al día siguiente.</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs">
                3
              </span>
              <span>Herrajes en Mesa Redonda / Jr. Huallaga</span>
            </h3>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Argollas Simples:</strong> Bolsa de 100 unidades por S/ 10-15 en Mercado Central / Mesa Redonda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Estrellas y Corazones:</strong> Vienen por ciento o medio ciento (S/ 35-45) en tonos dorado y rosado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Bolsitas de celofán:</strong> Paquete de 100 bolsitas de 6x8cm a S/ 5 soles.</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs">
                4
              </span>
              <span>Logística de Envíos Shalom & Arenales</span>
            </h3>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Shalom (El Rey del Envío Barato):</strong> Envía de agencia a agencia a nivel nacional por S/ 6 a S/ 10 soles (pago en destino).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Entregas Presenciales:</strong> C.C. Arenales (Lince) los sábados de 3 a 5pm o Estación del Metropolitano/Tren.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: TIKTOK / IG SCRIPTS */}
      {activeTab === 'tiktok' && (
        <div className="space-y-4">
          {TIKTOK_SCRIPTS.map((script) => (
            <div
              key={script.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3"
            >
              <h4 className="text-sm font-bold text-pink-300">{script.title}</h4>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
                {script.text}
              </div>
              <button
                onClick={() => handleCopy(script.text, script.id)}
                className="flex items-center gap-2 bg-pink-500/20 text-pink-300 border border-pink-500/30 px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-pink-500/30 transition"
              >
                {copiedText === script.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copiar Texto para Publicar</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: RADIO LORE HISTÓRICO */}
      {activeTab === 'lore' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LORE_QUOTES.map((q, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-purple-500/30 bg-purple-500/5 rounded-2xl p-5 space-y-2 relative overflow-hidden"
            >
              <div className="text-xs font-bold text-purple-300 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span>{q.speaker}</span>
              </div>
              <blockquote className="text-sm font-serif italic text-zinc-200">
                "{q.quote}"
              </blockquote>
              <p className="text-[11px] text-zinc-500 font-mono">
                Contexto: {q.context}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
