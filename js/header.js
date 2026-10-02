import { createButton } from "./customButton.js";

import {
  patientData,
  allergyData,
  successMessage
} from "../js/headerData.js";



// Load Header Component


export async function loadHeader(selector) {

  try {

    const response = await fetch(
      "./components/header.html"
    );

    if (!response.ok) {

      throw new Error(
        `Unable to load header.html: ${response.status}`
      );

    }

    const html = await response.text();

    $(selector).html(html);


    // Render Header Data
    

    renderPatientData();

    renderAllergy();

    renderSuccessMessage();


    // Generate Reusable Buttons

    renderHeaderButtons();

    renderQuickToolButtons();

    renderVisitButtons();


  } catch (error) {

    console.error(
      "Header component error:",
      error
    );

  }

}



// Patient Data


function renderPatientData() {

  $("#patientName").text(
    patientData.name
  );

  $("#patientId").text(
    patientData.patientId
  );

  $("#patientDob").text(
    patientData.dateOfBirth
  );

  $("#patientAge").text(
    patientData.age
  );

  $("#dateOfService").text(
    patientData.dateOfService
  );

  $("#primaryInsurance").text(
    patientData.primaryInsurance
  );

  $("#encounterType").text(
    patientData.encounterType
  );

  $("#location").text(
    patientData.location
  );

  $("#futureVisit").text(
    patientData.futureVisit
  );

  $("#riskLevel").text(
    patientData.riskLevel
  );

  $("#caseNo").text(
    patientData.caseNo
  );

}



// Allergy


function renderAllergy() {

  $("#allergyMessage").text(
    allergyData.message
  );

}



// Success Message


function renderSuccessMessage() {

  $("#successMessage").text(
    successMessage.message
  );

}



// Header Action Buttons


function renderHeaderButtons() {

  const buttons = [

    {
      icon: "fa-regular fa-copy",
      title: "Copy"
    },

    {
      icon: "fa-solid fa-briefcase",
      title: "Briefcase"
    },

    {
      icon: "fa-regular fa-bell",
      title: "Notifications"
    },

    {
      icon: "fa-regular fa-clipboard",
      title: "Clipboard"
    },

    {
      icon: "fa-solid fa-gears",
      title: "Settings"
    }

  ];


  const html = buttons

    .map((button) => {

      return createButton({

        color: "light",

        size: "sm",

        className:
          "header-icon-btn",

        icon: button.icon,

        title: button.title

      });

    })

    .join("");


  $("#headerActions").html(html);

}



// Quick Tool Buttons


function renderQuickToolButtons() {

  const tools = [

    {
      icon: "fa-regular fa-clipboard",
      title: "Clipboard"
    },

    {
      icon: "fa-solid fa-clock-rotate-left",
      title: "History"
    },

    {
      icon: "fa-solid fa-list-check",
      title: "Checklist"
    },

    {
      icon: "fa-regular fa-envelope",
      title: "Mail"
    },

    {
      icon: "fa-solid fa-pen-to-square",
      title: "Edit"
    },

    {
      icon: "fa-solid fa-triangle-exclamation",
      title: "Warning"
    },

    {
      icon: "fa-regular fa-circle-question",
      title: "Help"
    },

    {
      icon: "fa-solid fa-magnifying-glass",
      title: "Search"
    },

    {
      icon: "fa-solid fa-print",
      title: "Print"
    },

    {
      icon: "fa-regular fa-calendar",
      title: "Calendar"
    }

  ];


  const html = tools

    .map((tool) => {

      return createButton({

        color: "light",

        size: "sm",

        className:
          "tool-icon-btn",

        icon: tool.icon,

        title: tool.title

      });

    })

    .join("");


  $("#quickToolButtons").html(html);

}



// Visit Buttons


function renderVisitButtons() {

  const lastVisitButton = createButton({

    text: "Last Visit",

    color: "light",

    size: "sm",

    className: "visit-btn",

    attributes: `
      data-bs-toggle="modal"
      data-bs-target="#visitModal"
    `

  });


  const futureVisitButton = createButton({

    text: "Future Visit",

    color: "light",

    size: "sm",

    className: "visit-btn",

    attributes: `
      data-bs-toggle="modal"
      data-bs-target="#visitModal"
    `

  });


  const pmhButton = createButton({

    text: "PMH",

    color: "outline-primary",

    size: "sm",

    className: "pmh-btn",

    attributes: `
      data-bs-toggle="modal"
      data-bs-target="#pmhModal"
    `

  });


  $("#visitActions").html(

    lastVisitButton +
    futureVisitButton +
    pmhButton

  );

}