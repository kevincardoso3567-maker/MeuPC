/* ─────────────────────────────────────────
   MEU PC — hardwares.js
   ───────────────────────────────────────── */

/* ══════════════════════════════════════════
   BANCO DE COMPONENTES
   score: {gaming, criacao, office}  0-100
   watt: TDP em Watts
   price: R$ aproximado (2025)
══════════════════════════════════════════ */
const DB = {
    cpu: [
        { id:'i3-13100',  name:'Intel Core i3-13100',     socket:'LGA1700', ddr:'DDR4/DDR5', watt:60,  price:600,   score:{gaming:38,criacao:30,office:70},  cores:4,  ghz:'3.4/4.5GHz',  detail:'4 núcleos · LGA1700 · DDR4/DDR5' },
        { id:'i5-13400',  name:'Intel Core i5-13400',     socket:'LGA1700', ddr:'DDR4/DDR5', watt:65,  price:1100,  score:{gaming:62,criacao:55,office:82},  cores:10, ghz:'2.5/4.6GHz',  detail:'10 núcleos · LGA1700 · DDR4/DDR5' },
        { id:'i5-13600k', name:'Intel Core i5-13600K',    socket:'LGA1700', ddr:'DDR4/DDR5', watt:125, price:1500,  score:{gaming:74,criacao:68,office:85},  cores:14, ghz:'3.5/5.1GHz',  detail:'14 núcleos · LGA1700 · OC' },
        { id:'i7-13700k', name:'Intel Core i7-13700K',    socket:'LGA1700', ddr:'DDR4/DDR5', watt:125, price:2200,  score:{gaming:83,criacao:80,office:88},  cores:16, ghz:'3.4/5.4GHz',  detail:'16 núcleos · LGA1700 · OC' },
        { id:'i9-13900k', name:'Intel Core i9-13900K',    socket:'LGA1700', ddr:'DDR4/DDR5', watt:253, price:3500,  score:{gaming:90,criacao:92,office:90},  cores:24, ghz:'3.0/5.8GHz',  detail:'24 núcleos · LGA1700 · flagship' },
        { id:'i5-14400',  name:'Intel Core i5-14400',     socket:'LGA1700', ddr:'DDR4/DDR5', watt:65,  price:1200,  score:{gaming:65,criacao:58,office:83},  cores:10, ghz:'2.5/4.7GHz',  detail:'10 núcleos · LGA1700 · DDR4/DDR5' },
        { id:'i7-14700k', name:'Intel Core i7-14700K',    socket:'LGA1700', ddr:'DDR4/DDR5', watt:125, price:2600,  score:{gaming:87,criacao:85,office:89},  cores:20, ghz:'3.4/5.6GHz',  detail:'20 núcleos · LGA1700 · OC' },
        { id:'r5-5600',   name:'AMD Ryzen 5 5600',        socket:'AM4',     ddr:'DDR4',      watt:65,  price:850,   score:{gaming:66,criacao:60,office:80},  cores:6,  ghz:'3.5/4.4GHz',  detail:'6 núcleos · AM4 · DDR4' },
        { id:'r5-5600x',  name:'AMD Ryzen 5 5600X',       socket:'AM4',     ddr:'DDR4',      watt:65,  price:950,   score:{gaming:70,criacao:64,office:82},  cores:6,  ghz:'3.7/4.6GHz',  detail:'6 núcleos · AM4 · DDR4' },
        { id:'r7-5700x',  name:'AMD Ryzen 7 5700X',       socket:'AM4',     ddr:'DDR4',      watt:65,  price:1200,  score:{gaming:72,criacao:72,office:84},  cores:8,  ghz:'3.4/4.6GHz',  detail:'8 núcleos · AM4 · DDR4' },
        { id:'r5-7600',   name:'AMD Ryzen 5 7600',        socket:'AM5',     ddr:'DDR5',      watt:65,  price:1100,  score:{gaming:73,criacao:66,office:83},  cores:6,  ghz:'3.8/5.1GHz',  detail:'6 núcleos · AM5 · DDR5' },
        { id:'r5-7600x',  name:'AMD Ryzen 5 7600X',       socket:'AM5',     ddr:'DDR5',      watt:105, price:1300,  score:{gaming:76,criacao:70,office:84},  cores:6,  ghz:'4.7/5.3GHz',  detail:'6 núcleos · AM5 · DDR5 · OC' },
        { id:'r7-7700x',  name:'AMD Ryzen 7 7700X',       socket:'AM5',     ddr:'DDR5',      watt:105, price:1800,  score:{gaming:82,criacao:82,office:87},  cores:8,  ghz:'4.5/5.4GHz',  detail:'8 núcleos · AM5 · DDR5 · OC' },
        { id:'r9-7900x',  name:'AMD Ryzen 9 7900X',       socket:'AM5',     ddr:'DDR5',      watt:170, price:2800,  score:{gaming:86,criacao:90,office:89},  cores:12, ghz:'4.7/5.6GHz',  detail:'12 núcleos · AM5 · DDR5 · OC' },
        { id:'r9-7950x',  name:'AMD Ryzen 9 7950X',       socket:'AM5',     ddr:'DDR5',      watt:170, price:4200,  score:{gaming:88,criacao:96,office:91},  cores:16, ghz:'4.5/5.7GHz',  detail:'16 núcleos · AM5 · DDR5 · workstation' },
    ],
    mb: [
        { id:'b660m',   name:'ASUS Prime B660M-K',       socket:'LGA1700', ddr:'DDR4', ff:'mATX',  price:500,  score:30,  detail:'mATX · LGA1700 · DDR4 · B660' },
        { id:'b760m',   name:'MSI PRO B760M-A DDR4',     socket:'LGA1700', ddr:'DDR4', ff:'mATX',  price:650,  score:40,  detail:'mATX · LGA1700 · DDR4 · B760' },
        { id:'b760-d5', name:'Gigabyte B760 AORUS Elite DDR5', socket:'LGA1700', ddr:'DDR5', ff:'ATX', price:900, score:55, detail:'ATX · LGA1700 · DDR5 · B760' },
        { id:'z790',    name:'MSI MAG Z790 TOMAHAWK',    socket:'LGA1700', ddr:'DDR4/DDR5', ff:'ATX', price:1400, score:75, detail:'ATX · LGA1700 · DDR4/5 · Z790 · OC' },
        { id:'z790-d5', name:'ASUS ROG STRIX Z790-E',    socket:'LGA1700', ddr:'DDR5', ff:'ATX',   price:2200, score:90,  detail:'ATX · LGA1700 · DDR5 · Z790 · flagship' },
        { id:'b550m',   name:'ASUS Prime B550M-A',       socket:'AM4',     ddr:'DDR4', ff:'mATX',  price:450,  score:35,  detail:'mATX · AM4 · DDR4 · B550' },
        { id:'b550',    name:'MSI MAG B550 TOMAHAWK',    socket:'AM4',     ddr:'DDR4', ff:'ATX',   price:700,  score:55,  detail:'ATX · AM4 · DDR4 · B550' },
        { id:'x570',    name:'ASUS ROG Crosshair VIII',  socket:'AM4',     ddr:'DDR4', ff:'ATX',   price:1200, score:75,  detail:'ATX · AM4 · DDR4 · X570 · OC' },
        { id:'b650m',   name:'MSI PRO B650M-A DDR5',     socket:'AM5',     ddr:'DDR5', ff:'mATX',  price:800,  score:50,  detail:'mATX · AM5 · DDR5 · B650' },
        { id:'b650',    name:'ASUS TUF GAMING B650-PLUS',socket:'AM5',     ddr:'DDR5', ff:'ATX',   price:1100, score:65,  detail:'ATX · AM5 · DDR5 · B650' },
        { id:'x670e',   name:'Gigabyte X670E AORUS Master',socket:'AM5',   ddr:'DDR5', ff:'ATX',   price:2400, score:92,  detail:'ATX · AM5 · DDR5 · X670E · flagship' },
    ],
    ram: [
        { id:'8ddr4',    name:'8GB DDR4-3200 (1x8GB)',   ddr:'DDR4', gb:8,  mhz:3200, price:120,  score:20, detail:'8GB · DDR4-3200 · Single channel' },
        { id:'16ddr4',   name:'16GB DDR4-3200 (2x8GB)',  ddr:'DDR4', gb:16, mhz:3200, price:200,  score:45, detail:'16GB · DDR4-3200 · Dual channel ✓' },
        { id:'32ddr4',   name:'32GB DDR4-3600 (2x16GB)', ddr:'DDR4', gb:32, mhz:3600, price:380,  score:68, detail:'32GB · DDR4-3600 · Dual channel ✓' },
        { id:'64ddr4',   name:'64GB DDR4-3200 (2x32GB)', ddr:'DDR4', gb:64, mhz:3200, price:700,  score:78, detail:'64GB · DDR4-3200 · Dual channel ✓' },
        { id:'16ddr5',   name:'16GB DDR5-5600 (2x8GB)',  ddr:'DDR5', gb:16, mhz:5600, price:300,  score:50, detail:'16GB · DDR5-5600 · Dual channel ✓' },
        { id:'32ddr5',   name:'32GB DDR5-6000 (2x16GB)', ddr:'DDR5', gb:32, mhz:6000, price:560,  score:75, detail:'32GB · DDR5-6000 · Dual channel ✓' },
        { id:'64ddr5',   name:'64GB DDR5-5600 (2x32GB)', ddr:'DDR5', gb:64, mhz:5600, price:1100, score:88, detail:'64GB · DDR5-5600 · Dual channel ✓' },
        { id:'96ddr5',   name:'96GB DDR5-6400 (2x48GB)', ddr:'DDR5', gb:96, mhz:6400, price:1800, score:95, detail:'96GB · DDR5-6400 · Dual channel ✓' },
    ],
    gpu: [
        { id:'none',      name:'Sem GPU dedicada (iGPU)', vram:0,  watt:0,   price:0,    score:{gaming:5, criacao:8,  office:60}, detail:'Gráficos integrados' },
        { id:'rx6600',    name:'AMD RX 6600',             vram:8,  watt:132, price:950,  score:{gaming:55,criacao:45, office:70}, detail:'8GB GDDR6 · 132W · 1080p' },
        { id:'rtx3060',   name:'NVIDIA RTX 3060',         vram:12, watt:170, price:1400, score:{gaming:62,criacao:60, office:72}, detail:'12GB GDDR6 · 170W · 1080p/1440p' },
        { id:'rx6700xt',  name:'AMD RX 6700 XT',         vram:12, watt:230, price:1600, score:{gaming:68,criacao:55, office:72}, detail:'12GB GDDR6 · 230W · 1440p' },
        { id:'rtx3070',   name:'NVIDIA RTX 3070',         vram:8,  watt:220, price:2000, score:{gaming:74,criacao:70, office:74}, detail:'8GB GDDR6X · 220W · 1440p' },
        { id:'rx7700xt',  name:'AMD RX 7700 XT',         vram:12, watt:245, price:2000, score:{gaming:73,criacao:62, office:73}, detail:'12GB GDDR6 · 245W · 1440p' },
        { id:'rtx4060',   name:'NVIDIA RTX 4060',         vram:8,  watt:115, price:1800, score:{gaming:70,criacao:65, office:73}, detail:'8GB GDDR6 · 115W · 1080p/1440p' },
        { id:'rtx4060ti', name:'NVIDIA RTX 4060 Ti',      vram:16, watt:160, price:2400, score:{gaming:77,criacao:72, office:75}, detail:'16GB GDDR6 · 160W · 1440p' },
        { id:'rx7800xt',  name:'AMD RX 7800 XT',         vram:16, watt:263, price:2500, score:{gaming:80,criacao:72, office:76}, detail:'16GB GDDR6 · 263W · 1440p/4K' },
        { id:'rtx4070',   name:'NVIDIA RTX 4070',         vram:12, watt:200, price:3200, score:{gaming:84,criacao:80, office:78}, detail:'12GB GDDR6X · 200W · 1440p/4K' },
        { id:'rtx4070ti', name:'NVIDIA RTX 4070 Ti Super',vram:16, watt:285, price:4200, score:{gaming:89,criacao:86, office:80}, detail:'16GB GDDR6X · 285W · 4K' },
        { id:'rx7900xtx', name:'AMD RX 7900 XTX',        vram:24, watt:355, price:5000, score:{gaming:92,criacao:85, office:82}, detail:'24GB GDDR6 · 355W · 4K flagship' },
        { id:'rtx4080',   name:'NVIDIA RTX 4080 Super',   vram:16, watt:320, price:5800, score:{gaming:93,criacao:90, office:83}, detail:'16GB GDDR6X · 320W · 4K' },
        { id:'rtx4090',   name:'NVIDIA RTX 4090',         vram:24, watt:450, price:9000, score:{gaming:98,criacao:97, office:85}, detail:'24GB GDDR6X · 450W · topo absoluto' },
    ],
    ssd: [
        { id:'hdd1tb',    name:'HDD 1TB Seagate Barracuda',type:'HDD',  mb:150,  price:200,  score:15, detail:'HDD · 1TB · ~150MB/s · 7200RPM' },
        { id:'sata250',   name:'SSD SATA 250GB Kingston',  type:'SATA', mb:550,  price:160,  score:35, detail:'SATA · 250GB · 550MB/s' },
        { id:'sata500',   name:'SSD SATA 500GB Samsung 870',type:'SATA',mb:560,  price:250,  score:40, detail:'SATA · 500GB · 560MB/s' },
        { id:'nvme3-500', name:'SSD NVMe PCIe 3.0 500GB',  type:'NVMe', mb:3500, price:280,  score:62, detail:'NVMe PCIe 3.0 · 500GB · 3500MB/s' },
        { id:'nvme3-1tb', name:'SSD NVMe PCIe 3.0 1TB WD Blue', type:'NVMe', mb:3500, price:420, score:68, detail:'NVMe PCIe 3.0 · 1TB · 3500MB/s' },
        { id:'nvme4-1tb', name:'SSD NVMe PCIe 4.0 1TB Samsung 980 Pro', type:'NVMe', mb:7000, price:560, score:80, detail:'NVMe PCIe 4.0 · 1TB · 7000MB/s' },
        { id:'nvme4-2tb', name:'SSD NVMe PCIe 4.0 2TB WD Black', type:'NVMe', mb:7300, price:900, score:85, detail:'NVMe PCIe 4.0 · 2TB · 7300MB/s' },
        { id:'nvme4-4tb', name:'SSD NVMe PCIe 4.0 4TB Samsung 990 Pro', type:'NVMe', mb:7450, price:1800, score:90, detail:'NVMe PCIe 4.0 · 4TB · 7450MB/s' },
    ],
    psu: [
        { id:'450w-br',  name:'Fonte 450W 80+ Bronze',    watt:450,  cert:'Bronze',   price:250, detail:'450W · 80+ Bronze · Não modular' },
        { id:'550w-br',  name:'Fonte 550W 80+ Bronze',    watt:550,  cert:'Bronze',   price:320, detail:'550W · 80+ Bronze · Semi-modular' },
        { id:'650w-gd',  name:'Fonte 650W 80+ Gold',      watt:650,  cert:'Gold',     price:450, detail:'650W · 80+ Gold · Semi-modular' },
        { id:'750w-gd',  name:'Fonte 750W 80+ Gold',      watt:750,  cert:'Gold',     price:580, detail:'750W · 80+ Gold · Modular' },
        { id:'850w-gd',  name:'Fonte 850W 80+ Gold',      watt:850,  cert:'Gold',     price:700, detail:'850W · 80+ Gold · Modular' },
        { id:'1000w-gd', name:'Fonte 1000W 80+ Gold',     watt:1000, cert:'Gold',     price:900, detail:'1000W · 80+ Gold · Modular' },
        { id:'850w-pt',  name:'Fonte 850W 80+ Platinum',  watt:850,  cert:'Platinum', price:950, detail:'850W · 80+ Platinum · Modular' },
        { id:'1000w-pt', name:'Fonte 1000W 80+ Platinum', watt:1000, cert:'Platinum', price:1150,detail:'1000W · 80+ Platinum · Modular' },
        { id:'1200w-pt', name:'Fonte 1200W 80+ Platinum', watt:1200, cert:'Platinum', price:1500,detail:'1200W · 80+ Platinum · Full Modular' },
    ],
    cooler: [
        { id:'stock',    name:'Cooler de Caixa (Box)',     type:'Air',  tdp:65,  price:0,   score:20, detail:'Air cooler stock · Até 65W TDP' },
        { id:'hyper212', name:'Cooler Master Hyper 212',   type:'Air',  tdp:150, price:150, score:55, detail:'Air cooler tower · Até 150W · clássico' },
        { id:'nh-u12s',  name:'Noctua NH-U12S',            type:'Air',  tdp:150, price:380, score:65, detail:'Air cooler premium · Silencioso · 150W' },
        { id:'nh-d15',   name:'Noctua NH-D15',             type:'Air',  tdp:250, price:600, score:80, detail:'Melhor air cooler do mercado · 250W' },
        { id:'be-pure',  name:'be quiet! Pure Rock 2',     type:'Air',  tdp:150, price:200, score:58, detail:'Air cooler · Silencioso · 150W' },
        { id:'aio240',   name:'Corsair H100x AIO 240mm',   type:'AIO',  tdp:200, price:450, score:72, detail:'AIO 240mm · 2x120mm · 200W TDP' },
        { id:'aio280',   name:'NZXT Kraken 280 AIO',       type:'AIO',  tdp:250, price:700, score:80, detail:'AIO 280mm · 2x140mm · 250W TDP' },
        { id:'aio360',   name:'Corsair iCUE H150i AIO 360',type:'AIO',  tdp:300, price:900, score:90, detail:'AIO 360mm · 3x120mm · 300W TDP' },
        { id:'aio360-2', name:'NZXT Kraken Elite 360',     type:'AIO',  tdp:300, price:1200,score:92, detail:'AIO 360mm · RGB LCD · 300W TDP' },
    ],
    case: [
        { id:'basic',    name:'Gabinete Básico (Genérico)', ff:'mATX/ATX', airflow:30, price:100, detail:'Mid Tower · Airflow básico' },
        { id:'aerocool', name:'AeroCool Cylon 3',           ff:'ATX',      airflow:45, price:200, detail:'Mid Tower · Vidro temperado · RGB' },
        { id:'corsair4k',name:'Corsair 4000D Airflow',      ff:'ATX',      airflow:85, price:500, detail:'Mid Tower · Mesh frontal · excelente airflow' },
        { id:'lianli',   name:'Lian Li LANCOOL 216',        ff:'ATX',      airflow:90, price:600, detail:'Mid Tower · Mesh 360° · top airflow' },
        { id:'fractal',  name:'Fractal Design Meshify 2',   ff:'ATX',      airflow:88, price:700, detail:'Mid/Full Tower · Mesh · silencioso' },
        { id:'nzxth9',   name:'NZXT H9 Flow',               ff:'ATX',      airflow:92, price:900, detail:'Mid Tower · Vidro 4 lados · premium airflow' },
        { id:'o11d',     name:'Lian Li O11 Dynamic EVO',    ff:'ATX',      airflow:80, price:800, detail:'Mid Tower · layout vertical · 9 fans' },
        { id:'itx',      name:'Fractal Design Node 304',    ff:'ITX',      airflow:65, price:450, detail:'Mini-ITX · Compacto · 6 HDDs' },
    ],
};

