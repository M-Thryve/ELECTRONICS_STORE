import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data structures
const TABS = ['Store', 'Phones', 'Computers', 'Tablets', 'Audio', 'Accessories', 'Support'] as const;
type Tab = typeof TABS[number];

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

// Generic components for content
function SectionHero({ title, subtitle, image, dark = true }: { title: string, subtitle: string, image: string, dark?: boolean }) {
  return (
    <section className={cn("relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex flex-col items-center justify-start pt-20", dark ? "bg-[#111111] text-white" : "bg-[#F5F5F7] text-[#111111]")}>
      <div className="z-10 text-center px-4 space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">{title}</h1>
        <p className={cn("text-xl md:text-2xl font-medium max-w-2xl mx-auto", dark ? "text-[#6E6E73]" : "text-[#111111]/70")}>
          {subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[70%]">
        <img src={image} alt={title} className="w-full h-full object-cover object-top opacity-80 mix-blend-multiply dark:mix-blend-normal" />
        <div className={cn("absolute inset-0 bg-gradient-to-t via-transparent to-transparent", dark ? "from-[#111111]" : "from-[#F5F5F7]")}></div>
      </div>
    </section>
  );
}

function ProductGrid({ title, subtitle, products }: { title: string, subtitle?: string, products: Product[] }) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-between items-end mb-12">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title} {subtitle && <span className="text-[#6E6E73]">{subtitle}</span>}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="group cursor-pointer">
            <div className="bg-[#F5F5F7] rounded-2xl aspect-square mb-4 p-8 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="space-y-1">
              {product.badge && <div className="text-sm font-semibold text-[#B93322]">{product.badge}</div>}
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-[#6E6E73] text-sm line-clamp-2">{product.description}</p>
              <div className="pt-2 font-medium">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Contents
function StoreContent() {
  return (
    <>
      <div className="bg-[#F5F5F7] text-center py-3 px-4 text-sm text-[#111111]">
        Get up to $800 credit toward a new Pro Phone when you trade in an eligible device.{' '}
        <a href="#" className="text-[#0071E3] hover:underline ml-1">Shop now &gt;</a>
      </div>

      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-[#111111] overflow-hidden flex flex-col items-center justify-start pt-20">
        <div className="z-10 text-center px-4 space-y-4 max-w-3xl">
          <h2 className="text-[#F5F5F7] text-sm md:text-base font-semibold tracking-wider uppercase">NEW ARRIVAL</h2>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Pro Laptop M3</h1>
          <p className="text-[#6E6E73] text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Mind-blowing. Head-turning.
          </p>
          <div className="flex items-center justify-center space-x-6 pt-4">
            <button className="bg-[#0071E3] text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-600 transition-colors">
              Buy
            </button>
            <a href="#" className="text-[#0071E3] text-lg font-medium hover:underline flex items-center">
              Learn more <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60%] md:h-[70%]">
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Laptop showing sleek design" 
            className="w-full h-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
        </div>
      </section>

      <section className="max-w-[2560px] mx-auto px-4 md:px-6 py-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6 h-auto md:h-[600px]">
          <div className="bg-[#F5F5F7] rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden h-[500px] md:h-full">
            <div className="z-10 space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Smart Phone 15</h2>
              <p className="text-[#6E6E73] text-lg md:text-xl">Titanium. So strong. So light. So Pro.</p>
              <div className="flex items-center justify-center space-x-6 pt-2">
                <button className="bg-[#0071E3] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors">Buy</button>
                <a href="#" className="text-[#0071E3] font-medium hover:underline flex items-center">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-1/2 md:h-[60%]">
              <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000" alt="Titanium Smartphone" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="bg-[#111111] text-white rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden h-[500px] md:h-full">
            <div className="z-10 space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Watch Ultra</h2>
              <p className="text-[#6E6E73] text-lg md:text-xl">Next level adventure.</p>
              <div className="flex items-center justify-center space-x-6 pt-2">
                <button className="bg-white text-[#111111] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">Buy</button>
                <a href="#" className="text-white font-medium hover:underline flex items-center">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-1/2 md:h-[60%] flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=1000" alt="Premium Smartwatch" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <ProductGrid 
        title="The latest." 
        subtitle="Take a look at what's new." 
        products={[
          { id: '1', badge: 'Free Engraving', name: 'Pro Earbuds 2', description: 'Active Noise Cancellation. Adaptive Audio.', price: '$249.00', image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Tablet Air', description: 'Light. Speed.', price: 'From $599.00', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Studio Display', description: 'A sight to be bold.', price: 'From $1599.00', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600' },
          { id: '4', name: 'Laptop Air 15"', description: 'Supersized Air.', price: 'From $1299.00', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />

      <section className="bg-[#111111] text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Designed to make a difference.</h2>
              <p className="text-[#6E6E73] text-xl md:text-2xl font-medium max-w-lg">Every product is built with the environment in mind. By 2030, all our devices will have a net-zero climate impact.</p>
              <a href="#" className="inline-flex items-center text-lg font-medium border-b-2 border-white pb-1 hover:text-[#6E6E73] hover:border-[#6E6E73] transition-colors">Learn about our environmental goals</a>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000" alt="Nature landscape" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhonesContent() {
  return (
    <>
      <SectionHero title="Smart Phones" subtitle="A camera so good, it's a phone." image="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=2000" />
      <ProductGrid 
        title="Which phone is right for you?" 
        products={[
          { id: '1', name: 'Smart Phone 15 Pro', description: 'The ultimate smartphone.', price: 'From $999', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Smart Phone 15', description: 'A total powerhouse.', price: 'From $799', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Smart Phone SE', description: 'Serious power. Serious value.', price: 'From $429', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />
    </>
  );
}

function ComputersContent() {
  return (
    <>
      <SectionHero title="Pro Laptops" subtitle="Power to the pros." image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000" dark={false} />
      <ProductGrid 
        title="Explore the lineup." 
        products={[
          { id: '1', name: 'Pro Laptop 14"', description: 'M3 Pro or M3 Max chip.', price: 'From $1599', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Pro Laptop 16"', description: 'The most advanced laptop.', price: 'From $2499', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Studio Desktop', description: 'Empower your station.', price: 'From $1999', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />
    </>
  );
}

function TabletsContent() {
  return (
    <>
      <SectionHero title="Tablets" subtitle="Your next computer is not a computer." image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=2000" />
      <ProductGrid 
        title="Meet the family." 
        products={[
          { id: '1', name: 'Tablet Pro', description: 'The ultimate experience.', price: 'From $799', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Tablet Air', description: 'Light. Speed.', price: 'From $599', image: 'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Tablet Mini', description: 'Mega power. Mini size.', price: 'From $499', image: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />
    </>
  );
}

function AudioContent() {
  return (
    <>
      <SectionHero title="Audio" subtitle="Hear the difference." image="https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=2000" dark={false} />
      <ProductGrid 
        title="Immersive sound." 
        products={[
          { id: '1', name: 'Pro Earbuds 2', description: 'Active Noise Cancellation.', price: '$249', image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Studio Headphones', description: 'High-fidelity audio.', price: '$549', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Smart Speaker', description: 'Room-filling sound.', price: '$299', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />
    </>
  );
}

function AccessoriesContent() {
  return (
    <>
      <div className="pt-20 pb-12 text-center bg-[#F5F5F7]">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Accessories</h1>
        <p className="text-xl text-[#6E6E73] mt-4">Mix and match. Make it yours.</p>
      </div>
      <ProductGrid 
        title="Featured Accessories" 
        products={[
          { id: '1', name: 'Leather Case', description: 'For Smart Phone 15', price: '$59', image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&q=80&w=600' },
          { id: '2', name: 'Wireless Charger', description: 'Fast charging pad', price: '$39', image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=600' },
          { id: '3', name: 'Watch Band', description: 'Sport Loop', price: '$49', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600' },
          { id: '4', name: 'USB-C Hub', description: 'Multi-port adapter', price: '$69', image: 'https://images.unsplash.com/photo-1587831990711-28ca74d7dfc9?auto=format&fit=crop&q=80&w=600' }
        ]} 
      />
    </>
  );
}

function SupportContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">E2 Support</h1>
        <div className="mt-8 max-w-2xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search support" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F5F5F7] border-none text-lg focus:ring-2 focus:ring-[#0071E3] outline-none"
            />
          </div>
        </div>
      </div>
      
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Repairs & Damage', 'Billing & Subscriptions', 'Passwords & Security'].map(topic => (
            <div key={topic} className="p-8 rounded-3xl bg-[#F5F5F7] hover:bg-gray-200 transition-colors cursor-pointer flex flex-col justify-between h-48">
              <h3 className="text-2xl font-semibold">{topic}</h3>
              <div className="flex items-center text-[#0071E3] font-medium">
                Get help <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('Store');

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] font-sans selection:bg-[#0071E3] selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5EA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActiveTab('Store')}>
              <div className="w-8 h-8 bg-[#111111] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tighter">E2</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {TABS.map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "text-sm transition-colors",
                      activeTab === tab ? "text-[#0071E3] font-semibold" : "text-[#111111] hover:text-[#0071E3]"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Utility Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#111111] hover:text-[#0071E3] transition-colors">
                <Search size={18} strokeWidth={2} />
              </button>
              <button className="text-[#111111] hover:text-[#0071E3] transition-colors relative">
                <ShoppingBag size={18} strokeWidth={2} />
                <span className="absolute -top-1 -right-1 bg-[#0071E3] text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full">2</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-[#111111]">
                <Search size={20} strokeWidth={2} />
              </button>
              <button className="text-[#111111] relative">
                <ShoppingBag size={20} strokeWidth={2} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#111111]"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5E5EA] absolute w-full h-[calc(100vh-56px)] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-3 py-4 text-xl border-b border-[#E5E5EA]",
                    activeTab === tab ? "font-bold text-[#0071E3]" : "font-medium text-[#111111]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content conditionally rendered based on active tab */}
      <main className="flex-grow">
        {activeTab === 'Store' && <StoreContent />}
        {activeTab === 'Phones' && <PhonesContent />}
        {activeTab === 'Computers' && <ComputersContent />}
        {activeTab === 'Tablets' && <TabletsContent />}
        {activeTab === 'Audio' && <AudioContent />}
        {activeTab === 'Accessories' && <AccessoriesContent />}
        {activeTab === 'Support' && <SupportContent />}
      </main>

      {/* Minimal Footer */}
      <footer className="bg-[#F5F5F7] border-t border-[#E5E5EA] pt-16 pb-8 text-[#6E6E73] text-xs mt-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 border-b border-[#E5E5EA] pb-12">
            <div className="space-y-4">
              <h5 className="text-[#111111] font-semibold text-sm">Shop and Learn</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Phones</a></li>
                <li><a href="#" className="hover:underline">Computers</a></li>
                <li><a href="#" className="hover:underline">Tablets</a></li>
                <li><a href="#" className="hover:underline">Audio</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#111111] font-semibold text-sm">Account</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Manage Your ID</a></li>
                <li><a href="#" className="hover:underline">Store Account</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#111111] font-semibold text-sm">Entertainment</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Music</a></li>
                <li><a href="#" className="hover:underline">TV+</a></li>
                <li><a href="#" className="hover:underline">Fitness+</a></li>
                <li><a href="#" className="hover:underline">Arcade</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#111111] font-semibold text-sm">About E2</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Newsroom</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>Copyright © 2024 E2 Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-[#E5E5EA]">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span className="text-[#E5E5EA]">|</span>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <span className="text-[#E5E5EA]">|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span className="text-[#E5E5EA]">|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
            <div>United States</div>
          </div>
        </div>
      </footer>
    </div>
  );
}