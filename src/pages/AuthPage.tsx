import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthCard from "../components/AuthCard/AuthCard";

const SLIDE_DISTANCE = 40;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 1 ? -SLIDE_DISTANCE : SLIDE_DISTANCE,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 1 ? SLIDE_DISTANCE : -SLIDE_DISTANCE,
  }),
};

export default function AuthPage() {
  const [view, setView] = useState<"sign-in" | "sign-up">("sign-in");
  const [direction, setDirection] = useState(1);
  const [justSignedUp, setJustSignedUp] = useState(false);

  const goToSignUp = () => {
    setJustSignedUp(false);
    setDirection(1);
    setView("sign-up");
  };

  const goToSignIn = () => {
    setDirection(-1);
    setView("sign-in");
  };

  const handleSignUpSuccess = () => {
    setJustSignedUp(true);
    goToSignIn();
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      {view === "sign-in" ? (
        <motion.div
          key="sign-in"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <AuthCard
            mode="sign-in"
            onToggleMode={goToSignUp}
            justSignedUp={justSignedUp}
          />
        </motion.div>
      ) : (
        <motion.div
          key="sign-up"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <AuthCard
            mode="sign-up"
            onToggleMode={goToSignIn}
            onSignUpSuccess={handleSignUpSuccess}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
