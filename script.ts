const pageTitle = document.querySelector(".page-title") as HTMLHeadElement
const createActivityGroupTitle = document.querySelector(
	".create-activity-title"
) as HTMLHeadElement
const ChooseActivityGroupTitle = document.querySelector(
	".choose-activity-title"
) as HTMLHeadElement
const howLongTitle = document.querySelector(
	".how-long-title"
) as HTMLHeadElement

const confirmButton = document.querySelector(
	".confirm-button"
) as HTMLButtonElement
const cancelButton = document.querySelector(
	".cancel-button"
) as HTMLButtonElement

confirmButton.addEventListener("click", (e) => {
	e.preventDefault
	alert("The confirm button has been clicked!")
})
cancelButton.addEventListener("click", (e) => {
	e.preventDefault
	alert("The cancel button has been clicked!")
})