/* ══════════════════════════════════════════
   PRESETS DE BUILD
══════════════════════════════════════════ */
const PRESETS = {
    office: {
        cpu:'i3-13100', mb:'b760m', ram:'16ddr4', gpu:'none',
        ssd:'sata500',  psu:'450w-br', cooler:'stock', case:'aerocool'
    },
    gaming: {
        cpu:'r5-7600x', mb:'b650', ram:'32ddr5', gpu:'rtx4070',
        ssd:'nvme4-1tb', psu:'750w-gd', cooler:'aio240', case:'corsair4k'
    },
    workstation: {
        cpu:'r9-7950x', mb:'x670e', ram:'64ddr5', gpu:'rtx4090',
        ssd:'nvme4-2tb', psu:'1200w-pt', cooler:'aio360', case:'fractal'
    },
};

/* ══════════════════════════════════════════
   ESTADO
══════════════════════════════════════════ */
const build = { cpu:null, mb:null, ram:null, gpu:null, ssd:null, psu:null, cooler:null, case:null };

/* ══════════════════════════════════════════
   POPULAR SELECTS
══════════════════════════════════════════ */
function populateSelects() {
    Object.entries(DB).forEach(([type, items]) => {
        const sel = document.getElementById(`sel-${type}`);
        if (!sel) return;
        items.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = `${item.name}  —  R$${item.price.toLocaleString('pt-BR')}`;
            sel.appendChild(opt);
        });
        sel.addEventListener('change', () => {
            const found = items.find(i => i.id === sel.value) || null;
            build[type] = found;
            // detail
            const detail = document.getElementById(`detail-${type}`);
            if (detail) {
                detail.textContent = found ? found.detail : '';
                detail.classList.toggle('visible', !!found);
            }
            // visual slot
            const vis = document.getElementById(`vis-${type}`);
            if (vis) vis.classList.toggle('installed', !!found);
            update();
        });
    });
}

