import { useSelector } from "react-redux";

export default function () {
  const registerCart = useSelector((state: any) => {
    return state.register || {};
  });

  return {
    registerCart,
  };
}
