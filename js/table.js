//  Prescription Data


const prescriptions = [

  {
    id: 1,
    type: "CHGREQ",
    drugName: "Spironolactone 50mg Oral Tablet",
    direction: "1 Tablet Before Meals",
    pharmacyNotes: "Do Not Refill",
    disp: "60",
    refills: "0",
    lastFillDate: "",
    pharmacy: "003 Eastway NY Test",
    expanded: true
  },


  {
    id: 2,
    type: "CHGRES_A",
    drugName: "Losartan",
    direction: "1 Tablet Before Meals",
    pharmacyNotes: "Do Not Refill",
    disp: "60",
    refills: "0",
    lastFillDate: "07/10/2024",
    pharmacy: "003 Eastway NY Test",
    expanded: false
  },


  {
    id: 3,
    type: "CANREQ",
    drugName: "Omeprazole",
    direction: "1 Tablet Before Meals",
    pharmacyNotes: "Do Not Refill",
    disp: "60",
    refills: "0",
    lastFillDate: "07/10/2024",
    pharmacy: "003 Eastway NY Test",
    expanded: false
  },


  {
    id: 4,
    type: "CANRES_A",
    drugName: "Flagyl",
    direction: "1 Tablet Before Meals",
    pharmacyNotes: "Do Not Refill",
    disp: "60",
    refills: "0",
    lastFillDate: "07/10/2024",
    pharmacy: "003 Eastway NY Test",
    expanded: false
  },


  {
    id: 5,
    type: "RXFILL_PF",
    drugName: "Apixaban",
    direction: "1 Tablet Before Meals",
    pharmacyNotes: "Do Not Refill",
    disp: "60",
    refills: "0",
    lastFillDate: "07/10/2024",
    pharmacy: "003 Eastway NY Test",
    expanded: false
  }

];




// Load Table HTML

export async function loadTable(selector) {

  try {

    const response = await fetch(
      "./components/table.html"
    );


    if (!response.ok) {

      throw new Error(
        `Unable to load table.html: ${response.status}`
      );

    }


    const html = await response.text();


    $(selector).html(html);


    renderPrescriptionRows();


    initializeTableEvents();


  } catch (error) {

    console.error(
      "Table component error:",
      error
    );

  }

}


// Render Prescription Rows

function renderPrescriptionRows() {

  const rows = prescriptions
    .map(renderPrescriptionRow)
    .join("");


  $("#prescriptionRows").html(rows);

}


// Render Individual Prescription

function renderPrescriptionRow(prescription) {

  const expanded =
    Boolean(prescription.expanded);


  return `

    <!-- Main Row -->
    <tr
      class="rx-row ${expanded ? "active-row" : ""}"
      data-prescription-id="${prescription.id}"
    >

      <td>

        <button
          type="button"
          class="expand-btn"
          aria-expanded="${expanded}"
          aria-controls="rx-detail-${prescription.id}"
          title="${expanded ? "Collapse" : "Expand"}"
        >

          <i
            class="fa-solid fa-chevron-${expanded ? "up" : "down"}"
          ></i>

        </button>


        <input
          class="form-check-input prescription-check"
          type="checkbox"
          aria-label="Select prescription"
        >

      </td>


      <td>
        ${prescription.type}
      </td>


      <td>
        ${prescription.drugName}
      </td>


      <td>
        ${prescription.direction}
      </td>


      <td>
        ${prescription.pharmacyNotes}
      </td>


      <td>
        ${prescription.disp}
      </td>


      <td>
        ${prescription.refills}
      </td>


      <td>
        ${prescription.lastFillDate}
      </td>


      <td>
        ${prescription.pharmacy}
      </td>


      <td>

        <button
          type="button"
          class="icon-action delete-row"
          title="Delete"
          aria-label="Delete prescription"
        >

          <i class="fa-solid fa-trash-can"></i>

        </button>

      </td>

    </tr>


    <!-- Detail Row -->
    ${renderPrescriptionDetail(prescription)}

  `;

}


// Reusable Prescription Detail

