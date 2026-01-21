/**
 * Ultra-Luxe Spiritual Gifts SPA
 * Features: Three.js Network Background, Bento Grid, Space Grey Theme
 */

// --- DATA (Embedded) ---
const DATA = {
    "config": {
        "titulo": "Teste de Dons Espirituais",
        "escala": ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito", "Eu brilho nisso!"],
        "design": "Space Grey Connection"
    },
    "questoes": [
        { "id": 1, "texto": "Tenho experimentado um desejo especial de transmitir mensagens vindas diretamente de Deus." },
        { "id": 2, "texto": "Eu consigo comunicar uma visão do que é possível para alguém e o encorajo a continuar na luta, apesar de sua derrota." },
        { "id": 3, "texto": "Outros irmãos ficam animados e motivados a me seguir por meio da visão dos propósitos de Deus que compartilho com eles." },
        { "id": 4, "texto": "Gosto de ajudar as pessoas fazendo pequenos serviços." },
        { "id": 5, "texto": "Tenho tanta certeza de que Deus suprirá minhas necessidades, que estou constantemente doando meu dinheiro de forma sacrificial." },
        { "id": 6, "texto": "Sinto alegria em trabalhar com pessoas que são ignoradas ou desconhecidas da maioria." },
        { "id": 7, "texto": "Gosto de estudar a Palavra e sinto prazer em aplicar atenção na pesquisa." },
        { "id": 8, "texto": "Tenho facilidade para organizar ideias, coisas e o tempo, tendo em vista um serviço efetivo e produtivo na obra de Deus." },
        { "id": 9, "texto": "Minha casa está sempre à disposição para quem precisar de um teto." },
        { "id": 10, "texto": "Tenho ajudado os líderes da minha igreja para que eles tenham realmente tempo para as coisas importantes relacionadas ao chamado." },
        { "id": 11, "texto": "Oro por longos períodos e percebo respostas de Deus." },
        { "id": 12, "texto": "Pessoas me dizem que eu transmito mensagens tão apropriadas que só podem ser vindas diretamente de Deus." },
        { "id": 13, "texto": "Deus me dá as palavras que as pessoas indecisas, problemáticas e desencorajadas precisam." },
        { "id": 14, "texto": "Eu fico à vontade quando me coloco na frente de um grupo para dar-lhes direção." },
        { "id": 15, "texto": "Gosto e sinto que posso ser útil ao fazer certas tarefas auxiliares (arrumar cadeiras, carregar objetos, manter a ordem, cozinhar, construir ou reformar o prédio, secretariar reuniões, controlar aparelhos de som, etc.)." },
        { "id": 16, "texto": "Sinto que posso administrar meus bens para ser mais generoso no reino de Deus." },
        { "id": 17, "texto": "Sinto prazer em visitar hospitais ou lares de pessoas necessitadas e sinto-me bem com isso." },
        { "id": 18, "texto": "Tenho facilidade para entender o texto bíblico." },
        { "id": 19, "texto": "Gosto de elaborar planos e metas para que, junto com outros irmãos, possamos atingir os objetivos." },
        { "id": 20, "texto": "Eu gosto de realizar atividades sociais, envolvendo pessoas." },
        { "id": 21, "texto": "Sinto satisfação em fazer o que os líderes me pedem." },
        { "id": 22, "texto": "Recebo pedidos de oração de alguns irmãos e dedico algum tempo a eles." },
        { "id": 23, "texto": "Sinto que às vezes tenho uma mensagem exata de Deus para alguém." },
        { "id": 24, "texto": "Eu gosto de dar soluções para as pessoas." },
        { "id": 25, "texto": "Eu gosto de começar novos projetos e dar sequência a eles." },
        { "id": 26, "texto": "Eu realizo tarefas simples (de rotina), e as faço muito bem." },
        { "id": 27, "texto": "Estou sempre disposto a gastar comigo mesmo e a entregar-me a Deus." },
        { "id": 28, "texto": "Meu modo carinhoso de ser gera um grande interesse para o significado das pessoas." },
        { "id": 29, "texto": "Gosto de falar sobre o texto bíblico." },
        { "id": 30, "texto": "Uma de minhas atividades favoritas é organizar o que quer que seja." },
        { "id": 31, "texto": "Em uma conversa, sou capaz de dar um tempo à pessoa, apenas ouvindo-a falar." },
        { "id": 32, "texto": "Sinto-me feliz em ajudar os líderes em seu ministério e não me sinto mal por isso." },
        { "id": 33, "texto": "Deus já me trouxe respostas a orações feitas em períodos longos." },
        { "id": 34, "texto": "Tenho aversão a criticar algo se não houver um resultado prático da mesma lógica." },
        { "id": 35, "texto": "Eu ajudo financeiramente e com ajuda material, e me sinto bem com isso." },
        { "id": 36, "texto": "Eu penso muito sobre os fatos para ver se haveria uma possibilidade para que eles deem certo." },
        { "id": 37, "texto": "Quero sempre continuar ajudando os líderes." },
        { "id": 38, "texto": "Contribuo além do dízimo e sinto alegria nisso." },
        { "id": 39, "texto": "Sou sensível aos sentimentos dos outros e tento ser bondoso." },
        { "id": 40, "texto": "Descubro fatos bíblicos que outros não percebem." },
        { "id": 41, "texto": "Quando analiso fatos, vejo o que deve ser feito e o resultado futuro." },
        { "id": 42, "texto": "Quero que minha casa esteja sempre disponível para servir." },
        { "id": 43, "texto": "Gosto de ser um auxiliar para atender as necessidades das pessoas." },
        { "id": 44, "texto": "Continuo orando até sentir que Deus respondeu." },
        { "id": 45, "texto": "Transmito as mensagens de Deus mesmo em meio a oposição." },
        { "id": 46, "texto": "Consigo perceber quando alguém precisa de encorajamento e procuro ajudar." },
        { "id": 47, "texto": "Tenho visão clara das metas da igreja e motivo outros a cumpri-las." },
        { "id": 48, "texto": "Sinto prazer em realizar trabalhos manuais e braçais na igreja." },
        { "id": 49, "texto": "Administro bem meus recursos para poder investir mais no Reino." },
        { "id": 50, "texto": "Tenho compaixão por aqueles que sofrem fisicamente e tento confortá-los." },
        { "id": 51, "texto": "Tenho facilidade em explicar verdades bíblicas de forma simples." },
        { "id": 52, "texto": "Consigo organizar grupos e delegar tarefas com eficiência." },
        { "id": 53, "texto": "Fico feliz em receber pessoas em casa, mesmo sem aviso prévio." },
        { "id": 54, "texto": "Prefiro atuar nos bastidores ajudando os outros a terem sucesso." },
        { "id": 55, "texto": "Dedico tempo diário para interceder por causas e pessoas específicas." }
    ],
    "mapeamento": {
        "Profecia": [1, 12, 23, 34, 45],
        "Exortação": [2, 13, 24, 35, 46],
        "Liderança": [3, 14, 25, 36, 47],
        "Serviço": [4, 15, 26, 37, 48],
        "Contribuição": [5, 16, 27, 38, 49],
        "Misericórdia": [6, 17, 28, 39, 50],
        "Ensino": [7, 18, 29, 40, 51],
        "Conhecimento e Sabedoria": [8, 19, 30, 41, 52],
        "Hospitalidade": [9, 20, 31, 42, 53],
        "Socorro e Ajuda": [10, 21, 32, 43, 54],
        "Intercessão": [11, 22, 33, 44, 55]
    }
};

