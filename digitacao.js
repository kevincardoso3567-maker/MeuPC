/* ─────────────────────────────────────────
   MEU PC — digitacao.js
   ───────────────────────────────────────── */

/* ══════════════════════════════════════════
   BANCO DE CONTEÚDO
══════════════════════════════════════════ */
const CONTENT = {
    words: {
        pt: {
            easy:   ['casa','gato','carro','mesa','livro','porta','janela','água','pão','sol','lua','mar','paz','amor','flor','rua','céu','lago','vento','fogo','terra','mão','olho','boca','pé','dia','noite','hora','tempo','vida','dor','bem','mal','novo','velho','alto','baixo','forte','fraco','bom','rei','cor','luz','sombra','frio','quente','lento','rápido','fácil','difícil'],
            medium: ['trabalho','computador','internet','linguagem','teclado','monitor','sistema','arquivo','programa','software','hardware','memória','processador','resolução','qualidade','experiência','conhecimento','produtividade','desempenho','configuração','desenvolvimento','aplicativo','interface','segurança','gerenciador','navegador','extensão','instalação','atualização','documentação'],
            hard:   ['interdependência','responsabilidade','imprescindível','desenvolvimento','funcionalidade','implementação','processamento','característica','transparência','compatibilidade','vulnerabilidade','descontinuidade','representatividade','institucionalização','inconstitucionalidade','desfragmentação','interoperabilidade','personalização','especificações','configurações'],
        },
        en: {
            easy:   ['cat','dog','house','car','tree','book','door','window','water','bread','sun','moon','sea','peace','love','flower','street','sky','lake','wind','fire','earth','hand','eye','mouth','foot','day','night','hour','time','life','pain','good','bad','new','old','high','low','strong','weak','king','color','light','shadow','cold','hot','slow','fast','easy','hard'],
            medium: ['computer','keyboard','monitor','software','hardware','memory','processor','resolution','quality','experience','knowledge','productivity','performance','configuration','development','application','interface','security','manager','browser','extension','installation','update','documentation','technology','programming','algorithm','framework','database','architecture'],
            hard:   ['interconnectedness','responsibility','indispensable','development','functionality','implementation','processing','characteristic','transparency','compatibility','vulnerability','discontinuity','representativeness','institutionalization','unconstitutionality','defragmentation','interoperability','customization','specifications','configurations'],
        },
        es: {
            easy:   ['casa','gato','coche','mesa','libro','puerta','ventana','agua','pan','sol','luna','mar','paz','amor','flor','calle','cielo','lago','viento','fuego','tierra','mano','ojo','boca','pie','día','noche','hora','tiempo','vida','dolor','bien','mal','nuevo','viejo','alto','bajo','fuerte','débil','bueno','rey','color','luz','sombra','frío','caliente','lento','rápido'],
            medium: ['trabajo','computadora','internet','lenguaje','teclado','monitor','sistema','archivo','programa','software','hardware','memoria','procesador','resolución','calidad','experiencia','conocimiento','productividad','rendimiento','configuración','desarrollo','aplicación','interfaz','seguridad','administrador','navegador','extensión','instalación','actualización','documentación'],
            hard:   ['interdependencia','responsabilidad','imprescindible','desarrollo','funcionalidad','implementación','procesamiento','característica','transparencia','compatibilidad','vulnerabilidad','discontinuidad','representatividad','institucionalización','inconstitucionalidad','desfragmentación','interoperabilidad','personalización','especificaciones','configuraciones'],
        },
        fr: {
            easy:   ['chat','chien','maison','voiture','arbre','livre','porte','fenêtre','eau','pain','soleil','lune','mer','paix','amour','fleur','rue','ciel','lac','vent','feu','terre','main','oeil','bouche','pied','jour','nuit','heure','temps','vie','douleur','bien','mal','nouveau','vieux','haut','bas','fort','faible','bon','roi','couleur','lumière','ombre','froid','chaud'],
            medium: ['ordinateur','clavier','moniteur','logiciel','matériel','mémoire','processeur','résolution','qualité','expérience','connaissance','productivité','performance','configuration','développement','application','interface','sécurité','gestionnaire','navigateur','extension','installation','mise à jour','documentation'],
            hard:   ['interdépendance','responsabilité','indispensable','développement','fonctionnalité','implémentation','traitement','caractéristique','transparence','compatibilité','vulnérabilité','discontinuité','représentativité','institutionnalisation','inconstitutionnalité','défragmentation','interopérabilité','personnalisation','spécifications','configurations'],
        },
        de: {
            easy:   ['Katze','Hund','Haus','Auto','Baum','Buch','Tür','Fenster','Wasser','Brot','Sonne','Mond','Meer','Frieden','Liebe','Blume','Straße','Himmel','See','Wind','Feuer','Erde','Hand','Auge','Mund','Fuß','Tag','Nacht','Stunde','Zeit','Leben','Schmerz','gut','schlecht','neu','alt','hoch','niedrig','stark','schwach'],
            medium: ['Computer','Tastatur','Monitor','Software','Hardware','Speicher','Prozessor','Auflösung','Qualität','Erfahrung','Wissen','Produktivität','Leistung','Konfiguration','Entwicklung','Anwendung','Schnittstelle','Sicherheit','Manager','Browser','Erweiterung','Installation','Aktualisierung','Dokumentation'],
            hard:   ['Interdependenz','Verantwortung','unentbehrlich','Entwicklung','Funktionalität','Implementierung','Verarbeitung','Merkmal','Transparenz','Kompatibilität','Verwundbarkeit','Diskontinuität','Repräsentativität','Institutionalisierung','Verfassungswidrigkeit','Defragmentierung','Interoperabilität','Personalisierung','Spezifikationen','Konfigurationen'],
        },
    },
    sentences: {
        pt: ['O desenvolvimento de software requer dedicação e prática constante.','A tecnologia avançou muito nos últimos anos transformando o modo de vida.','Manter o computador organizado e limpo melhora significativamente o desempenho.','Aprender a digitar rapidamente é uma habilidade valiosa no mundo digital.','O código limpo é mais fácil de manter e entender por outros desenvolvedores.','Sempre faça backup dos seus arquivos importantes para evitar perdas.','A internet transformou completamente a forma como nos comunicamos.','Conhecimento em informática é essencial no mercado de trabalho atual.','Pratique a digitação todos os dias e veja sua velocidade aumentar.','Segurança digital é tão importante quanto a segurança física.'],
        en: ['Software development requires dedication and constant practice to master.','Technology has advanced significantly in recent years transforming daily life.','Keeping your computer organized and clean improves overall performance.','Learning to type quickly is a valuable skill in the digital world.','Clean code is easier to maintain and understand by other developers.','Always back up your important files to prevent data loss.','The internet completely transformed the way we communicate with others.','Computer skills are essential in today\'s job market.','Practice typing every day and watch your speed increase over time.','Digital security is just as important as physical security.'],
        es: ['El desarrollo de software requiere dedicación y práctica constante.','La tecnología ha avanzado mucho en los últimos años transformando la vida.','Mantener el computador organizado mejora significativamente el rendimiento.','Aprender a escribir rápido es una habilidad valiosa en el mundo digital.','El código limpio es más fácil de mantener y entender por otros.','Siempre haz copias de seguridad de tus archivos importantes.','Internet transformó completamente la forma en que nos comunicamos.','Los conocimientos de informática son esenciales en el mercado laboral.'],
        fr: ['Le développement logiciel nécessite dédication et pratique constante.','La technologie a beaucoup progressé ces dernières années.','Garder son ordinateur organisé améliore significativement les performances.','Apprendre à taper rapidement est une compétence précieuse.','Le code propre est plus facile à maintenir et comprendre.','Sauvegardez toujours vos fichiers importants pour éviter les pertes.'],
        de: ['Softwareentwicklung erfordert Hingabe und ständige Übung.','Die Technologie hat sich in den letzten Jahren stark weiterentwickelt.','Einen organisierten Computer zu haben verbessert die Leistung erheblich.','Schnelles Tippen zu lernen ist eine wertvolle Fähigkeit.','Sauberer Code ist leichter zu warten und zu verstehen.','Sichern Sie immer Ihre wichtigen Dateien um Datenverlust zu vermeiden.'],
    },
    numbers: {
        all: () => {
            const nums = [];
            for (let i = 0; i < 60; i++) nums.push(String(Math.floor(Math.random() * 9999)));
            return nums;
        },
    },
    code: {
        all: [
            'const result = arr.filter(x => x > 0).map(x => x * 2);',
            'function debounce(fn, delay) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), delay); }; }',
            'const fetchData = async (url) => { const res = await fetch(url); return res.json(); };',
            'document.querySelectorAll(".card").forEach((el, i) => { el.style.animationDelay = `${i * 0.1}s`; });',
            'const obj = { name: "user", age: 25, active: true, roles: ["admin", "editor"] };',
            'class EventEmitter { constructor() { this.events = {}; } on(e, fn) { (this.events[e] ??= []).push(fn); } }',
            'const [state, setState] = useState({ loading: false, data: null, error: null });',
            'export default function Layout({ children }) { return <main className="container">{children}</main>; }',
            'SELECT u.name, COUNT(o.id) AS orders FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id;',
            'git commit -m "feat: add typing speed tracker with WPM counter and accuracy metrics"',
        ],
    },
};

