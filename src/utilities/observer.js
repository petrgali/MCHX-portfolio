const handleIntersect = (entries) => {
    entries.map((entry) => {
        // if (entry.isIntersectionRatio > 0.5) {
        alert(entry.target.src)
        // }
    })
}
let options = {
    // root: null,
    // rootMargin: "0px",
    treshhold: 0.9
}
let observer
observer = new IntersectionObserver(handleIntersect, options)
const detectIntersection = (imgs) => {
    imgs.forEach(img => observer.observe(img))
}
export default detectIntersection