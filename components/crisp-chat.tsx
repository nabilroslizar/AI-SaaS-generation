"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("de860838-8696-4173-98a7-495dc602094b");
  }, []);

  return null;
};
