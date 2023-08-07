import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

export const triggerToast = (title: string, timeout?: number) => {
  const t: ToastSettings = {
    message: title,
    timeout
  };

  toastStore.trigger(t);
};