/* ══════════════════════════════════════════
   ESTADO
══════════════════════════════════════════ */
const state = {
    lang:       'pt',
    mode:       'words',
    time:       30,
    diff:       'easy',
    started:    false,
    finished:   false,
    startTime:  null,
    timer:      null,
    remaining:  30,
    totalTime:  30,
    words:      [],
    currentIdx: 0,    // índice do caractere atual no texto plano
    plainText:  '',
    typed:      '',
    errors:     0,
    correctChars: 0,
    history:    [],
    wpmSamples: [],
    bestWpm:    0,
};

/* ══════════════════════════════════════════
   ELEMENTOS DOM
══════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const typingWords   = $('typingWords');
const hiddenInput   = $('hiddenInput');
const wpmVal        = $('wpmVal');
const accVal        = $('accVal');
const timerVal      = $('timerVal');
const errorsVal     = $('errorsVal');
const charsVal      = $('charsVal');
const ringProgress  = $('ringProgress');
const startHint     = $('startHint');
const historyEmpty  = $('historyEmpty');
const historyGrid   = $('historyGrid');
const resultOverlay = $('resultOverlay');
const RING_CIRCUM    = 2 * Math.PI * 26; // r=26

/* ══════════════════════════════════════════
   GERAR TEXTO
══════════════════════════════════════════ */
function generateText() {
    if (state.mode === 'numbers') {
        const nums = CONTENT.numbers.all();
        state.plainText = nums.join(' ');
        return;
    }
    if (state.mode === 'code') {
        const pool = CONTENT.code.all;
        const picked = pool[Math.floor(Math.random() * pool.length)];
        state.plainText = picked;
        return;
    }
    if (state.mode === 'sentences') {
        const pool = CONTENT.sentences[state.lang] || CONTENT.sentences.en;
        const picked = pool[Math.floor(Math.random() * pool.length)];
        state.plainText = picked;
        return;
    }
    // words
    const pool = (CONTENT.words[state.lang] || CONTENT.words.pt)[state.diff] || CONTENT.words.pt.easy;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    // repetir até ter pelo menos 80 palavras
    let words = [];
    while (words.length < 80) words = words.concat(shuffled);
    state.plainText = words.slice(0, 80).join(' ');
}