// --- STATE ---
const state = {
    currentQuestionIndex: 0,
    answers: {},
    userName: '',
    scores: {}
};

// --- DOM ---
const app = document.getElementById('app');

// --- 3D ENGINE (NETWORK/PARTICLES) ---
let scene, camera, renderer, particlesMesh, linesMesh;
let particleData = [];
const particleCount = 150; // Optimized for performance
const r = 400; // Radius of effect
const effectController = {
    minDistance: 80,
    limitConnections: false,
    maxConnections: 20,
    particleCount: 150
};

function init3D() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF9F6F1, 0.002); // Off-White Fog

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.z = 400;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // --- NETWORK PARTICLES ---
    const pMaterial = new THREE.PointsMaterial({
        color: 0x5e8787, // Teal-Grey for visibility on white
        size: 3,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: false
    });

    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particleData.push({
            velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
            numConnections: 0
        });
    }

    particles.setDrawRange(0, particleCount);
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

    particlesMesh = new THREE.Points(particles, pMaterial);
    scene.add(particlesMesh);

    // --- CONNECTING LINES ---
    const lMaterial = new THREE.LineBasicMaterial({
        color: 0x5e8787, // Match particles
        transparent: true,
        opacity: 0.15
    });

    const lines = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3); // Max potential lines
    lines.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));

    linesMesh = new THREE.LineSegments(lines, lMaterial);
    scene.add(linesMesh);

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);

    animate3D();
}

