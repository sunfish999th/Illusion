import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Layers, 
  PackageCheck, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { WilsonCalcParams } from '../types';

export const WilsonCalculator: React.FC = () => {
  const [params, setParams] = useState<WilsonCalcParams>({
    sheetPriceSoles: 90, // S/ 90 por plancha A4 en Wilson
    hardwareCostSoles: 0.50, // S/ 0.50 por argolla en Mesa Redonda
    packagingCostSoles: 0.30, // S/ 0.30 por bolsita celofán
    sellingPriceSoles: 10.00, // S/ 10.00 precio público accesible
    keychainSizeCm: 5.0, // 5cm
    batchQuantity: 24, // 24 llaveros por A4
  });

  // Calculate layout fitting on A4 sheet (21cm x 29.7cm)
  // Adding 0.6cm margin/cut padding
  const keychainsPerRow = Math.floor(20.0 / (params.keychainSizeCm + 0.5));
  const keychainsPerCol = Math.floor(28.0 / (params.keychainSizeCm + 0.5));
  const maxFitPerSheet = Math.max(1, keychainsPerRow * keychainsPerCol);

  // Financial Calculations
  const printCostPerUnit = params.sheetPriceSoles / maxFitPerSheet;
  const totalCostPerUnit = printCostPerUnit + params.hardwareCostSoles + params.packagingCostSoles;
  const totalBatchCost = totalCostPerUnit * params.batchQuantity;
  const totalRevenue = params.sellingPriceSoles * params.batchQuantity;
  const netProfit = totalRevenue - totalBatchCost;
  const roiPercentage = totalBatchCost > 0 ? (netProfit / totalBatchCost) * 100 : 0;
  const breakevenUnits = Math.ceil(totalBatchCost / params.sellingPriceSoles);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-amber-400" />
            <span>Calculadora de Producción Wilson / Centro de Lima</span>
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            Calcula la rentabilidad real de tu lote de llaveros en soles. En las imprentas de Wilson (Av. Garcilaso) te cobran por plancha A4, ¡no por diseño!
          </p>
        </div>
        <div className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-2xl border border-amber-500/30 text-xs font-mono font-bold">
          S/ {params.sellingPriceSoles.toFixed(2)} / Llavero
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUT FORM CONTROLS */}
        <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-400">
            Parámetros de Costo (Soles)
          </h3>

          {/* Preset Quick Scenarios */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                setParams({
                  sheetPriceSoles: 90,
                  hardwareCostSoles: 0.50,
                  packagingCostSoles: 0.30,
                  sellingPriceSoles: 8.00,
                  keychainSizeCm: 5.0,
                  batchQuantity: 24,
                })
              }
              className="text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium transition"
            >
              💸 Promo Super Económica S/ 8.00
            </button>
            <button
              onClick={() =>
                setParams({
                  sheetPriceSoles: 90,
                  hardwareCostSoles: 0.50,
                  packagingCostSoles: 0.30,
                  sellingPriceSoles: 10.00,
                  keychainSizeCm: 5.0,
                  batchQuantity: 24,
                })
              }
              className="text-xs px-3 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 font-medium transition"
            >
              ⭐ Precio Estudiante S/ 10.00
            </button>
            <button
              onClick={() =>
                setParams({
                  sheetPriceSoles: 90,
                  hardwareCostSoles: 0.50,
                  packagingCostSoles: 0.30,
                  sellingPriceSoles: 7.50,
                  keychainSizeCm: 5.0,
                  batchQuantity: 24,
                })
              }
              className="text-xs px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium transition"
            >
              🔥 Combo 2 x S/ 15 (S/ 7.50 c/u)
            </button>
            <button
              onClick={() =>
                setParams({
                  sheetPriceSoles: 90,
                  hardwareCostSoles: 0.80,
                  packagingCostSoles: 0.30,
                  sellingPriceSoles: 12.00,
                  keychainSizeCm: 6.0,
                  batchQuantity: 15,
                })
              }
              className="text-xs px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium transition"
            >
              ✨ Llavero Pro 6cm S/ 12.00
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Costo Plancha A4 en Wilson (S/):
              </label>
              <input
                type="number"
                step="5"
                value={params.sheetPriceSoles}
                onChange={(e) => setParams({ ...params, sheetPriceSoles: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
              />
              <span className="text-[10px] text-zinc-500">Acrílico + Impresión UV Camaná</span>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Costo Herraje / Argolla (S/):
              </label>
              <input
                type="number"
                step="0.10"
                value={params.hardwareCostSoles}
                onChange={(e) => setParams({ ...params, hardwareCostSoles: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
              />
              <span className="text-[10px] text-zinc-500">Mesa Redonda por ciento</span>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Empaque y Bolsita (S/):
              </label>
              <input
                type="number"
                step="0.10"
                value={params.packagingCostSoles}
                onChange={(e) => setParams({ ...params, packagingCostSoles: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
              />
              <span className="text-[10px] text-zinc-500">Bolsita celofán + Sticker Nuv</span>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Precio de Venta al Público (S/):
              </label>
              <input
                type="number"
                step="1"
                value={params.sellingPriceSoles}
                onChange={(e) => setParams({ ...params, sellingPriceSoles: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-amber-300 font-bold font-mono focus:border-amber-400 focus:outline-none"
              />
              <span className="text-[10px] text-zinc-500">Precio unitario en IG/TikTok</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Tamaño Llavero (cm):
              </label>
              <select
                value={params.keychainSizeCm}
                onChange={(e) => setParams({ ...params, keychainSizeCm: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value={4}>4.0 cm (Mini)</option>
                <option value={5}>5.0 cm (Estándar)</option>
                <option value={6}>6.0 cm (Mediano Pro)</option>
                <option value={8}>8.0 cm (Dúo Grande)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Cantidad a Producir:
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={params.batchQuantity}
                onChange={(e) => setParams({ ...params, batchQuantity: Number(e.target.value) })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* FINANCIAL DASHBOARD & A4 PLANCHA VISUALIZER */}
        <div className="lg:col-span-6 space-y-6">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <span className="text-[11px] font-medium text-zinc-400 block">Costo / Unidad</span>
              <span className="text-lg font-bold text-zinc-200 font-mono mt-1 block">
                S/ {totalCostPerUnit.toFixed(2)}
              </span>
              <span className="text-[10px] text-zinc-500">Imprenta + herraje</span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <span className="text-[11px] font-medium text-zinc-400 block">Inversión Lote</span>
              <span className="text-lg font-bold text-red-400 font-mono mt-1 block">
                S/ {totalBatchCost.toFixed(2)}
              </span>
              <span className="text-[10px] text-zinc-500">Costo total {params.batchQuantity} unid.</span>
            </div>

            <div className="bg-zinc-900 border border-amber-500/30 bg-amber-500/5 rounded-2xl p-4">
              <span className="text-[11px] font-medium text-amber-300 block">Ganancia Neta</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono mt-1 block">
                S/ {netProfit.toFixed(2)}
              </span>
              <span className="text-[10px] text-emerald-500/80 font-bold">
                ROI: +{roiPercentage.toFixed(0)}%
              </span>
            </div>
          </div>

          {/* Breakeven Rule Highlight */}
          <div className="bg-gradient-to-r from-emerald-950/80 to-zinc-900 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-emerald-300">
                Punto de Equilibrio (Sin Perder Plata)
              </h4>
              <p className="text-xs text-zinc-300 mt-0.5">
                Con vender solo <strong className="text-emerald-400 font-mono">{breakevenUnits} llaveros</strong> (de {params.batchQuantity}), ¡recuperas el 100% de tu inversión! Los demás {params.batchQuantity - breakevenUnits} llaveros son ganancia limpia.
              </p>
            </div>
          </div>

          {/* A4 Plancha Sheet Layout Visualization */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Acomodo en Plancha A4 Wilson (21 x 29.7 cm)</span>
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                Entran ~{maxFitPerSheet} unid / Plancha
              </span>
            </div>

            {/* Simulated A4 Plancha Grid */}
            <div className="w-full aspect-[1/1.41] max-h-56 bg-zinc-950 border-2 border-dashed border-zinc-700 rounded-2xl p-3 flex flex-col justify-between overflow-hidden relative">
              <div
                className="grid gap-1.5 h-full w-full"
                style={{
                  gridTemplateColumns: `repeat(${keychainsPerRow}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${keychainsPerCol}, minmax(0, 1fr))`,
                }}
              >
                {Array.from({ length: maxFitPerSheet }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-500/20 border border-amber-500/50 rounded-lg flex items-center justify-center text-[10px] font-bold text-amber-300 shadow-sm"
                  >
                    #{idx + 1}
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none flex items-end p-2 justify-between">
                <span className="text-[10px] text-zinc-400 font-mono">21 cm Ancho</span>
                <span className="text-[10px] text-zinc-400 font-mono">29.7 cm Alto</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 italic">
              💡 Tip de Imprenta: Lleva tu archivo en PDF o PNG sin fondo preparado en un lienzo A4 a 300 DPI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