/* ══════════════════════════════════════════
   RENDERIZAR LETRAS
══════════════════════════════════════════ */
function renderText() {
    typingWords.innerHTML = '';
    [...state.plainText].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.dataset.index = i;
        span.textContent = char === ' ' ? '\u00A0' : char;
        typingWords.appendChild(span);
    });
    updateLetterStates();
}

function updateLetterStates() {
    const letters = typingWords.querySelectorAll('.letter');
    letters.forEach((span, i) => {
        span.className = 'letter';
        if (i < state.typed.length) {
            span.classList.add(state.typed[i] === state.plainText[i] ? 'correct' : 'wrong');
        } else if (i === state.typed.length) {
            span.classList.add('current');
            // scroll suave
            span.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    });
}

/* ══════════════════════════════════════════
   CALCULAR WPM / ACC
══════════════════════════════════════════ */
function calcWpm() {
    if (!state.startTime) return 0;
    const elapsed = (Date.now() - state.startTime) / 1000 / 60;
    if (elapsed <= 0) return 0;
    const correct = [...state.typed].filter((c, i) => c === state.plainText[i]).length;
    return Math.round((correct / 5) / elapsed);
}

function calcAcc() {
    if (!state.typed.length) return 100;
    const correct = [...state.typed].filter((c, i) => c === state.plainText[i]).length;
    return Math.round((correct / state.typed.length) * 100);
}

function calcConsistency() {
    if (state.wpmSamples.length < 2) return 100;
    const avg = state.wpmSamples.reduce((a, b) => a + b, 0) / state.wpmSamples.length;
    const variance = state.wpmSamples.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / state.wpmSamples.length;
    const std = Math.sqrt(variance);
    return Math.max(0, Math.round(100 - (std / avg) * 100));
}

/* ══════════════════════════════════════════
   TIMER
══════════════════════════════════════════ */
function startTimer() {
    state.startTime = Date.now();
    state.timer = setInterval(() => {
        state.remaining--;
        updateTimerUI();

        // amostrar WPM a cada 5s
        if ((state.totalTime - state.remaining) % 5 === 0) {
            state.wpmSamples.push(calcWpm());
        }

        if (state.remaining <= 0) {
            endSession();
        }
    }, 1000);
}

function updateTimerUI() {
    timerVal.textContent = state.remaining;
    const pct = state.remaining / state.totalTime;
    ringProgress.style.strokeDashoffset = RING_CIRCUM * (1 - pct);
    ringProgress.className = 'ring-progress' + (pct < 0.25 ? ' danger' : pct < 0.5 ? ' warning' : '');
}

/* ══════════════════════════════════════════
   ATUALIZAR HUD
══════════════════════════════════════════ */
function updateHUD() {
    const wpm = calcWpm();
    const acc = calcAcc();
    const errors = [...state.typed].filter((c, i) => c !== state.plainText[i]).length;

    wpmVal.textContent = wpm;
    accVal.textContent = acc;
    errorsVal.textContent = errors;
    charsVal.textContent = state.typed.length;

    state.errors = errors;
    if (wpm > state.bestWpm) state.bestWpm = wpm;
}

/* ══════════════════════════════════════════
   FIM DE SESSÃO
══════════════════════════════════════════ */
function endSession() {
    clearInterval(state.timer);
    state.finished = true;
    hiddenInput.blur();

    const wpm = calcWpm();
    const acc = calcAcc();
    const consistency = calcConsistency();
    const errors = state.errors;
    const chars = state.typed.length;

    // Salvar histórico
    state.history.unshift({ wpm, acc, errors, chars });
    renderHistory();

    // Mostrar modal
    showResult({ wpm, acc, consistency, errors, chars });
}

/* ══════════════════════════════════════════
   MODAL DE RESULTADO
══════════════════════════════════════════ */
function getRank(wpm) {
    if (wpm < 20)  return { label: 'Iniciante',     pct: Math.min(wpm / 120 * 100, 100) };
    if (wpm < 40)  return { label: 'Aprendiz',      pct: Math.min(wpm / 120 * 100, 100) };
    if (wpm < 60)  return { label: 'Intermediário', pct: Math.min(wpm / 120 * 100, 100) };
    if (wpm < 80)  return { label: 'Avançado',      pct: Math.min(wpm / 120 * 100, 100) };
    if (wpm < 100) return { label: 'Profissional',  pct: Math.min(wpm / 120 * 100, 100) };
    return { label: 'Expert',         pct: Math.min(wpm / 120 * 100, 100) };
}

function getEmoji(wpm) {
    if (wpm < 20) return '🐢';
    if (wpm < 40) return '🚶';
    if (wpm < 60) return '🏃';
    if (wpm < 80) return '🚴';
    if (wpm < 100) return '🏎️';
    return '🚀';
}

function showResult({ wpm, acc, consistency, errors, chars }) {
    $('rWpm').textContent = wpm;
    $('rAcc').textContent = acc + '%';
    $('rChars').textContent = chars;
    $('rErrors').textContent = errors;
    $('rConsistency').textContent = consistency + '%';
    $('rBest').textContent = state.bestWpm;
    $('resultEmoji').textContent = getEmoji(wpm);

    const rank = getRank(wpm);
    $('rankLabel').textContent = rank.label;
    $('rankFill').style.width = '0%';

    const titles = ['Sessão Concluída!', 'Tempo Esgotado!', 'Resultado Final'];
    $('resultTitle').textContent = titles[Math.floor(Math.random() * titles.length)];
    $('resultSubtitle').textContent = `${wpm} WPM · ${acc}% precisão · ${rank.label}`;

    resultOverlay.classList.add('visible');
    setTimeout(() => { $('rankFill').style.width = rank.pct + '%'; }, 200);
}

/* ══════════════════════════════════════════
   HISTÓRICO
══════════════════════════════════════════ */
function renderHistory() {
    if (!state.history.length) {
        historyEmpty.style.display = 'block';
        historyGrid.innerHTML = '';
        return;
    }
    historyEmpty.style.display = 'none';
    const bestWpm = Math.max(...state.history.map(h => h.wpm));
    historyGrid.innerHTML = state.history.map((h, i) => `
        <div class="history-item ${h.wpm === bestWpm ? 'hi-best' : ''}">
            <div class="hi-num">#${state.history.length - i} ${h.wpm === bestWpm ? '⭐' : ''}</div>
            <div class="hi-wpm">${h.wpm}</div>
            <div class="hi-acc">${h.acc}% · ${h.errors} err</div>
        </div>
    `).join('');
}

/* ══════════════════════════════════════════
   RESET
══════════════════════════════════════════ */
function resetSession(newText = true) {
    clearInterval(state.timer);
    Object.assign(state, {
        started: false, finished: false,
        startTime: null, timer: null,
        remaining: state.time, totalTime: state.time,
        typed: '', errors: 0, correctChars: 0,
        wpmSamples: [], bestWpm: Math.max(state.bestWpm, 0),
    });

    wpmVal.textContent    = '0';
    accVal.textContent    = '100';
    errorsVal.textContent = '0';
    charsVal.textContent  = '0';
    timerVal.textContent  = state.time;
    ringProgress.style.strokeDashoffset = '0';
    ringProgress.className = 'ring-progress';

    if (newText) generateText();
    renderText();
    startHint.classList.remove('hidden');
    hiddenInput.value = '';
    resultOverlay.classList.remove('visible');
}

/* ══════════════════════════════════════════
   INPUT HANDLER
══════════════════════════════════════════ */
hiddenInput.addEventListener('input', (e) => {
    if (state.finished) return;

    if (!state.started) {
        state.started = true;
        startHint.classList.add('hidden');
        startTimer();
    }

    state.typed = hiddenInput.value;

    // não deixar digitar além do texto
    if (state.typed.length > state.plainText.length) {
        state.typed = state.typed.slice(0, state.plainText.length);
        hiddenInput.value = state.typed;
    }

    // verificar erro na última tecla
    const last = state.typed.length - 1;
    if (last >= 0 && state.typed[last] !== state.plainText[last]) {
        document.querySelector('.typing-container').classList.add('shake');
        setTimeout(() => document.querySelector('.typing-container')?.classList.remove('shake'), 300);
    }

    updateLetterStates();
    updateHUD();

    // texto completo
    if (state.typed.length >= state.plainText.length) {
        endSession();
    }
});

// Foco no input quando clicar no container
document.querySelector('.typing-container').addEventListener('click', () => {
    hiddenInput.focus();
    document.querySelector('.typing-container').classList.add('active');
});

// Qualquer tecla inicia foco
document.addEventListener('keydown', (e) => {
    if (resultOverlay.classList.contains('visible')) return;
    if (['F5','F11','F12','Tab','CapsLock','Escape'].includes(e.key)) return;
    if (!['INPUT','TEXTAREA','BUTTON'].includes(document.activeElement.tagName)) {
        hiddenInput.focus();
    }
    highlightKey(e.key);
});

document.addEventListener('keyup', (e) => {
    unhighlightKey(e.key);
});

hiddenInput.addEventListener('blur', () => {
    document.querySelector('.typing-container').classList.remove('active');
});

/* ══════════════════════════════════════════
   TECLADO VISUAL
══════════════════════════════════════════ */
function highlightKey(key) {
    const lower = key.toLowerCase();
    const selectors = [
        `[data-key="${lower}"]`,
        `[data-key="${key}"]`,
    ];
    selectors.forEach(sel => {
        document.querySelectorAll(`.keyboard ${sel}`).forEach(el => {
            el.classList.add('active');
        });
    });
}

function unhighlightKey(key) {
    const lower = key.toLowerCase();
    [`[data-key="${lower}"]`, `[data-key="${key}"]`].forEach(sel => {
        document.querySelectorAll(`.keyboard ${sel}`).forEach(el => {
            el.classList.remove('active');
        });
    });
}

$('keyboardToggle').addEventListener('click', () => {
    const kb = $('keyboard');
    const toggle = $('keyboardToggle');
    kb.classList.toggle('visible');
    toggle.classList.toggle('open');
});

/* ══════════════════════════════════════════
   CONTROLES DE CONFIGURAÇÃO
══════════════════════════════════════════ */
function setupOptions(groupId, stateKey, onSelect) {
    const group = $(groupId);
    group.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            group.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state[stateKey] = btn.dataset[stateKey] || btn.dataset.lang || btn.dataset.mode || btn.dataset.time || btn.dataset.diff;
            if (onSelect) onSelect(state[stateKey]);
        });
    });
}