/* ══════════════════════════════════════════
   CÁLCULOS
══════════════════════════════════════════ */
function totalPrice() {
    return Object.values(build).reduce((s, c) => s + (c ? c.price : 0), 0);
}

function totalWatt() {
    const cpuW = build.cpu  ? build.cpu.watt  : 0;
    const gpuW = build.gpu  ? build.gpu.watt  : 0;
    const ramW = build.ram  ? Math.ceil(build.ram.gb * 0.5) : 0;
    const ssdW = build.ssd  ? 5 : 0;
    const mbW  = build.mb   ? 30 : 0;
    const misc = 20; // fans, USB, etc.
    return cpuW + gpuW + ramW + ssdW + mbW + misc;
}

function perfScore() {
    if (!build.cpu || !build.gpu) return null;
    const cpu   = build.cpu.score;
    const gpu   = build.gpu.score;
    const ramB  = build.ram ? (build.ram.gb >= 32 ? 1 : build.ram.gb >= 16 ? 0.85 : 0.65) : 0.5;
    const ssdB  = build.ssd ? (build.ssd.type === 'NVMe' ? 1 : build.ssd.type === 'SATA' ? 0.85 : 0.6) : 0.5;

    const gaming    = Math.round((cpu.gaming   * 0.4 + gpu.gaming   * 0.6) * ramB);
    const criacao   = Math.round((cpu.criacao  * 0.55 + gpu.criacao * 0.45) * ramB * ssdB);
    const office    = Math.round((cpu.office   * 0.7  + gpu.office  * 0.3) * ramB);

    // temperatura
    const cpuTdp   = build.cpu.watt;
    const coolerTdp= build.cooler ? build.cooler.tdp : 65;
    const tempRatio= Math.min(coolerTdp / (cpuTdp + 1), 1);
    const caseAf   = build.case ? build.case.airflow : 50;
    const temp     = Math.round(((tempRatio * 0.6) + (caseAf / 100 * 0.4)) * 100);

    return { gaming, criacao, office, temp };
}

