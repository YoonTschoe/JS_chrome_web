const quotes = [
    {
        quote: "Rules of taste enforce structures of power.",
        author: "Susan Sontag",
    },
    {
        quote: "All efforts to make politics aesthetic culminate in one thing, war.",
        author: "Walter Benjamin",
    },
    {
        quote: "'Truth' is to be understood as a system of ordered procedures for the production, regulation, distribution, circulation and operation of statements. 'Truth' is linked in a circular relation with systems of power which produce and sustain it, and to effects of power which it induces and which extend it. A 'regime' of truth.",
        author: "Michel Foucault",
    },
    {
        quote: "Art is the social antithesis of society, not directly deducible from it.",
        author: "Theodor W. Adorno",
    },
    {
        quote: "The ideal of “working exactly” is also inherent in the historical disciplines. Art historians pursue it, above all, in order to avoid the baleful contact with aesthetics; and often exert themselves merely to say what happened after what– and nothing more than that.",
        author: "Heinrich Wölfflin",
    },
    {
        quote: "How convenient it is to declare that everything is totally ugly within the habit of the époque, rather than applying oneself to extract from it the dark and cryptic beauty, however faint and invisible it is.",
        author: "Charles Baudelaire",
    },
    {
        quote: "What is good is also divine. Queer as it sounds, that sums up my ethics. Only something supernatural can express the Supernatural.",
        author: "Ludwig Wittgenstein",
    },
    {
        quote: "God is in the details.",
        author: "Ludwig Mies van der Rohe",
    },
    {
        quote: "Photography works hand in glove with image and memory and therefore possesses their notable epidemic power.",
        author: "Georges Didi-Huberman",
    },
    {
        quote: "The image is not a closed field of knowledge; it is a whirling, centrifugal field. It is not a field of knowledge like any other; it is a movement demanding all the anthropological aspects of being and time.",
        author: "Georges Didi-Huberman",
    }
]


const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