/* ══════════════════════════════════════════
   LISTA COMPLETA DE IDIOMAS
══════════════════════════════════════════ */
const LANGUAGES = [
    // ── Com banco de palavras nativo ──
    { code: 'pt', tag: 'PT-BR', flag: '🇧🇷', lang: 'Português', country: 'Brasil',          native: true },
    { code: 'en', tag: 'EN-US', flag: '🇺🇸', lang: 'English',   country: 'Estados Unidos',   native: true },
    { code: 'es', tag: 'ES',    flag: '🇪🇸', lang: 'Español',   country: 'Espanha',          native: true },
    { code: 'fr', tag: 'FR',    flag: '🇫🇷', lang: 'Français',  country: 'França',           native: true },
    { code: 'de', tag: 'DE',    flag: '🇩🇪', lang: 'Deutsch',   country: 'Alemanha',         native: true },
    // ── Treino com base em EN ──
    { code: 'en', tag: 'EN-GB', flag: '🇬🇧', lang: 'English',   country: 'Reino Unido' },
    { code: 'en', tag: 'EN-AU', flag: '🇦🇺', lang: 'English',   country: 'Austrália' },
    { code: 'en', tag: 'EN-CA', flag: '🇨🇦', lang: 'English',   country: 'Canadá' },
    { code: 'en', tag: 'EN-NZ', flag: '🇳🇿', lang: 'English',   country: 'Nova Zelândia' },
    { code: 'en', tag: 'EN-IE', flag: '🇮🇪', lang: 'English',   country: 'Irlanda' },
    { code: 'en', tag: 'EN-ZA', flag: '🇿🇦', lang: 'English',   country: 'África do Sul' },
    { code: 'en', tag: 'EN-IN', flag: '🇮🇳', lang: 'English',   country: 'Índia' },
    // ── Treino com base em ES ──
    { code: 'es', tag: 'ES-MX', flag: '🇲🇽', lang: 'Español',   country: 'México' },
    { code: 'es', tag: 'ES-AR', flag: '🇦🇷', lang: 'Español',   country: 'Argentina' },
    { code: 'es', tag: 'ES-CO', flag: '🇨🇴', lang: 'Español',   country: 'Colômbia' },
    { code: 'es', tag: 'ES-CL', flag: '🇨🇱', lang: 'Español',   country: 'Chile' },
    { code: 'es', tag: 'ES-PE', flag: '🇵🇪', lang: 'Español',   country: 'Peru' },
    { code: 'es', tag: 'ES-VE', flag: '🇻🇪', lang: 'Español',   country: 'Venezuela' },
    { code: 'es', tag: 'ES-EC', flag: '🇪🇨', lang: 'Español',   country: 'Equador' },
    { code: 'es', tag: 'ES-BO', flag: '🇧🇴', lang: 'Español',   country: 'Bolívia' },
    { code: 'es', tag: 'ES-PY', flag: '🇵🇾', lang: 'Español',   country: 'Paraguai' },
    { code: 'es', tag: 'ES-UY', flag: '🇺🇾', lang: 'Español',   country: 'Uruguai' },
    // ── Treino com base em PT ──
    { code: 'pt', tag: 'PT-PT', flag: '🇵🇹', lang: 'Português', country: 'Portugal' },
    { code: 'pt', tag: 'PT-AO', flag: '🇦🇴', lang: 'Português', country: 'Angola' },
    { code: 'pt', tag: 'PT-MZ', flag: '🇲🇿', lang: 'Português', country: 'Moçambique' },
    // ── Treino com base em FR ──
    { code: 'fr', tag: 'FR-BE', flag: '🇧🇪', lang: 'Français',  country: 'Bélgica' },
    { code: 'fr', tag: 'FR-CH', flag: '🇨🇭', lang: 'Français',  country: 'Suíça' },
    { code: 'fr', tag: 'FR-CA', flag: '🇨🇦', lang: 'Français',  country: 'Canadá (Quebec)' },
    // ── Treino com base em DE ──
    { code: 'de', tag: 'DE-AT', flag: '🇦🇹', lang: 'Deutsch',   country: 'Áustria' },
    { code: 'de', tag: 'DE-CH', flag: '🇨🇭', lang: 'Deutsch',   country: 'Suíça' },
    // ── Outros idiomas (mapeados para EN) ──
    { code: 'en', tag: 'IT',    flag: '🇮🇹', lang: 'Italiano',  country: 'Itália' },
    { code: 'en', tag: 'NL',    flag: '🇳🇱', lang: 'Nederlands',country: 'Holanda' },
    { code: 'en', tag: 'PL',    flag: '🇵🇱', lang: 'Polski',    country: 'Polônia' },
    { code: 'en', tag: 'RU',    flag: '🇷🇺', lang: 'Русский',   country: 'Rússia' },
    { code: 'en', tag: 'SV',    flag: '🇸🇪', lang: 'Svenska',   country: 'Suécia' },
    { code: 'en', tag: 'NO',    flag: '🇳🇴', lang: 'Norsk',     country: 'Noruega' },
    { code: 'en', tag: 'DA',    flag: '🇩🇰', lang: 'Dansk',     country: 'Dinamarca' },
    { code: 'en', tag: 'FI',    flag: '🇫🇮', lang: 'Suomi',     country: 'Finlândia' },
    { code: 'en', tag: 'TR',    flag: '🇹🇷', lang: 'Türkçe',    country: 'Turquia' },
    { code: 'en', tag: 'CS',    flag: '🇨🇿', lang: 'Čeština',   country: 'República Tcheca' },
    { code: 'en', tag: 'HU',    flag: '🇭🇺', lang: 'Magyar',    country: 'Hungria' },
    { code: 'en', tag: 'RO',    flag: '🇷🇴', lang: 'Română',    country: 'Romênia' },
    { code: 'en', tag: 'EL',    flag: '🇬🇷', lang: 'Ελληνικά', country: 'Grécia' },
    { code: 'en', tag: 'UK',    flag: '🇺🇦', lang: 'Українська',country: 'Ucrânia' },
    { code: 'en', tag: 'HR',    flag: '🇭🇷', lang: 'Hrvatski',  country: 'Croácia' },
    { code: 'en', tag: 'SK',    flag: '🇸🇰', lang: 'Slovenčina',country: 'Eslováquia' },
    { code: 'en', tag: 'SR',    flag: '🇷🇸', lang: 'Srpski',    country: 'Sérvia' },
    { code: 'en', tag: 'BG',    flag: '🇧🇬', lang: 'Български', country: 'Bulgária' },
    { code: 'en', tag: 'AR',    flag: '🇸🇦', lang: 'العربية',   country: 'Arábia Saudita' },
    { code: 'en', tag: 'HE',    flag: '🇮🇱', lang: 'עברית',     country: 'Israel' },
    { code: 'en', tag: 'FA',    flag: '🇮🇷', lang: 'فارسی',     country: 'Irã' },
    { code: 'en', tag: 'HI',    flag: '🇮🇳', lang: 'हिन्दी',    country: 'Índia' },
    { code: 'en', tag: 'BN',    flag: '🇧🇩', lang: 'বাংলা',     country: 'Bangladesh' },
    { code: 'en', tag: 'UR',    flag: '🇵🇰', lang: 'اردو',      country: 'Paquistão' },
    { code: 'en', tag: 'VI',    flag: '🇻🇳', lang: 'Tiếng Việt',country: 'Vietnã' },
    { code: 'en', tag: 'TH',    flag: '🇹🇭', lang: 'ภาษาไทย',   country: 'Tailândia' },
    { code: 'en', tag: 'ID',    flag: '🇮🇩', lang: 'Bahasa Indonesia', country: 'Indonésia' },
    { code: 'en', tag: 'MS',    flag: '🇲🇾', lang: 'Bahasa Melayu',  country: 'Malásia' },
    { code: 'en', tag: 'TL',    flag: '🇵🇭', lang: 'Filipino',  country: 'Filipinas' },
    { code: 'en', tag: 'KO',    flag: '🇰🇷', lang: '한국어',     country: 'Coreia do Sul' },
    { code: 'en', tag: 'JA',    flag: '🇯🇵', lang: '日本語',     country: 'Japão' },
    { code: 'en', tag: 'ZH-CN', flag: '🇨🇳', lang: '中文 (简体)',country: 'China' },
    { code: 'en', tag: 'ZH-TW', flag: '🇹🇼', lang: '中文 (繁體)',country: 'Taiwan' },
    { code: 'en', tag: 'SW',    flag: '🇰🇪', lang: 'Kiswahili', country: 'Quênia' },
    { code: 'en', tag: 'AF',    flag: '🇿🇦', lang: 'Afrikaans', country: 'África do Sul' },
    { code: 'en', tag: 'AM',    flag: '🇪🇹', lang: 'አማርኛ',     country: 'Etiópia' },
    { code: 'en', tag: 'NE',    flag: '🇳🇵', lang: 'नेपाली',    country: 'Nepal' },
    { code: 'en', tag: 'SI',    flag: '🇱🇰', lang: 'සිංහල',     country: 'Sri Lanka' },
    { code: 'en', tag: 'MN',    flag: '🇲🇳', lang: 'Монгол',    country: 'Mongólia' },
    { code: 'en', tag: 'KA',    flag: '🇬🇪', lang: 'ქართული',   country: 'Geórgia' },
    { code: 'en', tag: 'HY',    flag: '🇦🇲', lang: 'Հայերեն',   country: 'Armênia' },
    { code: 'en', tag: 'AZ',    flag: '🇦🇿', lang: 'Azərbaycan',country: 'Azerbaijão' },
    { code: 'en', tag: 'KK',    flag: '🇰🇿', lang: 'Қазақша',   country: 'Cazaquistão' },
    { code: 'en', tag: 'UZ',    flag: '🇺🇿', lang: "O'zbek",    country: 'Uzbequistão' },
    { code: 'en', tag: 'LT',    flag: '🇱🇹', lang: 'Lietuvių',  country: 'Lituânia' },
    { code: 'en', tag: 'LV',    flag: '🇱🇻', lang: 'Latviešu',  country: 'Letônia' },
    { code: 'en', tag: 'ET',    flag: '🇪🇪', lang: 'Eesti',     country: 'Estônia' },
    { code: 'en', tag: 'IS',    flag: '🇮🇸', lang: 'Íslenska',  country: 'Islândia' },
    { code: 'en', tag: 'MT',    flag: '🇲🇹', lang: 'Malti',     country: 'Malta' },
    { code: 'en', tag: 'SQ',    flag: '🇦🇱', lang: 'Shqip',     country: 'Albânia' },
    { code: 'en', tag: 'MK',    flag: '🇲🇰', lang: 'Македонски',country: 'Macedônia do Norte' },
    { code: 'en', tag: 'BS',    flag: '🇧🇦', lang: 'Bosanski',  country: 'Bósnia' },
    { code: 'en', tag: 'SL',    flag: '🇸🇮', lang: 'Slovenščina',country: 'Eslovênia' },
    { code: 'en', tag: 'CY',    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', lang: 'Cymraeg',   country: 'País de Gales' },
    { code: 'en', tag: 'GA',    flag: '🇮🇪', lang: 'Gaeilge',   country: 'Irlanda' },
    { code: 'en', tag: 'EU',    flag: '🇪🇸', lang: 'Euskera',   country: 'País Basco' },
    { code: 'en', tag: 'CA',    flag: '🇪🇸', lang: 'Català',    country: 'Catalunha' },
    { code: 'en', tag: 'GL',    flag: '🇪🇸', lang: 'Galego',    country: 'Galiza' },
];

/* ══════════════════════════════════════════
   DROPDOWN DE IDIOMA
══════════════════════════════════════════ */
function buildLangDropdown() {
    const list = $('langList');
    list.innerHTML = LANGUAGES.map((l, i) => `
        <div class="lang-item ${i === 0 ? 'active' : ''}" data-idx="${i}" data-code="${l.code}" data-tag="${l.tag}">
            <span class="li-flag">${l.flag}</span>
            <span class="li-code">${l.tag}</span>
            <div class="li-info">
                <span class="li-lang">${l.lang}</span>
                <span class="li-country">${l.country}</span>
            </div>
            ${l.native ? '<span class="li-badge">NATIVO</span>' : ''}
        </div>
    `).join('');

    // clique em item
    list.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.dataset.idx);
            const lang = LANGUAGES[idx];
            selectLanguage(lang, item);
        });
    });
}