/* ══════════════════════════════════════════
   COMPATIBILIDADE
══════════════════════════════════════════ */
function checkCompat() {
    const msgs = [];

    if (!build.cpu || !build.mb) {
        if (Object.values(build).some(Boolean))
            msgs.push({ type:'warn', text:'Selecione CPU e Placa-Mãe para verificar compatibilidade de socket.' });
        return msgs;
    }

    // Socket
    if (build.cpu.socket !== build.mb.socket) {
        msgs.push({ type:'error', text:`⚠ Socket incompatível! CPU ${build.cpu.socket} ≠ MB ${build.mb.socket}. Troque um dos dois.` });
    } else {
        msgs.push({ type:'ok', text:`Socket compatível: ${build.cpu.socket} ✓` });
    }

    // DDR
    if (build.ram) {
        const cpuDdr  = build.cpu.ddr;
        const mbDdr   = build.mb.ddr;
        const ramDdr  = build.ram.ddr;
        const cpuOk   = cpuDdr.includes(ramDdr);
        const mbOk    = mbDdr.includes(ramDdr);
        if (!cpuOk || !mbOk) {
            msgs.push({ type:'error', text:`RAM ${ramDdr} incompatível com ${!cpuOk ? 'CPU' : 'MB'} (suporta ${!cpuOk ? cpuDdr : mbDdr}).` });
        } else {
            msgs.push({ type:'ok', text:`Memória ${ramDdr} compatível com CPU e MB ✓` });
        }
        if (build.ram.gb < 16) {
            msgs.push({ type:'warn', text:`${build.ram.gb}GB de RAM pode ser insuficiente. Recomendamos 16GB ou mais.` });
        }
    }

    // PSU
    if (build.psu) {
        const draw = totalWatt();
        const margin = build.psu.watt - draw;
        const pct = (draw / build.psu.watt) * 100;
        if (pct > 90) {
            msgs.push({ type:'error', text:`Fonte subcapacitada! ${draw}W de consumo para fonte de ${build.psu.watt}W (<10% margem). Risco de instabilidade.` });
        } else if (pct > 75) {
            msgs.push({ type:'warn', text:`Fonte no limite (${pct.toFixed(0)}% de uso). Considere uma fonte maior para segurança.` });
        } else {
            msgs.push({ type:'ok', text:`Fonte adequada: ${draw}W consumo · ${build.psu.watt}W disponível · ${margin}W de margem ✓` });
        }
    }

    // Cooler vs CPU TDP
    if (build.cooler && build.cpu) {
        if (build.cooler.tdp < build.cpu.watt) {
            msgs.push({ type:'error', text:`Cooler insuficiente! TDP suportado (${build.cooler.tdp}W) < TDP da CPU (${build.cpu.watt}W). Haverá throttling.` });
        } else if (build.cooler.tdp < build.cpu.watt * 1.2) {
            msgs.push({ type:'warn', text:`Cooler no limite para esta CPU. Funciona, mas sem margem para overclock.` });
        } else {
            msgs.push({ type:'ok', text:`Refrigeração adequada: ${build.cooler.tdp}W de suporte para CPU de ${build.cpu.watt}W ✓` });
        }
    }

    // GPU + RAM para gaming
    if (build.gpu && build.gpu.id !== 'none' && build.ram && build.ram.gb < 16) {
        msgs.push({ type:'warn', text:`Para gaming com GPU dedicada, recomendamos pelo menos 16GB de RAM.` });
    }

    // Single channel
    if (build.ram && build.ram.name.includes('1x')) {
        msgs.push({ type:'warn', text:`RAM em single channel. Adicione um segundo pente para ativar dual channel (+20-30% de performance).` });
    }

    // Build completa
    const filled = Object.values(build).filter(Boolean).length;
    if (filled === 8) {
        msgs.push({ type:'ok', text:`Build completa! Todos os 8 componentes selecionados ✓` });
    }

    return msgs;
}

