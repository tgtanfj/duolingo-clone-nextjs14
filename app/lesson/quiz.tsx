"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import Header from "./header";

type Props = {
  initialLessonId: number;
  initialLessonChallengs: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
};

const Quiz = ({
  initialHearts,
  initialLessonChallengs,
  initialLessonId,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setpercentage] = useState(initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};

export default Quiz;
