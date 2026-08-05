let schoolPreperationDetails = [
  { image: "", courseName: "Class 1st - 5th", currentPrice: "9,900", realPrice: "11,000" },
  { image: "", courseName: "Class 6th", currentPrice: "11,700", realPrice: "13,000" },
  { image: "", courseName: "Class 7th", currentPrice: "12,600", realPrice: "14,000" },
  { image: "", courseName: "Class 8th", currentPrice: "13,500", realPrice: "15,000" },
  { image: "", courseName: "Class 9th", currentPrice: "14,400", realPrice: "16,000" },
  { image: "", courseName: "Class 10th", currentPrice: "16,200", realPrice: "18,000" }
];

let schoolPreperation = document.querySelector(".courses-container-list");
schoolPreperation.innerHTML = "";

schoolPreperationDetails.forEach(function (course) {
  let discountPercentage = ((course.realPrice - course.currentPrice) / course.realPrice) * 100;

  schoolPreperation.innerHTML += `
  <div class="course-element">
    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww" alt="">
    <div class="course-details">
      <span class="name">${course.courseName}</span>
      <div class="price-container">
        <span class="special">Special Discounted Price</span>
        <div class="price">
          <span class="current-price">₹ ${course.currentPrice}</span>
          <span class="real-price">₹ ${course.realPrice}</span>
          <span class="discount">10% OFF</span>
        </div>
      </div>
      <a href="">Get started</a>
    </div>
  </div>
  `;
});