/* ══════════════════════════════════════════
   ATUALIZAR UI
══════════════════════════════════════════ */
function update() {
    // Orçamento
    const price = totalPrice();
    document.getElementById('budgetVal').textContent = `R$ ${price.toLocaleString('pt-BR')}`;
    const maxBudget = 15000;
    document.getElementById('budgetBar').style.width = Math.min((price / maxBudget) * 100, 100) + '%';

    // Consumo
    const draw = totalWatt();
    const psuW = build.psu ? build.psu.watt : 0;
    document.getElementById('powerDraw').textContent = draw + 'W';
    document.getElementById('powerPsu').textContent  = psuW ? psuW + 'W' : '—';

    if (psuW) {
        const pct = (draw / psuW) * 100;
        const margin = psuW - draw;
        document.getElementById('powerMargin').textContent = `+${margin}W`;
        const bar = document.getElementById('powerBar');
        bar.style.width = Math.min(pct, 100) + '%';
        bar.className = 'power-bar ' + (pct > 90 ? 'danger' : pct > 75 ? 'warning' : 'ok');
    } else {
        document.getElementById('powerMargin').textContent = '—';
        document.getElementById('powerBar').style.width = '0%';
    }

    // Performance
    const scores = perfScore();
    ['gaming','criacao','office','temp'].forEach(k => {
        const el  = document.getElementById(`score-${k}`);
        const val = document.getElementById(`val-${k}`);
        if (scores) {
            el.style.width  = scores[k] + '%';
            val.textContent = scores[k] + '/100';
        } else {
            el.style.width  = '0%';
            val.textContent = '—';
        }
    });

    // Compatibilidade
    const compat = checkCompat();
    const list   = document.getElementById('compatList');
    if (compat.length === 0) {
        list.innerHTML = '<div class="compat-empty">Selecione os componentes para ver a análise.</div>';
    } else {
        const icons = { ok:'fa-circle-check', warn:'fa-triangle-exclamation', error:'fa-circle-xmark' };
        list.innerHTML = compat.map(c =>
            `<div class="compat-item ${c.type}"><i class="fas ${icons[c.type]}"></i><span>${c.text}</span></div>`
        ).join('');
    }

    // LED bar do PC visual
    const filled = Object.values(build).filter(Boolean).length;
    const pct    = (filled / 8) * 100;
    let ledEl = document.getElementById('pcLedBar');
    if (!ledEl.querySelector('.pc-led-fill')) {
        ledEl.innerHTML = '<div class="pc-led-fill" id="pcLedFill"></div>';
    }
    document.getElementById('pcLedFill').style.width = pct + '%';
}

