let schoolPreperationDetails = [
  { image: "", courseName: "Class 1st - 5th", currentPrice: "900", realPrice: "1200" },
  { image: "", courseName: "Class 6th", currentPrice: "1100", realPrice: "1300" },
  { image: "", courseName: "Class 7th", currentPrice: "1200", realPrice: "1500" },
  { image: "", courseName: "Class 8th", currentPrice: "1300", realPrice: "1600" },
  { image: "", courseName: "Class 9th", currentPrice: "1400", realPrice: "1800" },
  { image: "", courseName: "Class 10th", currentPrice: "1600", realPrice: "2000" }
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
          <span class="current-price">₹ ${course.currentPrice}/month</span>
          <span class="real-price">₹ ${course.realPrice}/month</span>
          <span class="discount">${Math.floor(discountPercentage)}% OFF</span>
        </div>
      </div>
      <a href="">Get started</a>
    </div>
  </div>
  `;
});