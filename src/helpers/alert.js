window.addEventListener("ionAlertDidDismiss", function(e) {
  console.log("didDismiss", e);
});
window.addEventListener("ionAlertWillDismiss", function(e) {
  console.log("willDismiss", e);
});

async function presentAlertConfirm(data) {
  const alertController = document.querySelector("ion-alert-controller");
  await alertController.componentOnReady();
  const alert = await alertController.create({
    header: "Confirm Deletion!",
    message: "Are you sure you wish to delete this Holiday?",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        handler: () => {
          data = false;
          return data;
        }
      },
      {
        text: "Delete",
        handler: () => {
          data = true;
          console.log("delete");
          return data;
        }
      }
    ]
  });
  return await alert.present();
}

export default presentAlertConfirm;
