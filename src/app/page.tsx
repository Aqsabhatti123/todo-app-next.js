import React from 'react'
import TodoList from './components/TsodoList'

const Home = () => {
  return (
    <div className="bg-[#30332d] h-screen w-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl text-blue-700 mb-7">ToDo App</h1>
      <TodoList />
    </div>
  )
}

export default Home