import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

export const triggerToast = (title: string) => {
  const t: ToastSettings = {
    message: title,
  };

  toastStore.trigger(t);
};