function selectLanguage(lang, itemEl) {
    // atualiza trigger
    $('langFlag').textContent         = lang.flag;
    $('langCode').textContent         = lang.tag;
    $('langNameDisplay').textContent  = `${lang.lang} · ${lang.country}`;

    // marca ativo
    $('langList').querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
    if (itemEl) itemEl.classList.add('active');

    // fecha dropdown
    closeLangDropdown();

    // atualiza estado e reinicia
    state.lang = lang.code;
    resetSession(true);
}

function openLangDropdown() {
    $('langDropdown').classList.add('open');
    $('langTrigger').classList.add('open');
    $('langSearch').value = '';
    filterLangList('');
    setTimeout(() => $('langSearch').focus(), 80);
}

function closeLangDropdown() {
    $('langDropdown').classList.remove('open');
    $('langTrigger').classList.remove('open');
}

function filterLangList(q) {
    const term = q.toLowerCase();
    $('langList').querySelectorAll('.lang-item').forEach(item => {
        const tag  = item.dataset.tag.toLowerCase();
        const text = item.textContent.toLowerCase();
        item.classList.toggle('hidden', !!(term && !tag.includes(term) && !text.includes(term)));
    });
}

// Toggle dropdown
$('langTrigger').addEventListener('click', (e) => {
    e.stopPropagation();
    $('langDropdown').classList.contains('open') ? closeLangDropdown() : openLangDropdown();
});

