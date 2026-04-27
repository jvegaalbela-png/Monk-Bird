// Compositions by Thelonious Monk and Charlie Parker.
// Dates reflect the composer's own first recording where known.
// Notes lean on common jazz-history consensus; some attributions are debated.
const COMPOSITIONS = [
  // --- MONK · Blue Note 1947–48 ---
  {
    composer: "monk",
    title: "'Round Midnight",
    yearComposed: "c. 1936–1944",
    yearFirstRecorded: "1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "Monk's most-recorded composition and jazz's most-covered ballad. Cootie Williams cut the first commercial recording in 1944; Monk led his own version on November 21, 1947. Dizzy Gillespie later added the iconic intro/interlude and Bernie Hanighen supplied lyrics."
  },
  {
    composer: "monk",
    title: "Humph",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 15, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "Cut at Monk's very first session as a leader. A wiry bop line that opens the Blue Note story."
  },
  {
    composer: "monk",
    title: "Thelonious",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 24, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A signature piece built almost entirely on a single B-flat — Monk's mission statement about the power of one note."
  },
  {
    composer: "monk",
    title: "Ruby, My Dear",
    yearComposed: "c. 1940s",
    yearFirstRecorded: "Oct 24, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A ballad of aching sophistication, often said to be named for Monk's first girlfriend, Rubie Richardson. Coleman Hawkins and John Coltrane both cut definitive readings with Monk a decade later."
  },
  {
    composer: "monk",
    title: "Well, You Needn't",
    yearComposed: "1944",
    yearFirstRecorded: "Oct 24, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "The title supposedly came from singer Charlie Beamon telling Monk people wouldn't like the tune. Monk replied, 'Well, you needn't.' It became a bebop anthem."
  },
  {
    composer: "monk",
    title: "Off Minor",
    yearComposed: "c. 1946",
    yearFirstRecorded: "Oct 24, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A study in the unresolved — dissonant voicings that seem to lean permanently off-axis. Bud Powell's earlier trio recording helped spread it."
  },
  {
    composer: "monk",
    title: "Introspection",
    yearComposed: "c. 1946",
    yearFirstRecorded: "Oct 24, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "One of Monk's knottiest bop heads; he rarely revisited it in later years."
  },
  {
    composer: "monk",
    title: "In Walked Bud",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 21, 1947",
    firstAlbum: "Genius of Modern Music, Vol. 1 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A tribute to Bud Powell, set to the changes of Irving Berlin's 'Blue Skies'. Powell had defended Monk from police during a drug arrest — the dedication is returned in melody."
  },
  {
    composer: "monk",
    title: "Misterioso",
    yearComposed: "1948",
    yearFirstRecorded: "July 2, 1948",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A blues built entirely of walking sixths — a shape no one else had thought to put on a horn line. The Milt Jackson vibraphone solo on the date is one of bop's great moments."
  },
  {
    composer: "monk",
    title: "Epistrophy",
    yearComposed: "1941",
    yearFirstRecorded: "July 2, 1948",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "Co-written with drummer Kenny Clarke, originally titled 'Fly Right'. Cootie Williams recorded it first in 1942. Monk used it as his nightly set-closer for the rest of his career."
  },
  {
    composer: "monk",
    title: "Evidence",
    yearComposed: "1948",
    yearFirstRecorded: "July 2, 1948",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A radical reduction of 'Just You, Just Me' — Monk kept only skeletal accents from the original. The title is a pun: 'just-us' → 'justice' → 'evidence'."
  },
  {
    composer: "monk",
    title: "I Mean You",
    yearComposed: "1946",
    yearFirstRecorded: "July 2, 1948",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "Co-credited with Coleman Hawkins, who had hired Monk for his group in 1944 and championed him when almost no one else would."
  },
  {
    composer: "monk",
    title: "Who Knows",
    yearComposed: "1948",
    yearFirstRecorded: "July 2, 1948",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A fast bop line that rarely surfaced outside the 1948 Blue Note date."
  },
  // --- MONK · Blue Note 1951–52 ---
  {
    composer: "monk",
    title: "Four in One",
    yearComposed: "1951",
    yearFirstRecorded: "July 23, 1951",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A hair-raising sixteenth-note line that many players still consider one of the hardest Monk heads to execute cleanly."
  },
  {
    composer: "monk",
    title: "Criss-Cross",
    yearComposed: "1951",
    yearFirstRecorded: "July 23, 1951",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A set of interlocking motifs that criss and cross over themselves — later chosen as the title tune of Monk's 1963 Columbia album."
  },
  {
    composer: "monk",
    title: "Straight, No Chaser",
    yearComposed: "1951",
    yearFirstRecorded: "July 23, 1951",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A twelve-bar blues on a single repeating phrase, endlessly displaced against the bar line. The title — and Monk's stubborn refusal to smooth the rhythm — is the whole point."
  },
  {
    composer: "monk",
    title: "Ask Me Now",
    yearComposed: "1951",
    yearFirstRecorded: "July 23, 1951",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "One of Monk's most tender ballads, drenched in his characteristic half-step descents."
  },
  {
    composer: "monk",
    title: "Eronel",
    yearComposed: "1951",
    yearFirstRecorded: "July 23, 1951",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "Credited to Monk for decades, but pianist Sadik Hakim and trumpeter Idrees Sulieman later claimed co-authorship. 'Eronel' is 'Lenore' (a singer) spelled backwards."
  },
  {
    composer: "monk",
    title: "Hornin' In",
    yearComposed: "1952",
    yearFirstRecorded: "May 30, 1952",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A blues-tinged bop head from Monk's final Blue Note session as a leader."
  },
  {
    composer: "monk",
    title: "Skippy",
    yearComposed: "1952",
    yearFirstRecorded: "May 30, 1952",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A fiendishly fast line built on the changes of 'Tea for Two' — notorious among musicians for its treacherous turnaround."
  },
  {
    composer: "monk",
    title: "Let's Cool One",
    yearComposed: "1952",
    yearFirstRecorded: "May 30, 1952",
    firstAlbum: "Genius of Modern Music, Vol. 2 (Blue Note)",
    albumArtUrl: null,
    anecdote: "A medium-groove riff tune — deceptively simple, full of Monk's signature unbalanced phrase lengths."
  },
  // --- MONK · Prestige 1952–54 ---
  {
    composer: "monk",
    title: "Little Rootie Tootie",
    yearComposed: "1952",
    yearFirstRecorded: "Oct 15, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "A portrait of Monk's young son Thelonious Jr. (nicknamed 'Toot'), including a mid-tune quotation of a passing train whistle that fascinated the boy."
  },
  {
    composer: "monk",
    title: "Monk's Dream",
    yearComposed: "1952",
    yearFirstRecorded: "Oct 15, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "Later the title track of Monk's 1963 Columbia debut, which introduced him to a much wider audience after Time put him on the cover a year later."
  },
  {
    composer: "monk",
    title: "Trinkle, Tinkle",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 18, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "A delicate, broken-glass line that Coltrane later made iconic on 'Thelonious Monk with John Coltrane' (1957)."
  },
  {
    composer: "monk",
    title: "Bye-Ya",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 18, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "An Afro-Cuban-tinged head whose title waves cheerfully at the listener on the way out."
  },
  {
    composer: "monk",
    title: "Reflections",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 18, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "A lyrical ballad, later a favorite of Steve Lacy, who devoted much of his career to Monk's repertoire."
  },
  {
    composer: "monk",
    title: "Bemsha Swing",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 18, 1952",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "Co-written with drummer Denzil Best. 'Bemsha' is a play on 'Bimshire', a Barbadian nickname for the island — a nod to Best's heritage."
  },
  {
    composer: "monk",
    title: "Think of One",
    yearComposed: "1953",
    yearFirstRecorded: "Nov 13, 1953",
    firstAlbum: "Thelonious (Prestige)",
    albumArtUrl: null,
    anecdote: "An oblique riff tune recorded at a notoriously chaotic Prestige date — the same session produced 'Friday the 13th' after the horns refused to learn a new piece."
  },
  {
    composer: "monk",
    title: "Friday the 13th",
    yearComposed: "Nov 13, 1953",
    yearFirstRecorded: "Nov 13, 1953",
    firstAlbum: "Thelonious (Prestige)",
    albumArtUrl: null,
    anecdote: "Written on the spot after the horn players balked at rehearsing more material. Monk wrote a two-bar vamp on a scrap of paper and the band jammed on it for over ten minutes — hence the title."
  },
  {
    composer: "monk",
    title: "Let's Call This",
    yearComposed: "1953",
    yearFirstRecorded: "Nov 13, 1953",
    firstAlbum: "Thelonious (Prestige)",
    albumArtUrl: null,
    anecdote: "Monk reportedly couldn't decide on a title and left the placeholder 'let's call this…' on the page. It stuck."
  },
  {
    composer: "monk",
    title: "Blue Monk",
    yearComposed: "1954",
    yearFirstRecorded: "Sep 22, 1954",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "The definitive Monk blues — a twelve-bar of such elegant simplicity that it became a standard almost instantly. Monk played it nearly every night for the rest of his career."
  },
  {
    composer: "monk",
    title: "Nutty",
    yearComposed: "1954",
    yearFirstRecorded: "Sep 22, 1954",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "A kangaroo-hop line whose rhythmic springs became a Monk signature."
  },
  {
    composer: "monk",
    title: "Work",
    yearComposed: "1954",
    yearFirstRecorded: "Sep 22, 1954",
    firstAlbum: "Thelonious Monk Trio (Prestige)",
    albumArtUrl: null,
    anecdote: "Short, thorny, and over before you're ready — Monk the miniaturist."
  },
  {
    composer: "monk",
    title: "Locomotive",
    yearComposed: "1954",
    yearFirstRecorded: "May 11, 1954",
    firstAlbum: "Thelonious Monk Quintet (Prestige)",
    albumArtUrl: null,
    anecdote: "A chugging minor blues head, named for the way its rhythm piles forward without ever quite settling."
  },
  {
    composer: "monk",
    title: "Hackensack",
    yearComposed: "1954",
    yearFirstRecorded: "May 11, 1954",
    firstAlbum: "Thelonious Monk Quintet (Prestige)",
    albumArtUrl: null,
    anecdote: "Named for Hackensack, New Jersey, where Rudy Van Gelder's home studio — engineer to half of mid-century jazz — was located."
  },
  {
    composer: "monk",
    title: "We See",
    yearComposed: "1954",
    yearFirstRecorded: "May 11, 1954",
    firstAlbum: "Thelonious Monk Quintet (Prestige)",
    albumArtUrl: null,
    anecdote: "A bright, buoyant head Monk returned to often in his 1960s quartet sets."
  },
  // --- MONK · Riverside 1955–61 ---
  {
    composer: "monk",
    title: "Gallop's Gallop",
    yearComposed: "1955",
    yearFirstRecorded: "Oct 13, 1955",
    firstAlbum: "The Unique Thelonious Monk (Riverside)",
    albumArtUrl: null,
    anecdote: "A neck-snapping sixteenth-note line Monk saved for the most athletic sidemen. Gigi Gryce and Steve Lacy both took it on."
  },
  {
    composer: "monk",
    title: "Brilliant Corners",
    yearComposed: "1956",
    yearFirstRecorded: "Oct 15, 1956",
    firstAlbum: "Brilliant Corners (Riverside)",
    albumArtUrl: null,
    anecdote: "Famously recorded across four exhausting hours with no complete take — the released version was stitched together from fragments by producer Orrin Keepnews. Sonny Rollins called it the hardest tune he'd ever played."
  },
  {
    composer: "monk",
    title: "Ba-lue Bolivar Ba-lues-are",
    yearComposed: "1956",
    yearFirstRecorded: "Oct 9, 1956",
    firstAlbum: "Brilliant Corners (Riverside)",
    albumArtUrl: null,
    anecdote: "A blues dedicated to the Hotel Bolivar on Central Park West, where Baroness Pannonica de Koenigswarter threw nightly parties for half of bebop."
  },
  {
    composer: "monk",
    title: "Pannonica",
    yearComposed: "1956",
    yearFirstRecorded: "Oct 9, 1956",
    firstAlbum: "Brilliant Corners (Riverside)",
    albumArtUrl: null,
    anecdote: "For Baroness Pannonica de Koenigswarter — Monk's Rothschild-heiress patron, friend, and champion. Monk played the melody on a celeste he spotted in the Riverside studio."
  },
  {
    composer: "monk",
    title: "Functional",
    yearComposed: "1957",
    yearFirstRecorded: "Apr 16, 1957",
    firstAlbum: "Thelonious Himself (Riverside)",
    albumArtUrl: null,
    anecdote: "A stride-inflected solo blues — Monk, alone at the piano, showing the whole lineage from James P. Johnson forward."
  },
  {
    composer: "monk",
    title: "Monk's Mood",
    yearComposed: "1946",
    yearFirstRecorded: "Apr 16, 1957",
    firstAlbum: "Thelonious Himself (Riverside)",
    albumArtUrl: null,
    anecdote: "An early composition that waited a decade for its definitive solo reading. Coltrane joined Monk on a quartet version the same week."
  },
  {
    composer: "monk",
    title: "Crepuscule with Nellie",
    yearComposed: "1957",
    yearFirstRecorded: "June 1957",
    firstAlbum: "Monk's Music (Riverside)",
    albumArtUrl: null,
    anecdote: "Monk's love song to his wife Nellie, written during her serious illness. He insisted on recording it without any improvisation — the melody always stated exactly as written, like a prayer."
  },
  {
    composer: "monk",
    title: "Off Minor (reprise)",
    yearComposed: "c. 1946",
    yearFirstRecorded: "June 1957",
    firstAlbum: "Monk's Music (Riverside)",
    albumArtUrl: null,
    anecdote: "The all-star septet version on 'Monk's Music' with Coltrane and Hawkins finally gave the tune the horn-section reading it had always wanted."
  },
  {
    composer: "monk",
    title: "Blues Five Spot",
    yearComposed: "1958",
    yearFirstRecorded: "Aug 7, 1958",
    firstAlbum: "Thelonious in Action (Riverside)",
    albumArtUrl: null,
    anecdote: "Named for the legendary Bowery club where Monk's 1957 residency — with Coltrane in the quartet — became the stuff of legend."
  },
  {
    composer: "monk",
    title: "Coming on the Hudson",
    yearComposed: "1958",
    yearFirstRecorded: "Feb 25, 1958",
    firstAlbum: "Mulligan Meets Monk (Riverside)",
    albumArtUrl: null,
    anecdote: "A wistful, slightly off-kilter ballad that didn't appear on the original LP and first surfaced on later reissues."
  },
  {
    composer: "monk",
    title: "Light Blue",
    yearComposed: "1957",
    yearFirstRecorded: "Aug 7, 1958",
    firstAlbum: "Thelonious in Action (Riverside)",
    albumArtUrl: null,
    anecdote: "A chromatic ballad in unusual phrase lengths — Monk's melodies always seem a beat short, or a beat long, on purpose."
  },
  {
    composer: "monk",
    title: "Rhythm-a-ning",
    yearComposed: "1957",
    yearFirstRecorded: "Feb 25, 1957",
    firstAlbum: "Art Blakey's Jazz Messengers with Thelonious Monk (Atlantic)",
    albumArtUrl: null,
    anecdote: "A definitive rhythm-changes head; the opening phrase quotes Mary Lou Williams' 'Walkin' and Swingin''. Blakey's Messengers cut the first version before Monk recorded his own a year later."
  },
  {
    composer: "monk",
    title: "Jackie-ing",
    yearComposed: "1959",
    yearFirstRecorded: "June 4, 1959",
    firstAlbum: "5 by Monk by 5 (Riverside)",
    albumArtUrl: null,
    anecdote: "For Monk's niece Jackie Smith. The melody mimics the giddy, off-kilter bounce of a child being tossed in the air."
  },
  {
    composer: "monk",
    title: "Played Twice",
    yearComposed: "1959",
    yearFirstRecorded: "June 4, 1959",
    firstAlbum: "5 by Monk by 5 (Riverside)",
    albumArtUrl: null,
    anecdote: "The head is literally played twice on the way in — a Monk joke baked into the structure of the tune."
  },
  {
    composer: "monk",
    title: "San Francisco Holiday (Worry Later)",
    yearComposed: "1959",
    yearFirstRecorded: "Apr 29, 1960",
    firstAlbum: "At the Blackhawk (Riverside)",
    albumArtUrl: null,
    anecdote: "Written during a West Coast club residency. 'Worry Later' was Monk's standing instruction to anyone who tried to question his charts."
  },
  {
    composer: "monk",
    title: "Round Lights",
    yearComposed: "c. 1959",
    yearFirstRecorded: "1964",
    firstAlbum: "Solo Monk (Columbia)",
    albumArtUrl: null,
    anecdote: "A short, quizzical solo piece — one of the miniatures from Monk's great Columbia solo record."
  },
  // --- MONK · Columbia 1962–68 ---
  {
    composer: "monk",
    title: "Bright Mississippi",
    yearComposed: "1962",
    yearFirstRecorded: "Oct 31, 1962",
    firstAlbum: "Monk's Dream (Columbia)",
    albumArtUrl: null,
    anecdote: "Monk's personal rearrangement of 'Sweet Georgia Brown' — the same changes, but recast with Monk's angular melody on top. A salute to the New Orleans lineage."
  },
  {
    composer: "monk",
    title: "Five Spot Blues",
    yearComposed: "1962",
    yearFirstRecorded: "Nov 1, 1962",
    firstAlbum: "Monk's Dream (Columbia)",
    albumArtUrl: null,
    anecdote: "A slow blues paying tribute to the Five Spot Cafe, where Monk's legendary 1957 residency with Coltrane reshaped the music."
  },
  {
    composer: "monk",
    title: "Children's Song (That Old Man)",
    yearComposed: "c. 1963",
    yearFirstRecorded: "1964",
    firstAlbum: "Solo Monk (Columbia)",
    albumArtUrl: null,
    anecdote: "Monk plays 'This Old Man' as if he's wandering into it from a dream — the kind of thing he'd do at home for his kids."
  },
  {
    composer: "monk",
    title: "Stuffy Turkey",
    yearComposed: "1963",
    yearFirstRecorded: "Jan 30, 1964",
    firstAlbum: "It's Monk's Time (Columbia)",
    albumArtUrl: null,
    anecdote: "A play on Coleman Hawkins' 'Stuffy' — Monk giving a wink back to the elder statesman who had given him his first big break."
  },
  {
    composer: "monk",
    title: "Teo",
    yearComposed: "1964",
    yearFirstRecorded: "Mar 9, 1964",
    firstAlbum: "It's Monk's Time (Columbia)",
    albumArtUrl: null,
    anecdote: "For producer Teo Macero — Miles Davis's regular producer — who was behind the boards on Monk's Columbia records too."
  },
  {
    composer: "monk",
    title: "Monk's Point",
    yearComposed: "1964",
    yearFirstRecorded: "Oct 6, 1964",
    firstAlbum: "Solo Monk (Columbia)",
    albumArtUrl: null,
    anecdote: "A crisp solo blues — Monk working the same territory he'd mined for two decades, but with the ease of a lifetime of living in it."
  },
  {
    composer: "monk",
    title: "North of the Sunset",
    yearComposed: "1964",
    yearFirstRecorded: "Nov 2, 1964",
    firstAlbum: "Solo Monk (Columbia)",
    albumArtUrl: null,
    anecdote: "A stride-infused solo piece that tips its hat to Willie 'The Lion' Smith and the Harlem piano tradition."
  },
  {
    composer: "monk",
    title: "Oska T.",
    yearComposed: "1963",
    yearFirstRecorded: "Oct 31, 1963",
    firstAlbum: "Miles and Monk at Newport (Columbia)",
    albumArtUrl: null,
    anecdote: "Named, according to Monk's son, for nothing in particular — one of those titles that just sounded right."
  },
  {
    composer: "monk",
    title: "Green Chimneys",
    yearComposed: "1966",
    yearFirstRecorded: "Nov 14, 1966",
    firstAlbum: "Straight, No Chaser (Columbia)",
    albumArtUrl: null,
    anecdote: "Named for the boarding school in Brewster, NY that Monk's daughter Barbara ('Boo Boo') attended. A charging, open-hearted vamp."
  },
  {
    composer: "monk",
    title: "Boo Boo's Birthday",
    yearComposed: "1967",
    yearFirstRecorded: "Dec 14, 1967",
    firstAlbum: "Underground (Columbia)",
    albumArtUrl: null,
    anecdote: "A birthday present, in sheet music, for Monk's daughter Barbara ('Boo Boo')."
  },
  {
    composer: "monk",
    title: "Ugly Beauty",
    yearComposed: "1967",
    yearFirstRecorded: "Dec 14, 1967",
    firstAlbum: "Underground (Columbia)",
    albumArtUrl: null,
    anecdote: "Monk's only published waltz. The title is the point — beauty not in spite of the dissonance, but because of it."
  },
  {
    composer: "monk",
    title: "Raise Four",
    yearComposed: "1968",
    yearFirstRecorded: "Feb 14, 1968",
    firstAlbum: "Underground (Columbia)",
    albumArtUrl: null,
    anecdote: "The entire tune is built around one gesture: raise the fourth of the scale. Monk the minimalist at his most insistent."
  },
  {
    composer: "monk",
    title: "In Walked Bud (vocal version)",
    yearComposed: "1947",
    yearFirstRecorded: "Dec 21, 1967",
    firstAlbum: "Underground (Columbia)",
    albumArtUrl: null,
    anecdote: "Jon Hendricks added lyrics in 1967; his guest vocal on 'Underground' turned the bop anthem into a storytelling romp about a night at Minton's."
  },
  // --- PARKER · pre-Savoy & first Savoy date (1944–45) ---
  {
    composer: "parker",
    title: "Red Cross",
    yearComposed: "1944",
    yearFirstRecorded: "Sep 15, 1944",
    firstAlbum: "Tiny Grimes Quintet – Savoy single",
    albumArtUrl: null,
    anecdote: "Parker's first recorded original, cut as a sideman on Tiny Grimes' session. A rhythm-changes line that pre-figures the bebop vocabulary he'd unleash a year later."
  },
  {
    composer: "parker",
    title: "Billie's Bounce",
    yearComposed: "1945",
    yearFirstRecorded: "Nov 26, 1945",
    firstAlbum: "Charlie Parker's Reboppers – Savoy (later on The Charlie Parker Story)",
    albumArtUrl: null,
    anecdote: "From Parker's first session as a leader. Named for manager Billy Shaw; a twelve-bar blues that every bebop player cut their teeth on for the next fifty years."
  },
  {
    composer: "parker",
    title: "Now's the Time",
    yearComposed: "1945",
    yearFirstRecorded: "Nov 26, 1945",
    firstAlbum: "Charlie Parker's Reboppers – Savoy",
    albumArtUrl: null,
    anecdote: "A riff blues of such clean simplicity it was lifted wholesale four years later by Paul Williams as 'The Hucklebuck', becoming an R&B dance hit."
  },
  {
    composer: "parker",
    title: "Thriving on a Riff",
    yearComposed: "1945",
    yearFirstRecorded: "Nov 26, 1945",
    firstAlbum: "Charlie Parker's Reboppers – Savoy",
    albumArtUrl: null,
    anecdote: "A rhythm-changes head that Parker later recast as 'Anthropology' (co-credited with Dizzy Gillespie)."
  },
  {
    composer: "parker",
    title: "Ko-Ko",
    yearComposed: "1945",
    yearFirstRecorded: "Nov 26, 1945",
    firstAlbum: "Charlie Parker's Reboppers – Savoy",
    albumArtUrl: null,
    anecdote: "Widely credited as the true birth-cry of bebop: a terrifying 300-bpm run over the changes of Ray Noble's 'Cherokee'. Dizzy Gillespie had to pinch-hit on piano mid-session."
  },
  {
    composer: "parker",
    title: "Warming Up a Riff",
    yearComposed: "1945",
    yearFirstRecorded: "Nov 26, 1945",
    firstAlbum: "Charlie Parker's Reboppers – Savoy (alt. release)",
    albumArtUrl: null,
    anecdote: "A studio warm-up on 'Cherokee' changes, captured by chance and issued as a Parker original."
  },
  // --- PARKER · Dial 1946–47 ---
  {
    composer: "parker",
    title: "Moose the Mooche",
    yearComposed: "1946",
    yearFirstRecorded: "Mar 28, 1946",
    firstAlbum: "Charlie Parker Septet – Dial (later on Charlie Parker on Dial)",
    albumArtUrl: null,
    anecdote: "Named for Emry Byrd — nicknamed 'Moose the Mooche' — Parker's Los Angeles heroin dealer, to whom Parker had signed over half his record royalties."
  },
  {
    composer: "parker",
    title: "Yardbird Suite",
    yearComposed: "1946",
    yearFirstRecorded: "Mar 28, 1946",
    firstAlbum: "Charlie Parker Septet – Dial",
    albumArtUrl: null,
    anecdote: "A cool, unhurried line — Parker's own nickname ('Yardbird' → 'Bird') in the title. Later given lyrics and a life as a jazz vocal standard."
  },
  {
    composer: "parker",
    title: "Ornithology",
    yearComposed: "1946",
    yearFirstRecorded: "Mar 28, 1946",
    firstAlbum: "Charlie Parker Septet – Dial",
    albumArtUrl: null,
    anecdote: "Co-written with trumpeter Benny Harris; a head on the changes of 'How High the Moon'. Another title nodding to Parker's 'Bird' moniker — the whole science of Bird study."
  },
  {
    composer: "parker",
    title: "Night in Tunisia (Parker version)",
    yearComposed: "1942",
    yearFirstRecorded: "Mar 28, 1946",
    firstAlbum: "Charlie Parker Septet – Dial",
    albumArtUrl: null,
    anecdote: "Not Parker's composition — it's Dizzy Gillespie's — but Parker's Dial take contains 'The Famous Alto Break', a four-bar cadenza so perfect that Dizzy said Bird never played anything else as good."
  },
  {
    composer: "parker",
    title: "Relaxin' at Camarillo",
    yearComposed: "1947",
    yearFirstRecorded: "Feb 26, 1947",
    firstAlbum: "Charlie Parker – Dial",
    albumArtUrl: null,
    anecdote: "Written after Parker's six-month stay at Camarillo State Hospital following his breakdown at the infamous 'Lover Man' session. A serene blues from a man freshly dried out."
  },
  {
    composer: "parker",
    title: "Carvin' the Bird",
    yearComposed: "1947",
    yearFirstRecorded: "Feb 19, 1947",
    firstAlbum: "Charlie Parker – Dial",
    albumArtUrl: null,
    anecdote: "A blues built for the tenor/alto cutting contest — Parker vs. Wardell Gray, two of the fastest saxophonists alive, trading eights."
  },
  {
    composer: "parker",
    title: "Stupendous",
    yearComposed: "1947",
    yearFirstRecorded: "Feb 19, 1947",
    firstAlbum: "Charlie Parker – Dial",
    albumArtUrl: null,
    anecdote: "A rhythm-changes blazer from the same joyous return-to-form session."
  },
  {
    composer: "parker",
    title: "Donna Lee",
    yearComposed: "1947",
    yearFirstRecorded: "May 8, 1947",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Attributed to Parker but widely believed to have been written by the 21-year-old Miles Davis, who first brought the lead sheet to the session. A white-knuckle bebop line on 'Back Home Again in Indiana'."
  },
  {
    composer: "parker",
    title: "Chasin' the Bird",
    yearComposed: "1947",
    yearFirstRecorded: "May 8, 1947",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A rare Parker experiment with counterpoint — Miles Davis's trumpet actually chases Parker's alto through a fugue-like head on rhythm changes."
  },
  {
    composer: "parker",
    title: "Cheryl",
    yearComposed: "1947",
    yearFirstRecorded: "May 8, 1947",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A medium blues named for Parker's daughter Cheryl."
  },
  {
    composer: "parker",
    title: "Buzzy",
    yearComposed: "1947",
    yearFirstRecorded: "May 8, 1947",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A riff blues from the great quintet session with Miles, Bud Powell's brother-in-law Duke Jordan, Tommy Potter, and Max Roach."
  },
  // --- PARKER · Dial Oct–Dec 1947 ---
  {
    composer: "parker",
    title: "Dexterity",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 28, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "From Parker's first New York Dial session with the classic 'Dial quintet' — Miles Davis, Duke Jordan, Tommy Potter, Max Roach. A virtuoso display without apology."
  },
  {
    composer: "parker",
    title: "Bongo Bop",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 28, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "A bop head with Latin rhythmic underpinnings — Parker playing with the same Afro-Cuban influences Dizzy Gillespie was folding in at the same moment."
  },
  {
    composer: "parker",
    title: "Dewey Square",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 28, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "Named for the Dewey Square Hotel on Seventh Avenue in Harlem, where Parker often stayed in the late '40s."
  },
  {
    composer: "parker",
    title: "Bird of Paradise",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 28, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "Parker's beautifully reimagined contrafact of 'All the Things You Are' — another Bird-themed title in his flock of ornithological originals."
  },
  {
    composer: "parker",
    title: "Scrapple from the Apple",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 4, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "Changes of 'Honeysuckle Rose' (A sections) and 'I Got Rhythm' (bridge). The title: a plate of scrapple ordered in New York ('the Apple')."
  },
  {
    composer: "parker",
    title: "Drifting on a Reed",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 4, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "A blues with a languorous, floating quality — and yet another Bird pun in the title."
  },
  {
    composer: "parker",
    title: "Klactoveedsedstene",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 4, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "Nonsense-syllable title — Parker's version of scat rendered in Germanic gibberish. The music is anything but nonsense: one of his sharpest bop lines."
  },
  {
    composer: "parker",
    title: "Quasimodo",
    yearComposed: "1947",
    yearFirstRecorded: "Oct 28, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "A slow, lyrical line on the changes of 'Embraceable You' — Parker's own variation on Gershwin's ballad."
  },
  {
    composer: "parker",
    title: "Charlie's Wig",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 4, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "A sly rhythm-changes head with one of those curious Parker titles whose story has been lost to time."
  },
  {
    composer: "parker",
    title: "Bird Feathers",
    yearComposed: "1947",
    yearFirstRecorded: "Nov 4, 1947",
    firstAlbum: "Charlie Parker Quintet – Dial",
    albumArtUrl: null,
    anecdote: "Yet another entry in Parker's aviary of titles — a quick, darting bop head."
  },
  // --- PARKER · Savoy Sep 1948 ---
  {
    composer: "parker",
    title: "Parker's Mood",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 18, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A blues in B-flat that opens with one of the most famous piano-and-alto tags in jazz history — King Pleasure later set lyrics to Parker's solo and made it a vocal standard."
  },
  {
    composer: "parker",
    title: "Bluebird",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 18, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A twelve-bar blues with a melody built on sinuous eighth-note fragments — more Bird-themed ornithology."
  },
  {
    composer: "parker",
    title: "Klaunstance",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 18, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Rhythm changes at breakneck tempo — another of those Parker nonsense-coinage titles."
  },
  {
    composer: "parker",
    title: "Bird Gets the Worm",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 18, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Based on the changes of 'Lover, Come Back to Me' — and naming the punchline in the title: the early Bird gets it."
  },
  {
    composer: "parker",
    title: "Barbados",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A blues with a Latin calypso lilt — Parker, like Dizzy and Monk, was drawn to Caribbean rhythms well before 'Latin jazz' became a category."
  },
  {
    composer: "parker",
    title: "Ah-Leu-Cha",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Another contrapuntal Parker rarity — trumpet and alto chase each other in canon. Miles Davis later revived it on 'Round About Midnight' (1957)."
  },
  {
    composer: "parker",
    title: "Constellation",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A blistering rhythm-changes head — one of Parker's most demanding originals, recorded in a single flawless take."
  },
  {
    composer: "parker",
    title: "Perhaps",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A riff blues — Parker could seemingly conjure a new twelve-bar head in every bar of a single tune."
  },
  {
    composer: "parker",
    title: "Marmaduke",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Changes of 'Honeysuckle Rose' with a bright, skipping head. One of Parker's cleanest Savoy lines."
  },
  {
    composer: "parker",
    title: "Steeplechase",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "Rhythm changes at a racehorse tempo — later the namesake of the Danish SteepleChase jazz label, which has put out more than a thousand records."
  },
  {
    composer: "parker",
    title: "Merry-Go-Round",
    yearComposed: "1948",
    yearFirstRecorded: "Sep 24, 1948",
    firstAlbum: "Charlie Parker All Stars – Savoy",
    albumArtUrl: null,
    anecdote: "A buoyant rhythm-changes head that spins gamely through its choruses."
  },
  // --- PARKER · Mercury / Verve 1949–53 ---
  {
    composer: "parker",
    title: "Segment",
    yearComposed: "1949",
    yearFirstRecorded: "Jan 1949",
    firstAlbum: "Charlie Parker – Mercury single",
    albumArtUrl: null,
    anecdote: "A darkly minor-mode bop head — Parker working in harmonic corners he rarely visited."
  },
  {
    composer: "parker",
    title: "Diverse",
    yearComposed: "1949",
    yearFirstRecorded: "Jan 1949",
    firstAlbum: "Charlie Parker – Mercury single",
    albumArtUrl: null,
    anecdote: "A minor-key head from the same short Mercury date, rarely revisited by other players."
  },
  {
    composer: "parker",
    title: "Passport",
    yearComposed: "1949",
    yearFirstRecorded: "May 5, 1949",
    firstAlbum: "Charlie Parker – Mercury single",
    albumArtUrl: null,
    anecdote: "Recorded weeks before Parker made his first trip to Europe for the Paris Jazz Festival — his actual passport was fresh in hand."
  },
  {
    composer: "parker",
    title: "Visa",
    yearComposed: "1949",
    yearFirstRecorded: "May 5, 1949",
    firstAlbum: "Charlie Parker – Mercury single",
    albumArtUrl: null,
    anecdote: "Part of the travel-document trilogy ('Passport', 'Visa', 'Cardboard') Parker cut at his May 1949 date."
  },
  {
    composer: "parker",
    title: "Cardboard",
    yearComposed: "1949",
    yearFirstRecorded: "May 5, 1949",
    firstAlbum: "Charlie Parker – Mercury single",
    albumArtUrl: null,
    anecdote: "Rhythm changes — the third of the travel-themed titles from the same Mercury session."
  },
  {
    composer: "parker",
    title: "Bloomdido",
    yearComposed: "1950",
    yearFirstRecorded: "Jun 6, 1950",
    firstAlbum: "Bird and Diz (Verve)",
    albumArtUrl: null,
    anecdote: "From the only studio meeting of Parker and Dizzy Gillespie with Monk on piano. The rhythm section also featured Curly Russell and Buddy Rich."
  },
  {
    composer: "parker",
    title: "An Oscar for Treadwell",
    yearComposed: "1950",
    yearFirstRecorded: "Jun 6, 1950",
    firstAlbum: "Bird and Diz (Verve)",
    albumArtUrl: null,
    anecdote: "Named for trumpeter-arranger George Treadwell, who was married to Sarah Vaughan and managing her career at the time."
  },
  {
    composer: "parker",
    title: "Mohawk",
    yearComposed: "1950",
    yearFirstRecorded: "Jun 6, 1950",
    firstAlbum: "Bird and Diz (Verve)",
    albumArtUrl: null,
    anecdote: "A blues from the Bird-Diz-Monk date — the only recorded session to unite three of bebop's biggest architects under one microphone."
  },
  {
    composer: "parker",
    title: "Leap Frog",
    yearComposed: "1950",
    yearFirstRecorded: "Jun 6, 1950",
    firstAlbum: "Bird and Diz (Verve)",
    albumArtUrl: null,
    anecdote: "Co-credited with Dizzy Gillespie; the horns jump over each other like the title promises."
  },
  {
    composer: "parker",
    title: "Au Privave",
    yearComposed: "1951",
    yearFirstRecorded: "Jan 17, 1951",
    firstAlbum: "Charlie Parker – Verve single (later Now's the Time)",
    albumArtUrl: null,
    anecdote: "A blues with a serpentine head of eighth-note triplets. The title is mangled French — Parker probably meant something like 'in private'."
  },
  {
    composer: "parker",
    title: "K.C. Blues",
    yearComposed: "1951",
    yearFirstRecorded: "Jan 17, 1951",
    firstAlbum: "Charlie Parker – Verve single",
    albumArtUrl: null,
    anecdote: "A slow, aching blues — Parker looking back to his Kansas City roots from the height of his New York fame."
  },
  {
    composer: "parker",
    title: "She Rote",
    yearComposed: "1951",
    yearFirstRecorded: "Jan 17, 1951",
    firstAlbum: "Charlie Parker – Verve single",
    albumArtUrl: null,
    anecdote: "A contrafact of 'Beyond the Blue Horizon'. The pun is the point: she wrote it? She 'rote' it."
  },
  {
    composer: "parker",
    title: "My Little Suede Shoes",
    yearComposed: "1951",
    yearFirstRecorded: "Mar 12, 1951",
    firstAlbum: "South of the Border (Verve)",
    albumArtUrl: null,
    anecdote: "Parker's most whistleable melody — a Latin-inflected charmer cut with an Afro-Cuban rhythm section. Became his most commercially successful original."
  },
  {
    composer: "parker",
    title: "Blues for Alice",
    yearComposed: "1951",
    yearFirstRecorded: "Aug 8, 1951",
    firstAlbum: "Swedish Schnapps (Verve)",
    albumArtUrl: null,
    anecdote: "Named for Alice Friedman, a fan. The changes — now called 'Bird blues' — reharmonize a standard blues with descending ii-V's and became a bebop benchmark."
  },
  {
    composer: "parker",
    title: "Si Si",
    yearComposed: "1951",
    yearFirstRecorded: "Aug 8, 1951",
    firstAlbum: "Swedish Schnapps (Verve)",
    albumArtUrl: null,
    anecdote: "Another riff blues, Parker still finding fresh phrases in the form six years after 'Billie's Bounce'."
  },
  {
    composer: "parker",
    title: "Swedish Schnapps",
    yearComposed: "1951",
    yearFirstRecorded: "Aug 8, 1951",
    firstAlbum: "Swedish Schnapps (Verve)",
    albumArtUrl: null,
    anecdote: "Named in honor of Parker's tremendously popular 1950 tour of Sweden, where he was received like a head of state."
  },
  {
    composer: "parker",
    title: "Back Home Blues",
    yearComposed: "1951",
    yearFirstRecorded: "Aug 8, 1951",
    firstAlbum: "Swedish Schnapps (Verve)",
    albumArtUrl: null,
    anecdote: "A down-home blues head — Parker tipping his hat to the Kansas City tradition that raised him."
  },
  {
    composer: "parker",
    title: "Kim",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 30, 1952",
    firstAlbum: "Charlie Parker – Verve",
    albumArtUrl: null,
    anecdote: "Rhythm changes at a fearsome tempo — named for Parker's daughter Kim with Chan Richardson."
  },
  {
    composer: "parker",
    title: "Laird Baird",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 30, 1952",
    firstAlbum: "Charlie Parker – Verve",
    albumArtUrl: null,
    anecdote: "Named for Parker's infant son Baird — born the same year. One of the last great Parker quartet dates."
  },
  {
    composer: "parker",
    title: "Cosmic Rays",
    yearComposed: "1952",
    yearFirstRecorded: "Dec 30, 1952",
    firstAlbum: "Charlie Parker – Verve",
    albumArtUrl: null,
    anecdote: "A spiraling blues — Parker was fascinated by astronomy and science-fiction magazines in his last years."
  },
  {
    composer: "parker",
    title: "Chi-Chi",
    yearComposed: "1953",
    yearFirstRecorded: "Aug 4, 1953",
    firstAlbum: "Charlie Parker – Verve",
    albumArtUrl: null,
    anecdote: "A blues with one of the most famous written choruses in Parker's book — the head is essentially a transcribed Parker solo. He cut four takes."
  },
  {
    composer: "parker",
    title: "Confirmation",
    yearComposed: "c. 1946",
    yearFirstRecorded: "Jul 30, 1953",
    firstAlbum: "Now's the Time (Verve)",
    albumArtUrl: null,
    anecdote: "Long considered Parker's masterpiece of composition: a 32-bar head whose chord cycle never repeats itself, yet feels inevitable. Widely circulated for years before Parker finally made a studio version."
  },
  {
    composer: "parker",
    title: "Anthropology",
    yearComposed: "1946",
    yearFirstRecorded: "Feb 22, 1946",
    firstAlbum: "Dizzy Gillespie Sextet – Musicraft",
    albumArtUrl: null,
    anecdote: "Co-credited with Dizzy Gillespie. A rhythm-changes head — some historians consider it a reworking of 'Thriving on a Riff'. First cut at a Dizzy date, not a Parker one."
  }
];