/* ══════════════════════════════════════════
   PRESETS
══════════════════════════════════════════ */
document.querySelectorAll('.preset-btn[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
        const preset = PRESETS[btn.dataset.preset];
        if (!preset) return;
        Object.entries(preset).forEach(([type, id]) => {
            const sel   = document.getElementById(`sel-${type}`);
            const items = DB[type];
            if (!sel || !items) return;
            sel.value = id;
            const found = items.find(i => i.id === id) || null;
            build[type] = found;
            const detail = document.getElementById(`detail-${type}`);
            if (detail) { detail.textContent = found ? found.detail : ''; detail.classList.toggle('visible', !!found); }
            const vis = document.getElementById(`vis-${type}`);
            if (vis) vis.classList.toggle('installed', !!found);
        });
        update();
    });
});

document.getElementById('clearBuild').addEventListener('click', () => {
    Object.keys(build).forEach(k => { build[k] = null; });
    Object.keys(DB).forEach(type => {
        const sel = document.getElementById(`sel-${type}`);
        if (sel) sel.value = '';
        const detail = document.getElementById(`detail-${type}`);
        if (detail) { detail.textContent = ''; detail.classList.remove('visible'); }
        const vis = document.getElementById(`vis-${type}`);
        if (vis) vis.classList.remove('installed');
    });
    update();
});

/* ══════════════════════════════════════════
   NAV SCROLL SPY
══════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const y = window.scrollY + 90;
    sections.forEach(sec => {
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (!link) return;
        link.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
    });
}, { passive: true });

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
populateSelects();
update();