let mouseX = 0, mouseY = 0;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.1;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.1;
}

function animate3D() {
    requestAnimationFrame(animate3D);

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    // Reset connection count
    for (let i = 0; i < particleCount; i++)
        particleData[i].numConnections = 0;

    const positions = particlesMesh.geometry.attributes.position.array;
    const linePositions = linesMesh.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
        // Move particles
        const pData = particleData[i];

        positions[i * 3] += pData.velocity.x * 0.2; // Slow movement
        positions[i * 3 + 1] += pData.velocity.y * 0.2;
        positions[i * 3 + 2] += pData.velocity.z * 0.2;

        // Bounce off bounds
        if (positions[i * 3] < -r / 2 || positions[i * 3] > r / 2) pData.velocity.x = -pData.velocity.x;
        if (positions[i * 3 + 1] < -r / 2 || positions[i * 3 + 1] > r / 2) pData.velocity.y = -pData.velocity.y;
        if (positions[i * 3 + 2] < -r / 2 || positions[i * 3 + 2] > r / 2) pData.velocity.z = -pData.velocity.z;

        // Check connections
        for (let j = i + 1; j < particleCount; j++) {
            const pDataB = particleData[j];

            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < effectController.minDistance) {
                pData.numConnections++;
                pDataB.numConnections++;

                const alpha = 1.0 - dist / effectController.minDistance;

                linePositions[vertexpos++] = positions[i * 3];
                linePositions[vertexpos++] = positions[i * 3 + 1];
                linePositions[vertexpos++] = positions[i * 3 + 2];

                linePositions[vertexpos++] = positions[j * 3];
                linePositions[vertexpos++] = positions[j * 3 + 1];
                linePositions[vertexpos++] = positions[j * 3 + 2];

                numConnected++;
            }
        }
    }

    linesMesh.geometry.setDrawRange(0, numConnected * 2);
    linesMesh.geometry.attributes.position.needsUpdate = true;
    particlesMesh.geometry.attributes.position.needsUpdate = true;

    // Gentle camera rotation
    const time = Date.now() * 0.0001;
    scene.rotation.y = time * 0.2; // Slow global rotation

    renderer.render(scene, camera);
}

function triggerPulse3D() {
    // Flash lines brighter
    if (linesMesh && linesMesh.material) {
        linesMesh.material.opacity = 0.8;
        setTimeout(() => {
            linesMesh.material.opacity = 0.2;
        }, 300);
    }
}


// --- APP LOGIC ---

function init() {
    // Wait for DOM
    setupLanding();
}

function setupLanding() {
    const btn = document.getElementById('landing-start-btn');
    const input = document.getElementById('landing-username');
    const landing = document.getElementById('landing-page');
    const quizContainer = document.getElementById('quiz-container');

    if (!btn || !input) return;

    btn.addEventListener('click', () => {
        const name = input.value.trim();
        if (name) {
            state.userName = name;

            // Transition
            landing.style.opacity = '0';
            setTimeout(() => {
                landing.style.display = 'none';
                quizContainer.style.display = 'block';

                // Start Legacy Quiz App
                init3D(); // Start the 3D Network background for the quiz part
                renderQuiz();
            }, 500);

        } else {
            input.focus();
            input.parentElement.classList.add('animate-pulse'); // Tailwind pulse
            setTimeout(() => input.parentElement.classList.remove('animate-pulse'), 500);
        }
    });

    // Also support "Enter" key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btn.click();
    });
}