// Busca
$('langSearch').addEventListener('input', (e) => filterLangList(e.target.value));
$('langSearch').addEventListener('keydown', (e) => e.stopPropagation()); // evita acionar typing

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!$('langSelectWrap').contains(e.target)) closeLangDropdown();
});

buildLangDropdown();

$('modeOptions').querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $('modeOptions').querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
        resetSession(true);
    });
});

$('timeOptions').querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $('timeOptions').querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.time = parseInt(btn.dataset.time);
        resetSession(false);
    });
});

$('diffOptions').querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $('diffOptions').querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.diff = btn.dataset.diff;
        resetSession(true);
    });
});

/* Botões de ação */
$('restartBtn').addEventListener('click', () => resetSession(false));
$('newTextBtn').addEventListener('click', () => resetSession(true));

/* Modal */
$('resultRestart').addEventListener('click', () => { resultOverlay.classList.remove('visible'); resetSession(false); hiddenInput.focus(); });
$('resultNew').addEventListener('click', () => { resultOverlay.classList.remove('visible'); resetSession(true); hiddenInput.focus(); });
$('resultClose').addEventListener('click', () => resultOverlay.classList.remove('visible'));

/* Histórico */
$('clearHistory').addEventListener('click', () => {
    state.history = [];
    renderHistory();
});

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
ringProgress.style.strokeDasharray = RING_CIRCUM;
ringProgress.style.strokeDashoffset = '0';
resetSession(true);