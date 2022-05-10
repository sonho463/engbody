

// トレーナーとスタッフのタブ切り替え
const trainer = document.querySelector(".js-trainer");
const staff = document.querySelector(".js-staff");
const trainerTab = document.querySelector(".js-trainer-tab");
const staffTab = document.querySelector(".js-staff-tab");

const activateStaffTab = () => {
  if (staffTab.classList.contains("add-underline") === false) {
    staffTab.classList.add("add-underline");
		staff.classList.remove('is-hidden')
		trainerTab.classList.remove('add-underline');
		trainer.classList.add('is-hidden');
  }
};
const activateTrainerTab = () => {
  if (trainerTab.classList.contains("add-underline") === false) {
    trainerTab.classList.add("add-underline");
		trainer.classList.remove('is-hidden')
		staffTab.classList.remove('add-underline');
		staff.classList.add('is-hidden');
  }
};

staffTab.addEventListener("click", activateStaffTab);
trainerTab.addEventListener("click", activateTrainerTab);
