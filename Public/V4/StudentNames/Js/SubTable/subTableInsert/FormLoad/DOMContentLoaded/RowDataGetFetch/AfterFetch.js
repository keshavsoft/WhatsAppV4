let StartFunc = ({ inDataToShow }) => {
   // debugger
   let jVarLocalData = inDataToShow;

   for (const key in jVarLocalData) {
      if (jVarLocalData.hasOwnProperty(key) && key !== null && key !== undefined) {
         const value = jVarLocalData[key];

         const input = document.querySelector(`#HtmlFormVerticalId input[name="${key}"]`);
         if (input) input.value = value;

         if (Array.isArray(value)) {
            $('#table').bootstrapTable('load', value);
         }
      };
   }







   // jFLocalToInputPartyNameId({ inPartyNameId: jVarLocalData.PARTYNAME });
   // jFLocalToInputVoucherTypeId({ inVoucherTypeId: jVarLocalData.VOUCHERTYPE });
   // jFLocalToInputdateId({ inDateId: jVarLocalData.DATE })
   // jFLocalToInputReferenceId({ inReference: jVarLocalData.REFERENCE })
   // jFLocalToInputVoucherCancelledId({ inVoucherCancell: jVarLocalData.VOUCHERCANCELLED })
};

let jFLocalToInputPartyNameId = ({ inPartyNameId }) => {
   let jVarLocalHtmlId = 'PartyNameId';
   let jVarLocalPartyNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalPartyNameId === null === false) {
      jVarLocalPartyNameId.value = inPartyNameId;
   };
};

let jFLocalToInputVoucherTypeId = ({ inVoucherTypeId }) => {
   let jVarLocalHtmlId = 'VoucherTypeId';
   let jVarLocalVoucherTypeId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalVoucherTypeId === null === false) {
      jVarLocalVoucherTypeId.value = inVoucherTypeId;
   };
};

let jFLocalToInputdateId = ({ inDateId }) => {
   let jVarLocalHtmlId = 'dateId';
   let jVarLocaldateId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocaldateId === null === false) {
      jVarLocaldateId.value = inDateId;
   };
};

let jFLocalToInputReferenceId = ({ inReference }) => {
   let jVarLocalHtmlId = 'ReferenceId';
   let jVarLocalReferenceId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalReferenceId === null === false) {
      jVarLocalReferenceId.value = inReference;
   };
};

let jFLocalToInputVoucherCancelledId = ({ inVoucherCancell }) => {
   let jVarLocalHtmlId = 'VoucherCancelledId';
   let jVarLocalVoucherCancelledId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalVoucherCancelledId === null === false) {
      jVarLocalVoucherCancelledId.value = inVoucherCancell;
   };
};

export { StartFunc };