let likeCount = 0;
let isLiked = false;

function changePhoneNumber() {
    const newNumber = prompt("Enter new phone number:");
    if (newNumber) {
        document.getElementById('phone-number').textContent = newNumber;
    }
}

function toggleLike() {
    console.log("Button clicked");  // للتأكد من استجابة الزر
    const likeButton = document.getElementById('like-button');
    const likeCountElement = document.getElementById('like-count');
    
    if (isLiked) {
        likeCount--;
        likeButton.classList.remove('liked');
        likeButton.textContent = 'Like';
    } else {
        likeCount++;
        likeButton.classList.add('liked');
        likeButton.textContent = 'Unlike';
    }
    
    // لتحديث العدد بشكل صحيح
    likeCountElement.textContent = likeCount + " Likes";
    console.log("Like count updated:", likeCount);  // لتتبع قيمة العداد
    isLiked = !isLiked;
}

// لتأكيد تحميل الصفحة بشكل كامل قبل استجابة الأكواد
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Page fully loaded and parsed");
});