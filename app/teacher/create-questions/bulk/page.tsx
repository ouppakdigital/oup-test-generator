﻿"use client";

import React, { Suspense } from "react";
import BulkUploadPage from "@/components/BulkUploadPage";

// Force dynamic rendering to avoid static generation errors
export const dynamic = 'force-dynamic';

export default function TeacherBulkUploadPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <BulkUploadPage
        userRole="Teacher"
        apiEndpoint="/api/teacher/questions"
        userRoleParam="teacher"
      />
    </Suspense>
  );
}
