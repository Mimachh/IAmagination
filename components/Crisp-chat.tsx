"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e022afd6-061d-49b5-a0d1-ef3337a5fbda");
  }, []);

  return null;
};