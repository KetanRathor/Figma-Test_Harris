import { loadTable } from "./table.js";
import { createButton } from "./customButton.js";



// Load Prescription Component


export async function loadPrescription(selector) {

  try {

    const response = await fetch(
      "./components/prescription.html"
    );

    if (!response.ok) {

      throw new Error(
        `Unable to load prescription.html: ${response.status}`
      );

    }

    const html = await response.text();

    $(selector).html(html);


    // Generate prescription buttons
    renderPrescriptionActions();


    // Generate prescription tabs
    renderPrescriptionTabs();


    // Load table component
    await loadTable("#prescriptionTable");


  } catch (error) {

    console.error(
      "Prescription component error:",
      error
    );

  }

}



// Prescription Action Buttons


function renderPrescriptionActions() {

  const addButton = createButton({

    color: "light",
    size: "sm",
    className: "square-btn",
    icon: "fa-solid fa-plus",
    title: "Add"

  });


  const copyButton = createButton({

    color: "light",
    size: "sm",
    className: "square-btn",
    icon: "fa-regular fa-copy",
    title: "Copy"

  });


  const saveButton = createButton({

    color: "light",
    size: "sm",
    className: "square-btn",
    icon: "fa-regular fa-floppy-disk",
    title: "Save"

  });


  $("#prescriptionActions").html(
    addButton +
    copyButton +
    saveButton
  );

}



// Prescription Tabs


function renderPrescriptionTabs() {

  const pastRxButton = createButton({

    text: "PAST RX",

    size: "sm",

    className: "nav-link active",

    bootstrapButton: false,

    attributes: `
      data-bs-toggle="pill"
      data-bs-target="#pastRx"
      role="tab"
      aria-selected="true"
    `

  });


  const medHistButton = createButton({

    text: "MED HIST",

    size: "sm",

    className: "nav-link",

    bootstrapButton: false,

    attributes: `
      data-bs-toggle="pill"
      data-bs-target="#medHist"
      role="tab"
      aria-selected="false"
    `

  });


  $("#prescriptionTabs").html(
    pastRxButton +
    medHistButton
  );

}