"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const LandingPage = () => {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!userId)
    return (
      <div>
        Landing Page (Unprotected)
        <div>{userId}</div>
        <div>
          <Link href="/sign-in">
            <Button>Log In</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    );

  if (userId) {
    router.push("/dashboard");
  }
  return <div>Hello {userId}</div>;
};

export default LandingPage;
