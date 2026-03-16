import BatteryPlacementSA from './components/BatteryPlacementSA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* ── Top Header Bar ── */}
      <header className="border-b border-gray-900 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/LightningEnergy_Logo_Icon_Aqua.png"
              alt="Lightning Energy"
              className="w-9 h-9"
              onError={(e) => {
                // Fallback if CDN not available
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <p className="text-white font-['Nextsphere'] font-extrabold text-lg leading-none tracking-wide">
                LIGHTNING
              </p>
              <p className="text-[#00EAD3] font-['Nextsphere'] font-extrabold text-xs tracking-[0.3em] leading-none">
                ENERGY
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 font-['GeneralSans'] text-xs hidden sm:block">
              AS/NZS 5139:2019 Compliance Reference
            </span>

          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <BatteryPlacementSA />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-900 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 font-['GeneralSans'] text-xs">
            © 2026 Lightning Energy. All rights reserved.
          </p>
          <p className="text-gray-700 font-['GeneralSans'] text-xs">
            Reference: AS/NZS 5139:2019 | AS/NZS 3000:2018 | ERAC Feb 2021 | SA Power Networks TS132
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
