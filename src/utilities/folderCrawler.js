const folders = [
    {
        source: "testDir01",
        collection: "RE:BUILT",
        year: 2020,
        previewURL: "/assets/testDir01/pic1.png",
        previewName: "germes",

    }, {
        source: "testDir02",
        collection: "カラフル",
        year: 2021,
        previewURL: "/assets/testDir02/pic1.png",
        previewName: "face",
    }, {
        source: "testDir03",
        collection: "DIGITAL GARDEN",
        year: 2020,
        previewURL: "/assets/testDir03/pic1.png",
        previewName: "celltable",
    }, {
        source: "testDir04",
        collection: "NINGEN",
        year: 2020,
        previewURL: "/assets/testDir04/pic1.png",
        previewName: "abstract",
    }, {
        source: "testDir05",
        collection: "SPIRITUAL REVIVAL",
        year: 2021,
        previewURL: "/assets/testDir05/pic1.png",
        previewName: "flower",
    },
    {
        source: "testDir06",
        collection: '人工知能 PLUS EXP',
        year: 2021,
        previewURL: "/assets/testDir06/pic1.png",
        previewName: "arc",
    }, {
        source: "testDir02",
        collection: "TOTAL ABSTRACTION",
        year: 2020,
        previewURL: "/assets/testDir02/pic1.png",
        previewName: "face2",
    }

]

const folderCrawler = (() => {
    return {
        getCollections: () => {
            return folders
        },
    }
})()

export default folderCrawler