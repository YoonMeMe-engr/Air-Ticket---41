const myButton = document.getElementById("myButton");

const originalPrice = 100;
let totalPrice = 0;
let memberType = "not member";

if (memberType === "normalMember") {
    totalPrice += 100 * 0.95;
} else if ( memberType === "silverMember") {
    totalPrice += 100 * 0.9;
} else if (memberType === "goldMember") {
    totalPrice += 100 * 0.85;
} else if (memberType === "platinumMember") {
    totalPrice += 100 * 0.8;
} else {
    totalPrice = originalPrice;
};

/* not member = Full price
normalMember = 5% Discount
silverMember = 10% Discount
goldMember = 15% Discount
platinumMember = 20% Discount
*/