function renderPrescriptionDetail(prescription) {

  return `

    <tr
      class="detail-row ${prescription.expanded ? "" : "d-none"}"
      id="rx-detail-${prescription.id}"
    >

      <td colspan="10">

        <form class="detail-form">


          <!-- =====================================================
               LEFT SECTION
          ====================================================== -->

          <div class="form-left">


            <!-- Inhouse / Sample -->

            <div class="check-line">

              <label>

                <input
                  class="form-check-input"
                  type="checkbox"
                >

                Inhouse

              </label>


              <label>

                <input
                  class="form-check-input"
                  type="checkbox"
                >

                Sample

              </label>

            </div>


            <!-- Drug -->

            <div class="field">

              <label>
                Drug
              </label>


              <input
                class="form-control form-control-sm"
                value="${prescription.drugName}"
              >

            </div>


            <!-- Strength -->

            <div class="field">

              <label>
                Strength
              </label>


              <select class="form-select form-select-sm">

                <option></option>

                <option>
                  50 mg
                </option>

                <option>
                  100 mg
                </option>

              </select>


              <i
                class="fa-solid fa-circle-info field-icon"
              ></i>

            </div>


            <!-- Dosage -->

            <div class="field">

              <label>
                Dosage
              </label>


              <input
                class="form-control form-control-sm short"
              >


              <select
                class="form-select form-select-sm"
              >

                <option>
                  Tablet
                </option>

                <option>
                  Capsule
                </option>

              </select>

            </div>


            <!-- Frequency -->

            <div class="field">

              <label>
                Frequency
              </label>


              <select
                class="form-select form-select-sm"
              >

                <option></option>

                <option>
                  Once Daily
                </option>

                <option>
                  Twice Daily
                </option>

              </select>


              <label class="inline-check">

                <input
                  class="form-check-input"
                  type="checkbox"
                >

                PRN

              </label>


              <label class="inline-check">

                <input
                  class="form-check-input"
                  type="checkbox"
                  checked
                >

                Long Term

              </label>

            </div>


            <!-- Days -->

            <div class="field">

              <label>
                Days
              </label>


              <input
                class="form-control form-control-sm tiny"
              >


              <span>
                Bulk
              </span>


              <input
                class="form-control form-control-sm tiny"
              >


              <select
                class="form-select form-select-sm"
              >

                <option>
                  Tablet
                </option>

                <option>
                  Capsule
                </option>

              </select>


              <button
                type="button"
                class="dots-btn"
              >
                ...
              </button>

            </div>


            <!-- Direction -->

            <div class="field">

              <label>
                Direction
              </label>


              <input
                class="form-control form-control-sm"
                value="${prescription.direction}"
              >


              <i
                class="fa-solid fa-magnifying-glass field-icon"
              ></i>

            </div>


            <!-- Units -->

            <div class="field">

              <label>
                No. of Units
              </label>


              <input
                class="form-control form-control-sm tiny"
                value="${prescription.disp}"
              >

            </div>

          </div>


          <!-- =====================================================
               MIDDLE SECTION
          ====================================================== -->

          <div class="form-middle">


            <!-- Substitute -->

            <div class="field">

              <label>
                Substitute
              </label>


              <input
                class="form-check-input"
                type="checkbox"
              >


              <span class="ms-2">
                Pharmacy
              </span>


              <input
                class="form-control form-control-sm"
              >


              <i
                class="fa-solid fa-magnifying-glass field-icon"
              ></i>

            </div>


            <!-- DEA -->

            <div class="field">

              <label>
                DEA Class:
              </label>


              <span>
                3
              </span>

            </div>


            <!-- Pharmacy Service -->

            <div class="field">

              <label>
                Pharmacy Service
              </label>


              <span class="text-danger">
                eRx EPCS Cancel
              </span>

            </div>


            <!-- Pharmacy Notes -->

            <div class="field">

              <label>
                Pharmacy Notes
              </label>


              <textarea
                class="form-control form-control-sm"
              >${prescription.pharmacyNotes}</textarea>


              <i
                class="fa-solid fa-magnifying-glass field-icon"
              ></i>

            </div>


            <!-- Diagnosis -->

            <div class="field">

              <label>
                Diagnosis
              </label>


              <input
                class="form-control form-control-sm"
              >


              <button
                type="button"
                class="dots-btn"
              >
                ...
              </button>

            </div>


            <!-- Reason -->

            <div class="field">

              <label>
                Reason
              </label>


              <textarea
                class="form-control form-control-sm"
              ></textarea>


              <i
                class="fa-solid fa-magnifying-glass field-icon"
              ></i>

            </div>

          </div>


          <!-- =====================================================
               RIGHT SECTION
          ====================================================== -->

          <div class="form-right">


            <!-- Fill Date -->

            <div class="field">

              <label>
                Fill Date
              </label>


              <input
                class="form-control form-control-sm date-input"
                type="date"
              >
              

            </div>


            <!-- Valid Upto -->

            <div class="field">

              <label>
                Valid Upto
              </label>


              <input
                class="form-control form-control-sm date-input"
                type="date"
              >

            </div>


            <!-- Refills -->

            <div class="field">

              <label>
                Refills
              </label>


              <input
                class="form-control form-control-sm tiny"
                value="${prescription.refills}"
              >

            </div>


            <hr>


            <!-- Prohibit Refill -->

            <label>

              <input
                class="form-check-input"
                type="checkbox"
              >

              Prohibit Refill Request

            </label>


            <hr>


            <strong>
              Benefits
            </strong>


            <div class="mt-2">
              Formulary Status
            </div>


            <div class="mt-2">
              Copay
            </div>


            <div class="mt-2">
              Coverage Info
            </div>

<div class="money-icon-parent">
            <div class="money-icon">

              <i class="fa-solid fa-pills"></i>
</div>
               <div class="money-iconn">
              <i class="fa-solid fa-money-check-dollar"></i>


            </div>
            </div>

          </div>


        </form>

      </td>

    </tr>

  `;

}