function renderQuiz() {
    if (state.currentQuestionIndex >= DATA.questoes.length) {
        calculateResults();
        transitionView(renderResults);
        return;
    }

    const question = DATA.questoes[state.currentQuestionIndex];
    const rawProgress = ((state.currentQuestionIndex) / DATA.questoes.length) * 100;

    app.innerHTML = `
        <div class="glass-card">
            <div class="progress-container">
                <div class="progress-fill" style="width: ${rawProgress}%"></div>
            </div>
            
            <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 1rem; letter-spacing: 2px;">
                Pergunta ${state.currentQuestionIndex + 1} / ${DATA.questoes.length}
            </div>
            
            <div class="question-text">${question.texto}</div>
            
            <div class="scale-grid">
                ${DATA.config.escala.map((label, idx) => `
                    <button class="scale-btn" onclick="handleAnswer(${question.id}, ${idx})">
                        <span style="width: 100%; text-align: center;">${label}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderResults() {
    const sorted = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
    const topScore = sorted[0][1];

    // --- EDGE CASE: All scores are 0 ---
    if (topScore === 0) {
        app.innerHTML = `
            <div class="result-panel w-full max-w-2xl p-8 md:p-12 text-center">
                <div class="relative size-48 mx-auto mb-8 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full bg-gray-200 animate-pulse shadow-lg"></div>
                    <span class="material-symbols-outlined text-[80px] text-gray-400 z-10">help</span>
                </div>
                <h1 class="text-3xl font-bold text-gray-800 mb-4">Resultado Inconclusivo</h1>
                <p class="text-lg text-gray-600 mb-8">
                    Parece que você selecionou "Nunca" para todas as perguntas. Para descobrir seus dons, 
                    tente refazer o teste respondendo com mais atenção às suas experiências e sentimentos reais.
                </p>
                <button onclick="location.reload()" class="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-md">
                    Refazer o Teste
                </button>
            </div>
        `;
        return;
    }

    const winners = sorted.filter(s => s[1] === topScore).map(s => s[0]);
    const primaryGift = winners[0]; // Take the first one as primary

    // Get description for primary gift (Portuguese)
    const descriptions = {
        "Profecia": "Você tem a sensibilidade de ouvir a Deus e transmitir Sua mensagem com coragem para edificar, exortar e consolar a igreja.",
        "Exortação": "Você possui um dom especial para encorajar os outros, ajudando-os a superar desafios e a alcançar seu pleno potencial em Deus.",
        "Liderança": "Você tem uma capacidade visionária de guiar pessoas e projetos, inspirando confiança e direção para os propósitos do Reino.",
        "Serviço": "Você encontra alegria genuína em apoiar os bastidores, realizando atos práticos que fazem tudo funcionar para a glória de Deus.",
        "Contribuição": "Você tem um espírito generoso e administra recursos com sabedoria, encontrando satisfação em sustentar a obra de Deus.",
        "Misericórdia": "Você sente a dor do próximo profundamente e é movido a agir com compaixão e ternura para trazer alívio aos que sofrem.",
        "Ensino": "Você tem paixão por investigar a Verdade e a habilidade de explicar princípios bíblicos complexos de forma clara e transformadora.",
        "Conhecimento e Sabedoria": "Você possui uma intuição espiritual aguçada e compreende verdades profundas, aplicando-as com discernimento em situações práticas.",
        "Hospitalidade": "Você cria uma atmosfera de acolhimento e amor, fazendo com que as pessoas se sintam valorizadas e em casa na presença de Deus.",
        "Socorro e Ajuda": "Você percebe necessidades práticas rapidamente e intervém com soluções eficazes, aliviando o fardo dos outros.",
        "Intercessão": "Você tem um chamado para a oração perseverante, colocando-se na brecha por pessoas e situações, confiando no poder de Deus."
    };
    const primaryDesc = descriptions[primaryGift] || "Você possui dons espirituais únicos desenhados para servir ao corpo de Cristo de maneira especial.";

    const others = sorted.slice(0, 5); // Take top 5 for the breakdown

    app.innerHTML = `
        <!-- Print Header -->
        <div class="print-header">
            <h1>Relatório de Dons Espirituais</h1>
            <p>Candidato: ${state.userName}</p>
            <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <!-- Central Glass Canvas (Result Panel) -->
        <div class="result-panel w-full max-w-5xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start relative">
            
            <!-- Soft light highlight top left -->
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
            
            <!-- Left Column: Hero Sphere & Primary Result -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-5/12">
                <!-- 3D Sphere Representation -->
                <div class="relative size-64 mb-10 flex items-center justify-center">
                    <!-- The Sphere -->
                    <div class="absolute inset-0 rounded-full bg-sphere-gradient animate-breathe shadow-2xl"></div>
                    <!-- Inner glow/reflection details for realism -->
                    <div class="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.1)_0%,transparent_50%)]"></div>
                    <div class="absolute top-[15%] left-[15%] w-[20%] h-[15%] rounded-[100%] bg-white/40 blur-md transform -rotate-45"></div>
                </div>
                
                <div class="flex flex-col gap-2 animate-[fadeIn_1s_ease-out]">
                    <span class="uppercase tracking-[0.2em] text-xs font-bold text-primary dark:text-primary/80">Dom Principal</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        ${primaryGift}
                    </h1>
                    <p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                        ${primaryDesc}
                    </p>
                </div>
            </div>

            <!-- Right Column: Precision Metrics -->
            <div class="flex flex-col justify-center w-full md:w-7/12 z-10 pt-4">
                <h3 class="text-xl font-bold mb-8 opacity-90">Análise de Dons</h3>
                <div class="space-y-10">
                    ${others.map(([gift, score]) => {
        const pct = Math.min(100, Math.round((score / 25) * 100));
        return `
                        <div class="group">
                            <div class="flex justify-between items-end mb-3">
                                <span class="text-sm font-bold tracking-wide uppercase text-gray-800 dark:text-gray-200">${gift}</span>
                                <span class="text-sm font-mono text-primary">${pct}%</span>
                            </div>
                            <div class="h-[6px] w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-primary shadow-[0_0_10px_rgba(90,191,189,0.5)]" style="width: ${pct}%"></div>
                            </div>
                        </div>
                        `;
    }).join('')}
                </div>
            </div>

        </div>

        <!-- Floating Action Bar -->
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 floating-action-bar">
            <div class="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-1.5 pl-2 pr-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 dark:border-gray-700 ring-1 ring-black/5">
                <button onclick="location.reload()" class="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                    <span class="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary transition-colors">refresh</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-200">Reiniciar</span>
                </button>
                <div class="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                
                <!-- Share/Save Button executes Print/PDF -->
                <button onclick="window.print()" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white hover:bg-teal-600 transition-colors shadow-sm ml-1">
                    <span class="text-sm font-bold tracking-wide">Compartilhar</span>
                    <span class="material-symbols-outlined text-[18px]">ios_share</span>
                </button>
            </div>
        </div>
    `;
}

// --- LOGIC HELPERS ---

window.handleAnswer = (qId, score) => {
    state.answers[qId] = score;
    triggerPulse3D();

    // Animate current card out
    const card = document.querySelector('.glass-card');
    card.classList.add('exit-anim');

    setTimeout(() => {
        state.currentQuestionIndex++;
        renderQuiz();
    }, 300);
};

function calculateResults() {
    state.scores = {};
    for (const [gift, ids] of Object.entries(DATA.mapeamento)) {
        state.scores[gift] = ids.reduce((acc, id) => acc + (state.answers[id] || 0), 0);
    }
}

function transitionView(nextFn) {
    const card = document.querySelector('.glass-card');
    if (card) {
        card.classList.add('exit-anim');
        setTimeout(nextFn, 300);
    } else {
        nextFn();
    }
}

init();
