const collectionInfo = {
    name: "Chill Dogs Club",
    title: "{name}",
    date: "20.06.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bg.png",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1,
    totalSupply: 100,
    toFixed: 0,
    minUnits: 1,
    maxUnits: 3,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);