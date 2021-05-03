const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logoImage = document.getElementById("logo-img");
logoImage.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent.cta["img-src"];

let middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

// Updating the textContent of the links
let links = document.querySelectorAll("a");
let linksArray = Array.from(links);

linksArray[0].textContent = siteContent.nav["nav-item-1"];
linksArray[1].textContent = siteContent.nav["nav-item-2"];
linksArray[2].textContent = siteContent.nav["nav-item-3"];
linksArray[3].textContent = siteContent.nav["nav-item-4"];
linksArray[4].textContent = siteContent.nav["nav-item-5"];
linksArray[5].textContent = siteContent.nav["nav-item-6"];

const newLink1 = document.createElement("a");
newLink1.textContent = "Last Link";
document.querySelector("nav").appendChild(newLink1);

const newLink2 = document.createElement("a");
newLink2.textContent = "First Link";
document.querySelector("nav").prepend(newLink2);

// Updating the h1 in the cta section
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta.h1;

// Updating the button text
let buttonText = document.querySelector("button");
buttonText.textContent = siteContent.cta.button;

// Updating the main content
// Updating the top headers
let topTextHeader = document.querySelectorAll(".top-content .text-content h4");
let topTextHeaderArray = Array.from(topTextHeader);

topTextHeaderArray[0].textContent = siteContent["main-content"]["features-h4"];
topTextHeaderArray[1].textContent = siteContent["main-content"]["about-h4"];

// Updating the top paragraphs
let topTextContent = document.querySelectorAll(".top-content .text-content p");

topTextContent[0].textContent = siteContent["main-content"]["features-content"];
topTextContent[1].textContent = siteContent["main-content"]["features-content"];

// Updating the bottom headers
let bottomTextHeader = document.querySelectorAll(
  ".bottom-content .text-content h4"
);

bottomTextHeader[0].textContent = siteContent["main-content"]["services-h4"];
bottomTextHeader[1].textContent = siteContent["main-content"]["product-h4"];
bottomTextHeader[2].textContent = siteContent["main-content"]["vision-h4"];

// Updating the bottom paragraphs
let bottomTextContent = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomTextContent[0].textContent =
  siteContent["main-content"]["services-content"];
bottomTextContent[1].textContent =
  siteContent["main-content"]["product-content"];
bottomTextContent[2].textContent =
  siteContent["main-content"]["vision-content"];

// Updating the contact section
let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

// Updating the footer section
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

// Changing the color of the nav text
linksArray[0].style.color = "green";
linksArray[1].style.color = "green";
linksArray[2].style.color = "green";
linksArray[3].style.color = "green";
linksArray[4].style.color = "green";
linksArray[5].style.color = "green";
