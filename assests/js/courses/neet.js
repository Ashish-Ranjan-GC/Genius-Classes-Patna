let neetDetails = [
  { image: "", courseName: "Class 11th & 12th", currentPrice: "58,500", realPrice: "65,000" },
  { image: "", courseName: "Class 12th", currentPrice: "31,500", realPrice: "35,000" },
  { image: "", courseName: "Dropper", currentPrice: "31,500", realPrice: "35,000" }
];

let neet = document.querySelector(".courses-container-list");
neet.innerHTML = "";

neetDetails.forEach(function (course) {
  let discountPercentage = ((course.realPrice - course.currentPrice) / course.realPrice) * 100;

  neet.innerHTML += `
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
