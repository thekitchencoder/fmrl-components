import {toastController} from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { Clipboard } = Plugins;

class CopyServiceController {
    constructor() { }
    
      async copy(val: string, showToast = true) {
        await Clipboard.write({
          string: val
        });
        if (showToast) {
          const cp = await Clipboard.read();
          const toast = await toastController.create({
            header: 'Copied.',
            message: cp.value,
            duration: 3000,
            color: 'dark'
          });
          await toast.present();
        }
      }
}

export const CopyService = new CopyServiceController();