(function () {
  const $ = (id) => document.getElementById(id);
  const card = $("card");
  const cover = $("cover");
  const composerEl = $("composer");
  const titleEl = $("title");
  const composedEl = $("composed");
  const recordedEl = $("recorded");
  const albumEl = $("album");
  const anecdoteEl = $("anecdote");
  const youtubeEl = $("youtube");
  const coverTitle = $("cover-title");
  const coverComposer = $("cover-composer");
  const countEl = $("count");
  const fMonk = $("f-monk");
  const fParker = $("f-parker");

  let last = null;

  function pool() {
    return COMPOSITIONS.filter((c) => {
      if (c.composer === "monk" && !fMonk.checked) return false;
      if (c.composer === "parker" && !fParker.checked) return false;
      return true;
    });
  }

  function updateCount() {
    const p = pool();
    countEl.textContent = `${p.length} compositions in the hat`;
  }

  function pick() {
    const p = pool();
    if (p.length === 0) {
      titleEl.textContent = "Pick at least one composer";
      return;
    }
    let next;
    if (p.length === 1) {
      next = p[0];
    } else {
      do {
        next = p[Math.floor(Math.random() * p.length)];
      } while (last && next.title === last.title);
    }
    last = next;
    render(next);
  }

  function render(c) {
    const label = c.composer === "monk" ? "Thelonious Monk" : "Charlie Parker";
    composerEl.textContent = label;
    titleEl.textContent = c.title;
    composedEl.textContent = c.yearComposed || "—";
    recordedEl.textContent = c.yearFirstRecorded || "—";
    albumEl.textContent = c.firstAlbum || "—";
    anecdoteEl.textContent = c.anecdote || "";

    cover.classList.toggle("is-monk", c.composer === "monk");
    cover.classList.toggle("is-parker", c.composer === "parker");
    coverTitle.textContent = shortAlbum(c.firstAlbum) || c.title;
    coverComposer.textContent = label;

    cover.innerHTML = "";
    if (c.albumArtUrl) {
      const img = new Image();
      img.src = c.albumArtUrl;
      img.alt = `${c.firstAlbum || c.title} cover`;
      img.onerror = () => drawVinyl(c, label);
      cover.appendChild(img);
    } else {
      drawVinyl(c, label);
    }

    const q = encodeURIComponent(`${label} ${c.title}`);
    youtubeEl.href = `https://www.youtube.com/results?search_query=${q}`;

    card.classList.remove("flash");
    void card.offsetWidth;
    card.classList.add("flash");
  }

  function drawVinyl(c, label) {
    const v = document.createElement("div");
    v.className = "vinyl";
    const lab = document.createElement("div");
    lab.className = "label";
    const t = document.createElement("span");
    t.textContent = shortAlbum(c.firstAlbum) || c.title;
    const s = document.createElement("small");
    s.textContent = label;
    lab.appendChild(t);
    lab.appendChild(s);
    v.appendChild(lab);
    cover.appendChild(v);
  }

  function shortAlbum(a) {
    if (!a) return "";
    return a.replace(/\s*\([^)]*\)\s*$/, "").trim();
  }

  $("shuffle").addEventListener("click", pick);
  fMonk.addEventListener("change", updateCount);
  fParker.addEventListener("change", updateCount);

  updateCount();
  pick();
})();
