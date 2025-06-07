import emailjs from "@emailjs/browser";
import formSubmitPopup from "../components/FormSubmitPopup.html";
emailjs.init({
  publicKey: "o5fXbnQlZ_z97Bin1",
});
console.log(typeof formSubmitPopup);

const formEl: HTMLFormElement | null = document.querySelector(".contact-form");

formEl?.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm("service_gm282sp", "template_38t99p9", formEl);
    console.log("succes");
    formEl?.reset();
  } catch (err) {
    console.log(err);
  }
});
