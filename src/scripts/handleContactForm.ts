import emailjs from "@emailjs/browser";
import formSubmitPopupSucces from "../components/FormSubmitPopupSucces.html?raw";
import formSubmitPopupFail from "../components/FormSubmitPopupFail.html?raw";
emailjs.init({
  publicKey: "o5fXbnQlZ_z97Bin1",
});

const formEl: HTMLFormElement | null = document.querySelector(".contact-form");

const submitBtn: HTMLButtonElement | null | undefined = formEl?.querySelector("button[type=submit]");

formEl?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (submitBtn?.disabled) return;

  document.body.style.cursor = "progress";
  const submitBtnText = submitBtn?.textContent ?? "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
  }
  const popup = document.createElement("div");
  try {
    await emailjs.sendForm(
      "service_gm282sp",
      "template_38t99p9",
      formEl
    );
    formEl?.reset();

    popup.insertAdjacentHTML("afterbegin", formSubmitPopupSucces);
  } catch (err) {
    console.error(err);
    popup.insertAdjacentHTML("afterbegin", formSubmitPopupFail);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = submitBtnText;
    }
    document.body.style.cursor = "auto";
  }
  document.body.append(popup);
  setTimeout(() => {
    popup.remove();
  }, 5000);
});
