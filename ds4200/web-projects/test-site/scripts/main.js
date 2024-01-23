document.querySelector("html").addEventListener("click", () => {
    alert("Hello, welcome to my website!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/winterweather.jpg") {
    myImage.setAttribute("src", "images/princeton.jpg");
  } else {
    myImage.setAttribute("src", "images/winterweather.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  myButton.onclick = () => {
    setUserName();
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my website, ${myName}`;
    }
  }
    



  