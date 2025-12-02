const jogos = [
    { titulo: "Red Dead Redemption 2", ano: 2018, generoPrincipal: "mundo-aberto", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a","classicos"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/ReadDeadII.png" },
    { titulo: "Resident Evil 4", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/ResidentEvil4.png" },
    { titulo: "ARC Raiders", ano: 2024, generoPrincipal: "multiplayer", generos: ["acao-aventura","multiplayer"], categorias: ["multiplayer","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/ARCraiders.png" },
    { titulo: "LEGO Star Wars: The Skywalker Saga", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/StarWarsSkyWalkerSaga.png" },
    { titulo: "Call of Duty: Black Ops 6", ano: 2024, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer","destaques","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/CallofDutyBlackOPS6.png" },
    { titulo: "Killing Floor 2", ano: 2016, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/KillingFloorIII.png" },
    { titulo: "Life is Strange", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/LifeIsStrange.png" },
    { titulo: "PowerWash Simulator", ano: 2021, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/PowerWashSimulator.png" },
    { titulo: "F1 2024", ano: 2024, generoPrincipal: "corrida", generos: ["corrida","esporte"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/F124.png" },
    { titulo: "Persona 3 Reload", ano: 2024, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/P3Persona3.png" },
    { titulo: "Grand Theft Auto V", ano: 2013, generoPrincipal: "mundo-aberto", generos: ["acao-aventura","mundo-aberto"], categorias: ["classicos","triple-a","multiplayer"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/GTA5.png" },
    { titulo: "Stray", ano: 2022, generoPrincipal: "indie", generos: ["indie","acao-aventura"], categorias: ["indie","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/Stray.png" },
    { titulo: "Resident Evil 2", ano: 2019, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/ResidentEvil2.png" },
    { titulo: "Kingdom Come: Deliverance", ano: 2018, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/KingdomComeDeliverance.png" },
    { titulo: "Baldur's Gate III", ano: 2023, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","destaques","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/BalursGate.png" },
    { titulo: "The Last of Us Part II Remastered", ano: 2024, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5", loja: "ps", img: "../assets/TheLastOfUsPartII_Remastered.png" },
    { titulo: "Jojo's Bizarre Adventure: Eyes of Heaven", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos"], plataforma: "PS4", loja: "ps", img: "../assets/Jojo_s BizarreAdventure.png" },
    { titulo: "Sekiro: Shadows Die Twice", ano: 2019, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/SekiroShadowsDieTwice.png" },
    { titulo: "No Man's Sky", ano: 2016, generoPrincipal: "mundo-aberto", generos: ["mundo-aberto","indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/NoMansSky.png" },
    { titulo: "Diablo IV", ano: 2023, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/Diablo.png" },
    { titulo: "Psychonauts 2", ano: 2021, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/PsychoNauts.png" },
    { titulo: "High on Life", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["indie"], plataforma: "Xbox / PC / PS5", loja: "steam", img: "../assets/HighOnLife.png" },
    { titulo: "RoboCop: Rogue City", ano: 2023, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/RobocopRogueCity.png" },
    { titulo: "LEGO DC Super-Villains", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/SuperVillainsLEGO.png" },
    { titulo: "Uncharted: The Nathan Drake Collection", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4", loja: "ps", img: "../assets/Uncharted.png" },
    { titulo: "EA Sports FC 25", ano: 2025, generoPrincipal: "esporte", generos: ["esporte","multiplayer"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/FC25.png" },
    { titulo: "Goat Simulator 3", ano: 2022, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/GoatSimulater.png" },
    { titulo: "Alan Wake II", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/AlanWakeII.png" },
    { titulo: "Mortal Kombat 11", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/MortalKombat11.png" },
    { titulo: "Lies of P", ano: 2023, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/LiesofP.png" },
    { titulo: "DayZ", ano: 2018, generoPrincipal: "multiplayer", generos: ["multiplayer"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/Dayz.png" },
    { titulo: "Balatro", ano: 2024, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie","destaques"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/Balatro.png" },
    { titulo: "Cyberpunk 2077", ano: 2020, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/CyberPunk.png" },
    { titulo: "Bloodborne", ano: 2015, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","classicos"], plataforma: "PS4", loja: "ps", img: "../assets/Bloodborne.png" },
    { titulo: "Mad Max", ano: 2015, generoPrincipal: "mundo-aberto", generos: ["mundo-aberto","acao-aventura"], categorias: ["classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/MadMax.png" },
    { titulo: "Dead Space", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/DeadSpace.png" },
    { titulo: "Resident Evil Village", ano: 2021, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/Village.png" },
    { titulo: "Doom Eternal", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/DoomEternal.png" },
    { titulo: "Star Wars Battlefront II", ano: 2017, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/StarWarsBattleFront.png" },
    { titulo: "Batman: Arkham Knight", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/BatmanArkhamknight.png" },
    { titulo: "Detroit: Become Human", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PC", loja: "steam", img: "../assets/Detroit.png" },
    { titulo: "Hogwarts Legacy", ano: 2023, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/HogwartsLegacy.png" },
    { titulo: "Minecraft Dungeons", ano: 2020, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/MinecraftDungeins.png" },
    { titulo: "Monster Hunter: World", ano: 2018, generoPrincipal: "rpg", generos: ["rpg","acao-aventura"], categorias: ["rpg","multiplayer","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/MonsterHunterWilds.png" },
    { titulo: "Control", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/controle.png" },

    { titulo: "God of War (2018)", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4 / PC", loja: "ps", img: "../assets/GodOfWars.png" },
    { titulo: "God of War Ragnarök", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "../assets/GodOfWarsRagnarok.png" },
    { titulo: "Marvel's Spider-Man", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "../assets/Spider-man.png" },
    { titulo: "Marvel's Spider-Man: Miles Morales", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "../assets/spider_man.png" },
    { titulo: "Marvel's Spider-Man 2", ano: 2023, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5", loja: "ps", img: "../assets/Spider-man2.png" },
    { titulo: "Horizon Zero Dawn", ano: 2017, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / PC", loja: "ps", img: "../assets/HorizonZeroDawn.png" },
    { titulo: "Horizon Forbidden West", ano: 2022, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "../assets/HorizonForbiddenWest.png" },
    { titulo: "Ghost of Tsushima", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["classicos","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "../assets/GhostOfTsushima.png" },
    { titulo: "Elden Ring", ano: 2022, generoPrincipal: "soulslike", generos: ["soulslike","rpg"], categorias: ["soulslike","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/EldenRingNightreign.png" },
    { titulo: "Dark Souls III", ano: 2016, generoPrincipal: "soulslike", generos: ["soulslike","rpg"], categorias: ["soulslike","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/DarkSoulsIII.png" },
    { titulo: "Assassin's Creed Valhalla", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/AssassinsCreedValhalla.png" },
    { titulo: "Assassin's Creed Odyssey", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/AssassinsCreedOdyssey.png" },
    { titulo: "Forza Horizon 5", ano: 2021, generoPrincipal: "corrida", generos: ["corrida"], categorias: ["multiplayer","triple-a"], plataforma: "Xbox / PC", loja: "xbox", img: "../assets/ForzaHorizon5.png" },
    { titulo: "Cuphead", ano: 2017, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/Cuphead.png" },
    { titulo: "Celeste", ano: 2018, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/Celeste.png" },
    { titulo: "Hades", ano: 2020, generoPrincipal: "indie", generos: ["indie","rpg"], categorias: ["indie","rpg"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/Hades.png" },
    { titulo: "Hollow Knight", ano: 2017, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/HollowKnightVoidheartEdition.png" },
    { titulo: "Dead Cells", ano: 2018, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/DeadCells.png" },
    { titulo: "Stardew Valley", ano: 2016, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/SrardewValley.png" },
    { titulo: "The Binding of Isaac: Rebirth", ano: 2014, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/TheBindingOfIsaacRepentance.png" },
    { titulo: "It Takes Two", ano: 2021, generoPrincipal: "multiplayer", generos: ["multiplayer","plataforma"], categorias: ["multiplayer"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/ItTakesTwo.png" },
    { titulo: "Overcooked! 2", ano: 2018, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/Overcooked1e2.png" },
    { titulo: "Fallout 4", ano: 2015, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "../assets/Falleut4.png" },
    { titulo: "Persona 5 Royal", ano: 2019, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/Persona5TheRoyal.png" },
    { titulo: "Dragon Quest XI S", ano: 2019, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/DragonQuestXI.png" },
    { titulo: "Dragon's Dogma 2", ano: 2024, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","destaques"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "../assets/DragonsDogma2.png" },
    { titulo: "Returnal", ano: 2021, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / PC", loja: "ps", img: "../assets/Returnal.png" },
    { titulo: "Death Stranding", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / PC", loja: "steam", img: "../assets/DeathStrandingDirectorsCut.png" },
    { titulo: "Resident Evil 3", ano: 2020, generoPrincipal: "terror", generos: ["terror"], categorias: ["terror"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/ResidentEvil3.png" },
    { titulo: "Outlast", ano: 2013, generoPrincipal: "terror", generos: ["terror","indie"], categorias: ["terror","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/OutlastTrinity.png" },
    { titulo: "Alien: Isolation", ano: 2014, generoPrincipal: "terror", generos: ["terror"], categorias: ["terror","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/AlienIsolation.png" },
    { titulo: "Inside", ano: 2016, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "../assets/InsideLimbo.png" },
    { titulo: "Superliminal", ano: 2019, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "../assets/SuperlMinal.png" },
    { titulo: "Deep Rock Galactic", ano: 2020, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "../assets/DeepRockGalactic.png" },
];

console.log("Total de jogos no catálogo:", jogos.length);

// ELEMENTOS DA TELA


const carouselsView = document.getElementById("carouselsView");
const listView = document.getElementById("listView");
const gamesList = document.getElementById("gamesList");

const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");
const genreFilter = document.getElementById("genreFilter");
const categoryButtons = document.querySelectorAll(".btn-filter");
const resetFiltersBtn = document.getElementById("resetFilters");

let currentMode = "carousels"; // "carousels" | "list"


// HELPERS

function urlLoja(jogo) {
    const nome = encodeURIComponent(jogo.titulo);
    if (jogo.loja === "ps") {
        return "https://store.playstation.com/pt-br/search/" + nome;
    }
    if (jogo.loja === "xbox") {
        return "https://www.xbox.com/pt-BR/search?q=" + nome;
    }
    return "https://store.steampowered.com/search/?term=" + nome;
}

function urlTrailer(jogo) {
    const query = encodeURIComponent(jogo.titulo + " official trailer");
    return "https://www.youtube.com/results?search_query=" + query;
}


// CARDS


function criarCard(jogo, variante = "full") {
    const isFull = variante === "full";
    const tag = isFull ? "li" : "div";
    const card = document.createElement(tag);
    card.className = "game-card" + (isFull ? "" : " compact");

    const destaqueChip = jogo.categorias.includes("destaques")
        ? '<span class="chip chip-highlight">Destaque</span>'
        : "";

    const generosFormatados = jogo.generos.join(" • ").replace(/-/g, " ");

    card.innerHTML = `
        <div class="game-cover">
            <img src="${jogo.img || "placeholder.jpg"}" class="img_jogos" alt="${jogo.titulo}">
            ${destaqueChip}
        </div>
        <div class="game-info">
            <h2>${jogo.titulo}</h2>
            <p class="prod_desc">
                ${generosFormatados} • ${jogo.plataforma}
            </p>
            <div class="game-meta">
                <span class="tag">${jogo.ano}</span>
                ${jogo.generos.map(g => `<span class="tag">${g.replace(/-/g," ")}</span>`).join("")}
            </div>
            <div class="game-actions">
                <a class="btn btn-primary" href="${urlLoja(jogo)}" target="_blank" rel="noopener noreferrer">
                    Loja oficial
                </a>
                <a class="btn btn-outline" href="${urlTrailer(jogo)}" target="_blank" rel="noopener noreferrer">
                    Trailer
                </a>
            </div>
        </div>
    `;
    return card;
}

// LISTA
function renderList(jogosFiltrados) {
    gamesList.innerHTML = "";
    if (!jogosFiltrados.length) {
        gamesList.innerHTML = `<li class="game-card vazio">
            <div class="game-info">
                <h2>Nenhum jogo encontrado</h2>
                <p class="prod_desc">Tente alterar os filtros ou a busca.</p>
            </div>
        </li>`;
        return;
    }

    jogosFiltrados.forEach(jogo => {
        const card = criarCard(jogo, "full");
        gamesList.appendChild(card);
    });
}


// CARROSSEIS


const carrosselConfig = [
    {
        id: "destaques",
        titulo: "Destaques do catálogo",
        filtro: (j) => j.categorias.includes("destaques")
    },
    {
        id: "acao",
        titulo: "Ação & Aventura",
        filtro: (j) => j.generoPrincipal === "acao-aventura"
    },
    {
        id: "rpg",
        titulo: "RPG & Mundo aberto",
        filtro: (j) => j.generoPrincipal === "rpg" || j.generoPrincipal === "mundo-aberto"
    },
    {
        id: "indie",
        titulo: "Indies em destaque",
        filtro: (j) => j.generoPrincipal === "indie"
    },
    {
        id: "multiplayer",
        titulo: "Multiplayer & Coop",
        filtro: (j) => j.generoPrincipal === "multiplayer"
    },
    {
        id: "soulslike",
        titulo: "Soulslike & Desafios",
        filtro: (j) => j.generoPrincipal === "soulslike"
    },
    {
        id: "terror",
        titulo: "Terror & Suspense",
        filtro: (j) => j.generoPrincipal === "terror"
    },
    {
        id: "corrida",
        titulo: "Corrida & Esporte",
        filtro: (j) => j.generoPrincipal === "corrida" || j.generoPrincipal === "esporte"
    }
];

// helper de scroll 
function scrollTrackStep(track, direction = 1) {
    if (!track) return;
    const card = track.querySelector(".game-card");
    const baseWidth = card ? card.offsetWidth + 16 : 260;
    track.scrollBy({
        left: direction * baseWidth,
        behavior: "smooth"
    });
}

function renderCarousels() {
    if (!carouselsView) return;
    carouselsView.innerHTML = "";

    carrosselConfig.forEach(conf => {
        const lista = jogos.filter(conf.filtro); 
        if (!lista.length) return;

        const section = document.createElement("section");
        section.className = "carousel-section";
        section.innerHTML = `
            <div class="carousel-header">
                <h2>${conf.titulo}</h2>
            </div>
            <div class="carousel-shell">
                <button class="carousel-arrow left" data-dir="-1" aria-label="Anterior">&#10094;</button>
                <div class="carousel-track" data-carousel="${conf.id}"></div>
                <button class="carousel-arrow right" data-dir="1" aria-label="Próximo">&#10095;</button>
            </div>
        `;
        carouselsView.appendChild(section);

        const track = section.querySelector(".carousel-track");
        const shell = section.querySelector(".carousel-shell");

        lista.forEach(jogo => {
            const card = criarCard(jogo, "compact");
            track.appendChild(card);
        });


        // AUTO-SCROLL COM MOUSE

        let animFrame = null;
        let mouseX = 0;
        const speed = 1.4;           // velocidade 
        const deadZoneFactor = 0.2; 

        function animate() {
            const rect = shell.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            const deadZone = rect.width * deadZoneFactor;

            const distance = mouseX - center;
            let direction = 0;

            if (Math.abs(distance) > deadZone) {
                direction = distance > 0 ? 1 : -1;
            }

            if (direction !== 0) {
                const maxScroll = track.scrollWidth - track.clientWidth;
                let next = track.scrollLeft + direction * speed;

                if (next < 0) next = 0;
                if (next > maxScroll) next = maxScroll;

                track.scrollLeft = next;
            }

            animFrame = requestAnimationFrame(animate);
        }

        shell.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
        });

        shell.addEventListener("mouseenter", () => {
            if (!animFrame) {
                animFrame = requestAnimationFrame(animate);
            }
        });

        shell.addEventListener("mouseleave", () => {
            if (animFrame) {
                cancelAnimationFrame(animFrame);
                animFrame = null;
            }
        });
    });
}

// scroll dos carrosséis setas
document.addEventListener("click", (e) => {
    const arrow = e.target.closest(".carousel-arrow");
    if (!arrow) return;

    const shell = arrow.closest(".carousel-shell");
    const track = shell.querySelector(".carousel-track");
    const direction = arrow.dataset.dir === "1" ? 1 : -1;

    scrollTrackStep(track, direction);
});

// MODO VISUAL: CARROSSEL x LISTA


function showCarousels() {
    currentMode = "carousels";
    if (carouselsView) carouselsView.classList.remove("hidden");
    if (listView) listView.classList.add("hidden");
}

function showList() {
    currentMode = "list";
    if (carouselsView) carouselsView.classList.add("hidden");
    if (listView) listView.classList.remove("hidden");
}

// Verifica se filtros 
function filtrosEmEstadoInicial() {
    const termo = (searchInput?.value || "").trim();
    const ano = yearFilter ? yearFilter.value : "all";
    const genero = genreFilter ? genreFilter.value : "all";
    const ativa = document.querySelector(".btn-filter.active");
    const categoriaAtiva = ativa ? ativa.dataset.category : "all";

    return termo === "" && ano === "all" && genero === "all" && categoriaAtiva === "all";
}

// FILTROS 


function aplicarFiltros() {
    if (!searchInput || !yearFilter || !genreFilter) return;

    if (filtrosEmEstadoInicial()) {
        gamesList && (gamesList.innerHTML = "");
        showCarousels();
        return;
    }

    const termo = searchInput.value.toLowerCase();
    const ano = yearFilter.value;
    const genero = genreFilter.value;
    const ativa = document.querySelector(".btn-filter.active");
    const categoriaAtiva = ativa ? ativa.dataset.category : "all";

    const filtrados = jogos.filter(jogo => {
        const matchBusca = jogo.titulo.toLowerCase().includes(termo);
        const matchAno = ano === "all" || String(jogo.ano) === ano;
        const matchGenero = genero === "all" || jogo.generoPrincipal === genero;
        const matchCategoria = categoriaAtiva === "all" || jogo.categorias.includes(categoriaAtiva);

        return matchBusca && matchAno && matchGenero && matchCategoria;
    });

    showList();
    renderList(filtrados);
}

// eventos dos filtros
if (searchInput) {
    searchInput.addEventListener("input", aplicarFiltros);
}
if (yearFilter) {
    yearFilter.addEventListener("change", aplicarFiltros);
}
if (genreFilter) {
    genreFilter.addEventListener("change", aplicarFiltros);
}

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        aplicarFiltros();
    });
});

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (yearFilter) yearFilter.value = "all";
        if (genreFilter) genreFilter.value = "all";
        categoryButtons.forEach(b => b.classList.remove("active"));
        const btnTodos = document.querySelector('.btn-filter[data-category="all"]');
        if (btnTodos) btnTodos.classList.add("active");
        aplicarFiltros();
    });
}

// INICIALIZAÇÃO


renderCarousels();
showCarousels();
