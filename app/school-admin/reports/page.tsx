"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

// Force dynamic rendering to avoid static generation errors
export const dynamic = 'force-dynamic';

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        userRole="School Admin"
        currentPage="reports"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-64">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open sidebar</span>
                <i className="ri-menu-line text-2xl"></i>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <i className="ri-bar-chart-line text-5xl text-blue-500"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Work in Progress</h2>
            <p className="text-gray-600 text-lg text-center max-w-md">
              We are currently working on the reports & analytics dashboard. Please check back later for updates.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
