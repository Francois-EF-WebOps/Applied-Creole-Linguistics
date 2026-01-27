import React from 'react';

export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  path?: string;
  children?: FileNode[];
  isOpen?: boolean; // For UI state
}

export interface RouteConfig {
  path: string;
  component: React.ReactNode;
  title: string;
}