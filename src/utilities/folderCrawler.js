const folders = [
    {
        source: "testDir01",
        name: "RE:BUILT",
        year: 2020,
        previewURL: "/assets/testDir01/pic1.png",
    }, {
        source: "testDir02",
        name: "カラフル",
        year: 2021,
        previewURL: "/assets/testDir02/pic1.png",
    }, {
        source: "testDir03",
        name: "DIGITAL GARDEN",
        year: 2020,
        previewURL: "/assets/testDir03/pic1.png",
    }, {
        source: "testDir04",
        name: "NINGEN",
        year: 2020,
        previewURL: "/assets/testDir04/pic1.png",
    }, {
        source: "testDir05",
        name: "SPIRITUAL REVIVAL",
        year: 2021,
        previewURL: "/assets/testDir05/pic1.png",
    },
    {
        source: "testDir06",
        name: '人工知能 PLUS EXP',
        year: 2021,
        previewURL: "/assets/testDir06/pic1.png",
    }, {
        source: "testDir02",
        name: "TOTAL ABSTRACTION",
        year: 2020,
        previewURL: "/assets/testDir02/pic1.png",
    }

]
const asset = {
    pathprefix: "/assets/",
    name: "pic",
    format: ".png"
}

const folderCrawler = (() => {
    return {
        getCollectionsName: () => {
            return folders
        },
        assetSource: () => asset,
        getSamples: (idx = 1, imgs = []) => {
            folders.forEach(folder => imgs.push({
                source: asset.pathprefix + folder + "/" + asset.name + idx + asset.format,
                collection: folder
            }))
            return imgs
        },
        isValidPath: (next, folder) => {
            if (!folders.includes(folder)) {
                next('/')
            } else {
                next()
            }
        },
        imgParse: async (dir, idx = 1, imgs = []) => {
            let parse = true
            while (parse) {
                await folderCrawler.imgExist(dir, idx)
                    .then(response => {
                        response != undefined
                            ? imgs.push(response)
                            : parse = false
                    })
                idx++
            }
            return imgs
        },
        imgExist: async (dir, idx) => {
            let url = asset.pathprefix + dir + '/' + asset.name + idx + asset.format
            let req = new Request(url)
            let body
            await fetch(req)
                .then(response => {
                    if (response.status === 200) body = url
                })
            return body
        }
    }
})()

export default folderCrawler