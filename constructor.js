const rect1 = {
    width: 2,
    height: 3,
    color: "Red"
};

function area(rect) {
    return rect.width * rect.height;
}

// Calculate area and log it
const ans = area(rect1);
console.log(ans); // Outputs the area
