/**Сделать http запрос на сервер и вывести его на экран  */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const constLists = document.querySelector(".post-lists");
    json.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "post-item";
      constLists.appendChild(li);

      const span = document.createElement("span");
      span.className = "post-index";
      li.appendChild(span);
      span.innerText = index + 1;

      const title = document.createElement("h4");
      title.className = "post-title";
      li.appendChild(title);
      title.innerText = item.title;

      const text = document.createElement("p");
      text.className = "post-text";
      text.innerText = item.body;

      li.appendChild(text);

      const link = document.createElement("a");
      link.className = "post-link";
      li.appendChild(link);
      link.innerText = "Read more";

  
      link.addEventListener("click", () => {
        text.classList.toggle("post-text");
      });
    });
  });



// const createElement = (tag, className, parent, innerText) => {
//   const element = document.createElement(tag);
//   if (className) element.className = className;
//   if (innerText) element.innerText = innerText;
//   if (parent) parent.appendChild(element);
//   return element;
// };

// const li = createElement("li", "post-item", constLists);
// createElement("span", "post-index", li, "1");
// createElement("h4", "post-title", li, "Title");
// createElement("p", "post-text", li);
// createElement("a", "post-link", li, "Read more");