// Table Events

function initializeTableEvents() {


// Expand / Collapse


  $(document).on(
    "click",
    ".expand-btn",
    function () {

      const $button = $(this);

      const $row =
        $button.closest(".rx-row");

      const $detail =
        $row.next(".detail-row");


      if (!$detail.length) {
        return;
      }


      const isHidden =
        $detail.hasClass("d-none");


      $detail.toggleClass(
        "d-none",
        !isHidden
      );


      $row.toggleClass(
        "active-row",
        isHidden
      );


      $button
        .attr(
          "aria-expanded",
          String(isHidden)
        )
        .attr(
          "title",
          isHidden
            ? "Collapse"
            : "Expand"
        )
        .html(

          isHidden

            ? `
                <i
                  class="fa-solid fa-chevron-up"
                ></i>
              `

            : `
                <i
                  class="fa-solid fa-chevron-down"
                ></i>
              `

        );

    }
  );


  /*
  
  | Select All
  
  */

  $(document).on(
    "change",
    "#selectAll",
    function () {

      const checked =
        $(this).prop("checked");


      $(".prescription-check")
        .prop(
          "checked",
          checked
        );


      $(this).prop(
        "indeterminate",
        false
      );

    }
  );


// Individual Selection


  $(document).on(
    "change",
    ".prescription-check",
    function () {

      updateSelectAll();

    }
  );


// Delete


  $(document).on(
    "click",
    ".delete-row",
    function () {

      const $row =
        $(this).closest(".rx-row");


      const $detail =
        $row.next(".detail-row");


      $row.remove();


      if ($detail.length) {
        $detail.remove();
      }


      updateSelectAll();


      showEmptyTable();

    }
  );


// Reset


  $(document).on(
    "click",
    "#resetBtn",
    function () {

      resetPrescriptionForm();

    }
  );


// Save


  $(document).on(
    "click",
    "#saveBtn",
    function () {

      showSaveToast();

    }
  );

}


// Update Select All


function updateSelectAll() {

  const total =
    $(".prescription-check").length;


  const checked =
    $(".prescription-check:checked").length;


  $("#selectAll")
    .prop(
      "checked",
      total > 0 &&
      total === checked
    )
    .prop(
      "indeterminate",
      checked > 0 &&
      checked < total
    );

}


// Reset


function resetPrescriptionForm() {


  
  $(".detail-row")
    .find(
      "input:not([type='checkbox']), textarea"
    )
    .val("");


 
  $(".detail-row")
    .find("select")
    .prop(
      "selectedIndex",
      0
    );



  $(".detail-row")
    .find(
      "input[type='checkbox']"
    )
    .prop(
      "checked",
      false
    );


  $(".prescription-check")
    .prop(
      "checked",
      false
    );


  $("#selectAll")
    .prop(
      "checked",
      false
    )
    .prop(
      "indeterminate",
      false
    );



  $(".detail-row")
    .addClass("d-none");


  $(".rx-row")
    .removeClass("active-row");


  $(".expand-btn")
    .attr(
      "aria-expanded",
      "false"
    )
    .attr(
      "title",
      "Expand"
    )
    .html(`
      <i
        class="fa-solid fa-chevron-down"
      ></i>
    `);

}


// Empty Table


function showEmptyTable() {

  const rowCount =
    $(".prescription-table tbody .rx-row")
      .length;


  if (rowCount > 0) {

    $(".empty-row").remove();

    return;

  }


  if (!$(".empty-row").length) {

    $(".prescription-table tbody").append(`

      <tr class="empty-row">

        <td
          colspan="10"
          class="text-center py-4 text-muted"
        >

          No prescriptions available.

        </td>

      </tr>

    `);

  }

}


// Save Toast


function showSaveToast() {

  const toastElement =
    document.getElementById(
      "appToast"
    );


  if (!toastElement) {
    return;
  }


  const toast =
    bootstrap.Toast.getOrCreateInstance(
      toastElement
    );


  toast.show();

}