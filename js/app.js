import { loadHeader } from "./header.js";
import { loadPrescription } from "./prescription.js";
import { loadFooter } from "./footer.js";


$(document).ready(async function () {

  try {

    await loadHeader("#header");

    await loadPrescription("#prescription");

    await loadFooter("#footer");

  } catch (error) {

    console.error(
      "Application initialization failed:",
      error
    );

  }

});