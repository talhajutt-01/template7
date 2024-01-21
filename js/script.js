const title = document.getElementById('title');


const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const heading = document.getElementById('heading');


const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const r0 = document.getElementById('r0');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const r6 = document.getElementById('r6');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const b12 = document.getElementById('b12');
const b13 = document.getElementById('b13');

const u0 = document.getElementById('u0');
const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');
const u6 = document.getElementById('u6');


const cl0 = document.getElementById('cl0');
const cl1 = document.getElementById('cl1');
const cl2 = document.getElementById('cl2');
const cl3 = document.getElementById('cl3');
const cl4 = document.getElementById('cl4');
const cl5 = document.getElementById('cl5');
const cl6 = document.getElementById('cl6');
const cl7 = document.getElementById('cl7');
const cl8 = document.getElementById('cl8');
const cl9 = document.getElementById('cl9');
const cl10 = document.getElementById('cl10');
const cl11 = document.getElementById('cl11');
const cl12 = document.getElementById('cl12');
const cl13 = document.getElementById('cl13');

const co0 = document.getElementById('co0');
const co1 = document.getElementById('co1');
const co2 = document.getElementById('co2');
const co3 = document.getElementById('co3');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');

const g0 = document.getElementById('header');
const g1 = document.getElementById('book');
const g2 = document.getElementById('car');
const g3 = document.getElementById('about');
const g4 = document.getElementById('best');
const g5 = document.getElementById('rent');
const g6 = document.getElementById('blog');
const g7 = document.getElementById('us');
const g8 = document.getElementById('client');
const g9 = document.getElementById('contact');
const g10 = document.getElementById('footer');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');
const img17 = document.getElementById('img17');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img20 = document.getElementById('img20');



// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            updateContent(title, mergedData.title.title);

            updateContent(heading, mergedData.nav.heading);

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);
            updateLinkContent(nav5, mergedData.nav.nav5);

            updateContent(s0, mergedData.slide.s0);
            updateContent(s1, mergedData.slide.s1);
            updateContent(s2, mergedData.slide.s2);
            updateContent(s3, mergedData.slide.s3);
            updateContent(s4, mergedData.slide.s4);
            updateContent(s5, mergedData.slide.s5);
            
            updateContent(c1, mergedData.car.c1);
            updateContent(c2, mergedData.car.c2);
            updateContent(c3, mergedData.car.c3);
            updateContent(c4, mergedData.car.c4);
            updateContent(c5, mergedData.car.c5);
            updateContent(c6, mergedData.car.c6);
            updateContent(c7, mergedData.car.c7);
            updateContent(c8, mergedData.car.c8);
            updateContent(c9, mergedData.car.c9);
            updateContent(c10, mergedData.car.c10);

            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);

            updateContent(p0, mergedData.best.p0);
            updateContent(p1, mergedData.best.p1);
            updateContent(p2, mergedData.best.p2);

            updateContent(r0, mergedData.rent.r0);
            updateContent(r1, mergedData.rent.r1);
            updateContent(r2, mergedData.rent.r2);
            updateContent(r3, mergedData.rent.r3);
            updateContent(r4, mergedData.rent.r4);
            updateContent(r5, mergedData.rent.r5);
            updateContent(r6, mergedData.rent.r6);
            
            updateContent(b0, mergedData.blog.b0);
            updateContent(b1, mergedData.blog.b1);
            updateContent(b2, mergedData.blog.b2);
            updateContent(b3, mergedData.blog.b3);
            updateContent(b4, mergedData.blog.b4);
            updateContent(b5, mergedData.blog.b5);
            updateContent(b6, mergedData.blog.b6);
            updateContent(b7, mergedData.blog.b7);
            updateContent(b8, mergedData.blog.b8);
            updateContent(b9, mergedData.blog.b9);
            updateContent(b10, mergedData.blog.b10);
            updateContent(b11, mergedData.blog.b11);
            updateContent(b12, mergedData.blog.b12);
            updateContent(b13, mergedData.blog.b13);

            updateContent(u0, mergedData.us.u0);
            updateContent(u1, mergedData.us.u1);
            updateContent(u2, mergedData.us.u2);
            updateContent(u3, mergedData.us.u3);
            updateContent(u4, mergedData.us.u4);
            updateContent(u5, mergedData.us.u5);
            updateContent(u6, mergedData.us.u6);

            updateContent(cl0, mergedData.client.cl0);
            updateContent(cl1, mergedData.client.cl1);
            updateContent(cl2, mergedData.client.cl2);
            updateContent(cl3, mergedData.client.cl3);
            updateContent(cl4, mergedData.client.cl4);
            updateContent(cl5, mergedData.client.cl5);
            updateContent(cl6, mergedData.client.cl6);
            updateContent(cl7, mergedData.client.cl7);
            updateContent(cl8, mergedData.client.cl8);
            updateContent(cl9, mergedData.client.cl9);
            updateContent(cl10, mergedData.client.cl10);
            updateContent(cl11, mergedData.client.cl11);
            updateContent(cl12, mergedData.client.cl12);
            updateContent(cl13, mergedData.client.cl13);

            updateContent(co0, mergedData.contact.co0);
            updateContent(co1, mergedData.contact.co1);
            updateContent(co2, mergedData.contact.co2);
            updateContent(co3, mergedData.contact.co3);

       
            updateContent(f0, mergedData.footer.f0);
            updateContent(f1, mergedData.footer.f1);

            updateBackgroundColor(g0, mergedData.color.header);
            updateBackgroundColor(g1, mergedData.color.book);
            updateBackgroundColor(g2, mergedData.color.car);
            updateBackgroundColor(g3, mergedData.color.about);
            updateBackgroundColor(g4, mergedData.color.best);
            updateBackgroundColor(g5, mergedData.color.rent);
            updateBackgroundColor(g6, mergedData.color.blog);
            updateBackgroundColor(g7, mergedData.color.us);
            updateBackgroundColor(g8, mergedData.color.client);
            updateBackgroundColor(g9, mergedData.color.contact);
            updateBackgroundColor(g10, mergedData.color.footer);

            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
            updateImageSrc(img8, mergedData.images.img8);
            updateImageSrc(img9, mergedData.images.img9);
            updateImageSrc(img10, mergedData.images.img10);
            updateImageSrc(img11, mergedData.images.img11);
            updateImageSrc(img12, mergedData.images.img12);
            updateImageSrc(img13, mergedData.images.img13);
            updateImageSrc(img14, mergedData.images.img14);
            updateImageSrc(img15, mergedData.images.img15);
            updateImageSrc(img16, mergedData.images.img16);
            updateImageSrc(img17, mergedData.images.img17);
            updateImageSrc(img18, mergedData.images.img18);
            updateImageSrc(img19, mergedData.images.img19);
            updateImageSrc(img20, mergedData.images.img20);
            

            
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'about.html') {
            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);

            } else if (fileName === 'blog.html') {

            } else if (fileName === 'car.html') {

            } else if (fileName === 'contact.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});