let userRatio

const handleIntersect = (changes) => {
    changes.forEach((change) => {
        if (change.intersectionRatio > userRatio) {
            alert(change.target.src)
        }
    })
}
const detectIntersection = (images, ratio) => {
    if ('IntersectionObserver' in window) {
        userRatio = ratio || 0
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: userRatio
        };

        let observer = new IntersectionObserver(handleIntersect, options);
        images.forEach(img => observer.observe(img));
    } else {
        //lack of browser functionality case//    
    }
}

export default detectIntersection
