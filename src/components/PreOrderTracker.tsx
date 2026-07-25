import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Search, 
  DollarSign,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { PreOrder } from '../types';

export const PreOrderTracker: React.FC = () => {
  const [orders, setOrders] = useState<PreOrder[]>(() => {
    const saved = localStorage.getItem('nuv_preorders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: '1',
        customerName: 'Lucía @nuv_fan',
        phone: '987 654 321',
        characterName: 'Koichi (Everyday Host)',
        quantity: 2,
        pricePerUnitSoles: 10,
        depositSoles: 10,
        deliveryMethod: 'arenales',
        status: 'adelanto_pagado',
        createdAt: new Date().toLocaleDateString('es-PE'),
        notes: 'Entrega sábado en C.C. Arenales (Promo 2x S/ 18)',
      },
      {
        id: '2',
        customerName: 'Renzo @ranfren_boy',
        phone: '912 345 678',
        characterName: 'Robert (Bolita) + Michael',
        quantity: 2,
        pricePerUnitSoles: 9,
        depositSoles: 10,
        deliveryMethod: 'shalom',
        status: 'en_imprenta',
        createdAt: new Date().toLocaleDateString('es-PE'),
        notes: 'Envío Shalom a Trujillo',
      },
    ];
  });

  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  // New Order Form State
  const [newCustomer, setNewCustomer] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCharacter, setNewCharacter] = useState('Koichi (Everyday Host)');
  const [newQty, setNewQty] = useState(1);
  const [newPrice, setNewPrice] = useState(10);
  const [newDeposit, setNewDeposit] = useState(10);
  const [newDelivery, setNewDelivery] = useState<'shalom' | 'olva' | 'arenales' | 'wilson' | 'otro'>('shalom');
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    localStorage.setItem('nuv_preorders', JSON.stringify(orders));
  }, [orders]);

  const handleAddOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.trim()) return;

    const newOrder: PreOrder = {
      id: Date.now().toString(),
      customerName: newCustomer,
      phone: newPhone,
      characterName: newCharacter,
      quantity: newQty,
      pricePerUnitSoles: newPrice,
      depositSoles: newDeposit,
      deliveryMethod: newDelivery,
      status: newDeposit >= newQty * newPrice ? 'adelanto_pagado' : 'reservado',
      createdAt: new Date().toLocaleDateString('es-PE'),
      notes: newNotes,
    };

    setOrders([newOrder, ...orders]);
    setShowAddForm(false);
    setNewCustomer('');
    setNewPhone('');
    setNewNotes('');
  };

  const handleDeleteOrder = (id: string) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const handleUpdateStatus = (id: string, newStatus: PreOrder['status']) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchesFilter = filterStatus === 'all' || o.status === filterStatus;
    const matchesSearch =
      o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.characterName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Calculate totals
  const totalReservedKeychains = orders.reduce((acc, o) => acc + o.quantity, 0);
  const totalDepositsCollected = orders.reduce((acc, o) => acc + o.depositSoles, 0);
  const totalExpectedRevenue = orders.reduce((acc, o) => acc + o.quantity * o.pricePerUnitSoles, 0);
  const totalPendingBalance = totalExpectedRevenue - totalDepositsCollected;

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <span className="text-xs text-zinc-400 block font-medium">Total Llaveros Reservados</span>
          <span className="text-2xl font-bold text-pink-400 font-mono mt-1 block">
            {totalReservedKeychains} Unid.
          </span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <span className="text-xs text-zinc-400 block font-medium">Adelantos Recaudados</span>
          <span className="text-2xl font-bold text-emerald-400 font-mono mt-1 block">
            S/ {totalDepositsCollected.toFixed(2)}
          </span>
          <span className="text-[10px] text-emerald-500 font-semibold">Cubre costos de Wilson</span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <span className="text-xs text-zinc-400 block font-medium">Saldo Pendiente a Cobrar</span>
          <span className="text-2xl font-bold text-amber-400 font-mono mt-1 block">
            S/ {totalPendingBalance.toFixed(2)}
          </span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Total Venta Estimada</span>
            <span className="text-xl font-bold text-white font-mono mt-1 block">
              S/ {totalExpectedRevenue.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-3 py-2 rounded-xl text-xs flex items-center gap-1 shadow-lg transition"
          >
            <Plus className="w-4 h-4" />
            <span>Nueva Reserva</span>
          </button>
        </div>
      </div>

      {/* NEW RESERVATION MODAL / FORM */}
      {showAddForm && (
        <div className="bg-zinc-900 border border-pink-500/40 rounded-3xl p-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <h3 className="text-sm font-bold text-pink-300 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-pink-400" />
              <span>Registrar Nueva Preventa de Cliente</span>
            </h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-zinc-500 hover:text-white text-xs font-bold"
            >
              ✕ Cerrar
            </button>
          </div>

          <form onSubmit={handleAddOrder} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Cliente / Instagram / TikTok:</label>
              <input
                type="text"
                required
                placeholder="Ej: @maria_nuv"
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Teléfono / WhatsApp:</label>
              <input
                type="text"
                placeholder="Ej: 987 654 321"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Personaje / Llavero:</label>
              <select
                value={newCharacter}
                onChange={(e) => setNewCharacter(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-pink-500"
              >
                <option value="Koichi (Everyday Host)">Koichi (Everyday Host)</option>
                <option value="Robert Bolita (Ranfren)">Robert Bolita (Ranfren)</option>
                <option value="Michael (Ranfren)">Michael (Ranfren)</option>
                <option value="Ratman (Ranfren)">Ratman (Ranfren)</option>
                <option value="Shin Tsukimi (YTTD)">Shin Tsukimi (YTTD)</option>
                <option value="Jing Shao & Mu Zhiyan (Danmei)">Jing Shao & Mu Zhiyan (Danmei)</option>
                <option value="Cáceres y Llamas (Historia)">Cáceres y Llamas (Historia)</option>
                <option value="Personalizado">Otro Personalizado</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Cantidad:</label>
              <input
                type="number"
                min="1"
                value={newQty}
                onChange={(e) => setNewQty(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Precio por Unidad (S/):</label>
              <input
                type="number"
                step="1"
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Adelanto Pagado (S/):</label>
              <input
                type="number"
                step="1"
                value={newDeposit}
                onChange={(e) => setNewDeposit(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-emerald-400 font-bold font-mono focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-semibold">Método de Entrega / Envío:</label>
              <select
                value={newDelivery}
                onChange={(e) => setNewDelivery(e.target.value as any)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-pink-500"
              >
                <option value="shalom">📦 Shalom (Agencia S/ 6-10)</option>
                <option value="olva">🚚 Olva Courier a domicilio</option>
                <option value="arenales">🛍️ Entrega Presencial C.C. Arenales</option>
                <option value="wilson">🏢 Entrega Wilson / Centro de Lima</option>
                <option value="otro">📍 Otro</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-zinc-300 mb-1 font-semibold">Notas / Detalles:</label>
              <input
                type="text"
                placeholder="Ej: Quiere argolla de estrella dorada"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="sm:col-span-3 flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl shadow-lg"
              >
                Guardar Preventa
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SEARCH AND FILTER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
        <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-xl w-full sm:w-72">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Buscar por cliente o personaje..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'reservado', label: 'Reservados' },
            { id: 'adelanto_pagado', label: 'Adelanto Pagado' },
            { id: 'en_imprenta', label: 'En Imprenta' },
            { id: 'entregado', label: 'Entregados' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-medium transition ${
                filterStatus === tab.id
                  ? 'bg-pink-500 text-white font-bold shadow'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ORDERS LIST TABLE / CARDS */}
      <div className="space-y-3">
        {filteredOrders.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center text-zinc-500 text-xs">
            No se encontraron reservas con este filtro.
          </div>
        ) : (
          filteredOrders.map((order) => {
            const totalPrice = order.quantity * order.pricePerUnitSoles;
            const pendingPrice = totalPrice - order.depositSoles;

            return (
              <div
                key={order.id}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{order.customerName}</span>
                    {order.phone && (
                      <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                        <PhoneCall className="w-3 h-3 text-emerald-400" />
                        {order.phone}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-pink-300 font-medium">
                    {order.quantity}x {order.characterName}
                  </div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                    <span>Método: <strong className="text-zinc-300 uppercase">{order.deliveryMethod}</strong></span>
                    <span>•</span>
                    <span>Fecha: {order.createdAt}</span>
                    {order.notes && <span className="text-amber-400/90 font-medium">• {order.notes}</span>}
                  </div>
                </div>

                {/* Status and Financial Badge */}
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-zinc-800">
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-white">
                      S/ {totalPrice.toFixed(2)} Total
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400">
                      Adelanto: S/ {order.depositSoles.toFixed(2)}
                    </div>
                    {pendingPrice > 0 && (
                      <div className="text-[10px] font-mono text-amber-400">
                        Debe: S/ {pendingPrice.toFixed(2)}
                      </div>
                    )}
                  </div>

                  {/* Status Dropdown */}
                  <select
                    value={order.status}
                    onChange={(e) => handleUpdateStatus(order.id, e.target.value as any)}
                    className={`text-xs font-bold rounded-xl px-3 py-1.5 border focus:outline-none cursor-pointer ${
                      order.status === 'entregado'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : order.status === 'en_imprenta'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : order.status === 'adelanto_pagado'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700'
                    }`}
                  >
                    <option value="reservado">⏳ Reservado</option>
                    <option value="adelanto_pagado">💰 Adelanto Pagado</option>
                    <option value="en_imprenta">⚙️ En Imprenta Wilson</option>
                    <option value="listo_entrega">📦 Listo para Entrega</option>
                    <option value="entregado">✅ Entregado</option>
                  </select>

                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="p-1.5 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-zinc-800 transition"
                    title="Eliminar reserva"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
