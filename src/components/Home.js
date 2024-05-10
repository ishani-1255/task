import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8 mt-28">
        
       
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
              
              <p className="text-gray-700 mt -5">Task Manager is a simple yet powerful tool to manage your tasks, schedule meetings, and stay organized.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <img src="https://img.freepik.com/free-vector/flat-illustration-secretary-s-day-celebration_52683-107968.jpg" alt="Task Manager"  className='border-l-2 pl-5 border-black'/>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 py-4 mt-0 fixed bottom-0 w-full">
        <div className="container mx-auto">
          <p className="text-center text-gray-800">© 2024 Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
