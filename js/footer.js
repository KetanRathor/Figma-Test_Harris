import { createButton } from "./customButton.js";

export async function loadFooter(selector) {
  try {
    const response = await fetch(
      "./components/footer.html"
    );

    if (!response.ok) {
      throw new Error(
        `Unable to load footer.html: ${response.status}`
      );
    }

    const html = await response.text();

    $(selector).html(html);

    renderFooterButtons();

  } catch (error) {
    console.error(
      "Footer component error:",
      error
    );
  }
}


function renderFooterButtons() {

  const orderButton = createButton({
    text: "ORDER SET",
    color: "primary",
    size: "sm",
    className: "action-btn",
    attributes: `
      data-bs-toggle="modal"
      data-bs-target="#orderModal"
    `
  });


  const dispenseButton = createButton({
    text: "DISPENSE",
    color: "primary",
    size: "sm",
    className: "action-btn",
    attributes: `
      data-bs-toggle="modal"
      data-bs-target="#dispenseModal"
    `
  });


  const resetButton = createButton({
    text: "RESET",
    color: "primary",
    size: "sm",
    className: "action-btn",
    attributes: `
      id="resetBtn"
    `
  });


  const saveButton = createButton({
    text: "SAVE",
    color: "primary",
    size: "sm",
    className: "action-btn",
    attributes: `
      id="saveBtn"
    `
  });


  $("#footerButtons").html(
    orderButton +
    dispenseButton +
    resetButton +
    saveButton
  );
}