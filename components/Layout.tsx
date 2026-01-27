import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Folder, FileText, ChevronRight, ChevronDown, Github } from 'lucide-react';
import { SidebarData } from '../data/repoStructure';
import { FileNode } from '../types';

const TreeNode: React.FC<{ node: FileNode; depth: number }> = ({ node, depth }) => {
  const [isOpen, setIsOpen] = useState(true); // Default open for better visibility
  const hasChildren = node.children && node.children.length > 0;
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const isActive = node.path === location.pathname;

  return (
    <div className="select-none">
      <div 
        className={`
          flex items-center py-1.5 px-2 cursor-pointer transition-colors duration-200
          ${isActive ? 'bg-blue-900/30 text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-200 hover:bg-[#1f242c]'}
        `}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
        onClick={handleClick}
      >
        {hasChildren ? (
            <span className="mr-1 text-gray-500">
               {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
        ) : (
            <span className="w-[18px]"></span>
        )}
        
        {node.type === 'folder' ? (
          <Folder size={16} className="mr-2 text-blue-400 fill-blue-400/20" />
        ) : (
          <FileText size={16} className="mr-2 text-gray-500" />
        )}

        {node.path && !hasChildren ? (
          <NavLink to={node.path} className="flex-1 truncate">
            {node.name}
          </NavLink>
        ) : (
           <span className="flex-1 truncate">{node.name}</span>
        )}
      </div>

      {hasChildren && isOpen && (
        <div>
          {node.children!.map((child, index) => (
            <TreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0d1117] text-gray-300 overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-[#161b22] border-b border-gray-700 z-50 flex items-center justify-between p-4">
        <span className="font-semibold text-white">SCR - Mauritius</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:relative z-40 w-64 h-full bg-[#0d1117] border-r border-gray-700
          transform transition-transform duration-300 ease-in-out pt-16 md:pt-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-700 hidden md:flex items-center gap-2">
            <Github size={20} className="text-white" />
            <span className="font-bold text-gray-100 tracking-tight">SCR - Mauritius</span>
          </div>
          
          <div className="p-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Repository
          </div>

          <div className="flex-1 overflow-y-auto">
            {SidebarData.map((node, i) => (
              <TreeNode key={i} node={node} depth={0} />
            ))}
          </div>

          <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
            v0.1.0-beta<br/>
            Maintained by Community
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto w-full pt-16 md:pt-0 scroll-smooth">
        {children}
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;