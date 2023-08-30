fetch('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then((data) => renderImages(data))

function renderImages(ramens) {
    const div = document.querySelector('#ramen-menu')
    ramens.forEach((ramen) => {
        const ramenImg = document.createElement('img')
        ramenImg.src = ramen.image
        div.append(ramenImg)
        ramenImg.addEventListener('click', (e) => {
            const detailImg = document.querySelector('.detail-image')
            const detailName = document.querySelector('.name')
            const detailRestaurant = document.querySelector('.restaurant')
            const detailRating = document.querySelector('#rating-display')
            const detailComment = document.querySelector('#comment-display')
            detailImg.src = ramen.image
            detailName.textContent = ramen.name
            detailRestaurant.textContent = ramen.restaurant
            detailRating.innerHTML = ramen.rating
            detailComment.innerHTML = ramen.comment
        })
    })
}
const form = document.querySelector('#new-ramen')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target.comment.value
    }
    renderImages([newRamen])
})
































































// fetch('http://localhost:3000/ramens')
//     .then((resp) => resp.json())
//     .then((data) => renderImages(data))

// function renderImages(ramens) {
//     // console.log(ramens)
//     const div = document.querySelector('#ramen-menu')
//     // console.log(div)
//     ramens.forEach((ramen) => {
//         // console.log(ramen)
//         const ramenImg = document.createElement('img')
//         ramenImg.src = ramen.image
//         div.append(ramenImg)
//         ramenImg.addEventListener('click', (e) => {
//             const detailImg = document.querySelector('.detail-image')
//             const detailName = document.querySelector('.name')
//             const detailRest = document.querySelector('.restaurant')
//             const detailRating = document.querySelector('#rating-display')
//             const detailComment = document.querySelector('#comment-display')
//             detailImg.src = ramen.image
//             detailName.textContent = ramen.name
//             detailRest.textContent = ramen.restaurant
//             detailRating.innerHTML = ramen.rating
//             detailComment.innerHTML = ramen.comment
//             // console.log(detailImg)
//         })
//     })
// }
// const form = document.querySelector('#new-ramen')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const newRamen = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image: e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target.comment.value
//     }
//     renderImages([newRamen])
// })














































// // write your code here
// fetch('http://localhost:3000/ramens')
//     .then((resp) => resp.json())
//     .then((data) => renderImages(data))


// function renderImages(ramen) {
//     const div = document.querySelector('#ramen-menu')
//     // const detail = document.querySelector('#ramen-detail')
//     // console.log(detail)
//     // console.log(div)
//     ramen.forEach((ramenType) => {
//         const ramenImg = document.createElement('img')
//         // const name = ramenType.name
//         // console.log(name)
//         // const restaurant = ramenType.restaurant
//         // const 
//         // console.log(ramenImg)
//         // console.log(ramenType)
//         ramenImg.src = ramenType.image
//         ramenImg.addEventListener('click', (e) => {
//         // const divDetail = document.querySelector('#ramen-detail')
//             const detailImg = document.querySelector('.detail-image')
//             const detailName = document.querySelector('.name')
//             const detailRestaurant = document.querySelector('.restaurant')
//             const detailRating = document.querySelector('#rating-display')
//             const detailComment = document.querySelector('#comment-display')
//             // console.log(detailImg)
//             console.log(ramen)
//             // ramen.forEach((ramen) => {
//             detailImg.src = ramenType.image
//             detailName.textContent = ramenType.name
//             detailRestaurant.textContent = ramenType.restaurant
//             // console.log(detailRestaurant)
//             detailRating.innerHTML = ramenType.rating
//             detailComment.innerHTML = ramenType.comment
//             // })
        
            
//         })
        
//         div.append(ramenImg)
//         // detail.append
//     })
// }
// const form = document.querySelector('#new-ramen')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const newRamen = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image : e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target.comment.value
//         //changed html new-comment to comment
//     }
//     renderImages([newRamen])
//     }
// )