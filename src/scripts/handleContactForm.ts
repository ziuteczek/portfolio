import emailjs from "@emailjs/browser";
import formSubmitPopupSucces from "../components/FormSubmitPopupSucces.html?raw";
import formSubmitPopupFail from "../components/FormSubmitPopupFail.html?raw";
emailjs.init({
  publicKey: "o5fXbnQlZ_z97Bin1",
});

const formEl: HTMLFormElement | null = document.querySelector(".contact-form");

formEl?.addEventListener("submit", async (e) => {
  document.body.style.cursor = "progress";
  e.preventDefault();
  const popup = document.createElement("div");
  try {
    const response = await emailjs.sendForm(
      "service_gm282sp",
      "template_38t99p9",
      formEl
    );
    formEl?.reset();

    popup.insertAdjacentHTML("afterbegin", formSubmitPopupSucces);
  } catch (err) {
    console.log(err);
    popup.insertAdjacentHTML("afterbegin", formSubmitPopupFail);
  }
  document.body.style.cursor = "auto";
  document.body.append(popup);
  setTimeout(() => {
    popup.remove();
  }, 5000);
});
