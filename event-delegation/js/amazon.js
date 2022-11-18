/**
 * products.js
 */

"use strict";

$("#products").on("click", "a", function (evt) {
  evt.preventDefault();

  const divbtnPannel = $("<div>", {
    class: "btnPanel",
  });
  divbtnPannel.append(
    $("<a>", {
      href: "http://www.amazon.com",
      text: "Add a new Product",
      class: "lnkBtn",
    })
  );
  const headerPart = $("<header>");
  headerPart.append(
    $("<h4>", {
      text: "Product Name",
    })
  );
  const firstLineText = $("<P>", {
    text: "Here is a brief description/note about this product.",
  });
  const loremText = $("<P>", {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Mollitia consectetur iure expedita non pariatur porro enim sunt sed obcaecati saepe.",
  });

  const articleBox = $("<article>")
    .append(headerPart)
    .append(firstLineText)
    .append(loremText)
    .append(divbtnPannel);

  $("#products").append(articleBox);
});
