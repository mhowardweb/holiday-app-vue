export async function presentAlertConfirm() {
  const alertController = document.querySelector("ion-alert-controller");
  await alertController.componentOnReady();
  const alert = await alertController.create({
    header: "Confirm Delete",
    message: "Are you sure you wish to delete this holiday ?",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        handler: blah => {
          console.log("Confirm Cancel: blah");
        }
      },
      {
        text: "Delete",
        handler: () => {
          console.log("Confirm Okay");
        }
      }
    ]
  });
  return await alert.present();
}
