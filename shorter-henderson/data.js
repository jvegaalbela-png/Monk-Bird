// Compositions by Wayne Shorter and Joe Henderson.
// Dates reflect the composer's own first recording where known.
const COMPOSITIONS = [
  // --- SHORTER · Jazz Messengers era (1959–63) ---
  {
    composer: "shorter",
    title: "Lester Left Town",
    yearComposed: "1959",
    yearFirstRecorded: "Feb 14, 1960",
    firstAlbum: "The Big Beat (Blue Note)",
    albumArtUrl: null,
    anecdote: "An elegy for Lester Young, who had died the year before. One of Shorter's earliest recorded compositions, cut with Art Blakey's Jazz Messengers. The title is a tender way of saying: the Prez is gone."
  },
  {
    composer: "shorter",
    title: "Sincerely Diana",
    yearComposed: "1961",
    yearFirstRecorded: "May 27, 1961",
    firstAlbum: "Mosaic (Blue Note)",
    albumArtUrl: null,
    anecdote: "For Shorter's first wife, Teruka Nakagami, nicknamed 'Diana'. A sinuous modal line from his Messengers years."
  },
  {
    composer: "shorter",
    title: "Children of the Night",
    yearComposed: "1961",
    yearFirstRecorded: "May 27, 1961",
    firstAlbum: "Mosaic (Blue Note)",
    albumArtUrl: null,
    anecdote: "A lyrical waltz that became one of Shorter's most enduring early tunes — the title nods to the bebop generation who made their art after midnight."
  },
  {
    composer: "shorter",
    title: "Armageddon",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 29, 1964",
    firstAlbum: "Night Dreamer (Blue Note)",
    albumArtUrl: null,
    anecdote: "The opener of Shorter's first mature Blue Note date. A thunderous modal vamp with a sideman lineup — McCoy Tyner, Reggie Workman, Elvin Jones — borrowed straight from Coltrane's classic quartet."
  },
  {
    composer: "shorter",
    title: "Night Dreamer",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 29, 1964",
    firstAlbum: "Night Dreamer (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track of the album. A hushed modal ballad that set the template for Shorter's Blue Note voice: half-dreamed, half-prayer."
  },
  {
    composer: "shorter",
    title: "Oriental Folk Song",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 29, 1964",
    firstAlbum: "Night Dreamer (Blue Note)",
    albumArtUrl: null,
    anecdote: "A pentatonic head inspired by Japanese folk melody — Shorter's teenage fascination with Japanese culture resurfacing in his music."
  },
  {
    composer: "shorter",
    title: "Virgo",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 29, 1964",
    firstAlbum: "Night Dreamer (Blue Note)",
    albumArtUrl: null,
    anecdote: "Shorter was born August 25 — a Virgo. The tune is as meticulous and introspective as the astrological profile suggests."
  },
  {
    composer: "shorter",
    title: "Black Nile",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 29, 1964",
    firstAlbum: "Night Dreamer (Blue Note)",
    albumArtUrl: null,
    anecdote: "A fast, flowing blowing vehicle on a minor mode — one of Shorter's most-covered bebop-to-modal bridges."
  },
  // --- SHORTER · JuJu & Speak No Evil (1964–65) ---
  {
    composer: "shorter",
    title: "JuJu",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track of Shorter's second Blue Note leader date. The relentless vamp sounds less like a head than an incantation — African and Afro-Cuban ritual music filtered through the modal-jazz lens."
  },
  {
    composer: "shorter",
    title: "Deluge",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "A cascading melody over a rolling Elvin Jones pulse — an early Shorter classic that Herbie Hancock later said taught him how a composed line could imply an entire harmonic world."
  },
  {
    composer: "shorter",
    title: "House of Jade",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "A delicate ballad with the lapidary precision the title suggests — Shorter's compositions of this era often operate more like carved objects than songs."
  },
  {
    composer: "shorter",
    title: "Mahjong",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "Another Asian-inflected piece from Shorter's JuJu session — pentatonic melody over open-voiced harmony."
  },
  {
    composer: "shorter",
    title: "Yes or No",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "One of Shorter's most iconic lines — a perfect hard-bop head that still feels new every time. A staple of the 1960s Miles Davis quintet's live sets."
  },
  {
    composer: "shorter",
    title: "Twelve More Bars to Go",
    yearComposed: "1964",
    yearFirstRecorded: "Aug 3, 1964",
    firstAlbum: "JuJu (Blue Note)",
    albumArtUrl: null,
    anecdote: "A cheeky blues — Shorter winking at the form while ever so slightly twisting it out of shape."
  },
  {
    composer: "shorter",
    title: "Witch Hunt",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "Opener of Shorter's masterpiece 'Speak No Evil'. Shorter later said the whole album was conceived around 'misty landscapes with wildflowers' and folktale figures."
  },
  {
    composer: "shorter",
    title: "Fee-Fi-Fo-Fum",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "A contrafact of 'I Got Rhythm' transformed into something stalking and menacing — the title is the giant's chant from Jack and the Beanstalk."
  },
  {
    composer: "shorter",
    title: "Dance Cadaverous",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "A waltz inspired by Sibelius's 'Valse Triste'. Shorter was listening to a lot of European art music in this period and letting it seep into the vocabulary."
  },
  {
    composer: "shorter",
    title: "Speak No Evil",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. The head is a cool, almost impassive statement; the real drama happens in the improvisations, with Freddie Hubbard, Herbie Hancock, Ron Carter, and Elvin Jones."
  },
  {
    composer: "shorter",
    title: "Infant Eyes",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "A lullaby for Shorter's infant daughter Miyako. Built on nine-bar phrases instead of the usual eight — an asymmetry that makes the tune feel permanently on the verge of resolving."
  },
  {
    composer: "shorter",
    title: "Wild Flower",
    yearComposed: "1964",
    yearFirstRecorded: "Dec 24, 1964",
    firstAlbum: "Speak No Evil (Blue Note)",
    albumArtUrl: null,
    anecdote: "A waltz that closes the album — part of the 'misty landscape' imagery Shorter had in mind. Instantly recognizable as Shorter-in-bloom."
  },
  // --- SHORTER · The Soothsayer, Et Cetera, All Seeing Eye (1965) ---
  {
    composer: "shorter",
    title: "The Soothsayer",
    yearComposed: "1965",
    yearFirstRecorded: "Mar 4, 1965",
    firstAlbum: "The Soothsayer (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. One of Shorter's most mysterious heads — the melody moves in tentative, prophetic steps. The album sat unreleased in the Blue Note vault until 1979."
  },
  {
    composer: "shorter",
    title: "Angola",
    yearComposed: "1965",
    yearFirstRecorded: "Mar 4, 1965",
    firstAlbum: "The Soothsayer (Blue Note)",
    albumArtUrl: null,
    anecdote: "A swaying modal piece — Shorter weaving African references into his Blue Note writing years before 'world music' was a marketing category."
  },
  {
    composer: "shorter",
    title: "Lady Day",
    yearComposed: "1965",
    yearFirstRecorded: "Mar 4, 1965",
    firstAlbum: "The Soothsayer (Blue Note)",
    albumArtUrl: null,
    anecdote: "A ballad dedicated to Billie Holiday, who had died in 1959. The melody has the same unhurried, behind-the-beat feel Billie made her signature."
  },
  {
    composer: "shorter",
    title: "Valse Triste",
    yearComposed: "1965",
    yearFirstRecorded: "Mar 4, 1965",
    firstAlbum: "The Soothsayer (Blue Note)",
    albumArtUrl: null,
    anecdote: "Shorter's direct reworking of Sibelius's 1903 'Valse Triste' — he'd been hinting at the theme on 'Dance Cadaverous' and finally tackled it head-on."
  },
  {
    composer: "shorter",
    title: "Et Cetera",
    yearComposed: "1965",
    yearFirstRecorded: "Jun 14, 1965",
    firstAlbum: "Et Cetera (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. The album was another Blue Note shelf-sitter, unissued until 1980. Joe Chambers plays drums; the entire session feels like chamber music built from modal atoms."
  },
  {
    composer: "shorter",
    title: "Penelope",
    yearComposed: "1965",
    yearFirstRecorded: "Jun 14, 1965",
    firstAlbum: "Et Cetera (Blue Note)",
    albumArtUrl: null,
    anecdote: "A delicate ballad named for Odysseus's patient wife. Shorter's classical and literary references bloom everywhere in this period."
  },
  {
    composer: "shorter",
    title: "Indian Song",
    yearComposed: "1965",
    yearFirstRecorded: "Jun 14, 1965",
    firstAlbum: "Et Cetera (Blue Note)",
    albumArtUrl: null,
    anecdote: "A pentatonic modal piece — whether 'Indian' means South Asian or Native American is, as often with Shorter's titles, deliberately unresolved."
  },
  {
    composer: "shorter",
    title: "Toy Tune",
    yearComposed: "1965",
    yearFirstRecorded: "Jun 14, 1965",
    firstAlbum: "Et Cetera (Blue Note)",
    albumArtUrl: null,
    anecdote: "A deceptively simple head that sounds like a music-box melody until you try to play it — then the rhythmic and harmonic subtleties bite back."
  },
  {
    composer: "shorter",
    title: "The All Seeing Eye",
    yearComposed: "1965",
    yearFirstRecorded: "Oct 15, 1965",
    firstAlbum: "The All Seeing Eye (Blue Note)",
    albumArtUrl: null,
    anecdote: "A six-horn suite Shorter described as 'a little tune I wrote about God.' His most orchestral Blue Note statement, and one of the first signs that his composing was outgrowing the hard-bop form entirely."
  },
  {
    composer: "shorter",
    title: "Genesis",
    yearComposed: "1965",
    yearFirstRecorded: "Oct 15, 1965",
    firstAlbum: "The All Seeing Eye (Blue Note)",
    albumArtUrl: null,
    anecdote: "From the 'All Seeing Eye' suite — the creation of the world in sound, composed as a proudly extended through-written piece rather than a head-solo-head jazz tune."
  },
  {
    composer: "shorter",
    title: "Chaos",
    yearComposed: "1965",
    yearFirstRecorded: "Oct 15, 1965",
    firstAlbum: "The All Seeing Eye (Blue Note)",
    albumArtUrl: null,
    anecdote: "From the same suite — the mythic inverse of 'Genesis', written as a controlled unraveling."
  },
  // --- SHORTER · Adam's Apple & Schizophrenia (1966–67) ---
  {
    composer: "shorter",
    title: "Adam's Apple",
    yearComposed: "1966",
    yearFirstRecorded: "Feb 3, 1966",
    firstAlbum: "Adam's Apple (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track — a buoyant bop head with Herbie Hancock on piano. One of Shorter's most whistled lines."
  },
  {
    composer: "shorter",
    title: "502 Blues (Drinkin' and Drivin')",
    yearComposed: "1966",
    yearFirstRecorded: "Feb 3, 1966",
    firstAlbum: "Adam's Apple (Blue Note)",
    albumArtUrl: null,
    anecdote: "The title refers to the California vehicle code section for drunk driving. A 12-bar blues tipped just slightly off balance."
  },
  {
    composer: "shorter",
    title: "El Gaucho",
    yearComposed: "1966",
    yearFirstRecorded: "Feb 3, 1966",
    firstAlbum: "Adam's Apple (Blue Note)",
    albumArtUrl: null,
    anecdote: "A Latin-inflected waltz — one of the earliest hints of the South American influences that would dominate Shorter's writing in the 1970s."
  },
  {
    composer: "shorter",
    title: "Footprints",
    yearComposed: "1966",
    yearFirstRecorded: "Feb 24, 1966",
    firstAlbum: "Adam's Apple (Blue Note)",
    albumArtUrl: null,
    anecdote: "A 6/8 minor blues that became Shorter's most-covered composition. Miles Davis's 1967 reading on 'Miles Smiles' is the version most musicians learn from — but Shorter cut his own first."
  },
  {
    composer: "shorter",
    title: "Teru",
    yearComposed: "1966",
    yearFirstRecorded: "Feb 24, 1966",
    firstAlbum: "Adam's Apple (Blue Note)",
    albumArtUrl: null,
    anecdote: "Named for Shorter's wife Teruka. A tender ballad Herbie Hancock called one of the hardest tunes in Shorter's book to improvise over."
  },
  {
    composer: "shorter",
    title: "Schizophrenia",
    yearComposed: "1967",
    yearFirstRecorded: "Mar 10, 1967",
    firstAlbum: "Schizophrenia (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. A split-personality piece with abrupt tempo and mood shifts — the structure itself is the joke."
  },
  {
    composer: "shorter",
    title: "Miyako",
    yearComposed: "1967",
    yearFirstRecorded: "Mar 10, 1967",
    firstAlbum: "Schizophrenia (Blue Note)",
    albumArtUrl: null,
    anecdote: "For Shorter's daughter Miyako — a second lullaby to follow 'Infant Eyes'. One of the most exquisite ballads in the post-bop repertoire."
  },
  {
    composer: "shorter",
    title: "Tom Thumb",
    yearComposed: "1967",
    yearFirstRecorded: "Mar 10, 1967",
    firstAlbum: "Schizophrenia (Blue Note)",
    albumArtUrl: null,
    anecdote: "A buoyant little strut, named for the fairy-tale miniature hero. Carries the lineage of Shorter's earlier 'Fee-Fi-Fo-Fum'."
  },
  // --- SHORTER · Miles Davis Second Quintet (1965–68) ---
  {
    composer: "shorter",
    title: "E.S.P.",
    yearComposed: "1965",
    yearFirstRecorded: "Jan 20, 1965",
    firstAlbum: "E.S.P. (Columbia)",
    albumArtUrl: null,
    anecdote: "The title track of Miles's first Second Quintet studio album. Shorter wrote it his first month in the band — a calling card that also gave the group its telepathic reputation."
  },
  {
    composer: "shorter",
    title: "Iris",
    yearComposed: "1965",
    yearFirstRecorded: "Jan 20, 1965",
    firstAlbum: "E.S.P. (Columbia)",
    albumArtUrl: null,
    anecdote: "A ballad of floating suspensions — harmonies that never quite land. Named after Iris, Shorter's first daughter."
  },
  {
    composer: "shorter",
    title: "Orbits",
    yearComposed: "1966",
    yearFirstRecorded: "Oct 24, 1966",
    firstAlbum: "Miles Smiles (Columbia)",
    albumArtUrl: null,
    anecdote: "An angular line with a boppish sprint underneath — the Second Quintet at peak telepathy. Shorter would later say he composed it almost as a game, daring Tony Williams to keep up."
  },
  {
    composer: "shorter",
    title: "Dolores",
    yearComposed: "1966",
    yearFirstRecorded: "Oct 25, 1966",
    firstAlbum: "Miles Smiles (Columbia)",
    albumArtUrl: null,
    anecdote: "A knotty contrafact that sits at the edge of bop and free — the head itself is almost a deliberate stumble."
  },
  {
    composer: "shorter",
    title: "Pinocchio",
    yearComposed: "1967",
    yearFirstRecorded: "Jun 22, 1967",
    firstAlbum: "Nefertiti (Columbia)",
    albumArtUrl: null,
    anecdote: "A short, skipping line — the 'Pinocchio' gesture suggests a puppet learning to walk. One of the most joyful tunes in the Second Quintet book."
  },
  {
    composer: "shorter",
    title: "Nefertiti",
    yearComposed: "1967",
    yearFirstRecorded: "Jun 7, 1967",
    firstAlbum: "Nefertiti (Columbia)",
    albumArtUrl: null,
    anecdote: "The title track inverts the usual jazz structure: Miles and Wayne play the 16-bar head over and over, while Herbie, Ron, and Tony improvise underneath. The melody becomes the accompaniment."
  },
  {
    composer: "shorter",
    title: "Fall",
    yearComposed: "1967",
    yearFirstRecorded: "Jul 19, 1967",
    firstAlbum: "Nefertiti (Columbia)",
    albumArtUrl: null,
    anecdote: "A slow, gorgeous ballad that feels like watching leaves drift down. Shorter's writing for Miles kept moving deeper into pure atmosphere."
  },
  {
    composer: "shorter",
    title: "Prince of Darkness",
    yearComposed: "1966",
    yearFirstRecorded: "Oct 25, 1966",
    firstAlbum: "Miles Smiles (Columbia)",
    albumArtUrl: null,
    anecdote: "A nickname for Miles himself — and a fitting one for this slithering, minor-key head."
  },
  {
    composer: "shorter",
    title: "Limbo",
    yearComposed: "1967",
    yearFirstRecorded: "Jun 23, 1967",
    firstAlbum: "Sorcerer (Columbia)",
    albumArtUrl: null,
    anecdote: "A six-beat vamp that floats between two harmonic centers — permanently in suspension, like the title."
  },
  {
    composer: "shorter",
    title: "Masqualero",
    yearComposed: "1967",
    yearFirstRecorded: "May 17, 1967",
    firstAlbum: "Sorcerer (Columbia)",
    albumArtUrl: null,
    anecdote: "A moody minor piece Shorter said was named for a Spanish festival figure who wears a grotesque mask — a reminder that jazz could still be theatre."
  },
  {
    composer: "shorter",
    title: "Paraphernalia",
    yearComposed: "1967",
    yearFirstRecorded: "Jan 16, 1968",
    firstAlbum: "Miles in the Sky (Columbia)",
    albumArtUrl: null,
    anecdote: "Featuring George Benson on guitar — a rare Miles studio cameo. A shuffling, open-ended vamp that pointed the Second Quintet toward the fusion era just beyond the horizon."
  },
  {
    composer: "shorter",
    title: "Sanctuary",
    yearComposed: "1968",
    yearFirstRecorded: "Feb 15, 1969",
    firstAlbum: "In a Silent Way / Bitches Brew (Columbia)",
    albumArtUrl: null,
    anecdote: "A benedictory drone-piece that Miles placed on 'Bitches Brew' as a moment of stillness inside the storm. Originally written in 1968 for the Second Quintet."
  },
  // --- SHORTER · Super Nova & Odyssey of Iska (1969–70) ---
  {
    composer: "shorter",
    title: "Super Nova",
    yearComposed: "1969",
    yearFirstRecorded: "Aug 29, 1969",
    firstAlbum: "Super Nova (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track of Shorter's fusion-era Blue Note album with John McLaughlin and Sonny Sharrock on guitars. A different Shorter — noisier, freer, already looking toward Weather Report."
  },
  {
    composer: "shorter",
    title: "Water Babies",
    yearComposed: "1967",
    yearFirstRecorded: "Jun 13, 1967",
    firstAlbum: "Water Babies (Columbia, rel. 1976)",
    albumArtUrl: null,
    anecdote: "A Second Quintet session from 1967 that Columbia kept in the vault until 1976. The title tune has the watery, weightless feeling of late-Shorter ballads."
  },
  {
    composer: "shorter",
    title: "Capricorn",
    yearComposed: "1969",
    yearFirstRecorded: "Aug 29, 1969",
    firstAlbum: "Super Nova (Blue Note)",
    albumArtUrl: null,
    anecdote: "A churning, funk-leaning vamp — the kind of rhythm-section attitude that Miroslav Vitous and Airto Moreira would carry straight into Weather Report."
  },
  {
    composer: "shorter",
    title: "Odyssey of Iska",
    yearComposed: "1970",
    yearFirstRecorded: "Aug 26, 1970",
    firstAlbum: "Odyssey of Iska (Blue Note)",
    albumArtUrl: null,
    anecdote: "Shorter's final Blue Note date as a leader. A five-part suite named for a Shorter-invented mythology: 'Iska' was his shorthand for a seeker-hero archetype."
  },
  // --- SHORTER · Weather Report era (1971–86) ---
  {
    composer: "shorter",
    title: "Tears",
    yearComposed: "1971",
    yearFirstRecorded: "Feb 1971",
    firstAlbum: "Weather Report (Columbia)",
    albumArtUrl: null,
    anecdote: "From Weather Report's self-titled debut. An atmospheric ballad, all air and shimmer — Shorter at his most painterly."
  },
  {
    composer: "shorter",
    title: "Eurydice",
    yearComposed: "1971",
    yearFirstRecorded: "Feb 1971",
    firstAlbum: "Weather Report (Columbia)",
    albumArtUrl: null,
    anecdote: "Named for Orpheus's wife in Greek myth — a looking-backward ballad that unfurls slowly, like a memory."
  },
  {
    composer: "shorter",
    title: "Surucucu",
    yearComposed: "1972",
    yearFirstRecorded: "Oct 1972",
    firstAlbum: "I Sing the Body Electric (Columbia)",
    albumArtUrl: null,
    anecdote: "An Amazonian pit viper, and also this tune — one of Shorter's earliest forays into the Brazilian and Afro-Latin colors that would define his later writing."
  },
  {
    composer: "shorter",
    title: "Non-Stop Home",
    yearComposed: "1972",
    yearFirstRecorded: "Oct 1972",
    firstAlbum: "I Sing the Body Electric (Columbia)",
    albumArtUrl: null,
    anecdote: "A brief, cycling tune from Weather Report's second album — the group already developing the multi-directional ensemble language that would be their signature."
  },
  {
    composer: "shorter",
    title: "Harlequin",
    yearComposed: "1977",
    yearFirstRecorded: "1977",
    firstAlbum: "Heavy Weather (Columbia)",
    albumArtUrl: null,
    anecdote: "A graceful, sashaying piece from Weather Report's commercial peak — the album that brought them Jaco Pastorius and 'Birdland'."
  },
  {
    composer: "shorter",
    title: "Palladium",
    yearComposed: "1977",
    yearFirstRecorded: "1977",
    firstAlbum: "Heavy Weather (Columbia)",
    albumArtUrl: null,
    anecdote: "Named after the legendary Latin dance hall in midtown Manhattan — a salsa-tinged showcase for Jaco and Shorter trading fire."
  },
  {
    composer: "shorter",
    title: "Elegant People",
    yearComposed: "1976",
    yearFirstRecorded: "1976",
    firstAlbum: "Black Market (Columbia)",
    albumArtUrl: null,
    anecdote: "A stately, strutting piece Shorter reportedly wrote as an affectionate portrait of his Brazilian musician friends — Milton Nascimento's circle especially."
  },
  {
    composer: "shorter",
    title: "Plaza Real",
    yearComposed: "1983",
    yearFirstRecorded: "1983",
    firstAlbum: "Procession (Columbia)",
    albumArtUrl: null,
    anecdote: "A Spanish-inflected ballad named for the Barcelona square — Shorter traveling in both music and geography."
  },
  // --- SHORTER · Solo albums (1974–2003) ---
  {
    composer: "shorter",
    title: "Beauty and the Beast",
    yearComposed: "1974",
    yearFirstRecorded: "1974",
    firstAlbum: "Native Dancer (Columbia)",
    albumArtUrl: null,
    anecdote: "The opener of Shorter's landmark collaboration with Milton Nascimento — a grooving tune that melts North American jazz and Brazilian song into one voice."
  },
  {
    composer: "shorter",
    title: "Ana Maria",
    yearComposed: "1974",
    yearFirstRecorded: "1974",
    firstAlbum: "Native Dancer (Columbia)",
    albumArtUrl: null,
    anecdote: "For Shorter's second wife Ana Maria Patricio. A radiant, Brazilian-inflected ballad; Ana Maria died in 1996 when TWA Flight 800 exploded over Long Island."
  },
  {
    composer: "shorter",
    title: "Diana",
    yearComposed: "1974",
    yearFirstRecorded: "1974",
    firstAlbum: "Native Dancer (Columbia)",
    albumArtUrl: null,
    anecdote: "Another portrait of Shorter's first wife Teruka 'Diana' Nakagami — more than a decade after 'Sincerely Diana', and completely transformed."
  },
  {
    composer: "shorter",
    title: "Joanna's Theme",
    yearComposed: "1976",
    yearFirstRecorded: "1976",
    firstAlbum: "The Last Tycoon soundtrack (Paramount)",
    albumArtUrl: null,
    anecdote: "Shorter's theme for the Kazan/Pinter film adaptation of F. Scott Fitzgerald's last novel — his first and only major film-composer credit."
  },
  {
    composer: "shorter",
    title: "Endangered Species",
    yearComposed: "1985",
    yearFirstRecorded: "1985",
    firstAlbum: "Atlantis (Columbia)",
    albumArtUrl: null,
    anecdote: "From Shorter's first true solo album after leaving Weather Report. A churning piece of orchestral post-fusion — complicated, not fashionable, unmistakably his."
  },
  {
    composer: "shorter",
    title: "Atlantis",
    yearComposed: "1985",
    yearFirstRecorded: "1985",
    firstAlbum: "Atlantis (Columbia)",
    albumArtUrl: null,
    anecdote: "Title track — a drifting, mythic soundscape. Shorter was deep in Nichiren Buddhism by this time and looking for musical forms that could hold that cosmology."
  },
  {
    composer: "shorter",
    title: "The Three Marias",
    yearComposed: "1985",
    yearFirstRecorded: "1985",
    firstAlbum: "Atlantis (Columbia)",
    albumArtUrl: null,
    anecdote: "Named for the three stars in Orion's belt, which in Brazilian folk tradition are called 'As Três Marias'. Shorter's cosmos was always half science, half myth."
  },
  {
    composer: "shorter",
    title: "Joy Ryder",
    yearComposed: "1988",
    yearFirstRecorded: "1988",
    firstAlbum: "Joy Ryder (Columbia)",
    albumArtUrl: null,
    anecdote: "Title track of a late-'80s fusion date — Shorter at his brightest, though the album's reception was muted. He pivoted back to acoustic quartet writing soon after."
  },
  {
    composer: "shorter",
    title: "Aung San Suu Kyi",
    yearComposed: "1997",
    yearFirstRecorded: "1997",
    firstAlbum: "1 + 1 (Verve)",
    albumArtUrl: null,
    anecdote: "A duet album with Herbie Hancock; this track won them the 1998 Grammy for Best Instrumental Composition. Named for the Burmese pro-democracy leader then under house arrest."
  },
  {
    composer: "shorter",
    title: "Go",
    yearComposed: "2002",
    yearFirstRecorded: "Nov 2001",
    firstAlbum: "Footprints Live! (Verve)",
    albumArtUrl: null,
    anecdote: "From Shorter's acoustic quartet with Danilo Pérez, John Patitucci, and Brian Blade — the group that defined his 21st-century voice. 'Go' became the show-opener for years of tours."
  },
  {
    composer: "shorter",
    title: "Sacajawea",
    yearComposed: "2003",
    yearFirstRecorded: "2003",
    firstAlbum: "Alegría (Verve)",
    albumArtUrl: null,
    anecdote: "Named for the Shoshone interpreter who guided Lewis and Clark. Shorter's interest in historical outsiders as musical protagonists."
  },
  {
    composer: "shorter",
    title: "Orbits (revisited)",
    yearComposed: "1966",
    yearFirstRecorded: "2003",
    firstAlbum: "Alegría (Verve)",
    albumArtUrl: null,
    anecdote: "Shorter's orchestral reimagining of his 1966 Miles Smiles head — four decades on, with horns and strings instead of a quintet."
  },
  // --- HENDERSON · Page One & early Blue Notes (1963) ---
  {
    composer: "henderson",
    title: "Recorda Me",
    yearComposed: "1963",
    yearFirstRecorded: "Jun 3, 1963",
    firstAlbum: "Page One (Blue Note)",
    albumArtUrl: null,
    anecdote: "From Henderson's debut album at age 26. A Latin-inflected modal piece ('remember me' in Portuguese) that became one of the most-played tunes in the post-bop songbook."
  },
  {
    composer: "henderson",
    title: "Homestretch",
    yearComposed: "1963",
    yearFirstRecorded: "Jun 3, 1963",
    firstAlbum: "Page One (Blue Note)",
    albumArtUrl: null,
    anecdote: "An up-tempo closer to Henderson's first leader date. The entire album was taped in one afternoon at Van Gelder's studio."
  },
  {
    composer: "henderson",
    title: "Jinrikisha",
    yearComposed: "1963",
    yearFirstRecorded: "Jun 3, 1963",
    firstAlbum: "Page One (Blue Note)",
    albumArtUrl: null,
    anecdote: "Named for the Japanese two-wheeled passenger cart. The tune has a tugging, propelled quality — the rhythm of two strong feet hauling a small vehicle forward."
  },
  // --- HENDERSON · In 'n Out & Inner Urge (1964) ---
  {
    composer: "henderson",
    title: "In 'n Out",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 10, 1964",
    firstAlbum: "In 'n Out (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. The opening head rockets up and down — it is, quite literally, in and out. With Kenny Dorham, McCoy Tyner, Richard Davis, and Elvin Jones."
  },
  {
    composer: "henderson",
    title: "Punjab",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 10, 1964",
    firstAlbum: "In 'n Out (Blue Note)",
    albumArtUrl: null,
    anecdote: "A drone-based piece evoking Indian modal music, two years before Coltrane's 'Om' and three years before 'Within You Without You'. Henderson was reading the winds early."
  },
  {
    composer: "henderson",
    title: "Serenity",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 10, 1964",
    firstAlbum: "In 'n Out (Blue Note)",
    albumArtUrl: null,
    anecdote: "A lyrical ballad with one of Henderson's most beautiful melodies — proof that the tenor saxophonist who could blow fire could also whisper."
  },
  {
    composer: "henderson",
    title: "Brown's Town",
    yearComposed: "1964",
    yearFirstRecorded: "Apr 10, 1964",
    firstAlbum: "In 'n Out (Blue Note)",
    albumArtUrl: null,
    anecdote: "Named for trumpeter Clifford Brown, who had died in 1956 — a swinging hard-bop tribute."
  },
  {
    composer: "henderson",
    title: "Inner Urge",
    yearComposed: "1964",
    yearFirstRecorded: "Nov 30, 1964",
    firstAlbum: "Inner Urge (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track. A slowly uncoiling modal head with the classic Coltrane-quartet rhythm section of McCoy Tyner, Bob Cranshaw, and Elvin Jones."
  },
  {
    composer: "henderson",
    title: "Isotope",
    yearComposed: "1964",
    yearFirstRecorded: "Nov 30, 1964",
    firstAlbum: "Inner Urge (Blue Note)",
    albumArtUrl: null,
    anecdote: "A blues with one foot in Monk's world — those off-kilter voicings and rhythmic elbows. One of Henderson's most-covered compositions."
  },
  {
    composer: "henderson",
    title: "El Barrio",
    yearComposed: "1964",
    yearFirstRecorded: "Nov 30, 1964",
    firstAlbum: "Inner Urge (Blue Note)",
    albumArtUrl: null,
    anecdote: "A Latin-inflected minor piece — Henderson had played with Horace Silver's quintet in the early '60s and absorbed Silver's Afro-Cuban inheritance."
  },
  // --- HENDERSON · Mode for Joe & The Kicker (1966–67) ---
  {
    composer: "henderson",
    title: "Mode for Joe",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "Title track of Henderson's all-star Blue Note sextet date with Lee Morgan, Curtis Fuller, Bobby Hutcherson, Cedar Walton, Ron Carter, and Joe Chambers. A hard-swinging modal anthem."
  },
  {
    composer: "henderson",
    title: "A Shade of Jade",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "A cool-burning minor-mode piece that Henderson later called one of his favorites of his own compositions."
  },
  {
    composer: "henderson",
    title: "Caribbean Fire Dance",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "An extended modal burner with an Afro-Caribbean clave underneath — Henderson's most overtly percussive writing of the Blue Note years."
  },
  {
    composer: "henderson",
    title: "Granted",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "A minor-blues head with a boppish flair — Henderson tipping his hat to the older generation of tenor players like Sonny Rollins and Hank Mobley."
  },
  {
    composer: "henderson",
    title: "Free Wheelin'",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "An uptempo blowing vehicle that lives up to its title — six horns in a row finding open road."
  },
  {
    composer: "henderson",
    title: "Mo Joe",
    yearComposed: "1966",
    yearFirstRecorded: "Jan 27, 1966",
    firstAlbum: "Mode for Joe (Blue Note)",
    albumArtUrl: null,
    anecdote: "A Horace Silver-style soul-jazz head — Henderson knew how to write a groove, though he rarely gets credit for that side of his book."
  },
  {
    composer: "henderson",
    title: "The Kicker",
    yearComposed: "1967",
    yearFirstRecorded: "Aug 10, 1967",
    firstAlbum: "The Kicker (Milestone)",
    albumArtUrl: null,
    anecdote: "Henderson's first album for the new Milestone label, after his Blue Note contract ended. Title track is a medium-groove blues that punches exactly where the name promises."
  },
  {
    composer: "henderson",
    title: "Mamacita",
    yearComposed: "1967",
    yearFirstRecorded: "Aug 10, 1967",
    firstAlbum: "The Kicker (Milestone)",
    albumArtUrl: null,
    anecdote: "A Latin-tinged ballad that quickly entered the standards repertoire — one of Henderson's most lyrical melodies."
  },
  {
    composer: "henderson",
    title: "If",
    yearComposed: "1967",
    yearFirstRecorded: "Aug 10, 1967",
    firstAlbum: "The Kicker (Milestone)",
    albumArtUrl: null,
    anecdote: "A plaintive ballad with one of Henderson's simplest, saddest melodies. The title hangs in the air."
  },
  // --- HENDERSON · Tetragon (1967–68) ---
  {
    composer: "henderson",
    title: "Tetragon",
    yearComposed: "1967",
    yearFirstRecorded: "Sep 27, 1967",
    firstAlbum: "Tetragon (Milestone)",
    albumArtUrl: null,
    anecdote: "Title track, a four-part modal figure (hence 'tetragon'). Henderson's compositional writing was getting more abstract and architectural."
  },
  {
    composer: "henderson",
    title: "The Bead Game",
    yearComposed: "1967",
    yearFirstRecorded: "May 16, 1968",
    firstAlbum: "Tetragon (Milestone)",
    albumArtUrl: null,
    anecdote: "Named after Hermann Hesse's 'The Glass Bead Game' (Das Glasperlenspiel). Henderson was reading deeply in mid-century European literature in this period."
  },
  {
    composer: "henderson",
    title: "Waltz for Zweetie",
    yearComposed: "1967",
    yearFirstRecorded: "Sep 27, 1967",
    firstAlbum: "Tetragon (Milestone)",
    albumArtUrl: null,
    anecdote: "A 3/4 ballad with the tender, confiding quality Henderson reserved for his waltzes."
  },
  // --- HENDERSON · Power to the People & early-'70s Milestone (1969–73) ---
  {
    composer: "henderson",
    title: "Power to the People",
    yearComposed: "1969",
    yearFirstRecorded: "May 23, 1969",
    firstAlbum: "Power to the People (Milestone)",
    albumArtUrl: null,
    anecdote: "Title track. Henderson stepping out of pure hard-bop territory — the album also featured Herbie Hancock on electric piano and Ron Carter on electric bass."
  },
  {
    composer: "henderson",
    title: "Black Narcissus",
    yearComposed: "1969",
    yearFirstRecorded: "May 23, 1969",
    firstAlbum: "Power to the People (Milestone)",
    albumArtUrl: null,
    anecdote: "An angular, meditative piece named (reportedly) for the 1947 Powell-Pressburger film. Widely covered since — a Henderson tune that pulls the blues into a very personal harmonic corner."
  },
  {
    composer: "henderson",
    title: "Afro-Centric",
    yearComposed: "1969",
    yearFirstRecorded: "May 23, 1969",
    firstAlbum: "Power to the People (Milestone)",
    albumArtUrl: null,
    anecdote: "A polyrhythmic, horn-driven piece that plants Henderson squarely in the same political/musical ground Pharoah Sanders and Archie Shepp were working in 1969."
  },
  {
    composer: "henderson",
    title: "Foresight and Afterthought",
    yearComposed: "1969",
    yearFirstRecorded: "May 23, 1969",
    firstAlbum: "Power to the People (Milestone)",
    albumArtUrl: null,
    anecdote: "A two-part conceptual piece — one side of the head the 'thought', the other the 'second thought'. Henderson playing with form as idea."
  },
  {
    composer: "henderson",
    title: "Opus One-Point-Five",
    yearComposed: "1969",
    yearFirstRecorded: "May 23, 1969",
    firstAlbum: "Power to the People (Milestone)",
    albumArtUrl: null,
    anecdote: "Henderson's jokey title for a half-step-away-from-Opus-One contrafact — the kind of inside gag bebop players shared over sessions."
  },
  {
    composer: "henderson",
    title: "Gazelle",
    yearComposed: "1970",
    yearFirstRecorded: "Jul 29, 1970",
    firstAlbum: "In Pursuit of Blackness (Milestone)",
    albumArtUrl: null,
    anecdote: "A fleet-footed modal piece from the electric-band era. Henderson's quintet on this date included Stanley Clarke on bass and Leon Thomas guesting on vocal."
  },
  {
    composer: "henderson",
    title: "Current Events",
    yearComposed: "1970",
    yearFirstRecorded: "Jul 29, 1970",
    firstAlbum: "In Pursuit of Blackness (Milestone)",
    albumArtUrl: null,
    anecdote: "A jagged, urgent piece whose title matched the Vietnam/civil-rights-era climate the album was recorded into."
  },
  {
    composer: "henderson",
    title: "Bwaata",
    yearComposed: "1972",
    yearFirstRecorded: "Feb 1972",
    firstAlbum: "Black Is the Color (Milestone)",
    albumArtUrl: null,
    anecdote: "A spiraling modal piece — Henderson's writing in this period was often built on extended vamp structures rather than traditional heads."
  },
  {
    composer: "henderson",
    title: "Black Is the Color",
    yearComposed: "1972",
    yearFirstRecorded: "Feb 1972",
    firstAlbum: "Black Is the Color (Milestone)",
    albumArtUrl: null,
    anecdote: "Title track. Not a cover of the folk song of similar name — a brooding, pulse-driven original with Henderson's most drawn-out tenor statement."
  },
  {
    composer: "henderson",
    title: "Canyon Lady",
    yearComposed: "1973",
    yearFirstRecorded: "Aug 8, 1973",
    firstAlbum: "Canyon Lady (Milestone)",
    albumArtUrl: null,
    anecdote: "A big-band Latin date recorded in San Francisco. The title track is all horns and percussion — Henderson in full arranger mode."
  },
  {
    composer: "henderson",
    title: "Multiple",
    yearComposed: "1973",
    yearFirstRecorded: "Jan 1973",
    firstAlbum: "Multiple (Milestone)",
    albumArtUrl: null,
    anecdote: "Title track. Henderson using overdubs to play multiple saxophones and even a little electric guitar — an experimental one-man-band moment in his discography."
  },
  {
    composer: "henderson",
    title: "Song for Sinners",
    yearComposed: "1973",
    yearFirstRecorded: "Jan 1973",
    firstAlbum: "Multiple (Milestone)",
    albumArtUrl: null,
    anecdote: "A mordant, after-hours piece — Henderson at his most bluesy and unguarded."
  },
  {
    composer: "henderson",
    title: "Earth",
    yearComposed: "1976",
    yearFirstRecorded: "Mar 17, 1976",
    firstAlbum: "The Elements (Milestone)",
    albumArtUrl: null,
    anecdote: "From Henderson's four-element suite with Alice Coltrane on harp and piano, Charlie Haden on bass, and Leon 'Ndugu' Chancler on drums. The most meditative of his large-scale works."
  },
  {
    composer: "henderson",
    title: "Fire",
    yearComposed: "1976",
    yearFirstRecorded: "Mar 17, 1976",
    firstAlbum: "The Elements (Milestone)",
    albumArtUrl: null,
    anecdote: "The most intense of the four element pieces. Alice Coltrane's harp flickers through a long Henderson solo that approaches pure cry."
  },
  {
    composer: "henderson",
    title: "Air",
    yearComposed: "1976",
    yearFirstRecorded: "Mar 17, 1976",
    firstAlbum: "The Elements (Milestone)",
    albumArtUrl: null,
    anecdote: "Diaphanous writing with Alice Coltrane's harp shimmering behind Henderson's flute-like tenor."
  },
  {
    composer: "henderson",
    title: "Water",
    yearComposed: "1976",
    yearFirstRecorded: "Mar 17, 1976",
    firstAlbum: "The Elements (Milestone)",
    albumArtUrl: null,
    anecdote: "Closes the 'Elements' suite. Henderson's writing here foreshadows the spare, contemplative quartet voice he'd refine in his Verve comeback of the 1990s."
  }
];
