import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // Variables
  titleOfPage = "Grocery List"
  groceryItems = [
    {
      itemName: "Bread",
      itemCount: 2
    },
    {
      itemName: "Potato",
      itemCount: 6
    },
    {
      itemName: "Watermelon",
      itemCount: 3
    },
    {
      itemName: "Apple",
      itemCount: 8
    },
  ]
  // Constructor 
  constructor(public toastController: ToastController, public alertController: AlertController) {}
  // Remove grocery function
  async removeGroceryItem(groceryItem, index){
      const toast = await this.toastController.create({
        message: `You have removed: ${groceryItem.itemName}`,
        duration: 2000
      });
      toast.present();
      this.groceryItems.splice(index, 1);
  }
  // Add grocery function
  async addGroceryItem(){
    const alert = await this.alertController.create({
      header: 'Add Item',
      message: 'Please enter Item name and quatity',
      inputs: [
        {
          name: 'itemName',
          type: 'text',
          placeholder: 'Grocery Item Name'
        },
        {
          name: 'itemCount',
          type: 'text',
          placeholder: 'Grocery Item Count'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (item) => {
            console.log('Confirm Add', item);
            this.groceryItems.push(item);
          }
        }
      ]
    });
    await alert.present();
  }
  // End Class
}
