import { useRef, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import PaymentLoading from "./PaymentLoading";
import PaymentSuccess from "./PaymentSuccess";
import { useNavigate } from "react-router-dom";
import ModalWrapper from "./ModalWrapper";

type PaymentStatus = "idle" | "loading" | "success";

type CheckoutModalProps = {
  onClose: () => void;
  subtotal: number;
  shipping: number;
  total: number;
  itemsCount: number;
  removeAllFromCart: () => void;
};

function CheckoutModal({
  onClose,
  subtotal,
  shipping,
  total,
  itemsCount,
  removeAllFromCart,
}: CheckoutModalProps) {
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const navigate = useNavigate();

  const timeoutRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleContinue = () => {
    clearTimer();
    navigate("/");
  };

  const handlePay = () => {
    if (status !== "idle") return;
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      removeAllFromCart();

      timeoutRef.current = window.setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1500);
  };

  return (
    <ModalWrapper onClose={onClose} canClose={status === "idle"}>
      {status === "idle" && (
        <CheckoutForm
          handlePay={handlePay}
          onClose={onClose}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          itemsCount={itemsCount}
        />
      )}
      {status === "loading" && <PaymentLoading />}
      {status === "success" && <PaymentSuccess onContinue={handleContinue} />}
    </ModalWrapper>
  );
}

export default CheckoutModal;
