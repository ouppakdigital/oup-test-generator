"use client";

import React, { Suspense } from "react";
import BulkUploadPage from "@/components/BulkUploadPage";

// Force dynamic rendering to avoid static generation errors
export const dynamic = 'force-dynamic';

export default function ContentCreatorBulkUploadPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <BulkUploadPage
        userRole="Content Creator"
        apiEndpoint="/api/oup-creator/questions"
        userRoleParam="content_creator"
      />
    </Suspense>
  );
}