"use client";

import { Companion } from "@prisma/client";

interface ChatClientProps {
  companion: Companion & {
    _count: {
      messages: number;
    };
  };
}

export const ChatClient = () => {
  return <div>Chat Id Client</div>;
};
