import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

type TipoToast = "success" | "error" | "warning";

export const notify = (mensaje: string, tipo: TipoToast = "success") => {
  switch (tipo) {
    case "success":
      toast.success(mensaje, {
        position: "top-right",
        autoClose: 3000,
        style:{ background: "#00b894", color: "#fff" } ,
      });
      break;
    case "error":
      toast.error(mensaje, {
        position: "top-right",
        autoClose: 3000,
     style: { background: "#f20606ff", color: "#eae3e3ff" },
      });
      break;
    case "warning":
      toast.warning(mensaje, {
        position: "top-right",
        autoClose: 3000,
        style: { background: "#f3d810ff", color: "#fff" },
      });
      break;
  }
};
